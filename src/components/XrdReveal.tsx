import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { faujasiteAtoms, faujasiteBonds } from '../data/faujasite';
import { fauXrdPattern } from '../data/fauXrd';

// A pinned scroll sequence: a real FAU zeolite structure sits still, an
// X-ray beam sweeps through it (atoms flash as the beam crosses them), and
// the structure resolves into its own simulated powder XRD pattern —
// computed from the same atom coordinates driving the 3D scene.
//
// Phases (progress 0 -> 1 across the pinned scroll range):
//   0.00 - 0.38  beam sweeps in and crosses the structure
//   0.38 - 0.70  beam continues, structure settles, hold
//   0.70 - 1.00  3D fades out, XRD trace draws in

const BEAM_START = -20;
const BEAM_END = 20;
const CLUSTER_EXTENT = 15;

const XrdReveal = () => {
  const pinRef = useRef<HTMLDivElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);
  const beamXRef = useRef(BEAM_START);
  const [phase, setPhase] = useState(0);

  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ['start start', 'end end'],
  });

  const chartOpacity = useTransform(scrollYProgress, [0.68, 0.8], [0, 1]);
  const sceneOpacity = useTransform(scrollYProgress, [0.68, 0.85], [1, 0.12]);
  const captionOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => {
      beamXRef.current = BEAM_START + Math.min(v / 0.7, 1) * (BEAM_END - BEAM_START);
      const p = v < 0.35 ? 0 : v < 0.68 ? 1 : 2;
      setPhase((prev) => (prev === p ? prev : p));
    });
    return unsub;
  }, [scrollYProgress]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 32);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    group.rotation.set(0.25, 0.4, 0);
    scene.add(group);

    // Bonds
    const bondPositions = new Float32Array(faujasiteBonds.length * 6);
    faujasiteBonds.forEach(([i, j], idx) => {
      const a = faujasiteAtoms[i];
      const b = faujasiteAtoms[j];
      bondPositions.set([a[0], a[1], a[2], b[0], b[1], b[2]], idx * 6);
    });
    const bondGeom = new THREE.BufferGeometry();
    bondGeom.setAttribute('position', new THREE.BufferAttribute(bondPositions, 3));
    const bondMat = new THREE.LineBasicMaterial({ color: 0x34d399, transparent: true, opacity: 0.3 });
    group.add(new THREE.LineSegments(bondGeom, bondMat));

    // Atoms — instanced, with per-instance color so the beam can "light up"
    // the ones it's passing over.
    const atomGeom = new THREE.SphereGeometry(0.22, 10, 10);
    const atomMat = new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.85 });
    const atomMesh = new THREE.InstancedMesh(atomGeom, atomMat, faujasiteAtoms.length);
    const dummy = new THREE.Object3D();
    const baseColor = new THREE.Color(0x6ee7b7);
    const flashColor = new THREE.Color(0xffffff);
    faujasiteAtoms.forEach(([x, y, z], i) => {
      dummy.position.set(x, y, z);
      dummy.updateMatrix();
      atomMesh.setMatrixAt(i, dummy.matrix);
      atomMesh.setColorAt(i, baseColor);
    });
    group.add(atomMesh);

    // Beam — a soft vertical wash plus a bright leading edge line.
    const beamGroup = new THREE.Group();
    const washGeom = new THREE.PlaneGeometry(2.2, CLUSTER_EXTENT * 2.6);
    const washMat = new THREE.MeshBasicMaterial({
      color: 0x6ee7b7,
      transparent: true,
      opacity: 0.1,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    beamGroup.add(new THREE.Mesh(washGeom, washMat));

    const edgeGeom = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, -CLUSTER_EXTENT * 1.3, 0),
      new THREE.Vector3(0, CLUSTER_EXTENT * 1.3, 0),
    ]);
    const edgeMat = new THREE.LineBasicMaterial({ color: 0xa7f3d0, transparent: true, opacity: 0.9 });
    beamGroup.add(new THREE.Line(edgeGeom, edgeMat));
    scene.add(beamGroup);

    let raf = 0;
    let lastT = performance.now();
    const idleSpeed = reduceMotion ? 0 : 0.045;
    const tmpColor = new THREE.Color();

    const render = (t: number) => {
      const dt = (t - lastT) / 1000;
      lastT = t;
      if (idleSpeed > 0) group.rotation.y += idleSpeed * dt;

      const bx = beamXRef.current;
      beamGroup.position.x = bx;
      const inRange = bx > -CLUSTER_EXTENT - 3 && bx < CLUSTER_EXTENT + 3;
      washMat.opacity = inRange ? 0.12 : 0;
      edgeMat.opacity = inRange ? 0.9 : 0;

      // Flash atoms near the beam plane (world-space X, accounting for group rotation)
      const worldPos = new THREE.Vector3();
      const m = new THREE.Matrix4();
      for (let i = 0; i < faujasiteAtoms.length; i++) {
        atomMesh.getMatrixAt(i, m);
        worldPos.setFromMatrixPosition(m).applyMatrix4(group.matrix);
        const d = Math.abs(worldPos.x - bx);
        const glow = Math.max(0, 1 - d / 2.2);
        tmpColor.copy(baseColor).lerp(flashColor, glow);
        atomMesh.setColorAt(i, tmpColor);
      }
      if (atomMesh.instanceColor) atomMesh.instanceColor.needsUpdate = true;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', onResize);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!raf) raf = requestAnimationFrame(render);
        } else if (raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      },
      { threshold: 0 },
    );
    io.observe(mount);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      io.disconnect();
      bondGeom.dispose();
      bondMat.dispose();
      atomGeom.dispose();
      atomMat.dispose();
      washGeom.dispose();
      washMat.dispose();
      edgeGeom.dispose();
      edgeMat.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  // Build a smooth XRD trace (baseline + Gaussian bumps at each real peak)
  // as an SVG path, sampled once.
  const { pathD, chartW, chartH } = useMemo(() => {
    const chartW = 640;
    const chartH = 220;
    const minTT = 3;
    const maxTT = 40;
    const maxI = Math.max(...fauXrdPattern.map((p) => p.intensity));
    const width = 0.22; // Gaussian width in degrees 2theta
    const steps = 400;
    const pts: [number, number][] = [];
    for (let i = 0; i <= steps; i++) {
      const tt = minTT + ((maxTT - minTT) * i) / steps;
      let y = 0;
      for (const pk of fauXrdPattern) {
        const dx = tt - pk.twoTheta;
        y += pk.intensity * Math.exp(-(dx * dx) / (2 * width * width));
      }
      const xPix = ((tt - minTT) / (maxTT - minTT)) * chartW;
      const yPix = chartH - (y / maxI) * (chartH - 20);
      pts.push([xPix, yPix]);
    }
    const d = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
    return { pathD: d, chartW, chartH };
  }, []);

  const phases = [
    {
      kicker: 'FAU · Faujasite',
      body: "This is a real zeolite framework, the same family behind my PhD work. Every atom position here is genuine crystallographic data, not an illustration.",
    },
    {
      kicker: 'SAXS/WAXS beam sweep',
      body: "At facilities like the ESRF, a beam like this shows you how atoms are arranged inside a crystal. It's the same synchrotron technique I use to study zeolite crystallization in situ.",
    },
    {
      kicker: 'Simulated powder XRD',
      body: "What comes out the other end is a diffraction pattern: peak positions and intensities that encode the framework's structure, computed here straight from the same coordinates driving the 3D model above.",
    },
  ];

  return (
    <div ref={pinRef} className="relative" style={{ height: '280vh' }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_45%,#0f2e26_0%,#050807_55%,#000000_100%)]" />
        {/* Scrim so the left-hand text column stays legible over the 3D scene */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0.35)_38%,transparent_65%)]" />

        <motion.div style={{ opacity: sceneOpacity }} className="absolute inset-0">
          <div ref={mountRef} className="h-full w-full" />
        </motion.div>

        <motion.div
          style={{ opacity: chartOpacity }}
          className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 md:pl-[38%]"
        >
          <div className="w-full max-w-xl">
            <svg viewBox={`0 0 ${chartW} ${chartH + 30}`} className="w-full text-emerald-400">
              <line x1={0} y1={chartH} x2={chartW} y2={chartH} stroke="currentColor" strokeOpacity={0.3} strokeWidth={1} />
              <path d={pathD} fill="none" stroke="currentColor" strokeWidth={1.6} />
              <text x={0} y={chartH + 22} fontSize={11} fill="currentColor" opacity={0.6}>
                3°
              </text>
              <text x={chartW - 22} y={chartH + 22} fontSize={11} fill="currentColor" opacity={0.6}>
                40°
              </text>
              <text x={chartW / 2 - 30} y={chartH + 22} fontSize={11} fill="currentColor" opacity={0.6}>
                2θ (Cu Kα)
              </text>
            </svg>
          </div>
        </motion.div>

        {/* Persistent text column — this is what keeps the section from
            reading as an empty animation: there's always something to read. */}
        <motion.div
          style={{ opacity: captionOpacity }}
          className="relative z-10 max-w-md px-6 sm:px-10 md:px-16 lg:px-20"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300/80">
            Research
          </p>
          <h2 className="display-2 mt-3 text-3xl font-semibold text-white md:text-4xl">
            How I actually study a crystal
          </h2>

          <div className="mt-6 min-h-[7.5rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={phase}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
                  {phases[phase].kicker}
                </p>
                <p className="mt-3 text-base leading-relaxed text-white/75">{phases[phase].body}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {['4 publications', 'ESRF beamtime', 'PhD · KU Leuven'].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm"
              >
                {chip}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default XrdReveal;

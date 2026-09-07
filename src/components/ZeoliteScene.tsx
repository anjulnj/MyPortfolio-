import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { faujasiteAtoms, faujasiteBonds } from '../data/faujasite';

// A real FAU (Faujasite) zeolite framework, rendered as a rotating 3D
// wireframe — the T-atom net and its double-6-ring / sodalite-cage topology,
// straight from crystallographic data. Rotation is driven by two inputs:
// a slow idle spin, and the scroll progress passed in via `scrollProgress`
// (a ref so we can read it every frame without re-rendering React).
const ZeoliteScene = ({ scrollProgress }: { scrollProgress: React.RefObject<number> }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      42,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100,
    );
    camera.position.set(0, 0, 34);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Bonds — thin emissive lines, matching the site's teal accent.
    const bondPositions = new Float32Array(faujasiteBonds.length * 6);
    faujasiteBonds.forEach(([i, j], idx) => {
      const a = faujasiteAtoms[i];
      const b = faujasiteAtoms[j];
      bondPositions.set([a[0], a[1], a[2], b[0], b[1], b[2]], idx * 6);
    });
    const bondGeom = new THREE.BufferGeometry();
    bondGeom.setAttribute('position', new THREE.BufferAttribute(bondPositions, 3));
    const bondMat = new THREE.LineBasicMaterial({
      color: 0x34d399,
      transparent: true,
      opacity: 0.28,
    });
    group.add(new THREE.LineSegments(bondGeom, bondMat));

    // Atoms — small instanced spheres at each T-site.
    const atomGeom = new THREE.SphereGeometry(0.2, 10, 10);
    const atomMat = new THREE.MeshBasicMaterial({
      color: 0x6ee7b7,
      transparent: true,
      opacity: 0.6,
    });
    const atomMesh = new THREE.InstancedMesh(atomGeom, atomMat, faujasiteAtoms.length);
    const dummy = new THREE.Object3D();
    faujasiteAtoms.forEach(([x, y, z], i) => {
      dummy.position.set(x, y, z);
      dummy.updateMatrix();
      atomMesh.setMatrixAt(i, dummy.matrix);
    });
    group.add(atomMesh);

    // Base slow rotation so it never looks frozen even before scrolling —
    // skipped entirely under reduced motion.
    let raf = 0;
    let lastT = performance.now();
    const idleSpeed = reduceMotion ? 0 : 0.06; // rad/s

    group.rotation.set(0.3, 0.5, 0);

    const render = (t: number) => {
      const dt = (t - lastT) / 1000;
      lastT = t;

      if (idleSpeed > 0) group.rotation.y += idleSpeed * dt;

      // Scroll-linked turn: an extra quarter-turn across the hero's scroll range.
      const scrollTurn = reduceMotion ? 0 : (scrollProgress.current ?? 0) * (Math.PI / 2);
      group.rotation.x = 0.3 + scrollTurn * 0.4;
      group.rotation.z = scrollTurn * 0.15;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', onResize);

    // Pause the render loop when the scene scrolls out of view.
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
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, [scrollProgress]);

  return <div ref={mountRef} className="h-full w-full" />;
};

export default ZeoliteScene;

import { useEffect, useMemo, useRef } from 'react';
import { useScroll } from 'framer-motion';
import { faujasiteAtoms, faujasiteBonds } from '../data/faujasite';

// A quiet visual metaphor for the About section: the same real FAU
// framework used elsewhere on the site, but rendered as a scattered cloud
// of points that self-assembles into its true lattice positions as this
// section scrolls into view — "how disorder becomes structure," the way
// this site's owner actually describes their own research question.
const VIEW_W = 640;
const VIEW_H = 520;

// Deterministic pseudo-random so the scatter is stable across renders.
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

const DisorderToOrder = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<(SVGCircleElement | null)[]>([]);
  const lineRefs = useRef<(SVGLineElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ['start end', 'start 35%'],
  });

  const { ordered, scattered } = useMemo(() => {
    const xs = faujasiteAtoms.map((a) => a[0]);
    const ys = faujasiteAtoms.map((a) => a[1]);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);
    const pad = 60;
    const scaleX = (VIEW_W - pad * 2) / (maxX - minX);
    const scaleY = (VIEW_H - pad * 2) / (maxY - minY);
    const scale = Math.min(scaleX, scaleY);
    const cx = (minX + maxX) / 2;
    const cy = (minY + maxY) / 2;

    const ordered = faujasiteAtoms.map(([x, y]) => [
      VIEW_W / 2 + (x - cx) * scale,
      VIEW_H / 2 + (y - cy) * scale,
    ]);

    const rand = seededRandom(42);
    const scattered = ordered.map(() => [rand() * VIEW_W, rand() * VIEW_H]);

    return { ordered, scattered };
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const apply = (p: number) => {
      circleRefs.current.forEach((el, i) => {
        if (!el) return;
        const [ox, oy] = ordered[i];
        const [sx, sy] = scattered[i];
        const x = sx + (ox - sx) * p;
        const y = sy + (oy - sy) * p;
        el.setAttribute('cx', x.toFixed(1));
        el.setAttribute('cy', y.toFixed(1));
      });
      lineRefs.current.forEach((el, idx) => {
        if (!el) return;
        const [i, j] = faujasiteBonds[idx];
        const [ox1, oy1] = ordered[i];
        const [ox2, oy2] = ordered[j];
        const [sx1, sy1] = scattered[i];
        const [sx2, sy2] = scattered[j];
        el.setAttribute('x1', (sx1 + (ox1 - sx1) * p).toFixed(1));
        el.setAttribute('y1', (sy1 + (oy1 - sy1) * p).toFixed(1));
        el.setAttribute('x2', (sx2 + (ox2 - sx2) * p).toFixed(1));
        el.setAttribute('y2', (sy2 + (oy2 - sy2) * p).toFixed(1));
        // Bonds only read as "structure" once atoms have mostly arrived,
        // and even then stay subtle — background texture, not a diagram.
        el.style.opacity = String(Math.max(0, (p - 0.7) / 0.3) * 0.14);
      });
    };

    if (reduceMotion) {
      apply(1);
      return;
    }

    apply(scrollYProgress.get());
    const unsub = scrollYProgress.on('change', apply);
    return unsub;
  }, [scrollYProgress, ordered, scattered]);

  return (
    <div ref={wrapRef} className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="h-full w-full max-w-4xl text-emerald-400"
        aria-hidden="true"
      >
        {faujasiteBonds.map((_, idx) => (
          <line
            key={idx}
            ref={(el) => {
              lineRefs.current[idx] = el;
            }}
            stroke="currentColor"
            strokeWidth={1}
            opacity={0.1}
          />
        ))}
        {faujasiteAtoms.map((_, idx) => (
          <circle
            key={idx}
            ref={(el) => {
              circleRefs.current[idx] = el;
            }}
            r={2.4}
            fill="currentColor"
            opacity={0.16}
          />
        ))}
      </svg>
    </div>
  );
};

export default DisorderToOrder;

// Subtle crystal-lattice / diffraction motif for the hero background.
// A tetrahedral net (nodes + bonds) tiled as an SVG pattern — a nod to the
// zeolite frameworks this site's subject actually studies, rendered at low
// opacity so it reads as texture, not decoration.
const LatticeBackground = ({ className = '' }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="lattice-cell"
          x="0"
          y="0"
          width="34.64"
          height="60"
          patternUnits="userSpaceOnUse"
          patternTransform="scale(1)"
        >
          {/* Tetrahedral / hexagonal net — bonds */}
          <g fill="none" stroke="currentColor" strokeWidth="0.45" strokeLinecap="round">
            <path d="M17.32 0 L34.64 10 L34.64 30 L17.32 40 L0 30 L0 10 Z" />
            <path d="M17.32 40 L17.32 60" />
            <path d="M17.32 0 L17.32 -20" />
            <path d="M0 10 L-17.32 0" />
            <path d="M34.64 10 L51.96 0" />
            <path d="M0 30 L-17.32 40" />
            <path d="M34.64 30 L51.96 40" />
          </g>
          {/* Nodes */}
          <g fill="currentColor">
            <circle cx="17.32" cy="0" r="1.1" />
            <circle cx="34.64" cy="10" r="1.1" />
            <circle cx="34.64" cy="30" r="1.1" />
            <circle cx="17.32" cy="40" r="1.1" />
            <circle cx="0" cy="30" r="1.1" />
            <circle cx="0" cy="10" r="1.1" />
          </g>
        </pattern>

        <radialGradient id="lattice-fade" cx="50%" cy="38%" r="65%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="60%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>

        <mask id="lattice-mask">
          <rect x="0" y="0" width="200" height="200" fill="url(#lattice-fade)" />
        </mask>
      </defs>

      <rect
        x="0"
        y="0"
        width="200"
        height="200"
        fill="url(#lattice-cell)"
        mask="url(#lattice-mask)"
      />
    </svg>
  );
};

export default LatticeBackground;

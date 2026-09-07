import { motion } from 'framer-motion';

// A real, minimal travel map — the actual countries mentioned in the Life
// section, plotted on a genuine world map (CC BY-SA 3.0, Al MacDonald /
// Fritz Lekschas, github.com/flekschas/simple-world-map), not a stock photo
// or invented graphic. Coordinates are approximate country centroids in the
// map's own viewBox, used only for a small pin + connecting line.
const VIEW_BOX = '30.767 241.591 784.077 458.627';

const HOME = { name: 'Belgium', x: 414, y: 392 };

const DESTINATIONS = [
  { name: 'Netherlands', x: 421, y: 385 },
  { name: 'Germany', x: 428, y: 389 },
  { name: 'Austria', x: 434, y: 405 },
  { name: 'France', x: 405, y: 396 },
  { name: 'Spain', x: 393, y: 420 },
  { name: 'China', x: 635, y: 400 },
  { name: 'Switzerland', x: 423, y: 403 },
  { name: 'Luxembourg', x: 420, y: 398 },
  { name: 'Czech Republic', x: 437, y: 399 },
  { name: 'Hungary', x: 444, y: 403 },
  { name: 'Poland', x: 457, y: 390 },
];

// A gentle arc between two points, rather than a straight line — reads
// more like a flight path.
function arcPath(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2 - Math.abs(x2 - x1) * 0.12 - 12;
  return `M${x1},${y1} Q${mx},${my} ${x2},${y2}`;
}

const TravelMap = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="relative aspect-[784/459] w-full">
        <img src="/world-map.svg" alt="" className="absolute inset-0 h-full w-full object-contain" />

        <motion.svg
          viewBox={VIEW_BOX}
          className="absolute inset-0 h-full w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {DESTINATIONS.map((d, i) => (
            <motion.path
              key={`line-${d.name}`}
              d={arcPath(HOME.x, HOME.y, d.x, d.y)}
              fill="none"
              stroke="#10b981"
              strokeWidth={1.1}
              strokeLinecap="round"
              strokeDasharray="4 3"
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: {
                  pathLength: 1,
                  opacity: 0.55,
                  transition: { delay: 0.2 + i * 0.12, duration: 0.9, ease: 'easeInOut' },
                },
              }}
            />
          ))}

          {DESTINATIONS.map((d, i) => (
            <motion.g
              key={`pin-${d.name}`}
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { type: 'spring', bounce: 0.4, duration: 0.5, delay: 0.5 + i * 0.12 },
                },
              }}
              style={{ transformOrigin: `${d.x}px ${d.y}px` }}
            >
              <circle cx={d.x} cy={d.y} r={4} fill="#10b981" fillOpacity={0.18} />
              <circle cx={d.x} cy={d.y} r={2.2} fill="#059669" />
            </motion.g>
          ))}

          <motion.g
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1, transition: { type: 'spring', bounce: 0.5, duration: 0.6 } },
            }}
            style={{ transformOrigin: `${HOME.x}px ${HOME.y}px` }}
          >
            <circle cx={HOME.x} cy={HOME.y} r={7} fill="#059669" fillOpacity={0.15} />
            <circle cx={HOME.x} cy={HOME.y} r={3.2} fill="#047857" stroke="white" strokeWidth={1} />
          </motion.g>
        </motion.svg>
      </div>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-gray-100 bg-stone-50/60 px-5 py-3">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800">
          <span className="h-2 w-2 rounded-full bg-emerald-700" />
          Based in {HOME.name}
        </span>
        {DESTINATIONS.map((d) => (
          <span key={d.name} className="inline-flex items-center gap-1.5 text-xs text-gray-500">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {d.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TravelMap;

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

// Shared scroll-reveal: critically damped spring, no overshoot — matches
// Apple's default UI motion (damping ~1.0, response ~0.4-0.5s).
const springTransition = (delay = 0) => ({
  type: 'spring' as const,
  bounce: 0,
  duration: 0.7,
  delay,
});

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const Reveal = ({
  children,
  delay = 0,
  className = '',
  y,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={y !== undefined ? { hidden: { opacity: 0, y }, visible: { opacity: 1, y: 0 } } : variants}
      transition={springTransition(delay)}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, ArrowDown, Mail } from 'lucide-react';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Subtle parallax on the background image and a soft fade on scroll —
  // driven straight off scroll progress, not a fixed-duration animation.
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          y: bgY,
          backgroundImage: 'url("/hero-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/85" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', bounce: 0, duration: 0.8 }}
          className="mx-auto mb-8 h-28 w-28 overflow-hidden rounded-full border-4 border-white/15 shadow-2xl sm:h-32 sm:w-32"
        >
          <img src="/profile.jpg" alt="Anjul" className="h-full w-full object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', bounce: 0, duration: 0.7, delay: 0.1 }}
          className="mb-5 flex items-center justify-center gap-2"
        >
          <MapPin size={13} className="text-emerald-400" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
            PhD Researcher · KU Leuven, Belgium
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', bounce: 0, duration: 0.8, delay: 0.18 }}
          className="display-1 text-5xl font-semibold text-white sm:text-6xl md:text-7xl"
        >
          Anjul
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', bounce: 0, duration: 0.8, delay: 0.3 }}
          className="display-3 mx-auto mt-6 max-w-2xl text-lg font-normal text-white/75 sm:text-xl"
        >
          A <span className="font-medium text-emerald-300">materials scientist</span> and{' '}
          <span className="font-medium text-emerald-300">engineering physicist</span> researching
          how temperature guides zeolite growth — with{' '}
          <span className="font-medium text-emerald-300">4 published papers</span> and beamtime at
          the ESRF along the way.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', bounce: 0, duration: 0.7, delay: 0.42 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#research"
            className="rounded-full bg-emerald-500 px-7 py-3 text-sm font-semibold text-black shadow-lg shadow-emerald-500/20 transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.97]"
          >
            Explore My Research
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/10 active:scale-[0.97]"
          >
            <Mail size={15} />
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 transition-colors hover:text-white/70"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="block"
        >
          <ArrowDown size={22} />
        </motion.span>
      </motion.a>
    </section>
  );
};

export default Hero;

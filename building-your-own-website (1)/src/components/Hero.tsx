import { motion } from 'framer-motion';
import { BookOpen, MapPin, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/hero-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
        >
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Alex Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-emerald-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                PhD Candidate
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <MapPin size={14} className="text-emerald-400" />
              <span className="text-emerald-300 text-sm font-medium tracking-wide">
                Stanford University
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Alex Kumar
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-6 max-w-xl leading-relaxed">
              PhD researcher exploring the intersection of{' '}
              <span className="text-emerald-400 font-semibold">machine learning</span> and{' '}
              <span className="text-emerald-400 font-semibold">computational neuroscience</span>.
              When I'm not in the lab, you'll find me at the gym, on a hiking trail, or planning my next adventure.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-white/80 text-sm">
                <BookOpen size={14} />
                12 Publications
              </span>
              <span className="bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-white/80 text-sm">
                🏋️ Fitness Enthusiast
              </span>
              <span className="bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-white/80 text-sm hidden sm:block">
                ✈️ 15+ Countries
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#research"
                className="px-7 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-semibold transition-all shadow-lg shadow-emerald-600/25"
              >
                Explore My Research
              </a>
              <a
                href="#life"
                className="px-7 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-semibold backdrop-blur-sm transition-all"
              >
                Beyond Academia
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors animate-bounce">
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;

import { Sparkles, ArrowRight, FlaskConical, Code2, LineChart, Users } from 'lucide-react';
import Reveal from './Reveal';

const skills = [
  {
    icon: <FlaskConical size={20} />,
    title: 'Lab & Characterization',
    detail: 'ICP-OES, AAS, XRD, SEM, TGA, NMR, Raman, FTIR, UV-Vis, TEM',
  },
  {
    icon: <Code2 size={20} />,
    title: 'Computational',
    detail: 'Python, Java, Origin 8.5, FullProf, MySQL, Windows & Linux',
  },
  {
    icon: <LineChart size={20} />,
    title: 'Analysis & Reporting',
    detail: 'Data & trend analysis, technical reporting, experiment design',
  },
  {
    icon: <Users size={20} />,
    title: 'Communication',
    detail: 'Conference presentations, poster sessions, cross-disciplinary teams',
  },
];

const interests = [
  { emoji: '🥾', label: 'Hiking' },
  { emoji: '📷', label: 'Photography' },
  { emoji: '🍳', label: 'Cooking' },
  { emoji: '💻', label: 'Coding' },
  { emoji: '🏋️', label: 'Fitness' },
  { emoji: '⚽', label: 'Football' },
];

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-stone-50 py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-stone-200/60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 shadow-sm backdrop-blur">
              <Sparkles size={13} />
              About Me
            </div>

            <h2 className="display-2 mt-5 text-3xl font-semibold text-gray-900 md:text-4xl">
              A researcher at the intersection of{' '}
              <span className="relative inline-block text-emerald-700">
                materials
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5.5 C50 1.5, 100 7.5, 199 3.5" stroke="#6ee7b7" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>{' '}
              , physics, and chemistry
            </h2>

            <div className="mt-6 space-y-4 text-base leading-8 text-gray-600 md:text-lg">
              <p>
                I'm a materials scientist and engineering physicist based in Belgium, with a
                pre-doctoral background in bioscience engineering at KU Leuven. My focus is the
                chemistry of silicates, porous materials, and zeolites — understanding how cation
                combinations steer phase selection and framework composition during synthesis.
              </p>
              <p>
                I work across advanced characterization techniques — ICP-OES, AAS, XRD, SEM, TGA,
                and synchrotron-based SAXS/WAXS — and I'm aiming to pursue a PhD to dig deeper into
                how atomic-scale interactions shape material behavior.
              </p>
              <p>
                Outside the lab: hiking, photography, cooking, fitness, and building things in
                code.
              </p>
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-md active:scale-[0.97]"
            >
              Get in touch
              <ArrowRight size={16} />
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col items-center gap-6">
              <div className="relative">
                <div className="h-56 w-56 overflow-hidden rounded-3xl border-4 border-white shadow-xl sm:h-64 sm:w-64">
                  <img src="/research1.jpg" alt="In the lab" className="h-full w-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 rounded-2xl border border-emerald-100 bg-white px-4 py-2 shadow-lg">
                  <p className="text-xs font-semibold text-gray-500">Based in</p>
                  <p className="text-sm font-bold text-emerald-700">Leuven, Belgium</p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
                  Outside the Lab
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {interests.map((item) => (
                    <span
                      key={item.label}
                      className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-600 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:text-emerald-700"
                    >
                      {item.emoji} {item.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="absolute left-0 top-0 h-1 w-full bg-emerald-500" />
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

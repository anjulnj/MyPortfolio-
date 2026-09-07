import { Sparkles, ArrowRight, FlaskConical, Code2, LineChart, Users } from 'lucide-react';
import Reveal from './Reveal';
import DisorderToOrder from './DisorderToOrder';

const skills = [
  {
    icon: <FlaskConical size={20} />,
    title: 'Lab & Characterization',
    detail: 'XRD, SEM, ICP-OES, AAS, TGA-DSC, Raman, FTIR, UV-Vis, TEM, Profex',
  },
  {
    icon: <Code2 size={20} />,
    title: 'Computational',
    detail: 'Python, Java, Origin 8.5, FullProf, MySQL, Windows, Linux & macOS',
  },
  {
    icon: <LineChart size={20} />,
    title: 'Synchrotron & Advanced Methods',
    detail: 'SAXS/WAXS, Impedance Spectroscopy, Broadband Dielectric Spectroscopy',
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
    <section id="about" className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-stone-200/60 blur-3xl" />
      </div>
      <DisorderToOrder />

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
                I'm a PhD researcher in the Department of Bioscience Engineering at KU Leuven,
                working with Prof. Christine Kirschhock and Dr. Eric Breynaert. My focus is the
                chemistry of silicates, porous materials, and zeolites, and right now I'm trying
                to figure out how temperature guides ion association and framework formation
                during crystallization.
              </p>
              <p>
                Day to day that means a lot of characterization work: XRD, SEM, ICP-OES, AAS,
                TGA-DSC, impedance spectroscopy, broadband dielectric spectroscopy, and
                synchrotron SAXS/WAXS at the ESRF. It's led to 4 peer-reviewed publications so
                far (I publish under the name{' '}
                <span className="font-semibold text-gray-800">Anjul Rais</span>), including a
                first-author paper in Materials Horizons.
              </p>
              <p>
                Outside the lab, you'll usually find me hiking, taking photos, cooking, at the
                gym, or building random things in code.
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
              {/* Box shaped to fit the photo, not the other way round — this
                  is a wide campus shot with the KU Leuven logo in the
                  corner, so a square crop would have cut it off. */}
              <div className="relative w-full max-w-md">
                <div className="aspect-[1660/914] w-full overflow-hidden rounded-3xl border-4 border-white shadow-xl">
                  <img
                    src="/ku-leuven-campus.jpg"
                    alt="Arenberg Castle, KU Leuven"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 rounded-2xl border border-emerald-100 bg-white px-4 py-2 shadow-lg">
                  <p className="text-xs font-semibold text-gray-500">Based at</p>
                  <p className="text-sm font-bold text-emerald-700">KU Leuven, Belgium</p>
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

        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
            Capabilities
          </p>
        </Reveal>

        {/* Attributes, not standalone content — no card chrome so they
            don't visually compete with the actual project work below. */}
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center gap-2.5 text-emerald-600">
                  {item.icon}
                  <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-6 text-gray-500">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

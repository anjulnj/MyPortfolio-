import { Microscope, Atom, FlaskConical, MapPin, Calendar, Users, GraduationCap } from 'lucide-react';
import Reveal from './Reveal';

const projects = [
  {
    icon: <Microscope size={22} />,
    tag: 'PhD Research · Ongoing',
    title: 'Ion Association and Zeolite Growth: How Temperature Guides Porous Framework Formation?',
    place: 'Department of Bioscience Engineering, KU Leuven',
    supervisor: 'Promoter: Prof. Christine Kirschhock · Co-Promoter: Dr. Eric Breynaert',
    date: 'December 2025 — present',
    desc: 'Investigating how temperature governs ion association and framework formation in zeolite crystallization, using XRD, SEM, ICP-OES, AAS, TGA-DSC, impedance spectroscopy, broadband dielectric spectroscopy, and synchrotron SAXS/WAXS.',
    current: true,
  },
  {
    icon: <Atom size={22} />,
    tag: 'Pre-doctoral Research Project · 9 months',
    title: 'Cation Combinations & Phase Selection in Zeolites',
    place: 'COK-KAT, Dept. of Bioscience Engineering, KU Leuven',
    supervisor: 'Advisor: Prof. Christine Kirschhock · Co-Advisor: Dr. Eric Breynaert',
    date: 'Completed & presented, November 2024',
    desc: 'Explored the impact of mixed alkali cation systems (Na⁺, K⁺, Cs⁺) on zeolite synthesis mediated by Hydrated Silicate Ionic Liquids (HSILs). Delineated phase boundaries and Si/Al ratios, uncovering cation-dependent framework topologies and refining phase-selection heuristics for targeted zeolite design.',
  },
  {
    icon: <FlaskConical size={22} />,
    tag: "Master's Thesis",
    title: 'AgCuTe₂ (Se-doped) for Thermoelectric Applications',
    place: 'Department of Physics, Jamia Millia Islamia, New Delhi',
    supervisor: 'Supervisor: Prof. Asad Niazi',
    date: 'Completed & presented, June 2022',
    desc: 'Solid-state synthesis and XRD/Raman analysis of Se-doped AgCuTe₂ compounds to optimize structural properties for efficient thermoelectric energy conversion, demonstrating potential for sustainable waste-heat recovery.',
  },
];

const visits = [
  {
    title: 'DUBBLE (BM26), ESRF',
    place: 'Grenoble, France',
    date: '15–22 September 2025',
    desc: 'Upcoming: SAXS/WAXS combined with impedance spectroscopy on mixed-cation zeolites. (Experiment A26-2-1006)',
    upcoming: true,
  },
  {
    title: 'Johannes Kepler University Linz',
    place: 'Linz, Austria',
    date: '14–31 August 2025',
    desc: 'Off-beam conductivity measurements on mixed-cation zeolite synthesis, in preparation for upcoming beam time experiments.',
  },
  {
    title: 'Johannes Kepler University Linz',
    place: 'Linz, Austria',
    date: '5–22 May 2025',
    desc: 'Off-beam conductivity measurements during zeolite crystallization — results published in Chemical Communications (doi:10.1039/D5CC03808A).',
  },
  {
    title: 'SNBL (BM01), ESRF',
    place: 'Grenoble, France',
    date: '17–22 February 2025',
    desc: 'SAXS/WAXS measurements on zeolite materials. (Experiment IH-MA-605)',
  },
  {
    title: 'DUBBLE (BM26), ESRF',
    place: 'Grenoble, France',
    date: '18–24 June 2024',
    desc: 'SAXS/WAXS measurements on zeolite and porous materials. (Experiment A26-2-987)',
  },
  {
    title: 'PHOSPHORE Spring School',
    place: 'Brussels, Belgium',
    date: '14–16 April 2024',
    desc: 'Three-day school on porous hybrid materials, part of the EOS project on pore-size engineered metal-phosphonate catalysts.',
  },
];

const supervision = [
  {
    icon: <GraduationCap size={20} />,
    title: "Master's Thesis Daily Supervision",
    period: 'September 2025 – May 2026 · KU Leuven',
    desc: 'Daily supervisor for a Master’s student in Bioscience Engineering, working on zeolite crystallization and conductivity measurements — a 30 ECTS capstone requiring 750–900 hours of independent work. (Supervisor: Prof. Christine Kirschhock)',
  },
  {
    icon: <Users size={20} />,
    title: 'Bachelor Project Supervision — Begeleid Integrerend Groepswerk',
    period: 'KU Leuven',
    desc: 'Supervised a Bachelor-level integrative group project on zeolite membrane fabrication and crystallization behavior — guiding experimental planning, literature review, and scientific reporting across a 125-hour, 5-credit module.',
  },
];

const Research = () => {
  return (
    <section id="research" className="relative bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-14 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
            Research
          </p>
          <h2 className="display-2 mt-3 text-3xl font-semibold text-gray-900 md:text-4xl">
            Projects &amp; research experience
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 md:text-lg">
            From an ongoing PhD on temperature-guided zeolite growth to thermoelectric materials —
            the projects that have shaped how I think about structure and synthesis.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className="h-full">
              <div className="group relative flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                {p.current && (
                  <span className="absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-emerald-700 ring-1 ring-inset ring-emerald-100">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </span>
                    Current
                  </span>
                )}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 transition-transform duration-300 group-hover:scale-110">
                  {p.icon}
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                  {p.tag}
                </p>
                <h3 className="mt-2 text-lg font-bold text-gray-900">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">{p.desc}</p>
                <div className="mt-5 space-y-1 border-t border-gray-100 pt-4 text-xs text-gray-500">
                  <p>{p.place}</p>
                  <p>{p.supervisor}</p>
                  <p className="font-medium text-gray-400">{p.date}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-14">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
            Research Stays &amp; Beamtime
          </h3>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {visits.map((v, i) => (
            <Reveal key={v.title + v.date} delay={0.1 + i * 0.05}>
              <div
                className={`h-full rounded-2xl border p-6 ${
                  v.upcoming ? 'border-blue-100 bg-blue-50/40' : 'border-emerald-100 bg-emerald-50/40'
                }`}
              >
                <h4 className="text-base font-bold text-gray-900">{v.title}</h4>
                <div
                  className={`mt-2 flex flex-wrap gap-4 text-xs font-medium ${
                    v.upcoming ? 'text-blue-700' : 'text-emerald-700'
                  }`}
                >
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={12} /> {v.place}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={12} /> {v.date}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-14">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
            Supervision &amp; Teaching
          </h3>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {supervision.map((s, i) => (
            <Reveal key={s.title} delay={0.1 + i * 0.06}>
              <div className="h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  {s.icon}
                </div>
                <h4 className="text-base font-bold text-gray-900">{s.title}</h4>
                <p className="mt-1 text-xs font-semibold text-emerald-700">{s.period}</p>
                <p className="mt-2 text-sm leading-6 text-gray-600">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;

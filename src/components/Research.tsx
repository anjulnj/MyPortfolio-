import { Microscope, Atom, FlaskConical, MapPin, Calendar } from 'lucide-react';
import Reveal from './Reveal';

const projects = [
  {
    icon: <Microscope size={22} />,
    tag: 'Pre-doctoral Research Project · 9 months',
    title: 'Cation Combinations & Phase Selection in Zeolites',
    place: 'COK-KAT, Dept. of Microbial and Molecular Systems, KU Leuven',
    supervisor: 'Under Prof. Christine Kirschhock',
    date: 'Completed & presented, November 2024',
    desc: 'Investigated the impact of cation combinations on phase selection and framework composition of zeolites synthesised using highly siliceous ionic liquids (HSILs).',
  },
  {
    icon: <Atom size={22} />,
    tag: "Master's Thesis",
    title: 'AgCuTe₂ (Se-doped) for Thermoelectric Applications',
    place: 'Department of Physics, Jamia Millia Islamia, New Delhi',
    supervisor: 'Funded by Dept. of Physics, JMI',
    date: 'Completed & presented, June 2022',
    desc: 'Synthesis and structural characterisation of AgCuTe₂ (Se-doped) compound for thermoelectric applications.',
  },
  {
    icon: <FlaskConical size={22} />,
    tag: 'Project Involvement',
    title: 'Gamma Radiation Effects on PbSe Thin Films',
    place: 'Department of Physics, Jamia Millia Islamia, New Delhi',
    supervisor: 'Funded by Dept. of Physics, JMI',
    date: 'Completed & presented, 2022',
    desc: 'Studied the influence of gamma radiation on PbSe thin film prepared by thermal evaporation.',
  },
];

const visits = [
  {
    title: 'PHOSPHORE Spring School',
    place: 'Brussels, Belgium',
    date: '14–16 April 2024',
    desc: 'Three-day school on porous hybrid materials, part of the EOS project on pore-size engineered metal-phosphonate catalysts.',
  },
  {
    title: 'ESRF Synchrotron Research Visit',
    place: 'Grenoble, France',
    date: '18–24 June 2024',
    desc: 'Seven-day research visit to the European Synchrotron Radiation Facility to perform SAXS/WAXS measurements on zeolite materials.',
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
            From zeolite crystallization pathways to thermoelectric materials — the projects that
            have shaped how I think about structure and synthesis.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className="h-full">
              <div className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
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
            Conferences, Training &amp; Research Visits
          </h3>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {visits.map((v, i) => (
            <Reveal key={v.title} delay={0.1 + i * 0.08}>
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6">
                <h4 className="text-base font-bold text-gray-900">{v.title}</h4>
                <div className="mt-2 flex flex-wrap gap-4 text-xs font-medium text-emerald-700">
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
      </div>
    </section>
  );
};

export default Research;

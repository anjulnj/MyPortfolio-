import { GraduationCap, Presentation, Trophy, MapPin } from 'lucide-react';
import Reveal from './Reveal';

const education = [
  {
    year: '2024',
    title: 'Pre-doctoral Examination (23 ECTS)',
    place: 'Dept. of Bioscience Engineering, KU Leuven, Belgium (QS #63, 2025)',
    grade: 'Passed',
    note: 'Heterogeneous Catalysis · Highly Dispersed Materials · Research Project',
  },
  {
    year: '2022',
    title: 'M.Sc. Physics — Materials Science Specialisation',
    place: 'Jamia Millia Islamia (Central University), New Delhi, India (NIRF #3, 2023)',
    grade: 'CGPA 9.26/10 — 1st Division with Distinction',
    note: 'Condensed Matter Physics, Quantum Mechanics, Characterisation of Materials',
  },
  {
    year: '2020',
    title: 'B.Sc. Physics, Chemistry & Mathematics',
    place: 'Mahatma Jyotiba Phule Rohilkhand University, Bareilly, India',
    grade: '80.2% — 1st Division with Distinction',
    note: 'Physics major (82.66%) · Mathematics major (76.76%) · Chemistry minor (81.3%)',
  },
  {
    year: '2016',
    title: 'Class XII (CBSE)',
    place: 'CBSE, Delhi, India',
    grade: 'Grade A1 — 92.2%',
    note: 'Physics 95% · Chemistry 95% · Mathematics 86%',
  },
];

const exams = [
  'GATE (Graduate Aptitude Test in Engineering) 2022 — Physics',
  'IIT-JEE Mains 2016 — 94.06 percentile',
  '1st rank, International Mathematics Olympiad (School Level)',
];

const awards = [
  'Among the top three in M.Sc. Physics at Jamia Millia Islamia',
  'Gold Medallist, Bachelor of Science (all science courses); University topper, Maths group',
  'School topper, Class X, XI and XII',
];

const Publications = () => {
  return (
    <section id="publications" className="relative bg-stone-50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-14 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
            Education &amp; Recognition
          </p>
          <h2 className="display-2 mt-3 text-3xl font-semibold text-gray-900 md:text-4xl">
            Academic background
          </h2>
        </Reveal>

        {/* Education timeline */}
        <div className="relative mb-16">
          <div className="absolute bottom-3 left-[19px] top-3 hidden w-px bg-gradient-to-b from-emerald-300 via-emerald-200 to-transparent md:block" />
          <div className="space-y-5">
            {education.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.06} className="group flex gap-6">
                <div className="hidden flex-shrink-0 flex-col items-center pt-6 md:flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-emerald-300 bg-white transition-all duration-300 group-hover:border-emerald-500 group-hover:bg-emerald-500">
                    <GraduationCap size={16} className="text-emerald-600 transition-colors group-hover:text-white" />
                  </div>
                </div>
                <div className="flex-1 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md md:p-7">
                  <span className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 ring-1 ring-inset ring-emerald-100">
                    {e.year}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-gray-900">{e.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-emerald-700">{e.place}</p>
                  <p className="mt-2 text-sm text-gray-600">{e.grade}</p>
                  <p className="mt-1 text-xs text-gray-400">{e.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Presentation */}
          <Reveal className="lg:col-span-2">
            <div className="h-full rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                <Presentation size={22} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                Poster Presentation
              </p>
              <h3 className="mt-2 text-lg font-bold text-gray-900">
                "Investigating Phase Selection and Framework Composition in Mixed-cation Zeolites
                Synthesized using HSILs"
              </h3>
              <p className="mt-3 flex items-center gap-2 text-sm text-gray-600">
                <MapPin size={13} className="text-emerald-600" />
                Dutch Zeolite Association (DZA) Symposium, organized by the Center for Sustainable
                Catalysis and Engineering (CSCE), Leuven, Belgium — November 4, 2024
              </p>
            </div>
          </Reveal>

          {/* Exams */}
          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <Trophy size={22} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                Qualified Exams
              </p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                {exams.map((ex) => (
                  <li key={ex} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
                    {ex}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Academic excellence */}
        <Reveal delay={0.1} className="mt-6">
          <div className="rounded-2xl border border-amber-100 bg-amber-50/50 p-7">
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">
              Academic Excellence
            </p>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {awards.map((a) => (
                <div key={a} className="flex gap-2 text-sm text-gray-700">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                  {a}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Publications;

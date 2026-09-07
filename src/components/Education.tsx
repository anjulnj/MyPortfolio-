import { GraduationCap, Trophy } from 'lucide-react';
import Reveal from './Reveal';

const education = [
  {
    year: 'Dec 2025 – Present',
    title: 'PhD, Department of Bioscience Engineering',
    place: 'KU Leuven, Belgium (QS #60, 2026)',
    grade: 'Undergoing',
    note: 'Promoter: Prof. Christine Kirschhock · Co-Promoter: Dr. Eric Breynaert',
  },
  {
    year: 'Feb 2024 – Nov 2024',
    title: 'Pre-doctoral Course (23 ECTS)',
    place: 'Dept. of Bioscience Engineering, KU Leuven, Belgium',
    grade: 'Passed',
    note: 'Heterogeneous Catalysis · Highly Dispersed Materials · Research Project',
  },
  {
    year: 'Aug 2020 – Aug 2022',
    title: 'M.Sc. Physics — Materials Science Specialisation',
    place: 'Jamia Millia Islamia (Central University), New Delhi, India (NIRF #3, 2024)',
    grade: 'CGPA 9.26/10 — Rank 4/45, 1st Division with Distinction',
    note: 'Condensed Matter Physics, Quantum Mechanics, Characterisation of Materials',
  },
  {
    year: 'Aug 2017 – Aug 2020',
    title: 'B.Sc. Physics & Mathematics',
    place: 'Mahatma Jyotiba Phule Rohilkhand University, Bareilly, India',
    grade: '80.2% — Rank 1/545, 1st Division with Distinction',
    note: 'Physics major (82.66%) · Mathematics major (76.76%) · Chemistry minor (81.3%)',
  },
];

const achievements = [
  'Selected for HERCULES European School 2026',
  'Predoctoral Scholarship, KU Leuven, 2024',
  'GATE (Graduate Aptitude Test in Engineering) — Physics, 2022',
  'Ranked 4th among 45 students, M.Sc. Physics, 2022',
  'Ranked 1st among 545 students, Bachelor’s Program, 2020',
  'IIT-JEE 2016 — top 0.6% of 1.2 million candidates',
  'Ranked 1st in School, Class X & XII',
];

const Education = () => {
  return (
    <section id="education" className="relative bg-stone-50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-14 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
            Education
          </p>
          <h2 className="display-2 mt-3 text-3xl font-semibold text-gray-900 md:text-4xl">
            Academic background
          </h2>
        </Reveal>

        <div className="relative mb-14">
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

        <Reveal>
          <div className="rounded-2xl border border-amber-100 bg-amber-50/50 p-7">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
              <Trophy size={22} />
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">
              Academic Achievements
            </p>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {achievements.map((a) => (
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

export default Education;

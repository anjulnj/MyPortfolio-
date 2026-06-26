import { GraduationCap, Brain, Target, Award, Sparkles, MapPin, ArrowRight } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Brain size={22} />,
      color: 'emerald',
      title: 'Research Domain',
      detail: 'Material Organization & Crystallization',
      sub: 'How structure emerges from complex chemical environments',
    },
    {
      icon: <Award size={22} />,
      color: 'blue',
      title: 'Techniques I Use',
      detail: 'In situ & Ex situ Characterization',
      sub: 'Structural analysis • Synthesis • Mechanistic studies',
    },
    {
      icon: <Target size={22} />,
      color: 'amber',
      title: 'Scientific Questions I Ask',
      detail: 'How do disordered species become ordered?',
      sub: 'What governs pathway selection during crystallization?',
    },
    {
      icon: <GraduationCap size={22} />,
      color: 'rose',
      title: 'Current Mission',
      detail: 'Decode Structure Formation',
      sub: 'Link atomic interactions to material behavior',
    },
  ];

  const colorMap = {
    emerald: {
      bg: 'bg-emerald-50',
      border: 'bg-emerald-500',
      icon: 'text-emerald-600',
      iconBg: 'bg-emerald-100',
      hoverBorder: 'hover:border-emerald-200',
    },
    blue: {
      bg: 'bg-blue-50',
      border: 'bg-blue-500',
      icon: 'text-blue-600',
      iconBg: 'bg-blue-100',
      hoverBorder: 'hover:border-blue-200',
    },
    amber: {
      bg: 'bg-amber-50',
      border: 'bg-amber-500',
      icon: 'text-amber-600',
      iconBg: 'bg-amber-100',
      hoverBorder: 'hover:border-amber-200',
    },
    rose: {
      bg: 'bg-rose-50',
      border: 'bg-rose-500',
      icon: 'text-rose-600',
      iconBg: 'bg-rose-100',
      hoverBorder: 'hover:border-rose-200',
    },
  };

  const timeline = [
    {
      year: '2025 – Present',
      title: 'Current Research Role',
      place: 'Research Environment',
      location: '—',
      desc: 'Exploring how structural order emerges in complex material systems using synthesis, characterization, and mechanistic analysis.',
      current: true,
    },
    {
      year: '2024',
      title: 'Research Training Program',
      place: 'Academic Setting',
      location: '—',
      desc: 'Completed foundational coursework and research training in materials science, catalysis, and structure–property relationships.',
      current: false,
    },
    {
      year: '2020 – 2022',
      title: 'Master’s in Material Sciences',
      place: 'University',
      location: '—',
      desc: 'Focused on materials science, condensed matter physics, and advanced characterization techniques.',
      current: false,
    },
  ];

  const interests = [
    { emoji: '🥾', label: 'Hiking' },
    { emoji: '📷', label: 'Photography' },
    { emoji: '🍳', label: 'Cooking' },
    { emoji: '💻', label: 'Coding & AI' },
    { emoji: '🏋️', label: 'Fitness' },
    { emoji: '✈️', label: 'Travel' },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-stone-50 py-24">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-stone-200/60 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.04)_1px,transparent_1px)] bg-[size:36px_36px] opacity-30" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 shadow-sm backdrop-blur">
              <Sparkles size={13} />
              About Me
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl">
              A researcher driven by curiosity for{' '}
              <span className="relative inline-block text-emerald-700">
                materials science
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5.5 C50 1.5, 100 7.5, 199 3.5" stroke="#6ee7b7" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>{' '}
              and{' '}
              <span className="relative inline-block text-emerald-700">
                discovery
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 60 8" fill="none">
                  <path d="M1 5.5 C15 1.5, 35 7.5, 59 3.5" stroke="#6ee7b7" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            <div className="mt-6 space-y-4 text-base leading-8 text-gray-600 md:text-lg">
              <p>
                I’m a curiosity‑driven researcher working at the intersection of materials science,
                physics, and chemistry. I explore how complex materials organize, transform, and
                develop structure.
              </p>

              <p>
                My work focuses on understanding how disordered species transition into ordered
                frameworks, how crystallization pathways compete, and how atomic‑scale interactions
                shape final material behavior.
              </p>

              <p>
                Outside research, I enjoy hiking, photography, cooking, fitness, coding, and
                exploring ideas through books, technology, and travel.
              </p>
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-md"
            >
              Get in touch
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Photo + Interests */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <div className="h-56 w-56 overflow-hidden rounded-3xl border-4 border-white shadow-xl sm:h-64 sm:w-64">
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-100 to-stone-100 text-5xl">
                  🧪
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 rounded-2xl border border-emerald-100 bg-white px-4 py-2 shadow-lg">
                <p className="text-xs font-semibold text-gray-500">Currently at</p>
                <p className="text-sm font-bold text-emerald-700">Research Environment</p>
              </div>

              <div className="absolute -left-3 -top-3 h-5 w-5 rounded-full bg-emerald-200" />
              <div className="absolute -left-6 top-8 h-2.5 w-2.5 rounded-full bg-emerald-300" />
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
        </div>

        {/* Highlight Cards */}
        <div className="mb-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const c = colorMap[item.color];
            return (
              <div
                key={item.title}
                className={`group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${c.hoverBorder}`}
              >
                <div className={`absolute left-0 top-0 h-1 w-full ${c.border}`} />

                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${c.iconBg} ${c.icon} transition-transform duration-300 group-hover:scale-110`}>
                  {item.icon}
                </div>

                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  {item.title}
                </p>
                <h3 className="mt-1 text-base font-bold text-gray-900">{item.detail}</h3>
                <p className="mt-1 text-sm text-gray-500">{item.sub}</p>
              </div>
            );
          })}
        </div>

        {/* Academic Timeline */}
        <div>
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
              Background
            </p>
            <h3 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
              Academic Journey
            </h3>
          </div>

          <div className="relative">
            <div className="absolute bottom-3 left-[19px] top-3 hidden w-px bg-gradient-to-b from-emerald-300 via-emerald-200 to-transparent md:block" />

            <div className="space-y-6">
              {timeline.map((item) => (
                <div key={item.title} className="group flex gap-6">
                  <div className="hidden flex-shrink-0 flex-col items-center pt-6 md:flex">
                    <div
                      className={`relative flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                        item.current
                          ? 'border-emerald-500 bg-emerald-500'
                          : 'border-emerald-300 bg-white group-hover:border-emerald-500 group-hover:bg-emerald-500'
                      }`}
                    >
                      <div
                        className={`h-3 w-3 rounded-full transition-all duration-300 ${
                          item.current ? 'bg-white' : 'bg-emerald-300 group-hover:bg-white'
                        }`}
                      />
                      {item.current && (
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-25" />
                      )}
                    </div>
                  </div>

                  <div className="flex-1 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-100 hover:shadow-md">
                    <div className="p-6 md:p-8">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <span className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 ring-1 ring-inset ring-emerald-100">
                            {item.year}
                          </span>
                          <h4 className="mt-3 text-lg font-bold text-gray-900 md:text-xl">
                            {item.title}
                          </h4>
                          <div className="mt-1 flex flex-wrap items-center gap-3">
                            <p className="text-sm font-semibold text-emerald-600">
                              {item.place}
                            </p>
                            <span className="inline-flex items-center gap-1 text-xs text-gray-400">
                              <MapPin size={11} />
                              {item.location}
                            </span>
                          </div>
                        </div>

                        {item.current && (
                          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                            Current
                          </span>
                        )}
                      </div>

                      <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

import { FileText, ExternalLink, Mic, Presentation, Sparkles } from 'lucide-react';

const Publications = () => {
  // ─────────────────────────────────────────────
  // JOURNAL ARTICLES (2025)
  // Highlight all Q1 journals
  // ─────────────────────────────────────────────
  const journalArticles = [
    {
      title:
        'Multi-Modal Impedance and X-Ray Characterization Enables Simultaneous Detection of Bulk and Interfacial Crystallization',
      authors:
        'Doppelhammer, Spira, Rais, Vandenabeele, Wangermez, McMonagle, Chernyshov, Breynaert',
      venue: 'Chemical Communications (2025)',
      type: 'Journal Article',
      doi: '10.1039/D5CC03808A',
      link: 'https://doi.org/10.1039/D5CC03808A',
      highlight: true, // Q1
    },
    {
      title: 'Ion Exchange Selectivity Governs Phase Selection in Zeolite Synthesis',
      authors:
        'Rais, Vandenabeele, Doppelhammer, Asselman, Wangermez, Kirschhock, Breynaert',
      venue: 'Materials Horizons (2025)',
      type: 'Journal Article',
      doi: '10.1039/D5MH01044F',
      link: 'https://doi.org/10.1039/D5MH01044F',
      highlight: true, // Q1
    },
    {
      title:
        'Hydrated Silicate Ionic Liquids: Ionic Liquids for Silicate Material Synthesis',
      authors:
        'Vandenabeele, Doppelhammer, Radhakrishnan, Chandran, Wangermez, Rais, Vandeurzen, et al.',
      venue: 'Journal of Molecular Liquids (2025)',
      type: 'Journal Article',
      doi: '10.1016/j.molliq.2024.126603',
      link: 'https://doi.org/10.1016/j.molliq.2024.126603',
      highlight: true, // Q1
    },
    {
      title: 'What Drives Porosity in Aluminosilicate Zeolites?',
      authors: 'Vandenabeele, Rais, Kirschhock, Breynaert',
      venue: 'CrystEngComm (2025)',
      type: 'Journal Article',
      doi: '10.1039/D5CE00034C',
      link: 'https://doi.org/10.1039/D5CE00034C',
      highlight: false, // Q2
    },
  ];

  // ─────────────────────────────────────────────
  // ORAL PRESENTATIONS
  // Highlight only the IZC 2025 oral presentation
  // ─────────────────────────────────────────────
  const oralPresentations = [
    {
      title:
        'The Impact of Cation Combinations on Phase Selection and Framework Composition in Zeolites Synthesized Using HSILs',
      authors:
        'Rais, Vandenabeele, Doppelhammer, Asselman, Wangermez, Kirschhock, Breynaert',
      venue: '21st International Zeolite Conference (IZC 2025), Dalian, China',
      type: 'Oral Presentation',
      link: 'https://www.izc2025.com/',
      highlight: true,
      year: 2025,
    },
  ];

  // ─────────────────────────────────────────────
  // POSTER PRESENTATIONS
  // Sorted: 2026 → 2026 → 2024 → 2024
  // ─────────────────────────────────────────────
  const posterPresentations = [
    {
      title:
        'Influence of low Cs⁺ Fractions on MER and ANA formation in HSIL-based zeolite synthesis',
      authors: 'Rais et al.',
      venue: '35th HERCULES School, ESRF Grenoble, France',
      type: 'Poster Presentation',
      link: '#',
      highlight: false,
      year: 2026,
    },
    {
      title:
        'Influence of low Cs⁺ Fractions on MER and ANA formation in HSIL-based zeolite synthesis',
      authors: 'Rais et al.',
      venue: 'ALBA Synchrotron, Spain',
      type: 'Poster Presentation',
      link: '#',
      highlight: false,
      year: 2026,
    },
    {
      title:
        'Investigating Phase Selection and Framework Composition in Mixed-cation Zeolites Synthesized Using HSILs',
      authors: 'Rais et al.',
      venue: 'Dutch Zeolite Association (DZA) Symposium, Leuven, Belgium',
      type: 'Poster Presentation',
      link: '#',
      highlight: false,
      year: 2024,
    },
    {
      title:
        'Impact of Cation Combinations on Phase Selection and Framework Composition of Zeolites Synthesized Using HSILs',
      authors: 'Rais et al.',
      venue: '6th Euro Asia Zeolite Conference (EAZC), Alicante, Spain',
      type: 'Poster Presentation',
      link: '#',
      highlight: false,
      year: 2024,
    },
  ];

  // ─────────────────────────────────────────────
  // COMBINED STATS
  // ─────────────────────────────────────────────
  const totalPublications =
    journalArticles.length +
    oralPresentations.length +
    posterPresentations.length;

  const stats = [
    { value: totalPublications, label: 'Total Outputs', accent: true },
    { value: journalArticles.length, label: 'Journal Articles', accent: false },
    { value: oralPresentations.length, label: 'Oral Presentations', accent: false },
    { value: posterPresentations.length, label: 'Poster Presentations', accent: false },
  ];

  // ─────────────────────────────────────────────
  // RENDERING
  // ─────────────────────────────────────────────
  const renderCard = (pub) => (
    <article
      key={pub.title}
      className={`group relative overflow-hidden rounded-2xl border bg-white/90 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8 ${
        pub.highlight ? 'border-emerald-200' : 'border-stone-200/80'
      }`}
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-white to-emerald-50/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Left accent line */}
      <div
        className={`absolute left-0 top-0 h-full w-1 rounded-full transition-all duration-300 ${
          pub.highlight
            ? 'bg-emerald-500'
            : 'bg-transparent group-hover:bg-emerald-300'
        }`}
      />

      {/* Featured badge */}
      {pub.highlight && (
        <div className="absolute right-5 top-5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-700">
          Featured
        </div>
      )}

      <div className="relative flex items-start gap-4">
        {/* Icon */}
        <div
          className={`mt-1 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
            pub.highlight
              ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
              : 'border-stone-200 bg-stone-50 text-gray-500 group-hover:border-emerald-200 group-hover:bg-emerald-50 group-hover:text-emerald-700'
          }`}
        >
          {pub.type.includes('Journal') && <FileText size={18} />}
          {pub.type.includes('Oral') && <Mic size={18} />}
          {pub.type.includes('Poster') && <Presentation size={18} />}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="pr-0 md:pr-6">
              <h3 className="text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-emerald-700">
                {pub.title}
              </h3>

              <p className="mt-2 text-sm text-gray-500">{pub.authors}</p>

              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 ring-1 ring-inset ring-emerald-100">
                  {pub.venue}
                </span>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600 ring-1 ring-inset ring-gray-200">
                  {pub.type}
                </span>

                {pub.doi && (
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-100">
                    DOI: {pub.doi}
                  </span>
                )}
              </div>
            </div>

            <a
              href={pub.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open publication: ${pub.title}`}
              className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-stone-200 bg-white text-gray-400 transition-all duration-300 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );

  return (
    <section id="publications" className="relative overflow-hidden bg-stone-50 py-24">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-emerald-100/50 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-stone-200/70 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.04)_1px,transparent_1px)] bg-[size:36px_36px] opacity-30" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 shadow-sm backdrop-blur">
              <Sparkles size={14} />
              Publications
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Selected Works
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-600 md:text-base">
              A curated selection of journal articles, oral presentations, and poster
              contributions.
            </p>
          </div>
        </div>

        {/* Journals */}
        <h3 className="mb-6 text-xl font-bold text-gray-800">Journal Articles</h3>
        <div className="space-y-5">{journalArticles.map(renderCard)}</div>

        {/* Oral */}
        <h3 className="mt-16 mb-6 text-xl font-bold text-gray-800">
          Oral Presentations
        </h3>
        <div className="space-y-5">{oralPresentations.map(renderCard)}</div>

        {/* Posters */}
        <h3 className="mt-16 mb-6 text-xl font-bold text-gray-800">
          Poster Presentations
        </h3>
        <div className="space-y-5">{posterPresentations.map(renderCard)}</div>

        {/* Stats */}
        <div className="mt-20 border-t border-stone-200 pt-12">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
            At a Glance
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <div
                  className={`group relative flex h-32 w-32 items-center justify-center rounded-full border-2 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:h-36 sm:w-36 ${
                    stat.accent
                      ? 'border-emerald-300 bg-emerald-50/60'
                      : 'border-emerald-100 bg-white'
                  }`}
                >
                  <div
                    className={`absolute inset-2.5 rounded-full ring-1 transition-all duration-300 group-hover:ring-emerald-200 ${
                      stat.accent
                        ? 'bg-gradient-to-br from-emerald-50 via-white to-emerald-50 ring-emerald-200'
                        : 'bg-gradient-to-br from-stone-50 via-white to-emerald-50/30 ring-emerald-100'
                    }`}
                  />

                  <div
                    className={`absolute -right-1 top-4 h-2.5 w-2.5 rounded-full transition-all duration-300 group-hover:scale-125 ${
                      stat.accent ? 'bg-emerald-400' : 'bg-emerald-200'
                    }`}
                  />

                  <div className="relative text-center px-3">
                    <div
                      className={`text-3xl font-bold sm:text-4xl ${
                        stat.accent ? 'text-emerald-700' : 'text-gray-800'
                      }`}
                    >
                      {stat.value}
                    </div>
                  </div>
                </div>

                <p className="mt-4 max-w-[120px] text-center text-[11px] font-semibold uppercase leading-tight tracking-wider text-gray-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;

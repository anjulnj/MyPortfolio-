import { FileText, ExternalLink, Mic, Presentation as PresentationIcon } from 'lucide-react';
import Reveal from './Reveal';

const publications = [
  {
    authors: 'Rais, A., Vandenabeele, D., Doppelhammer, N., Asselman, K., Wangermez, W., Kirschhock, C. E. A., Breynaert, E.',
    year: '2025',
    title: 'Ion Exchange Selectivity Governs Phase Selection in Zeolite Synthesis',
    journal: 'Materials Horizons',
    doi: '10.1039/D5MH01044F',
    sjr: 'SJR 2.885 · Q1',
    firstAuthor: true,
  },
  {
    authors: 'Doppelhammer, N., Spira, D., Rais, A., Vandenabeele, D., Wangermez, W., McMonagle, C. J., Chernyshov, D., Breynaert, E.',
    year: '2025',
    title: 'Multi-Modal Impedance and X-Ray Characterization Enables Simultaneous Detection of Bulk and Interfacial Crystallization',
    journal: 'Chemical Communications',
    doi: '10.1039/D5CC03808A',
    sjr: 'SJR 1.037 · Q1',
    firstAuthor: false,
  },
  {
    authors: 'Vandenabeele, D., Doppelhammer, N., Radhakrishnan, S., Chandran, C. V., Wangermez, W., Rais, A., Vandeurzen, E., et al.',
    year: '2025',
    title: 'Hydrated Silicate Ionic Liquids: Ionic Liquids for Silicate Material Synthesis',
    journal: 'Journal of Molecular Liquids',
    volume: '417, 126603',
    doi: '10.1016/j.molliq.2024.126603',
    sjr: 'SJR 0.935 · Q1',
    firstAuthor: false,
  },
  {
    authors: 'Vandenabeele, D., Rais, A., Kirschhock, C., Breynaert, E.',
    year: '2025',
    title: 'What Drives Porosity in Aluminosilicate Zeolites?',
    journal: 'CrystEngComm',
    volume: '27(16), 2452–61',
    doi: '10.1039/D5CE00034C',
    sjr: 'SJR 0.520 · Q2',
    firstAuthor: false,
  },
];

const presentations = [
  {
    type: 'oral',
    title:
      'The Impact of Cation Combinations on Phase Selection and Framework Composition in Zeolites Synthesized Using Hydrated Silicate Ionic Liquids (HSILs)',
    venue: '21st International Zeolite Conference (IZC-2025), Dalian, China',
    date: '13–18 July 2025',
  },
  {
    type: 'poster',
    title: 'Influence of low Cs⁺ Fractions on MER and ANA formation in HSIL-based zeolite synthesis',
    venue: 'ALBA Synchrotron, Spain',
    date: 'Upcoming — 17 March 2026',
    upcoming: true,
  },
  {
    type: 'poster',
    title: 'Influence of low Cs⁺ Fractions on MER and ANA formation in HSIL-based zeolite synthesis',
    venue: '35th HERCULES School, ESRF, Grenoble, France',
    date: '25 February 2026',
  },
  {
    type: 'poster',
    title: 'Investigating Phase Selection and Framework Composition in Mixed-cation Zeolites Synthesized using HSILs',
    venue: 'Dutch Zeolite Association (DZA) Symposium, Leuven, Belgium',
    date: '4 November 2024',
  },
  {
    type: 'poster',
    title: 'Impact of Cation Combinations on Phase Selection and Framework Composition of Zeolites Synthesized using HSILs',
    venue: '6th Euro Asia Zeolite Conference (EAZC), Alicante, Spain',
    date: '19–22 January 2024',
  },
];

const Publications = () => {
  return (
    <section id="publications" className="relative bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-14 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
            Publications &amp; Presentations
          </p>
          <h2 className="display-2 mt-3 text-3xl font-semibold text-gray-900 md:text-4xl">
            Published work
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 md:text-lg">
            Publishing under the name <span className="font-semibold text-gray-900">Anjul Rais</span>.
          </p>
        </Reveal>

        <div className="space-y-4">
          {publications.map((p, i) => (
            <Reveal key={p.doi} delay={i * 0.06}>
              <a
                href={`https://doi.org/${p.doi}`}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-100 hover:shadow-md sm:flex-row sm:items-start sm:gap-5"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <FileText size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    {p.firstAuthor && (
                      <span className="rounded-full bg-emerald-600 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white">
                        First Author
                      </span>
                    )}
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                      {p.journal} · {p.year}
                    </span>
                  </div>
                  <h3 className="mt-2 text-base font-bold text-gray-900 group-hover:text-emerald-700 sm:text-lg">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">{p.authors}</p>
                  <p className="mt-2 text-xs font-medium text-gray-400">
                    {p.volume ? `${p.volume} · ` : ''}
                    {p.sjr} · doi:{p.doi}
                  </p>
                </div>
                <ExternalLink size={16} className="flex-shrink-0 text-gray-300 transition-colors group-hover:text-emerald-600" />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-14">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
            Conference Presentations
          </h3>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {presentations.map((p, i) => (
            <Reveal key={p.title + p.date} delay={0.1 + i * 0.05}>
              <div
                className={`h-full rounded-2xl border p-6 ${
                  p.upcoming
                    ? 'border-blue-100 bg-blue-50/40'
                    : 'border-emerald-100 bg-emerald-50/40'
                }`}
              >
                <div className="flex items-center gap-2">
                  {p.type === 'oral' ? (
                    <Mic size={14} className="text-emerald-700" />
                  ) : (
                    <PresentationIcon size={14} className="text-emerald-700" />
                  )}
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    {p.type === 'oral' ? 'Oral Presentation' : p.upcoming ? 'Upcoming Poster' : 'Poster'}
                  </span>
                </div>
                <h4 className="mt-2 text-sm font-bold leading-snug text-gray-900">{p.title}</h4>
                <p className="mt-2 text-xs text-gray-600">{p.venue}</p>
                <p className="mt-1 text-xs font-medium text-gray-400">{p.date}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;

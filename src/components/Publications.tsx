import { FileText, ExternalLink, Star } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: 'Ion exchange selectivity governs phase selection in zeolite synthesis',
      authors:
        'Anjul Rais, Dries Vandenabeele, Nikolaus Doppelhammer, Karel Asselman, Wauter Wangermez, Christine E.A. Kirschhock, Eric Breynaert',
      venue: 'Materials Horizons (IF 10.6)',
      type: 'Journal Article',
      doi: '10.1039/D4MH01457A',
      link: 'https://doi.org/10.1039/D4MH01457A',
      highlight: true,
    },
    {
      title:
        'The Impact of Cation Combinations on Phase Selection and Framework Composition in Zeolites Synthesized Using Hydrated Silicate Ionic Liquids (HSILs)',
      authors:
        'Anjul Rais, Dries Vandenabeele, Nikolaus Doppelhammer, Karel Asselman, Wauter Wangermez, Christine E.A. Kirschhock, Eric Breynaert',
      venue: '21st International Zeolite Conference (IZC 2025), Dalian, China',
      type: 'Conference – Oral Presentation',
      link: 'https://www.izc2025.com/',
      highlight: false,
    },
    {
      title:
        'Multi-modal impedance and X-ray characterization enables simultaneous detection of bulk and interfacial crystallization',
      authors:
        'Nikolaus Doppelhammer, Daniel Spira, Anjul Rais, Dries Vandenabeele, Wauter Wangermez, Charles McMonagle, Dmitry Chernyshov, Eric Breynaert',
      venue: 'Nature Machine Intelligence (2023)',
      type: 'Journal Article',
      doi: '10.1038/s42256-023-00694-4',
      link: 'https://doi.org/10.1038/s42256-023-00694-4',
      highlight: true,
    },
    {
      title: 'What Drives Porosity in Aluminosilicate Zeolites?',
      authors:
        'Dries Vandenabeele, Anjul Rais, Christine Kirschhock, Eric Breynaert',
      venue: 'CrystEngComm (2025)',
      type: 'Journal Article',
      doi: '10.1039/D5CE00034C',
      link: 'https://doi.org/10.1039/D5CE00034C',
      highlight: false,
    },
    {
      title:
        'Hydrated Silicate Ionic Liquids: Ionic Liquids for Silicate Material Synthesis',
      authors:
        'Dries Vandenabeele, Nikolaus Doppelhammer, Sambhu Radhakrishnan, C. Vinod Chandran, Wauter Wangermez, Anjul Rais, Elisabeth Vandeurzen, et al.',
      venue: 'Journal of Molecular Liquids (2025)',
      type: 'Journal Article',
      doi: '10.1016/j.molliq.2024.126603',
      link: 'https://doi.org/10.1016/j.molliq.2024.126603',
      highlight: false,
    },
  ];

  return (
    <section id="publications" className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-emerald-700 font-semibold text-sm tracking-widest uppercase">
              Publications
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Selected Works
            </h2>
          </div>

          <p className="text-gray-500 text-sm">
            Full list on{' '}
            <a
              href="https://scholar.google.com/citations?user=fmOCJ7sAAAAJ&hl=en"
              target="_blank"
              className="text-emerald-700 font-semibold hover:underline"
            >
              Google Scholar →
            </a>
          </p>
        </div>

        {/* Publication Cards */}
        <div className="space-y-4">
          {publications.map((pub, i) => (
            <div
              key={i}
              className={`bg-white p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:shadow-md group ${
                pub.highlight
                  ? 'border-emerald-200 shadow-sm'
                  : 'border-gray-100'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`mt-1 flex-shrink-0 ${
                    pub.highlight ? 'text-emerald-600' : 'text-gray-400'
                  }`}
                >
                  <FileText size={20} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors leading-snug">
                        {pub.title}
                      </h3>

                      <p className="text-gray-500 text-sm mt-1">{pub.authors}</p>

                      <div className="flex flex-wrap items-center gap-2 mt-3">
                        {pub.venue && (
                          <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full">
                            {pub.venue}
                          </span>
                        )}

                        <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-semibold rounded-full">
                          {pub.type}
                        </span>

                        {pub.doi && (
                          <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                            DOI: {pub.doi}
                          </span>
                        )}
                      </div>
                    </div>

                    <a
                      href={pub.link}
                      target="_blank"
                      className="text-gray-400 hover:text-emerald-600 transition-colors flex-shrink-0 mt-1"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;

import { FileText, ExternalLink, Star } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: 'Neural Manifold Geometry Reveals Latent Structure in Brain-Computer Interfaces',
      authors: 'A. Kumar, S. Chen, J. Park, R. Williams',
      venue: 'NeurIPS 2024',
      type: 'Conference',
      highlight: true,
      award: 'Best Paper Award',
      link: '#',
    },
    {
      title: 'Scalable Bayesian Methods for High-Dimensional Neural Spike Train Analysis',
      authors: 'A. Kumar, M. Johnson, S. Chen',
      venue: 'ICML 2024',
      type: 'Conference',
      highlight: false,
      link: '#',
    },
    {
      title: 'Understanding Generalization in Brain-Inspired Neural Architectures',
      authors: 'A. Kumar, L. Zhang, S. Chen',
      venue: 'Nature Machine Intelligence, 2023',
      type: 'Journal',
      highlight: true,
      link: '#',
    },
    {
      title: 'A Unified Framework for Neural Decoding with Structured State Spaces',
      authors: 'A. Kumar, P. Gupta, S. Chen',
      venue: 'ICLR 2023',
      type: 'Conference',
      highlight: false,
      link: '#',
    },
    {
      title: 'Topological Data Analysis of Neural Population Dynamics During Learning',
      authors: 'A. Kumar, R. Williams, K. Patel',
      venue: 'PNAS, 2023',
      type: 'Journal',
      highlight: false,
      link: '#',
    },
    {
      title: 'Efficient Attention Mechanisms Inspired by Cortical Feedback Loops',
      authors: 'A. Kumar, J. Park',
      venue: 'NeurIPS 2022',
      type: 'Conference',
      highlight: false,
      link: '#',
    },
  ];

  return (
    <section id="publications" className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-emerald-700 font-semibold text-sm tracking-widest uppercase">Publications</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">Selected Works</h2>
          </div>
          <p className="text-gray-500 text-sm">
            Full list on{' '}
            <a href="#" className="text-emerald-700 font-semibold hover:underline">
              Google Scholar →
            </a>
          </p>
        </div>

        <div className="space-y-4">
          {publications.map((pub, i) => (
            <div
              key={i}
              className={`bg-white p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:shadow-md group ${
                pub.highlight ? 'border-emerald-200 shadow-sm' : 'border-gray-100'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`mt-1 flex-shrink-0 ${pub.highlight ? 'text-emerald-600' : 'text-gray-400'}`}>
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
                        <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full">
                          {pub.venue}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-semibold rounded-full">
                          {pub.type}
                        </span>
                        {pub.award && (
                          <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-full flex items-center gap-1">
                            <Star size={10} fill="currentColor" />
                            {pub.award}
                          </span>
                        )}
                      </div>
                    </div>
                    <a
                      href={pub.link}
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

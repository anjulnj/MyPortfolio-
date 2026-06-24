import { Microscope, Atom, FlaskConical, Layers } from 'lucide-react';

const Research = () => {
  const areas = [
    {
      icon: <Atom size={28} />,
      title: 'Silicate & Zeolite Chemistry',
      desc: 'Exploring how silicates and zeolites form, transform, and select phases under different chemical and thermodynamic conditions.',
      color: 'emerald',
    },
    {
      icon: <Layers size={28} />,
      title: 'Phase Selection & Crystallization',
      desc: 'Investigating nucleation pathways, framework competition, and crystallization kinetics in HSIL-based synthesis systems.',
      color: 'blue',
    },
    {
      icon: <FlaskConical size={28} />,
      title: 'Hydrated Silicate Ionic Liquids (HSILs)',
      desc: 'Studying the structure, reactivity, and ion–silicate interactions in HSILs to understand their role in directing zeolite frameworks.',
      color: 'purple',
    },
    {
      icon: <Microscope size={28} />,
      title: 'Advanced Characterization',
      desc: 'Using in situ SAXS–WAXS, and ex situ PXRD, SEM, ICP‑OES, AAS, and TGA/DSC to decode material evolution across multiple length scales.',
      color: 'amber',
    },
  ];

  const colorMap = {
    emerald: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', hoverBg: 'hover:bg-emerald-100' },
    blue: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', hoverBg: 'hover:bg-blue-100' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', hoverBg: 'hover:bg-purple-100' },
    amber: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', hoverBg: 'hover:bg-amber-100' },
  };

  return (
    <section id="research" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Description */}
          <div>
            <span className="text-emerald-700 font-semibold text-sm tracking-widest uppercase">Research</span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
              Understanding how{' '}
              <span className="text-emerald-700">materials grow</span> and{' '}
              <span className="text-emerald-700">structures emerge</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              My research focuses on the chemistry and physics of silicates, porous materials, 
              and zeolites. I study how ions, structure-directing species, and thermodynamic 
              conditions influence phase selection and crystallization. Much of my work involves 
              Hydrated Silicate Ionic Liquids (HSILs), where I investigate how subtle changes in 
              composition lead to entirely different framework outcomes. I combine in situ 
              synchrotron techniques with ex situ characterization to build a mechanistic 
              understanding of how materials evolve from solution to solid.
            </p>

            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="/research1.jpg"
                alt="Research visualization"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div>
                  <p className="text-white font-bold text-lg">Current Project</p>
                  <p className="text-white/70 text-sm">
                    In situ SAXS–WAXS tracking of zeolite crystallization in HSIL systems
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Research Areas */}
          <div className="space-y-5">
            {areas.map((area, i) => {
              const c = colorMap[area.color];
              return (
                <div
                  key={i}
                  className={`p-6 rounded-2xl border ${c.border} ${c.bg} ${c.hoverBg} transition-all duration-300 cursor-default`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`${c.text} mt-1`}>{area.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{area.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{area.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Research;

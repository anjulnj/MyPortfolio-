import { Microscope, Cpu, BrainCircuit, Network } from 'lucide-react';

const Research = () => {
  const areas = [
    {
      icon: <BrainCircuit size={28} />,
      title: 'Computational Neuroscience',
      desc: 'Understanding how neural circuits process information and using these insights to design new computational models.',
      color: 'emerald',
    },
    {
      icon: <Network size={28} />,
      title: 'Deep Learning Theory',
      desc: 'Investigating the mathematical foundations of deep neural networks — generalization, optimization, and expressivity.',
      color: 'blue',
    },
    {
      icon: <Cpu size={28} />,
      title: 'Brain-Computer Interfaces',
      desc: 'Developing ML algorithms that decode neural signals for assistive technology and prosthetic control.',
      color: 'purple',
    },
    {
      icon: <Microscope size={28} />,
      title: 'Neural Data Analysis',
      desc: 'Building scalable statistical methods for analyzing large-scale neural recordings (fMRI, EEG, spike trains).',
      color: 'amber',
    },
  ];

  const colorMap: Record<string, { bg: string; text: string; border: string; hoverBg: string }> = {
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
              Bridging the gap between <span className="text-emerald-700">brains</span> and <span className="text-emerald-700">machines</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              My research sits at the exciting intersection of artificial intelligence and neuroscience. 
              I believe that by understanding how the brain computes, we can build more efficient, interpretable, 
              and robust AI systems. My work combines mathematical theory with real neural data to develop 
              next-generation computational models.
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
                  <p className="text-white/70 text-sm">Neural Manifold Learning for Brain-Computer Interfaces</p>
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

import { GraduationCap, Brain, Target, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="text-emerald-600" size={24} />,
      title: 'Education',
      detail: 'PhD in Computer Science',
      sub: 'Stanford University, 2022–Present',
    },
    {
      icon: <Brain className="text-blue-600" size={24} />,
      title: 'Research Focus',
      detail: 'ML & Neuroscience',
      sub: 'Deep learning, Neural decoding',
    },
    {
      icon: <Award className="text-amber-600" size={24} />,
      title: 'Awards',
      detail: 'NSF Graduate Fellow',
      sub: 'Best Paper Award, NeurIPS 2024',
    },
    {
      icon: <Target className="text-rose-600" size={24} />,
      title: 'Goal',
      detail: 'Bridge AI & Neuroscience',
      sub: 'Build brain-inspired AI systems',
    },
  ];

  const timeline = [
    {
      year: '2022 – Present',
      title: 'PhD Candidate, Computer Science',
      place: 'Stanford University',
      desc: 'Researching brain-inspired machine learning models under Prof. Sarah Chen. Published in top-tier venues including NeurIPS and ICML.',
    },
    {
      year: '2020 – 2022',
      title: 'M.S. in Artificial Intelligence',
      place: 'MIT',
      desc: 'Focused on reinforcement learning and computational cognitive science. Thesis on neural network interpretability.',
    },
    {
      year: '2016 – 2020',
      title: 'B.S. in Mathematics & CS',
      place: 'UC Berkeley',
      desc: 'Double major with honors. Undergraduate research in statistical learning theory. Summa cum laude.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-emerald-700 font-semibold text-sm tracking-widest uppercase">About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
            A researcher with a curiosity for both <span className="text-emerald-700">science</span> and <span className="text-emerald-700">life</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            I'm a third-year PhD student at Stanford, driven by the belief that understanding the brain can help us build better AI. 
            Outside the lab, I'm a firm believer in work-life balance — whether that means deadlifting at 6am, 
            backpacking through Southeast Asia, or cooking a new recipe. I think the best ideas come from diverse experiences.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-50 transition-all duration-300 group"
            >
              <div className="mb-4 w-12 h-12 rounded-xl bg-gray-50 group-hover:bg-emerald-50 flex items-center justify-center transition-colors">
                {item.icon}
              </div>
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">{item.title}</p>
              <h3 className="text-lg font-bold text-gray-900 mt-1">{item.detail}</h3>
              <p className="text-sm text-gray-500 mt-1">{item.sub}</p>
            </div>
          ))}
        </div>

        {/* Academic Timeline */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-10">Academic Journey</h3>
          <div className="relative">
            <div className="absolute left-[18px] top-2 bottom-2 w-px bg-emerald-200 hidden md:block"></div>
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full bg-emerald-100 border-2 border-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:border-emerald-600 transition-colors">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 group-hover:bg-white transition-colors"></div>
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-6 md:p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                    <span className="text-emerald-700 text-sm font-bold">{item.year}</span>
                    <h4 className="text-xl font-bold text-gray-900 mt-1">{item.title}</h4>
                    <p className="text-emerald-600 font-medium text-sm mb-2">{item.place}</p>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
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

import { Dumbbell, Plane, BookOpen, Coffee, Mountain, Music } from 'lucide-react';

const Life = () => {
  const interests = [
    {
      icon: <Dumbbell size={24} />,
      title: 'Fitness & Gym',
      desc: "I've been lifting for 5+ years. Training teaches discipline, consistency, and the value of progressive overload — principles that transfer beautifully to research.",
      color: 'text-rose-600',
      bg: 'bg-rose-50',
    },
    {
      icon: <Plane size={24} />,
      title: 'Travel & Exploration',
      desc: 'From temples in Kyoto to trails in Patagonia — traveling recharges my creativity. 15+ countries and counting. Every trip brings a fresh perspective.',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      icon: <Mountain size={24} />,
      title: 'Hiking & Outdoors',
      desc: 'Nothing beats the clarity you get from a sunrise hike. Some of my best research ideas have come to me on a trail.',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    {
      icon: <BookOpen size={24} />,
      title: 'Reading',
      desc: 'From neuroscience papers to philosophy and sci-fi novels — I believe in reading widely. Current favorite: "Gödel, Escher, Bach" by Douglas Hofstadter.',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
    {
      icon: <Coffee size={24} />,
      title: 'Coffee & Cooking',
      desc: 'A good pour-over is non-negotiable. I also love experimenting with recipes from the countries I visit — my Thai green curry is getting close!',
      color: 'text-amber-700',
      bg: 'bg-amber-50',
    },
    {
      icon: <Music size={24} />,
      title: 'Music',
      desc: 'Lo-fi for focus, jazz for thinking, indie rock for the gym. Music is the soundtrack to every part of my day.',
      color: 'text-pink-600',
      bg: 'bg-pink-50',
    },
  ];

  return (
    <section id="life" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="text-emerald-700 font-semibold text-sm tracking-widest uppercase">Beyond Academia</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
            There's more to life than <span className="text-emerald-700">p-values</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            I'm a big believer in the idea that a well-rounded life makes you a better researcher. 
            Here's what fuels me outside of the lab.
          </p>
        </div>

        {/* Photo Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          <div className="relative h-72 rounded-2xl overflow-hidden group">
            <img
              src="/gym.jpg"
              alt="Gym and Fitness"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div>
                <p className="text-white font-bold text-xl">🏋️ Morning Gym Routine</p>
                <p className="text-white/70 text-sm">Strength training at 6 AM — best way to start the day</p>
              </div>
            </div>
          </div>
          <div className="relative h-72 rounded-2xl overflow-hidden group">
            <img
              src="/travel.jpg"
              alt="Travel Adventures"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div>
                <p className="text-white font-bold text-xl">✈️ Adventure Awaits</p>
                <p className="text-white/70 text-sm">Exploring new places, one trip at a time</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interest Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {interests.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 bg-white group"
            >
              <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-4 ${item.color} group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Fun Quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-400 max-w-3xl mx-auto leading-relaxed">
            "The mind that opens to a new idea never returns to its original size."
          </blockquote>
          <p className="text-gray-400 mt-4 text-sm font-medium">— Albert Einstein</p>
        </div>
      </div>
    </section>
  );
};

export default Life;

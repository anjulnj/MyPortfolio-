import { Dumbbell, Plane, BookOpen, Coffee, Mountain, Music } from 'lucide-react';

const Life = () => {
  const interests = [
    {
      icon: <Dumbbell size={24} />,
      title: 'Fitness & Strength Training',
      desc: "I've been lifting consistently for the past few months, and it has taught me discipline, structure, and the power of progressive overload — lessons that translate beautifully into research and everyday life.",
      color: 'text-rose-600',
      bg: 'bg-rose-50',
    },
    {
      icon: <Plane size={24} />,
      title: 'Travel & Exploration',
      desc: 'From Austria and the Netherlands to Spain, France, China, and Germany — traveling recharges my creativity. With 10+ countries explored, every trip brings a fresh perspective and a deeper appreciation for the world.',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      icon: <Mountain size={24} />,
      title: 'Hiking & Outdoors',
      desc: 'Nothing beats the clarity that comes from a sunrise hike. Forest trails, snowy mountains, coastal paths — being outdoors helps me disconnect, reset, and return with a clearer mind.',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    {
      icon: <BookOpen size={24} />,
      title: 'Reading & Storytelling',
      desc: 'Whether it’s zeolite papers, science writing, or sci‑fi stories, I love exploring ideas that expand my thinking. Movies and series are another favorite way to unwind — especially anything with strong world‑building or deep storytelling.',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
    {
      icon: <Coffee size={24} />,
      title: 'Coffee & Cooking',
      desc: 'A good pour‑over is non‑negotiable. I enjoy experimenting with recipes from the places I visit — my Thai green curry is getting dangerously close to restaurant quality.',
      color: 'text-amber-700',
      bg: 'bg-amber-50',
    },
    {
      icon: <Music size={24} />,
      title: 'Music',
      desc: 'Lo‑fi for focus, jazz for thinking, and indie rock for the gym — music sets the rhythm for every part of my day and keeps me grounded.',
      color: 'text-pink-600',
      bg: 'bg-pink-50',
    },
  ];

  return (
    <section id="life" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-emerald-700 font-semibold text-sm tracking-widest uppercase">
            Beyond Academia
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
            There's more to life than <span className="text-emerald-700">p-values</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            I believe that a well‑rounded life makes you a better researcher.  
            These are the passions that fuel me outside the lab and keep me grounded.
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
                <p className="text-white/70 text-sm">Strength training at 6 AM — the best way to start the day</p>
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
              <div
                className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-4 ${item.color} group-hover:scale-110 transition-transform`}
              >
                {item.icon}
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
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

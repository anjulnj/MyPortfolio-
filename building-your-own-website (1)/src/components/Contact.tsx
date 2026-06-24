import { Mail, MapPin, Calendar, Send, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <span className="text-emerald-400 font-semibold text-sm tracking-widest uppercase">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 leading-tight">
              Let's collaborate on something <span className="text-emerald-400">meaningful</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Whether you're interested in a research collaboration, speaking opportunity, 
              or just want to chat about AI, neuroscience, or the best hiking trails — 
              I'd love to hear from you.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-emerald-600/10 rounded-xl flex items-center justify-center border border-emerald-600/20">
                  <Mail className="text-emerald-400" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Email</p>
                  <p className="text-white font-medium">alex.kumar@stanford.edu</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center border border-blue-600/20">
                  <MapPin className="text-blue-400" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Location</p>
                  <p className="text-white font-medium">Gates Building, Stanford University, CA</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-purple-600/10 rounded-xl flex items-center justify-center border border-purple-600/20">
                  <Calendar className="text-purple-400" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Office Hours</p>
                  <p className="text-white font-medium">Tuesdays & Thursdays, 2–4 PM</p>
                </div>
              </div>
            </div>

            {/* Academic Links */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3">Find me online</p>
              <div className="flex flex-wrap gap-3">
                {['Google Scholar', 'ResearchGate', 'LinkedIn', 'Twitter/X', 'GitHub'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-1.5"
                  >
                    {platform}
                    <ExternalLink size={12} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-6">Send me a message</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 transition-all text-white placeholder-gray-600"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 transition-all text-white placeholder-gray-600"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Subject</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 transition-all text-gray-400 appearance-none">
                  <option value="">Select a topic</option>
                  <option value="research">Research Collaboration</option>
                  <option value="speaking">Speaking Opportunity</option>
                  <option value="general">General Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 transition-all text-white placeholder-gray-600 resize-none"
                  placeholder="Tell me what's on your mind..."
                ></textarea>
              </div>
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-600/20">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import {
  mail,
  map-pin,
  calendar,
  Send,
  ExternalLink,
  Github,
  Linkedin,
  BookOpen,
  CircleUserRound,
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT SECTION */}
          <div>
            <span className="text-emerald-400 font-semibold text-sm tracking-widest uppercase">
              Get in Touch
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 leading-tight">
              Let's collaborate on something{" "}
              <span className="text-emerald-400">meaningful</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Whether you're interested in a research collaboration, a speaking
              opportunity, or simply want to chat about materials science, AI,
              or the best hiking trails — I’d be happy to connect.
            </p>

            {/* CONTACT INFO */}
            <div className="space-y-6 mb-10">
              {/* EMAIL */}
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-emerald-600/10 rounded-xl flex items-center justify-center border border-emerald-600/20">
                  <Mail className="text-emerald-400" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                    Email
                  </p>
                  <p className="text-white font-medium">anjul@kuleuven.be</p>
                  <p className="text-gray-400 text-sm">
                    Personal: anjul8477@gmail.com
                  </p>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center border border-blue-600/20">
                  <MapPin className="text-blue-400" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                    Location
                  </p>
                  <p className="text-white font-medium">
                    COK-KAT, KU Leuven, Belgium
                  </p>
                </div>
              </div>

              {/* EMAIL HOURS */}
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-purple-600/10 rounded-xl flex items-center justify-center border border-purple-600/20">
                  <Calendar className="text-purple-400" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                    Email Hours
                  </p>
                  <p className="text-white font-medium">
                    Tuesdays & Thursdays, 6–8 PM
                  </p>
                </div>
              </div>
            </div>

            {/* ONLINE LINKS */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3">
                Find me online
              </p>

              <div className="flex flex-wrap gap-3">
                {/* GOOGLE SCHOLAR */}
                <a
                  href="https://scholar.google.com/citations?user=fmOCJ7sAAAAJ&hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2"
                >
                  <BookOpen size={14} className="text-emerald-400" />
                  Google Scholar
                  <ExternalLink size={12} />
                </a>

                {/* RESEARCHGATE */}
                <a
                  href="https://www.researchgate.net/profile/Anjul-Rais"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2"
                >
                  <BookOpen size={14} className="text-emerald-400" />
                  ResearchGate
                  <ExternalLink size={12} />
                </a>

                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/in/anjul001/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2"
                >
                  <Linkedin size={14} className="text-emerald-400" />
                  LinkedIn
                  <ExternalLink size={12} />
                </a>

                {/* ORCID */}
                <a
                  href="https://orcid.org/0009-0005-3618-5961"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2"
                >
                  <CircleUserRound size={14} className="text-emerald-400" />
                  ORCID
                  <ExternalLink size={12} />
                </a>

                {/* GITHUB */}
                <a
                  href="https://github.com/anjulnj"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2"
                >
                  <Github size={14} className="text-emerald-400" />
                  GitHub
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-6">Send me a message</h3>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white"
                />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white"
                />
              </div>

              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-400">
                <option value="">Select a topic</option>
                <option value="research">Research Collaboration</option>
                <option value="speaking">Speaking Opportunity</option>
                <option value="general">General Inquiry</option>
                <option value="other">Other</option>
              </select>

              <textarea
                rows={4}
                placeholder="Tell me what's on your mind..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white"
              />

              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2">
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

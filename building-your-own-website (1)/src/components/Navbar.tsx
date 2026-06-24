import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Research', href: '#research' },
    { name: 'Publications', href: '#publications' },
    { name: 'Life', href: '#life' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2">
            <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm ${isScrolled ? 'bg-emerald-700 text-white' : 'bg-white/20 text-white backdrop-blur-sm border border-white/30'}`}>
              AK
            </div>
            <span className={`text-lg font-semibold tracking-tight hidden sm:block ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Alex Kumar
            </span>
          </a>

          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isScrolled
                      ? 'text-gray-600 hover:text-emerald-700 hover:bg-emerald-50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <a
            href="#contact"
            className={`hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              isScrolled
                ? 'bg-emerald-700 text-white hover:bg-emerald-800'
                : 'bg-white/15 text-white border border-white/30 hover:bg-white/25 backdrop-blur-sm'
            }`}
          >
            Get in Touch
          </a>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg shadow-xl border-t border-gray-100 mt-2">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 px-4 py-3 rounded-xl text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

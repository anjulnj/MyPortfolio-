import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Research', href: '#research' },
  { name: 'Publications', href: '#publications' },
  { name: 'Life', href: '#life' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 140;
      let currentSection = '#home';

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href) as HTMLElement | null;
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = link.href;
          }
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-6xl pt-4">
        {/* Main bar */}
        <div
          className={`rounded-2xl border transition-all duration-500 ${
            isScrolled
              ? 'border-stone-200/80 bg-white/85 shadow-lg shadow-stone-200/50 backdrop-blur-xl'
              : 'border-white/20 bg-white/10 backdrop-blur-md'
          }`}
        >
          <div className="flex items-center justify-between px-4 py-3 sm:px-5">
            {/* Logo */}
            <a href="#home" className="group flex items-center gap-3">
              <div
                className={`relative flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                  isScrolled
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'border border-white/30 bg-white/15 text-white backdrop-blur-sm'
                }`}
              >
                <span className="relative z-10">AR</span>
                <span
                  className={`absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 ${
                    isScrolled
                      ? 'border-white bg-emerald-400'
                      : 'border-white/40 bg-emerald-300'
                  }`}
                />
              </div>

              <div className="hidden sm:block">
                <p
                  className={`text-sm font-semibold tracking-tight transition-colors ${
                    isScrolled ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  Anjul Rais
                </p>
                <p
                  className={`text-xs transition-colors ${
                    isScrolled ? 'text-gray-500' : 'text-white/70'
                  }`}
                >
                  Materials Science • Zeolites • Silicates
                </p>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:block">
              <div
                className={`flex items-center gap-1 rounded-full border px-2 py-1 transition-all duration-300 ${
                  isScrolled
                    ? 'border-stone-200 bg-stone-50/80'
                    : 'border-white/15 bg-white/5'
                }`}
              >
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href;

                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                        isScrolled
                          ? isActive
                            ? 'bg-emerald-50 text-emerald-700 shadow-sm'
                            : 'text-gray-600 hover:bg-white hover:text-emerald-700'
                          : isActive
                          ? 'bg-white/15 text-white'
                          : 'text-white/80 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Desktop CTA */}
            <a
              href="#contact"
              className={`hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                isScrolled
                  ? 'bg-emerald-700 text-white shadow-sm hover:-translate-y-0.5 hover:bg-emerald-800 hover:shadow-md'
                  : 'border border-white/30 bg-white/15 text-white backdrop-blur-sm hover:bg-white/25'
              }`}
            >
              Get in Touch
              <ArrowRight size={16} />
            </a>

            {/* Mobile button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 md:hidden ${
                isScrolled
                  ? 'text-gray-700 hover:bg-stone-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile overlay */}
        {isOpen && (
          <button
            className="fixed inset-0 top-0 z-40 bg-black/20 md:hidden"
            aria-label="Close mobile menu overlay"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Mobile menu */}
        <div
          className={`relative z-50 mt-3 overflow-hidden rounded-2xl border border-stone-200/80 bg-white/95 shadow-2xl backdrop-blur-xl transition-all duration-300 md:hidden ${
            isOpen
              ? 'pointer-events-auto translate-y-0 opacity-100'
              : 'pointer-events-none -translate-y-2 opacity-0'
          }`}
        >
          <div className="p-3">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`group flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'text-gray-700 hover:bg-stone-50 hover:text-emerald-700'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span
                      className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? 'bg-emerald-500'
                          : 'bg-stone-200 group-hover:bg-emerald-300'
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            <div className="mt-3 border-t border-stone-200 pt-3">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-800"
              >
                Get in Touch
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

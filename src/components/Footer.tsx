const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900 border-t border-white/5 text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Anjul. Built with curiosity and caffeine ☕
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: 'Home', href: '#home' },
              { label: 'Research', href: '#research' },
              { label: 'Education', href: '#publications' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-500 hover:text-emerald-400 text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

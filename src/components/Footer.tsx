const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900 border-t border-white/5 text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Alex Kumar. Built with curiosity and caffeine ☕
          </p>
          <div className="flex items-center gap-6">
            {['Home', 'Research', 'Publications', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-500 hover:text-emerald-400 text-sm transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

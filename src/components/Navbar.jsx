import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Experience', to: 'experience' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-primary/90 backdrop-blur-xl border-b border-border'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="home" smooth duration={500} className="cursor-pointer flex items-center gap-2 group">
            <span className="font-mono text-secondary text-xl font-bold tracking-tight group-hover:glow-text transition-all">
              SA<span className="text-light/30">.</span>
            </span>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
            >
              <Link
                to={link.to}
                spy smooth offset={-80} duration={500}
                activeClass="text-secondary"
                className="px-4 py-2 text-sm text-muted hover:text-secondary transition-colors duration-200 cursor-pointer font-medium rounded-lg hover:bg-white/5"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: navLinks.length * 0.07 }}
          >
            <a
              href="https://github.com/shabbarrazaansari"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 btn-outline text-sm py-2"
            >
              GitHub
            </a>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-muted hover:text-secondary transition-colors p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-border bg-primary/95 backdrop-blur-xl"
          >
            <ul className="px-6 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.to}
                    spy smooth offset={-80} duration={500}
                    activeClass="text-secondary"
                    className="block py-3 text-muted hover:text-secondary transition-colors cursor-pointer border-b border-border/50"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
              <li className="pt-4">
                <a
                  href="https://github.com/shabbarrazaansari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full text-center block py-3"
                  onClick={() => setIsOpen(false)}
                >
                  GitHub
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

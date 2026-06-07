import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import portfolioData from '../data/portfolioData';

const taglines = portfolioData.personal.taglines;

const Hero = () => {
  const { name, title, subtitle, contact } = portfolioData.personal;
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = taglines[taglineIndex];
    let timeout;

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(i => i + 1), 55);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(i => i - 1), 30);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTaglineIndex(i => (i + 1) % taglines.length);
    }

    setDisplayed(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, taglineIndex]);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }
  });

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 hero-grid opacity-100" />

      {/* Glow orbs */}
      <div className="glow-orb w-96 h-96 bg-secondary top-1/4 -left-48" />
      <div className="glow-orb w-80 h-80 bg-purple top-1/3 right-0" style={{ opacity: 0.08 }} />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-primary/60 to-primary" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Pre-title */}
          <motion.p {...fadeUp(0.1)} className="font-mono text-secondary text-sm tracking-widest mb-5">
            &gt; Hello, world — I'm
          </motion.p>

          {/* Name */}
          <motion.h1 {...fadeUp(0.2)} className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-light mb-4 leading-tight tracking-tight">
            {name}
          </motion.h1>

          {/* Title */}
          <motion.div {...fadeUp(0.35)} className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xl md:text-2xl font-semibold text-muted">{title}</span>
            <span className="w-1 h-1 rounded-full bg-secondary/50" />
            <span className="text-xl md:text-2xl font-semibold text-secondary">{subtitle}</span>
          </motion.div>

          {/* Typewriter tagline */}
          <motion.div {...fadeUp(0.5)} className="h-10 mb-10">
            <p className="font-mono text-lg text-muted">
              {displayed}
              <span className="inline-block w-0.5 h-5 bg-secondary ml-0.5 animate-[blink_1s_step-end_infinite] align-middle" />
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div {...fadeUp(0.65)} className="flex flex-wrap gap-4 mb-16">
            <Link to="projects" smooth duration={500} offset={-80}>
              <button className="btn-primary flex items-center gap-2">
                View My Work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </Link>
            <Link to="contact" smooth duration={500} offset={-80}>
              <button className="btn-outline">Get In Touch</button>
            </Link>
          </motion.div>

          {/* Social + quick info row */}
          <motion.div {...fadeUp(0.8)} className="flex flex-wrap items-center gap-6">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted hover:text-secondary transition-colors text-sm font-medium group"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="group-hover:underline">shabbarrazaansari</span>
            </a>
            <span className="w-px h-4 bg-border" />
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted hover:text-secondary transition-colors text-sm font-medium group"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="group-hover:underline">LinkedIn</span>
            </a>
            <span className="w-px h-4 bg-border" />
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 text-muted hover:text-secondary transition-colors text-sm font-medium group"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="group-hover:underline">{contact.email}</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-muted/50 tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <svg className="w-5 h-5 text-secondary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

import { useState } from 'react';
import { motion } from 'framer-motion';
import portfolioData from '../data/portfolioData';

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const FeaturedCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    className="group relative card border overflow-hidden hover:border-white/20 transition-all duration-300"
    style={{ '--accent': project.color }}
  >
    {/* Top accent bar */}
    <div className="h-1 w-full" style={{ background: project.color }} />

    <div className="p-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="font-mono text-xs tracking-widest mb-2 block" style={{ color: project.color }}>
            FEATURED PROJECT
          </span>
          <h3 className="text-xl font-bold text-light group-hover:text-white transition-colors">
            {project.title}
          </h3>
        </div>
        <div className="flex gap-3 mt-1">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-secondary transition-colors"
              title="Live Demo"
            >
              <ExternalLinkIcon />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-secondary transition-colors"
              title="Source Code"
            >
              <GitHubIcon />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-muted leading-relaxed mb-6 text-sm">{project.description}</p>

      {/* Live link preview button */}
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold mb-6 transition-all duration-200 hover:gap-3"
          style={{ color: project.color }}
        >
          View Live
          <ExternalLinkIcon />
        </a>
      )}

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {project.technologies.map(t => (
          <span
            key={t}
            className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/5 border border-white/8 text-muted"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const SmallCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group card-hover p-6 flex flex-col"
  >
    {/* Icon row */}
    <div className="flex items-start justify-between mb-4">
      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${project.color}18` }}>
        <svg className="w-5 h-5" fill="none" stroke={project.color} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      </div>
      <div className="flex gap-3">
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer"
            className="text-muted hover:text-secondary transition-colors">
            <ExternalLinkIcon />
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="text-muted hover:text-secondary transition-colors">
            <GitHubIcon />
          </a>
        )}
      </div>
    </div>

    <h3 className="text-light font-semibold mb-2 group-hover:text-secondary transition-colors">{project.title}</h3>
    <p className="text-muted text-sm leading-relaxed flex-1 mb-4">{project.description}</p>

    <div className="flex flex-wrap gap-1.5 mt-auto">
      {project.technologies.map(t => (
        <span key={t} className="px-2 py-0.5 text-xs font-mono rounded bg-white/5 border border-white/8 text-dim">{t}</span>
      ))}
    </div>
  </motion.div>
);

const Projects = () => {
  const { projects } = portfolioData;
  const featured = projects.filter(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <section className="section-container" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">Work</p>
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle text-muted">
          A selection of things I've built — from AI SaaS platforms to real-time applications.
        </p>
      </motion.div>

      {/* Featured */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {featured.map((p, i) => <FeaturedCard key={p.id} project={p} index={i} />)}
      </div>

      {/* Other projects */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <p className="font-mono text-xs text-muted tracking-widest mb-5">OTHER PROJECTS</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {others.map((p, i) => <SmallCard key={p.id} project={p} index={i} />)}
        </div>
      </motion.div>

      {/* GitHub CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-14 text-center"
      >
        <a
          href="https://github.com/shabbarrazaansari"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-muted hover:text-secondary transition-colors duration-200 font-medium text-sm group"
        >
          <GitHubIcon />
          <span className="group-hover:underline">See more on GitHub</span>
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Projects;

import { motion } from 'framer-motion';
import portfolioData from '../data/portfolioData';

const categoryIcons = {
  Languages: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  Frontend: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Backend: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
    </svg>
  ),
  Databases: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
    </svg>
  ),
  'Cloud & Tools': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  ),
  Integrations: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  ),
};

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section className="section-container" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">Toolkit</p>
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle text-muted">
          Technologies I've worked with professionally and in personal projects.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((cat, i) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="card-hover p-6 group"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary/20 transition-colors">
                {categoryIcons[cat.category]}
              </div>
              <h3 className="font-semibold text-light text-sm">{cat.category}</h3>
            </div>

            {/* Skills list */}
            <div className="flex flex-wrap gap-2">
              {cat.items.map((skill, j) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 + j * 0.04 }}
                  className="skill-badge tag cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* All skills flat pill cloud */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 card p-8"
      >
        <p className="font-mono text-xs text-secondary tracking-widest mb-5">ALL TECHNOLOGIES</p>
        <div className="flex flex-wrap gap-2">
          {skills.flatMap(c => c.items).map((skill, i) => (
            <motion.span
              key={`all-${skill}-${i}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.025 }}
              whileHover={{ scale: 1.05 }}
              className="skill-badge px-3 py-1.5 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-muted hover:text-secondary hover:border-secondary/40 transition-all duration-200 cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;

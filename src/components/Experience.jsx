import { motion } from 'framer-motion';
import portfolioData from '../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section className="section-container" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">Career</p>
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle text-muted">
          Where I've worked and what I've built.
        </p>
      </motion.div>

      <div className="max-w-3xl space-y-6">
        {experience.map((job, i) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="group"
          >
            <div className="card-hover p-7 relative overflow-hidden">
              {/* Left accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary to-transparent rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-light font-bold text-lg">{job.position}</h3>
                  <p className="text-secondary font-medium mt-0.5">{job.company}</p>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                  <span className="font-mono text-xs text-muted border border-border rounded-full px-3 py-1">
                    {job.period}
                  </span>
                  <span className="font-mono text-xs text-dim">{job.type}</span>
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-2.5 mt-4">
                {job.responsibilities.map((r, j) => (
                  <li key={j} className="flex gap-3 text-muted text-sm leading-relaxed">
                    <span className="text-secondary mt-1 shrink-0">▹</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

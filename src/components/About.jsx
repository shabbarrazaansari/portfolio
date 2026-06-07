import { motion } from 'framer-motion';
import portfolioData from '../data/portfolioData';

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '10+', label: 'APIs Integrated' },
  { value: '5+', label: 'Projects Shipped' },
];

const About = () => {
  const { bio } = portfolioData.personal;

  return (
    <section className="section-container" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">About</p>
        <h2 className="section-title">Who I Am</h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        {/* Bio — wider col */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-3 space-y-5"
        >
          <p className="text-muted text-lg leading-relaxed">{bio}</p>
          <p className="text-muted leading-relaxed">
            I specialize in creating seamless user experiences backed by robust APIs and scalable backend systems.
            At Codenia Technologies, I've connected platforms like Shopify, WooCommerce, and Amazon while integrating
            major shipping carriers — giving businesses real operational leverage.
          </p>
          <p className="text-muted leading-relaxed">
            I care about clean, readable code, fast load times, and shipping features that actually work in production —
            not just in dev.
          </p>

          {/* Tech highlights */}
          <div className="flex flex-wrap gap-2 pt-2">
            {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'AWS'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </motion.div>

        {/* Stats + card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-2 space-y-4"
        >
          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-3 lg:grid-cols-1 lg:gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="card p-5 text-center lg:text-left hover:border-secondary/20 transition-colors"
              >
                <div className="text-3xl font-extrabold text-secondary mb-1">{s.value}</div>
                <div className="text-sm text-muted">{s.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Currently card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="card p-5 border-l-2 border-l-secondary"
          >
            <p className="font-mono text-xs text-secondary tracking-widest mb-3">CURRENTLY</p>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-light text-sm font-medium">Open to opportunities</span>
            </div>
            <p className="text-muted text-xs">Full-time / Freelance</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

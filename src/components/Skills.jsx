import { motion } from 'framer-motion';
import portfolioData from '../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="section-container" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="animate-on-scroll"
      >
        <h2 className="section-title">Skills</h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skills.map((skillCategory, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="glass-card h-full transform hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-bold mb-4 text-secondary">{skillCategory.category}</h3>
            <div className="space-y-3">
              {skillCategory.items.map((skill, skillIndex) => (
                <div key={skillIndex} className="relative">
                  <div className="flex justify-between mb-1">
                    <span className="text-light">{skill}</span>
                  </div>
                  <div className="w-full bg-dark/50 rounded-full h-2.5">
                    <motion.div
                      className="bg-secondary h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${85 + Math.random() * 15}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + skillIndex * 0.1 }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Skills Visualization */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 glass-card animate-on-scroll"
      >
        <h3 className="text-xl font-bold mb-6 text-secondary">Technical Proficiency</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.flatMap(category => 
            category.items.map((skill, index) => (
              <motion.div
                key={`${category.category}-${skill}`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20, 
                  delay: 0.1 * index 
                }}
                className="px-4 py-2 rounded-full bg-white/5 border border-secondary/30 text-light hover:bg-secondary/20 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.div>
            ))
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
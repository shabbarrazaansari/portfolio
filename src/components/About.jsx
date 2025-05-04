import { motion } from 'framer-motion';
import portfolioData from '../data/portfolioData';

const About = () => {
  const { bio } = portfolioData.personal;

  return (
    <div className="section-container" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="animate-on-scroll"
      >
        <h2 className="section-title">About Me</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Bio Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="animate-on-scroll"
        >
          <div className="glass-card h-full">
            <p className="text-lg leading-relaxed mb-6">{bio}</p>
            <p className="text-lg leading-relaxed mb-6">
              I specialize in creating seamless user experiences and robust backend systems that work together harmoniously. My expertise in API integration allows me to connect various services and create powerful, feature-rich applications.
            </p>
            <p className="text-lg leading-relaxed">
              I'm passionate about clean code, performance optimization, and staying current with the latest web development trends and technologies.
            </p>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="animate-on-scroll"
        >
          <div className="glass-card overflow-hidden h-full flex items-center justify-center p-8">
            <div className="relative w-64 h-64 mx-auto">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full text-secondary opacity-20">
                <path fill="currentColor" d="M45.3,-59.1C59.9,-51.9,73.5,-40.5,79.8,-25.8C86.1,-11.1,85.1,6.7,78.5,21.4C71.9,36.1,59.7,47.6,45.7,56.5C31.7,65.4,15.8,71.7,-0.2,72C-16.2,72.2,-32.5,66.4,-45.3,56.5C-58.1,46.6,-67.5,32.6,-72.3,16.5C-77.1,0.4,-77.3,-17.8,-70.1,-32.5C-62.9,-47.2,-48.3,-58.4,-33.5,-65.4C-18.7,-72.4,-3.7,-75.2,9.8,-72.1C23.3,-69,30.7,-66.3,45.3,-59.1Z" transform="translate(100 100)" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-40 h-40 text-light" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
import { motion } from 'framer-motion';
import portfolioData from '../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <div className="section-container" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="animate-on-scroll"
      >
        <h2 className="section-title">Experience</h2>
      </motion.div>

      {/* Vertical Timeline */}
      <div className="relative max-w-3xl mx-auto mt-12">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-secondary/30"></div>

        {/* Timeline Items */}
        {experience.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:text-right' : ''}`}
          >
            <div className={`flex items-center ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
              <div className={`glass-card relative z-10 w-full md:w-[calc(50%-40px)] ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                {/* Timeline Dot */}
                <div className="absolute top-6 -left-3 md:top-6 md:left-auto md:-right-[17px] w-6 h-6 rounded-full bg-secondary border-4 border-primary z-20"></div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-col mb-2">
                    <h3 className="text-xl font-bold text-light">{job.position}</h3>
                    <h4 className="text-lg font-semibold text-secondary">{job.company}</h4>
                    <span className="text-tertiary">{job.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-light space-y-2 mt-4">
                    {job.responsibilities.map((responsibility, i) => (
                      <li key={i}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
import { useState } from 'react';
import { motion } from 'framer-motion';
import portfolioData from '../data/portfolioData';

const Contact = () => {
  const { contact } = portfolioData.personal;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <div className="section-container" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="animate-on-scroll"
      >
        <h2 className="section-title">Contact Me</h2>
        <p className="text-tertiary text-lg max-w-3xl mx-auto text-center mb-12">
          Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="animate-on-scroll"
        >
          <div className="glass-card h-full">
            <h3 className="text-xl font-bold mb-6 text-secondary">Get In Touch</h3>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-secondary/10 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-light">Email</h4>
                  <a href={`mailto:${contact.email}`} className="text-tertiary hover:text-secondary transition-colors duration-300">
                    {contact.email}
                  </a>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-secondary/10 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-light">Phone</h4>
                  <a href={`tel:${contact.phone}`} className="text-tertiary hover:text-secondary transition-colors duration-300">
                    {contact.phone}
                  </a>
                </div>
              </div>
              
              {/* LinkedIn */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-secondary/10 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-light">LinkedIn</h4>
                  <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-tertiary hover:text-secondary transition-colors duration-300">
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="animate-on-scroll"
        >
          <form onSubmit={handleSubmit} className="glass-card h-full">
            <h3 className="text-xl font-bold mb-6 text-secondary">Send a Message</h3>
            
            <div className="space-y-4">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-light mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 text-light focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all duration-300"
                />
              </div>
              
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-light mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 text-light focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all duration-300"
                />
              </div>
              
              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-light mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 text-light focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all duration-300 resize-none"
                ></textarea>
              </div>
              
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : 'Send Message'}
                </button>
                
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 text-center text-green-400"
                  >
                    Message sent successfully!
                  </motion.p>
                )}
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
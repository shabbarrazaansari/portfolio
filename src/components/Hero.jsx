import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import portfolioData from '../data/portfolioData';

const Hero = () => {
  const { name, title, tagline } = portfolioData.personal;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const particlesConfig = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#64ffda"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
      },
      opacity: {
        value: 0.3,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#64ffda",
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 0.5
          }
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        {isMounted && (
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={particlesConfig}
            className="w-full h-full"
          />
        )}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center md:text-left">
        <div className="max-w-3xl mx-auto md:mx-0">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-secondary font-mono mb-4"
          >
            Hi there, I'm
          </motion.p>

          {/* Name with animated text reveal */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
              className="text-5xl md:text-7xl font-bold text-light animate-text-reveal"
            >
              {name}
            </motion.h1>
          </div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl md:text-3xl font-bold text-tertiary mb-6"
          >
            {title}
          </motion.h2>

          {/* Animated typing effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg md:text-xl text-light mb-8 h-16"
          >
            <TypeAnimation
              sequence={[
                tagline,
                2000,
                'Specializing in API integrations and full-stack solutions.',
                2000,
                'Turning ideas into scalable web applications.',
                2000,
              ]}
              wrapper="p"
              speed={50}
              repeat={Infinity}
              className="inline-block"
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="btn-primary"
            >
              View My Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="btn-outline"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-secondary text-sm mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-secondary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
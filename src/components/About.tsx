import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Code, Cpu, Zap } from 'lucide-react';
import profileImg from '../assets/profile.jpeg'

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-background relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          {/* Left side: Image */}
          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <div className="aspect-[4/5]  rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-10 -left-5 w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-lg z-0"></div>
            <div className="absolute bottom-10 -right-5 w-20 h-20 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg z-0"></div>
            <div className="absolute -bottom-5 left-10 w-40 h-10 bg-accent-100 dark:bg-accent-900/30 rounded-lg z-0"></div>
          </motion.div>

          {/* Right side: Content */}
          <div>
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
              <span className="h-1 w-10 bg-primary-500 dark:bg-primary-400 rounded-full"></span>
              <span className="text-primary-600 dark:text-primary-400 font-medium">About Me</span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Creative Full-Stack Developer & IoT Specialist
            </motion.h2>

            <motion.p variants={itemVariants} className="text-gray-700 dark:text-gray-300 mb-6">
              Creative and tech-savvy Full-Stack Developer & Embedded Systems enthusiast with strong foundations in IoT and real-world automation projects. I combine software expertise with electronics innovation to build scalable and impactful solutions.
            </motion.p>

            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6 text-gray-700 dark:text-gray-300">
              <MapPin size={18} className="text-primary-500" />
              <span>Patna, Bihar, India</span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8"
            >
              <div className="p-3 md:p-4 bg-gray-50 dark:bg-dark-lighter rounded-lg hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <Code className="text-primary-500 min-w-[20px] shrink-0" size={20} />
                  <h6 className="font-semibold truncate">Software</h6>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 flex-grow">Building responsive, dynamic web applications</p>
              </div>

              <div className="p-3 md:p-4 bg-gray-50 dark:bg-dark-lighter rounded-lg hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <Cpu className="text-secondary-500 min-w-[20px] shrink-0" size={20} />
                  <h6 className="font-semibold truncate">IoT & Embedded</h6>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 flex-grow">Creating smart solutions with sensors & microcontrollers</p>
              </div>

              <div className="p-3 md:p-4 bg-gray-50 dark:bg-dark-lighter rounded-lg hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="text-accent-500 min-w-[20px] shrink-0" size={20} />
                  <h6 className="font-semibold truncate">Innovation</h6>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 flex-grow">Solving real-world problems with technology</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
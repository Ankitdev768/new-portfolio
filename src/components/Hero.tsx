import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Code, Cpu, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gray-50 dark:bg-dark-background">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/50 dark:from-primary-900/20 dark:to-secondary-900/20 z-0"></div>
      
      {/* Grain texture */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20 bg-grain mix-blend-multiply z-0"></div>
      
      {/* Blobs */}
      <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[60%] rounded-full bg-gradient-to-r from-primary-300/20 to-secondary-300/20 dark:from-primary-700/10 dark:to-secondary-700/10 blur-3xl z-0"></div>
      <div className="absolute -bottom-[30%] -right-[10%] w-[50%] h-[60%] rounded-full bg-gradient-to-r from-secondary-300/20 to-primary-300/20 dark:from-secondary-700/10 dark:to-primary-700/10 blur-3xl z-0"></div>
      
      <div className="container-custom z-10 relative">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div className="flex items-center justify-center mb-6 gap-2" variants={item}>
            <span className="px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium flex items-center gap-2">
              <Code size={16} />
              <span>Full-Stack Developer</span>
            </span>
            <span className="px-4 py-1.5 rounded-full bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 text-sm font-medium flex items-center gap-2">
              <Cpu size={16} />
              <span>IoT Enthusiast</span>
            </span>
          </motion.div>
          
          <motion.h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white" variants={item}>
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">Ankit Kumar</span>
            <motion.span 
              className="inline-block ml-2"
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
            >
              👋
            </motion.span>
          </motion.h1>
          
          <motion.p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto" variants={item}>
            Crafting innovative solutions at the intersection of web development and embedded systems. 
            I build responsive web apps and smart IoT devices that solve real-world problems.
          </motion.p>
          
          <motion.div className="flex flex-wrap items-center justify-center gap-4" variants={item}>
            <a href="#projects" className="btn btn-primary">
              View My Work
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a href="#" className="btn btn-outline">
              Download CV
              <Download size={18} className="ml-2" />
            </a>
          </motion.div>
          
          <motion.div 
            className="mt-16 flex items-center justify-center gap-6 text-gray-600 dark:text-gray-400 flex-wrap"
            variants={item}
          >
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles size={20} className="text-primary-500" />
              <span>10+ Completed Projects</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles size={20} className="text-secondary-500" />
              <span>Multiple Award Winner</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center pt-4">
          <motion.div 
            className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full"
            animate={{ 
              y: [0, 12, 0],
              opacity: [1, 0.5, 1]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
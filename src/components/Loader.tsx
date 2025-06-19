import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-dark-background z-50">
      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-5xl font-bold text-primary-600 dark:text-primary-400"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          &lt;/&gt;
        </motion.div>
        
        <div className="flex flex-col">
          <motion.span 
            className="text-2xl font-bold text-gray-900 dark:text-white"
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          >
            Ankit Kumar
          </motion.span>
          <motion.span 
            className="text-sm text-gray-600 dark:text-gray-400"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              repeatType: "loop",
              repeatDelay: 0.5
            }}
            style={{ overflow: "hidden", whiteSpace: "nowrap", display: "inline-block" }}
          >
            Full-Stack Developer | IoT Enthusiast
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
};

export default Loader;
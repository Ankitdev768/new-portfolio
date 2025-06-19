import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, Star } from 'lucide-react';

const Achievements: React.FC = () => {
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

  const achievements = [
    {
      title: '1st Prize – National Science Day Model Presentation',
      organization: 'ISRO x BIT Patna',
      icon: <Trophy className="text-yellow-500" size={24} />,
    },
    {
      title: 'Finalist – Smart India Hackathon 2024',
      organization: 'Internal Round',
      icon: <Star className="text-blue-500\" size={24} />,
    },
    {
      title: 'Finalist – TECHNEX\'25 Hackathon',
      organization: 'IIT BHU',
      icon: <Award className="text-purple-500" size={24} />,
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-dark-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-100/30 dark:bg-secondary-900/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-4">
            <span className="h-1 w-10 bg-primary-500 dark:bg-primary-400 rounded-full"></span>
            <span className="text-primary-600 dark:text-primary-400 font-medium">Achievements</span>
            <span className="h-1 w-10 bg-primary-500 dark:bg-primary-400 rounded-full"></span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Awards & Recognition
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Honors and recognition received for innovation and technical excellence.
          </motion.p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-dark-lighter dark:to-dark-background p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center">
                {achievement.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {achievement.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400">
                {achievement.organization}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Stats counter section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <motion.div variants={itemVariants} className="text-center">
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">10+</div>
            <div className="text-gray-700 dark:text-gray-300">Software Projects</div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-center">
            <div className="text-4xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">5+</div>
            <div className="text-gray-700 dark:text-gray-300">IoT Projects</div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-center">
            <div className="text-4xl font-bold text-accent-600 dark:text-accent-400 mb-2">3+</div>
            <div className="text-gray-700 dark:text-gray-300">Awards Won</div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-center">
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">2+</div>
            <div className="text-gray-700 dark:text-gray-300">Years Experience</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
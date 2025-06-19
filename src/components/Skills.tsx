import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkillBar from './SkillBar';
import { 
  Code, Database, Server, Monitor, Cpu, Wrench, GitBranch, Palette
} from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Monitor size={24} className="text-primary-500" />,
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'Talwind CSS', level: 80 },
        { name: 'Javascript', level: 70 },
        { name: 'React.js', level: 65 },
      ]
    },
    {
      title: 'Backend',
      icon: <Server size={24} className="text-secondary-500" />,
      skills: [
        { name: 'Python', level: 85 },
        { name: 'PHP', level: 70 },
        { name: 'Node.js', level: 80 },
        { name: 'c', level: 85 },
      ]
    },
    {
      title: 'Database',
      icon: <Database size={24} className="text-accent-500" />,
      skills: [
        { name: 'Firebase', level: 90 },
        { name: 'MongoDB', level: 75 },
      ]
    },
    {
      title: 'Embedded Systems',
      icon: <Cpu size={24} className="text-primary-500" />,
      skills: [
        { name: 'Arduino', level: 95 },
        { name: 'RaspBerry Pi', level: 90 },
        { name: 'ESP8266/ESP32', level: 90 },
        { name: 'Sensors Integration', level: 85 },
        { name: 'Circuit Design', level: 90 },
      ]
    },
    {
      title: 'Tools & IDEs',
      icon: <Wrench size={24} className="text-secondary-500" />,
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 80 },
        { name: 'MATLAB', level: 75 },
        { name: 'Arduino IDE', level: 95 },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-background relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-primary-100/50 dark:bg-primary-900/10 rounded-br-full"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary-100/50 dark:bg-secondary-900/10 rounded-tl-full"></div>
      
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
            <span className="text-primary-600 dark:text-primary-400 font-medium">My Skills</span>
            <span className="h-1 w-10 bg-primary-500 dark:bg-primary-400 rounded-full"></span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Technical Expertise
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            I've acquired a diverse skill set spanning web development, embedded systems, and IoT technologies.
            Here's a breakdown of my technical abilities:
          </motion.p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-dark-lighter rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-800"
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                    delay={skillIndex * 0.1}
                    inView={inView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        
      </div>
    </section>
  );
};

export default Skills;
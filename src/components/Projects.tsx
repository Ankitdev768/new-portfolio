import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Github, ExternalLink, Cpu, Info } from 'lucide-react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const softwareProjects = [
    {
      title: 'Jarvis Virtual Assistant',
      description: 'Python-based voice assistant using speech recognition',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Python', 'Speech Recognition', 'AI'],
      github: '#',
      demo: '#',
      type: 'software'
    },
    {
      title: 'Room Finder App',
      description: 'React.js app with Zomato-style UI for PG/Flat/Room search',
      image: 'https://images.pexels.com/photos/6969809/pexels-photo-6969809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['React.js', 'Firebase', 'Tailwind CSS'],
      github: '#',
      demo: '#',
      type: 'software'
    },
    {
      title: 'Emotion Tracker',
      description: 'Real-time facial emotion detector with feedback',
      image: 'https://images.pexels.com/photos/5910956/pexels-photo-5910956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Python', 'OpenCV', 'TensorFlow'],
      github: '#',
      demo: '#',
      type: 'software'
    },
    {
      title: 'Task Tracker App',
      description: 'To-do manager with Firebase backend',
      image: 'https://images.pexels.com/photos/6956353/pexels-photo-6956353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['React', 'Firebase', 'CRUD'],
      github: '#',
      demo: '#',
      type: 'software'
    },
    {
      title: 'Cafe Management Kiosk',
      description: 'PyWebview-based ordering interface',
      image: 'https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Python', 'PyWebview', 'SQLite'],
      github: '#',
      demo: '#',
      type: 'software'
    }
  ];

  const hardwareProjects = [
    {
      title: 'Smart Helmet',
      description: 'Alcohol detection (MQ-3), IR-based helmet lock, crash alerts via ESP8266, GPS + ESP32-CAM',
      image: 'https://images.pexels.com/photos/8566445/pexels-photo-8566445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['ESP8266', 'GPS', 'ESP32-CAM', 'MQ-3'],
      github: '#',
      demo: '#',
      type: 'hardware'
    },
    {
      title: 'Smart Waste Management',
      description: 'Ultrasonic level detection + Firebase dashboard',
      image: 'https://images.pexels.com/photos/4499270/pexels-photo-4499270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Arduino', 'Ultrasonic', 'Firebase'],
      github: '#',
      demo: '#',
      type: 'hardware'
    },
    {
      title: 'Home Automation',
      description: '4-channel relay with voice/Blynk app control (Arduino + HC-05)',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Arduino', 'HC-05', 'Relay', 'Blynk'],
      github: '#',
      demo: '#',
      type: 'hardware'
    },
    {
      title: 'Women Safety Device',
      description: 'ESP32-CAM emergency alert system with real-time location',
      image: 'https://images.pexels.com/photos/4545667/pexels-photo-4545667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['ESP32-CAM', 'GPS', 'GSM'],
      github: '#',
      demo: '#',
      type: 'hardware'
    },
    {
      title: 'Smart Light System',
      description: 'LDR-based ambient auto-lighting',
      image: 'https://images.pexels.com/photos/6636258/pexels-photo-6636258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Arduino', 'LDR', 'Relay'],
      github: '#',
      demo: '#',
      type: 'hardware'
    }
  ];

  const allProjects = [...softwareProjects, ...hardwareProjects];
  
  const filteredProjects = filter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.type === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-background">
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
            <span className="text-primary-600 dark:text-primary-400 font-medium">Projects</span>
            <span className="h-1 w-10 bg-primary-500 dark:bg-primary-400 rounded-full"></span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            My Latest Work
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10">
            Explore my software and hardware projects that showcase my skills in web development, embedded systems, and IoT technologies.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2 justify-center mb-12">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'all'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-dark-lighter dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('software')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${
                filter === 'software'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-dark-lighter dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
            >
              <Code size={14} />
              Software
            </button>
            <button
              onClick={() => setFilter('hardware')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${
                filter === 'hardware'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-dark-lighter dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
            >
              <Cpu size={14} />
              Hardware & IoT
            </button>
          </motion.div>
        </motion.div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 20 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
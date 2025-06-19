import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, ExternalLink, Award, Book, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const experiences = [
    {
      title: 'Inplant Training',
      company: 'Tool Room & Training Centre (TRTC)',
      location: 'Patna, Bihar',
      period: 'Oct 2024 – Nov 2024',
      description: [
        'Gained hands-on experience with PLC programming and industrial automation systems',
        'Worked with advanced CNC machines and industrial control systems',
        'Learned electronic circuit design and troubleshooting techniques'
      ],
      link: '#',
      linkText: 'View Certificate'
    },
    {
      title: 'Industrial Training & Internship on Embedded Systems',
      company: 'National Institute of Electronics & Information Technology (NIELIT)',
      location: 'Patna, Bihar',
      period: 'June 2025 – July 2025',
      description: [
        'Developed embedded systems applications using 8051 microcontroller and ARM processors',
        'Implemented real-time operating systems (RTOS) for embedded applications',
        'Designed and programmed interface circuits for various sensors and actuators',
        'Created firmware for microcontroller-based industrial control systems'
      ],
      link: '#',
      linkText: 'View Certificate'
    }
  ];

  const certifications = [
    {
      title: 'Multiple Certifications in Programming & Networking',
      organization: 'Cisco Networking Academy',
      period: '2023 – 2025',
      description: 'Completed a series of certifications including Python Essentials, C Programming, C++ Basics, Introduction to Cybersecurity, and Networking Basics.',
      link: 'https://drive.google.com/drive/folders/1FqLef535y_XXLmBto0AcfskS7IeJFx1e?usp=drive_link',
      linkText: 'View Certificates'
    },
    {
      title: 'Arduino Training Program',
      organization: 'Spoken Tutorial, IIT Bombay',
      period: '2025',
      description: 'Hands-on training on Arduino programming and interfacing through the Spoken Tutorial initiative. Covered basics of embedded systems and real-time project implementation.',
      link: 'https://drive.google.com/drive/folders/1zDyIVU8z1sJQgnYKuo9HFqPuz2JXpH1s?usp=drive_link',
      linkText: 'View Certificate'
    },
    
   
  ];

  const workshops = [
    {
      title: 'IEEE Nano Day Workshop',
      organization: 'IIT Patna',
      period: '2024',
      description: 'Nanotechnology applications in electronics'
    },
    {
      title: 'IoT Advanced Workshop',
      organization: 'Magrita Tech, Patna',
      period: '2025',
      description: 'Advanced IoT implementations and real-world applications'
    },
   
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-dark-background">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-4">
            <span className="h-1 w-10 bg-primary-500 dark:bg-primary-400 rounded-full"></span>
            <span className="text-primary-600 dark:text-primary-400 font-medium">Experience</span>
            <span className="h-1 w-10 bg-primary-500 dark:bg-primary-400 rounded-full"></span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            Professional Journey
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-gray-700 dark:text-gray-300 text-center mb-12">
            My career has been focused on building innovative solutions across software development and IoT systems.
          </motion.p>
          
          {/* Work Experience */}
          <motion.div variants={containerVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <Briefcase className="text-primary-500" />
              Work Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-50 dark:bg-dark-lighter rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h4>
                      <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mt-1">
                        <span className="text-sm">{exp.company}</span>
                        <span className="text-sm flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <span className="h-5 w-5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 flex items-center justify-center shrink-0 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href={exp.link}
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                  >
                    {exp.linkText}
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Certifications */}
          <motion.div variants={containerVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <Award className="text-secondary-500" />
              Certifications
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-50 dark:bg-dark-lighter rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800"
                >
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{cert.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{cert.organization}</p>
                  <p className="text-gray-700 dark:text-gray-300">{cert.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar size={14} />
                      <span>{cert.period}</span>
                    </div>
                    {cert.link && (
                      <a 
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm"
                      >
                        {cert.linkText}
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Workshops */}
          <motion.div variants={containerVariants}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <Book className="text-accent-500" />
              Workshops & Training
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workshops.map((workshop, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-50 dark:bg-dark-lighter rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800"
                >
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{workshop.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{workshop.organization}</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{workshop.description}</p>
                  <div className="flex items-center gap-2 mt-4 text-gray-500 dark:text-gray-400 text-sm">
                    <Calendar size={14} />
                    <span>{workshop.period}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
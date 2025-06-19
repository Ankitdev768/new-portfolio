import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar } from 'lucide-react';

const Education: React.FC = () => {
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

  const education = [
    {
      degree: 'Diploma in Electronics Engineering',
      institution: 'Govt. Polytechnic, Patna',
      period: '2023 – 2026',
      details: [
        { label: 'Roll No', value: '2023-EC-81' },
        { label: 'Semester', value: '4th' }
      ],
      description: 'Currently pursuing a diploma with a focus on electronics and embedded systems design.'
    },
    {
      degree: '10th Standard',
      institution: 'Central Board of Secondary Education',
      period: '2023',
      details: [
        { label: 'Percentage', value: '85%' }
      ],
      description: 'Completed secondary education with distinction in Science and Mathematics.'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-dark-background">
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
            <span className="text-primary-600 dark:text-primary-400 font-medium">Education</span>
            <span className="h-1 w-10 bg-primary-500 dark:bg-primary-400 rounded-full"></span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Academic Background
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12">
            My educational journey and academic achievements.
          </motion.p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto space-y-8"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-dark-lighter rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-800"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <GraduationCap size={24} className="text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                </div>
              </div>
              
              <div className="ml-2 pl-10 border-l-2 border-primary-100 dark:border-primary-900/30 space-y-4">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Calendar size={18} className="text-gray-500 dark:text-gray-400" />
                  <span>{edu.period}</span>
                </div>
                
                <div className="text-gray-700 dark:text-gray-300">
                  {edu.details.map((detail, i) => (
                    <p key={i} className="mb-2">
                      <strong>{detail.label}:</strong> {detail.value}
                    </p>
                  ))}
                </div>
                
                <div className="text-gray-700 dark:text-gray-300">
                  <p>{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
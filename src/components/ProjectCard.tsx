import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Info, X } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  type: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [showDetails, setShowDetails] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  const detailsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <>
      <motion.div
        variants={cardVariants}
        className="bg-white dark:bg-dark-lighter rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800 h-full flex flex-col"
      >
        <div className="relative overflow-hidden h-48">
          <img 
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-4 text-white">
              <div className="flex items-center gap-1 text-sm font-medium mb-1">
                {project.type === 'software' ? <span>💻</span> : <span>🔌</span>}
                <span className="capitalize">{project.type}</span>
              </div>
              <h3 className="text-xl font-bold">{project.title}</h3>
            </div>
          </div>
        </div>
        
        <div className="p-5 flex flex-col flex-grow">
          <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, tagIndex) => (
              <span 
                key={tagIndex}
                className="text-xs px-2 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-3 mt-auto">
            <a 
              href={project.github}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View GitHub repository"
            >
              <Github size={20} />
            </a>
            <a 
              href={project.demo}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View live demo"
            >
              <ExternalLink size={20} />
            </a>
            <button
              onClick={() => setShowDetails(true)}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors ml-auto"
              aria-label="View project details"
            >
              <Info size={20} />
            </button>
          </div>
        </div>
      </motion.div>
      
      {/* Project Details Modal */}
      {showDetails && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={() => setShowDetails(false)}
        >
          <motion.div
            variants={detailsVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white dark:bg-dark-lighter rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
              <button
                onClick={() => setShowDetails(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X size={24} />
              </button>
            </div>
            
            <img 
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Description</h4>
                <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-sm px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                <a 
                  href={project.github}
                  className="btn btn-primary flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} />
                  View Code
                </a>
                <a 
                  href={project.demo}
                  className="btn btn-outline flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default ProjectCard;
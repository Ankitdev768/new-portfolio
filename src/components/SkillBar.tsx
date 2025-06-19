import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
  inView: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, delay = 0, inView }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div 
          className="skill-progress"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
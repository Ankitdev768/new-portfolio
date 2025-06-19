import React from 'react';
import { Github, Linkedin, Instagram, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-2xl font-bold text-white mb-4">
              <span className="text-3xl">&lt;/&gt;</span>
              <span>Ankit Kumar</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Full-Stack Developer & Embedded Systems Specialist. Building innovative web and IoT solutions.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/ankitdev768" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/yourname" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://instagram.com/ankitkr.9771" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="block">Patna, Bihar</span>
                <span className="block">India</span>
              </li>
              <li>
                <a href="mailto:ak1522667@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  ak1522667@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Ankit Kumar. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a 
              href="#home"
              className="inline-flex items-center justify-center h-10 w-10 bg-gray-800 hover:bg-gray-700 rounded-full text-white transition-colors"
              aria-label="Back to top"
            >
              <ChevronUp size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
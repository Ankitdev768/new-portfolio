import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github as GitHub, Linkedin, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail size={20} className="text-primary-500" />,
      title: 'Email',
      value: 'ak1522667@gmail.com',
      link: 'mailto:ak1522667@gmail.com',
    },
    {
      icon: <MapPin size={20} className="text-primary-500" />,
      title: 'Location',
      value: 'Patna, Bihar, India',
      link: 'https://maps.google.com/?q=Patna,Bihar,India',
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <GitHub size={20} />,
      url: 'https://github.com/ankitdev768',
      color: 'bg-gray-800 hover:bg-gray-700',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://linkedin.com/in/yourname',
      color: 'bg-blue-700 hover:bg-blue-600',
    },
    {
      name: 'Instagram',
      icon: <Instagram size={20} />,
      url: 'https://instagram.com/ankitkr.9771',
      color: 'bg-pink-600 hover:bg-pink-500',
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-background relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 h-80 w-80 bg-primary-50/40 dark:bg-primary-900/10 rounded-bl-full -z-10"></div>
      <div className="absolute bottom-0 left-0 h-80 w-80 bg-secondary-50/40 dark:bg-secondary-900/10 rounded-tr-full -z-10"></div>
      
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
            <span className="text-primary-600 dark:text-primary-400 font-medium">Contact</span>
            <span className="h-1 w-10 bg-primary-500 dark:bg-primary-400 rounded-full"></span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Get In Touch
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </motion.p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-10"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-dark-lighter hover:bg-gray-100 dark:hover:bg-dark-background transition-colors"
                >
                  <div className="h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.title}</p>
                    <p className="font-medium text-gray-900 dark:text-white">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Follow Me</h3>
            
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} text-white p-3 rounded-full transition-transform hover:scale-110`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <div className="mt-10 p-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-pattern opacity-10"></div>
              <h3 className="text-xl font-bold mb-2 relative z-10">Let's work together!</h3>
              <p className="mb-4 relative z-10">Open for freelance projects and full-time opportunities.</p>
              <a href="mailto:ak1522667@gmail.com" className="inline-block bg-white text-primary-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors relative z-10">
                Say Hello
              </a>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="bg-white dark:bg-dark-lighter rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-background text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-background text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-background text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-500 focus:border-transparent resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
                
                {submitSuccess && (
                  <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-3 rounded-lg mt-4 text-center">
                    Message sent successfully!
                  </div>
                )}
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Server, Globe } from 'lucide-react';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { icon: Code2, label: "Backend Developer" },
    { icon: Server, label: "Front-end Developer" },
    { icon: Globe, label: "Deployment Services" },
  ];

  return (
    <div className="py-20 bg-black relative overflow-hidden" id="about">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="relative group flex justify-center md:justify-start">
            <motion.div
              className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-50 blur-lg group-hover:opacity-75 transition duration-1000 w-full max-w-sm sm:max-w-md md:max-w-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 0.5 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.div
              className="relative rounded-lg overflow-hidden w-full max-w-sm sm:max-w-md md:max-w-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://res.cloudinary.com/dikkjtvur/image/upload/v1736441418/Picsart_24-06-17_20-23-29-600_z9bso2.jpg"
                alt="Profile"
                className="object-cover w-full h-auto rounded-lg transform group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-50 blur-lg"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 0.5 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <div className="relative space-y-6 text-center md:text-left">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                About Me
              </motion.h2>
              
              <motion.p
                className="text-gray-300 leading-relaxed text-sm sm:text-base"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                I have project-backed experience in Django and SpringBoot and thrive to add more projects to my experience. I am also a good communicator and a teamworking leader. 
              </motion.p>
              
              <motion.p
                className="text-gray-300 leading-relaxed text-sm sm:text-base"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                I'm constantly learning and adapting to new technologies, ensuring that I stay at the forefront of web development trends and best practices.
              </motion.p>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
              >
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 rounded-lg bg-blue-600/10 hover:bg-blue-600/20 transition-colors duration-300"
                  >
                    <skill.icon className="w-8 h-8 text-blue-400 mb-2" />
                    <span className="text-xs sm:text-sm text-gray-300 text-center">{skill.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

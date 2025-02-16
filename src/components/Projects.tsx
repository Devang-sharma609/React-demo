import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { VscVscode } from 'react-icons/vsc';
import { PiFileHtml } from 'react-icons/pi';
import { DiDjango } from 'react-icons/di';
import { FaBus, FaPython, FaBootstrap, FaInstagram, FaReact, FaJsSquare } from 'react-icons/fa';
import { LuBrainCircuit } from 'react-icons/lu';
import { TbApi } from 'react-icons/tb';
import { IoLogoVercel } from 'react-icons/io5';

export const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "NavGo",
      description: "Contributed to a scalable Bus Tracking platform using SpringBoot, Node.js, PostgreSQL and deployed using Vercel",
      icon: FaBus,
      technologies: ["SpringBoot", "Node.js", "PostgreSQL", "Vercel"],
      gradient: "from-blue-500 via-black-400 to-blue-600",
      link: 'https://navgo-svvvbus.vercel.app/'
    },
    {
      title: "Automated Research and Trigger Finder",
      description: "Helped create a comprehensive analytics dashboard with data visualization",
      icon: LuBrainCircuit,
      technologies: ["Django-FastAPI", "Vercel", "React", "GoogleTrendsAPI",],
      gradient: "from-emerald-500 via-black-400 to-emerald-600",
      link: 'https://navgo-svvv.vercel.app/'
    },
    {
      title: "Social Media Engagement Tool",
      description: "Contributed to a tool to help social media influencers to engage with their audience",
      icon: FaInstagram,
      technologies: ["React", "DataStaxDB", "Django", "Vercel", "LangFlow"],
      gradient: "from-indigo-500 via-black-400 to-indigo-600",
      link: 'https://quant-ai.vercel.app'
    },
  ];

  const techStack = [
    { icon: FaPython, color: "text-[#3776AB]" },
    { icon: DiDjango, color: "text-[#092E20]" },
    { icon: FaBootstrap, color: "text-[#563D7C]" },
    { icon: FaReact, color: "text-[#61DAFB]" },
    { icon: PiFileHtml, color: "text-[#E34F26]" },
    { icon: FaJsSquare, color: "text-[#F7DF1E]" },
    { icon: VscVscode, color: "text-[#007ACC]" },
    { icon: TbApi, color: "text-[#6DB33F]" },
    { icon: IoLogoVercel, color: "text-[#000000]" }
  ];

  return (
    <div className="py-20 bg-black relative" id="projects">
      <div className="absolute inset-0 bg-black"></div>

      <div className="container mx-auto px-4 relative">
        <motion.h2
          className="pb-1 text-4xl font-bold text-center mb-10 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects & Skills
        </motion.h2>

        {/* Project Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 mx-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000`}
              />

              <div className="relative bg-gray-900 rounded-xl p-6 h-full border border-white/10 backdrop-blur-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-50`}>
                    <project.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300 select-text">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-4 line-clamp-2 select-text">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.gradient} bg-opacity-10 text-white select-text`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-black-700 transition"
                  >
                    Check it out
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Carousel */}
        <div className="relative overflow-hidden -mx-4">
          <div className="flex">
            <motion.div
              className="flex gap-12 py-8 px-4"
              animate={{
                x: [0, -2000]
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                  repeatDelay: 0
                }
              }}
            >
              {[...Array(6)].flatMap(() => techStack).map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center min-w-[120px]"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="w-16 h-16 flex items-center justify-center mb-3">
                    <tech.icon
                      className={`w-16 h-16 transition-all duration-300 ${hoveredIndex === index ? tech.color : "text-gray-400"}`}
                      style={{
                        transform: hoveredIndex === index ? "scale(1.5)" : "scale(1)",
                        transition: "transform 0.3s ease, color 0.3s ease"
                      }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
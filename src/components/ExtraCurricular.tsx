import React from 'react';
import { motion } from 'framer-motion';
import { Flag, Speech } from 'lucide-react';

export const ExtraCurricular = () => {
  const activities = [
    {
      title: "Public Speaking & Debate",
      description:
        "Active participant in collegiate debate competitions, developing strong argumentation and public speaking skills. Participated in debates and speech competitions since my first year, fostering critical thinking and effective communication abilities.",
      icon: Speech,
      image: "https://res.cloudinary.com/dikkjtvur/image/upload/v1737804619/0G4A2105_n78ysy.jpg",
      skills: ["Public Speaking", "Critical Thinking", "Argumentation"]
    },
    {
      title: "Managing Lead - Abhyudaya Coding Club",
      description:
        "Led a team of 50+ student developers, organizing workshops, hackathons, and coding competitions. Successfully coordinated multiple events that enhanced coding skills and promoted collaborative learning among peers.",
      icon: Flag,
      image: "https://res.cloudinary.com/dikkjtvur/image/upload/v1737805682/1729777451937_spzph5.jpg",
      skills: ["Leadership", "Event Management", "Team Coordination"]
    }
  ];

  return (
    <section className="py-16 bg-black" id="extracurricular">
      <div className="container mx-auto px-6 md:px-10">
        <motion.h2
          className="text-4xl font-bold text-white mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Extra-Curricular Activities
        </motion.h2>

        <div className="space-y-14">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col lg:flex-row gap-6 items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Image Section */}
              <div className="lg:w-1/2 relative group">
                <div className="overflow-hidden rounded-xl aspect-video">
                  <motion.img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>

              {/* Text Section */}
              <div className="lg:w-1/2 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-3">
                  <div className="p-3 bg-blue-600/20 rounded-xl">
                    <activity.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{activity.title}</h3>
                </div>
                <p className="text-gray-300 mb-5 leading-relaxed">{activity.description}</p>
                
                {/* Skills */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {activity.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-sky-500/20 text-sky-400 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Divider Line (Only between items) */}
              {index < activities.length - 1 && (
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

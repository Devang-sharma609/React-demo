import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

declare global {
  interface Window {
    instgrm: unknown;
  }
}

export const Contact = () => {
  useEffect(() => {
    // Load LinkedIn embed script
    const linkedInScript = document.createElement("script");
    linkedInScript.src = "https://platform.linkedin.com/badges/js/profile.js";
    linkedInScript.async = true;
    document.body.appendChild(linkedInScript);

    // Load Instagram embed script
    const instagramScript = document.createElement("script");
    instagramScript.src = "https://www.instagram.com/embed.js";
    instagramScript.async = true;
    instagramScript.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };
    document.body.appendChild(instagramScript);
  }, []);

  return (
    <div
      className="py-16 bg-black flex justify-center items-center"
      id="contact"
    >
      <div className="container mx-auto px-6 text-center max-w-5xl">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I'm always open to discussing new projects, creative ideas, or
          opportunities to collaborate.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center flex-wrap gap-6 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            {
              Icon: FiLinkedin,
              href: "https://www.linkedin.com/in/devang-sharma609/",
              label: "LinkedIn",
            },
            {
              Icon: FiMail,
              href: "https://mailto:devangscs2291@gmail.com",
              label: "Email",
            },
            {
              Icon: FiGithub,
              href: "https://github.com/Devang-sharma609/",
              label: "GitHub",
            },
          ].map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              className="text-gray-400 hover:text-blue-500 transition-transform transform duration-300 hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={36} />
              <span className="sr-only">{label}</span>
            </motion.a>
          ))}
        </motion.div>


        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          viewport={{ once: true }}
        >
          <div
            className="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="large"
            data-theme="dark"
            data-type="HORIZONTAL"
            data-vanity="devang-sharma609"
            data-version="v1"
          ></div>
        </motion.div>

        {/* Embedded Posts Container */}
        <div className="flex flex-wrap items-center justify-center gap-6 w-full px-4 mx-auto">
          {/* Embedded LinkedIn Post */}
          <div className="w-full md:w-[48%] p-4 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7243103370998149120"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
                title="Embedded LinkedIn Post"
              ></iframe>
            </div>
          </div>

          {/* Embedded Instagram Post */}
          <div className="w-full md:w-[48%] p-4 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
              <blockquote
                className="instagram-media absolute top-0 left-0 w-full h-full"
                data-instgrm-permalink="https://www.instagram.com/reel/DAJTwNIo5T9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                data-instgrm-version="16"
              ></blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import HeroImage from "../assets/my.png"; // Replace with your image path

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <div
      ref={ref}
      className="min-h-screen flex items-center bg-gradient-to-r from-black via-[#341212] to-red-800 px-4 py-16"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-2xl mb-4 text-gray-300 uppercase tracking-wide">
              Welcome to my world
            </h3>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight text-white">
              Hi, I'm <span className="text-primary">Christian</span>
              <br />
              <span className="text-3xl md:text-4xl block mt-2">a Software Developer</span>
            </h1>
            <p className="text-gray-300 mb-8 text-lg md:text-xl leading-relaxed max-w-lg">
              I create stunning web applications and deliver exceptional digital experiences with precision and creativity.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex space-x-6 mb-8">
              {[{
                href: "https://github.com/your-username",
                icon: <FaGithub />,
              }, {
                href: "https://linkedin.com/in/your-username",
                icon: <FaLinkedin />,
              }, {
                href: "https://facebook.com/your-username",
                icon: <FaFacebook />,
              }].map(({ href, icon }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-white hover:text-primary"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-primary text-white text-lg font-semibold rounded-full hover:bg-[#d4003f] transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <img
              src={HeroImage}
              alt="Developer Illustration"
              className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full shadow-2xl object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero;

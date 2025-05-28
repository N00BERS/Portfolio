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
      className="min-h-screen flex items-center bg-gradient-to-r from-black via-[#341212] to-red-800 px-8 py-32 relative"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* LEFT TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-3xl mb-6 text-gray-300 tracking-widest uppercase">
              Welcome to my world
            </h3>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-10 leading-tight text-white">
              Hi, I'm <span className="text-primary">Christian</span>
              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl block mt-4">a Software Developer</span>
            </h1>
            <p className="text-gray-300 mb-10 text-xl md:text-2xl leading-relaxed max-w-xl">
              I create stunning web applications and deliver exceptional digital experiences with precision and creativity.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex space-x-8 mb-12">
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
                  className="text-4xl text-white hover:text-primary"
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block px-10 py-5 bg-primary text-white text-xl font-semibold rounded-full hover:bg-[#d4003f] transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full flex justify-center"
          >
            <img
              src={HeroImage}
              alt="Developer Illustration"
              className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full shadow-2xl object-cover transition-transform duration-500 transform hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

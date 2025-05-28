import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1f1f1f] py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-3xl font-extrabold transition-transform duration-300 hover:scale-105">
            Chris<span className="text-primary">tian</span>
          </a>
          <div className="hidden md:flex space-x-10 text-lg">
            {['Home', 'About', 'Projects', 'Contact'].map((item, idx) => (
              <a
                key={idx}
                href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                className="text-white hover:text-primary transition duration-300 transform hover:scale-105"
              >
                {item}
              </a>
            ))}
          </div>
          <a 
            href="#contact"
            className="hidden md:inline-block px-6 py-2 text-lg bg-primary text-white font-medium hover:bg-[#d4003f] transition-colors transform hover:scale-105"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

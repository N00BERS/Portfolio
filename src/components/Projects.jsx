import React from 'react';
import { motion } from 'framer-motion';

import Project1 from '../assets/Cook.png';
import Project2 from '../assets/Cook.png';
import Project3 from '../assets/Cook.png';

const projects = [
  {
    id: 1,
    name: 'Cooktrition Facts',
    category: 'Machine Learning',
    image: Project1,
    link: 'https://www.facebook.com/christian.rama.986',
  },
  {
    id: 2,
    name: 'Portfolio Website',
    category: 'Web Development',
    image: Project2,
    link: '#',
  },
  {
    id: 3,
    name: 'E-commerce Platform',
    category: 'Web Development',
    image: Project3,
    link: '#',
  },
];

const Projects = () => {
  return (
    <div
      className="min-h-screen flex items-center bg-gradient-to-r from-black via-[#341212] to-red-800 px-6 py-20"
      id="project"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white">
            My Latest <span className="text-primary">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="group relative overflow-hidden rounded-xl border border-gray-800 bg-[#111111] hover:bg-[#1a1a1a] transition duration-300 shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-[240px] object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center p-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{project.name}</h3>
                    <p className="text-sm text-white mb-4">{project.category}</p>
                    <a
                      href={project.link}
                      className="inline-block px-4 py-2 border border-white text-white text-sm font-medium hover:bg-white hover:text-primary transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import { motion } from "framer-motion";
import AboutImage from "../assets/about.png";

const skills = [
  { name: "Development", level: 90 },
  { name: "Design", level: 75 },
  { name: "Problem Solving", level: 85 },
  { name: "Communication", level: 80 },
];

const About = () => {
  return (
    <div
      className="min-h-screen flex items-center bg-gradient-to-l from-red-800 via-[#341212] to-black px-6 py-20"
      id="about"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT IMAGE */}
            <div className="flex justify-center">
              <motion.img
                src={AboutImage}
                alt="About"
                className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full object-cover shadow-2xl transition-transform duration-500 hover:scale-105 hover:rotate-1 hover:shadow-[0_0_30px_rgba(255,0,85,0.4)]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Software Developer</h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-xl">
                I specialize in creating innovative digital solutions with a focus on user experience and performance.
                With expertise in modern web technologies, I bring ideas to life through clean, efficient code.
              </p>

              {/* SKILLS */}
              <div className="space-y-8 mb-12">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="transition-transform duration-300 hover:scale-[1.03] hover:bg-[#222] p-3 rounded"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-white text-base font-medium">{skill.name}</span>
                      <span className="text-primary text-base font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-700 rounded overflow-hidden">
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* EXPERIENCE STATS */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {[
                  { count: "3+", label: "Years Experience" },
                  { count: "5+", label: "Projects Completed" },
                  { count: "2+", label: "Technologies" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-center transition-transform duration-300 hover:scale-105 hover:brightness-110"
                  >
                    <h4 className="text-4xl md:text-5xl font-extrabold text-primary mb-1">
                      {item.count}
                    </h4>
                    <p className="text-gray-300 text-base font-medium">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

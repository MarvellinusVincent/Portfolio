import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { profile_2 } from '../assets'

const About = () => {
  return (
    <section 
      id="about"
      className="relative w-full h-screen snap-start scroll-mt-20 z-0 py-20"
    >
      <div className={`relative max-w-5xl mx-auto z-10 px-6`}>
        <motion.div variants={textVariant()} className="mb-6">
          <p className="text-[#d08770] font-mono text-sm mb-4">About Me</p>
          <h2 className="text-[#2d3748] text-4xl sm:text-5xl font-bold mb-6">Background</h2>
          <div className="w-20 h-px bg-[#4a5568]/30" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <motion.p 
              variants={fadeIn('', '', 0.1, 1)} 
              className="text-[#1a202c] text-lg leading-relaxed"
            >
              My journey into computer science began unexpectedly during my sophomore year. 
              Initially focused on business, an online coding class revealed a new realm of 
              possibilities that became my true passion.
            </motion.p>

            <motion.p 
              variants={fadeIn('', '', 0.3, 1)} 
              className="text-[#1a202c] text-lg leading-relaxed"
            >
              Currently, I'm actively seeking software engineering opportunities to apply my skills and grow in the field. 
              Alongside this, I'm working on projects that combine beautiful design with solid engineering, 
              creating software that's visually appealing yet robust under the hood.
            </motion.p>
            
            <motion.p 
              variants={fadeIn('', '', 0.4, 1)} 
              className="text-[#1a202c] text-lg leading-relaxed"
            >
              Here are some of the technologies I've been exploring and working with lately:
            </motion.p>
            <motion.div 
              variants={fadeIn('', '', 0.5, 1)}
              className="mt-6"
            >
              <ul className="grid grid-cols-2 gap-3">
                {[
                  'React',
                  'Node.js',
                  'Spring Boot',
                  'PostgreSQL',
                  'Python',
                  'Java',
                  'JavaScript',
                  'Kotlin & Swift'
                ].map((tech, index) => (
                  <motion.li 
                    key={tech}
                    custom={index}
                    initial="hidden"
                    animate="show"
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: (i) => ({
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.1 + i * 0.05 }
                      })
                    }}
                    className="flex items-start text-[#1a202c]"
                  >
                    <span className="text-[#d08770] mr-3">▹</span>
                    {tech}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <motion.div
            variants={fadeIn('left', 'spring', 0.5, 0.75)}
            className="relative group flex justify-center md:justify-end"
            whileHover={{
              y: -5,
              transition: { type: "spring", stiffness: 300, damping: 10 }
            }}
          >
            <div className="relative w-[400px] h-[400px]">
              <motion.div 
                className="absolute inset-0 z-10 border-2 border-[#d08770]/50 rounded-lg overflow-hidden group-hover:border-[#d08770] transition-all duration-300"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <img
                  src={profile_2}
                  alt="Profile"
                  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
              <motion.div 
                className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#4a5568]/20 rounded-lg group-hover:border-[#4a5568]/40 transition-all duration-500"
                whileHover={{
                  x: -3,
                  y: -3,
                  transition: { duration: 0.3 }
                }}
              />
              <motion.div 
                className="absolute -inset-2 bg-[#d08770]/10 rounded-lg opacity-0 group-hover:opacity-100 blur-md transition-all duration-500"
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.4 }
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
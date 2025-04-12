import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { experiences } from '../constants';
import { download } from '../assets';
import Button from '../utils/Button';

const Experience = () => {
  return (
    <section 
      id="experience"
      className="relative w-full min-h-screen snap-start scroll-mt-20 z-0 py-20"
    >
      <div className="relative max-w-5xl mx-auto px-6 z-10">
        <motion.div variants={textVariant()} className="mb-16">
          <p className="text-[#d08770] font-mono text-sm mb-4">Some Things I've Done</p>
          <h2 className="text-[#2d3748] text-4xl sm:text-5xl font-bold mb-6">Experience</h2>
          <div className="w-20 h-px bg-[#4a5568]/30" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 h-full w-0.5 bg-[#d08770]/20 transform -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
                className="relative group pl-10 md:pl-0"
                whileHover={{
                  y: -3, // Slight upward lift
                  transition: { 
                    type: "spring",
                    stiffness: 300,
                    damping: 10
                  }
                }}
              >

                <div className={`absolute top-2 left-[22px] md:left-1/2 w-3 h-3 rounded-full bg-[#d08770] transform -translate-x-1/2 z-20 border-2 border-white`} />
                <div className={`${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="relative">
                    <motion.div 
                      className="relative z-10 p-6 bg-white rounded-lg border-2 border-[#d08770]/50 overflow-hidden transition-all duration-300 group-hover:border-[#d08770]"
                      whileHover={{
                        scale: 1.01,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                        <div className={`${index % 2 === 0 ? '' : 'md:order-2'}`}>
                          <p className="text-[#d08770] font-mono text-xs mb-1">{experience.date}</p>
                          <h3 className="text-[#222] text-xl font-bold">{experience.title}</h3>
                          <p className="text-[#666]">{experience.company_name}</p>
                        </div>
                        <div className={`w-12 h-12 rounded-full bg-white border border-[#ddd] shadow-sm flex items-center justify-center p-2 ${index % 2 === 0 ? '' : 'md:order-1'}`}>
                          <img 
                            src={experience.icon} 
                            alt={experience.company_name} 
                            className="w-full h-full object-contain" 
                          />
                        </div>
                      </div>

                      <ul className={`text-[#555] text-sm space-y-2 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                        {(experience.description || ['No details provided']).map((point, i) => (
                          <li key={i} className="flex">
                            {index % 2 === 0 ? (
                              <>
                                <span className="text-[#5e81ac] mr-2 flex items-center">▹</span>
                                <span className="flex-1">{point}</span>
                              </>
                            ) : (
                              <>
                                <span className="flex-1">{point}</span>
                                <span className="text-[#5e81ac] ml-2 flex items-center">◃</span>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div 
                      className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#4a5568]/20 rounded-lg group-hover:border-[#4a5568]/40 transition-all duration-500"
                      whileHover={{
                        x: -2,
                        y: -2,
                        transition: { duration: 0.3 }
                      }}
                    />
                    
                    <motion.div 
                      className="absolute -inset-2 bg-[#d08770]/10 rounded-lg opacity-0 group-hover:opacity-100 blur-md transition-all duration-500"
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.4 }
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          variants={fadeIn('up', 'spring', experiences.length * 0.1, 0.75)}
          className="mt-20 text-center"
        >
          <Button
            onClick={() => window.open(
              'https://marvellinus-vincent-resume.netlify.app/Resume.pdf',
              '_blank'
            )}
            icon={download}
          >
            Open Resume
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
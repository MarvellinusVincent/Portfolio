import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { githubBlack, linkedInBlack } from '../assets';
import Button from '../utils/Button';

const Hero = () => {
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingComplete(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const TypingCursor = () => (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ repeat: Infinity, duration: 0.8, repeatType: 'reverse' }}
      className="inline-block w-2 h-6 bg-[#555] ml-1"
    />
  );

  return (
    <section 
      id="home"
      className="relative w-full h-screen scroll-mt-20 z-0 py-20"
    >
      <motion.div 
        className={`absolute inset-0 max-w-6xl mx-auto flex flex-col justify-center z-10 px-6`}
      >
        <div className="space-y-6">
          <div className="h-6">
            <AnimatePresence>
              {!typingComplete ? (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-[#d08770] font-mono text-lg inline-flex items-center"
                >
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: 'auto' }}
                    transition={{ duration: 0.8 }}
                  >
                    Hi, my name is
                  </motion.span>
                  <TypingCursor />
                </motion.p>
              ) : (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-[#d08770] font-mono text-lg"
                >
                  Hi, my name is
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-[#2d3748] text-6xl sm:text-7xl font-bold mt-2 leading-tight"
          >
            Marvellinus Vincent.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="block text-[#4a5568] text-3xl sm:text-4xl font-normal mt-2"
          >
            {"Aspiring Full-Stack Developer".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.03 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[#1a202c] max-w-lg mt-6 space-y-4"
          >
            <p className="text-lg">
              I'm a recent computer science graduate specializing in Software Engineering and Information Systems
            </p>
            <p className="text-lg">
              Passionate about clean code, beautiful design, robust backend systems, and always eager to gain new experiences
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <Button 
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }}
              >
                View my work
              </Button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <a href="#about" className="block group">
          <div className="flex flex-col items-center">
            <motion.div
              className="w-4 h-4 border-2 border-[#444] rounded-full mb-2"
              animate={{
                y: [0, 8, 0],
                borderColor: ['#444', '#666', '#444']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              }}
            />
            <div className="text-[#666] font-mono text-xs">Scroll down</div>
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
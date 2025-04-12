import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { send, githubBlack, linkedInBlack } from '../assets';
import Button from '../utils/Button';

const Contact = () => {
  return (
    <section 
      id="contact"
      className="relative w-full h-auto min-h-[70vh] sm:min-h-[75vh] snap-start scroll-mt-20 z-0 py-12 sm:py-16 flex flex-col items-center justify-center px-4 sm:px-6"
    >
      <div className="relative max-w-lg mx-auto z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12"
        >
          <p className="text-[#d08770] font-mono text-xs sm:text-sm mb-2 sm:mb-4">Thinking of reaching out?</p>
          <h2 className="text-[#2d3748] text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Let's connect!</h2>
          <div className="w-12 sm:w-16 h-px bg-[#555]/30 mx-auto mb-3 sm:mb-4" />
          <p className="text-[#555] text-base sm:text-lg leading-relaxed">
            I'm currently looking for software engineering opportunities. Feel free to get in touch if you think I'd be a great fit!
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 'spring', 0.2, 1)}
          className="flex flex-col items-center space-y-4 sm:space-y-6"
        >
          <div className="w-full flex justify-center">
            <Button 
              href="mailto:vmarvellinus@gmail.com"
              icon={send}
              className="flex justify-center items-center w-full sm:w-auto px-8"
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
              Email Me
            </Button>
          </div>

          <div className="flex space-x-6 pt-2">
            <motion.a
              href="https://github.com/marvellinusvincent"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-[#4a5568] hover:text-[#2d3748] transition-colors"
            >
              <img src={githubBlack} alt="GitHub" className="w-6 h-6 sm:w-7 sm:h-7" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/marvellinusvincent"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-[#4a5568] hover:text-[#2d3748] transition-colors"
            >
              <img src={linkedInBlack} alt="LinkedIn" className="w-6 h-6 sm:w-7 sm:h-7" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
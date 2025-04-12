import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { send } from '../assets';
import Button from '../utils/Button';

const Contact = () => {
  return (
    <section 
      id="contact"
      className="relative w-full h-auto min-h-[75vh] snap-start scroll-mt-20 z-0 py-12 flex flex-col items-center justify-center"
    >
      <div className="relative max-w-lg mx-auto px-6 z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-[#d08770] font-mono text-sm mb-4">Thinking of reaching out?</p>
          <h2 className="text-[#2d3748] text-4xl sm:text-5xl font-bold mb-6">Let’s connect!</h2>
          <div className="w-16 h-px bg-[#555]/30 mx-auto mb-4" />
          <p className="text-[#555] text-lg">
            I'm currently looking for software engineering opportunities. Feel free to get in touch if you think I'd be a great fit!
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 'spring', 0.2, 1)}
          className="flex justify-center"
        >
          <Button 
            href="mailto:vmarvellinus@gmail.com"
            icon={send}
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
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
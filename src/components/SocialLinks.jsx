import { motion } from 'framer-motion';
import { githubBlack, linkedInBlack } from '../assets';

const SocialLinks = () => {
  return (
    <>
      <motion.div 
        className="hidden md:flex flex-col items-center fixed left-8 bottom-0 space-y-4 z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        {[
          { icon: githubBlack, url: "https://github.com/MarvellinusVincent", alt: "GitHub" },
          { icon: linkedInBlack, url: "https://www.linkedin.com/in/marvellinusvincent/", alt: "LinkedIn" }
        ].map((social) => (
          <motion.a 
            key={social.alt}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="block z-30 cursor-pointer"
          >
            <img 
              src={social.icon} 
              alt={social.alt} 
              className="w-5 h-5 opacity-60 hover:opacity-100 transition-all" 
            />
          </motion.a>
        ))}
        <motion.div 
          className="w-px h-24 bg-[#999]"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        />
      </motion.div>

      <motion.div 
        className="hidden md:flex flex-col items-center fixed right-8 bottom-0 z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <motion.a 
          href="mailto:vmarvellinus@gmail.com"
          className="text-[#666] font-mono text-sm hover:text-[#444] transition-colors duration-300 writing-vertical-rl mb-6"
          whileHover={{ y: -4 }}
        >
          vmarvellinus@gmail.com
        </motion.a>
        <motion.div 
          className="w-px h-24 bg-[#999]"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        />
      </motion.div>
    </>
  );
};

export default SocialLinks;
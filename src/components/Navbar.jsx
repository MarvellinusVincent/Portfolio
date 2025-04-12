import { motion, useAnimation } from 'framer-motion';
import { logo } from '../assets';
import { useState } from 'react';

const Navbar = ({ scrollDirection }) => {
  const [active, setActive] = useState('home');
  const [hoveredLink, setHoveredLink] = useState(null);
  const controls = useAnimation();
  
  const navLinks = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'projects', title: 'Projects' },
    { id: 'experience', title: 'Experience' },
    { id: 'contact', title: 'Contact' },
  ];

  const scrollTo = (id) => {
    setActive(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const logoVariants = {
    rest: {
      y: 0,
      transition: { type: "spring", stiffness: 500, damping: 15 }
    },
    hover: {
      y: [0, -2, 0],
      transition: {
        duration: 0.2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    },
    runaway: {
      x: [0, -300],
      y: [0, -10, 5, -5, 0],
      opacity: [1, 0.8, 0],
      transition: {
        duration: 0.8,
        ease: [0.3, 0.1, 0.3, 1]
      }
    },
    reset: {
      x: [
        50,  
        50,  
        50,  
        50,  
        50,  
        50,  
        0    
      ],
      rotate: [
        0,    
        -12,  
        -12,  
        0,    
        12,   
        0,    
        0     
      ],
      opacity: [
        0,    
        0.5,  
        0.5,  
        0.5,  
        0.5,  
        0.5,  
        1     
      ],
      transition: {
        duration: 3.5,
        ease: [0.2, 0.8, 0.4, 1],
        times: [0, 0.15, 0.35, 0.45, 0.65, 0.75, 1]
      }
    }
  };

  const handleHoverStart = () => {
    controls.start("hover");
  };

  const handleHoverEnd = () => {
    controls.start("rest");
  };

  const handleClick = () => {
    controls.start("runaway").then(() => {
      controls.start("reset");
    });
    scrollTo('home');
  };

  return (
    <motion.nav 
      className="fixed w-full z-50 bg-[#e8e2d6]/90 backdrop-blur-sm"
      initial={{ y: 0 }}
      animate={{ 
        y: scrollDirection === 'down' ? -70 : 0,
        transition: { type: 'spring', damping: 25, stiffness: 200 }
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          className="flex items-center cursor-pointer w-10 h-10"
          onClick={handleClick}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
        >
          <motion.img 
            src={logo} 
            alt="Logo" 
            className="w-full h-full object-contain"
            initial="rest"
            animate={controls}
            variants={logoVariants}
          />
        </motion.div>

        <ul className="list-none hidden sm:flex flex-row gap-8 items-center">
          {navLinks.slice(1).map((nav) => (
            <motion.li
              key={nav.id}
              className={`relative ${
                active === nav.id ? 'text-[#1a202c]' : 'text-[#4a5568]'
              } hover:text-[#1a202c] text-[14px] font-mono cursor-pointer transition-colors duration-300`}
              onMouseEnter={() => setHoveredLink(nav.id)}
              onMouseLeave={() => setHoveredLink(null)}
              onClick={() => scrollTo(nav.id)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <a>{nav.title}</a>
              <motion.div
                className="absolute bottom-0 left-0 h-px bg-[#222]"
                initial={{ width: 0 }}
                animate={{ 
                  width: hoveredLink === nav.id || active === nav.id ? '100%' : 0 
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
import { inject } from '@vercel/analytics';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Projects,
  OtherProjects,
  Footer,
  SocialLinks
} from './components';
import Background from './utils/Background';

const App = () => {
  inject();
  const containerRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState('up');
  const lastScrollY = useRef(0);
  const { scrollYProgress } = useScroll({
    container: containerRef,
    smooth: 0.05
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const currentScrollY = latest * window.innerHeight * 7;
    if (currentScrollY > lastScrollY.current && currentScrollY > 10) {
      setScrollDirection('down');
    } else if (currentScrollY < lastScrollY.current) {
      setScrollDirection('up');
    }
    lastScrollY.current = currentScrollY;
  });
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const totalPages = 9;

  return (
    <div className="relative">
      <Navbar scrollDirection={scrollDirection} />
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 origin-left z-50"
        style={{ 
          scaleX,
          backgroundColor: "#d08770"
        }}
      />
      
      <Background containerRef={containerRef} totalPages={totalPages} />
      
      <SocialLinks />
      
      <main 
        ref={containerRef}
        className="h-screen overflow-y-auto relative"
        style={{ scrollBehavior: 'smooth' }}
      >
        <Hero />
        <About />
        <Projects />
        <OtherProjects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
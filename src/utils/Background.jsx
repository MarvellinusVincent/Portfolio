import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const Background = ({ containerRef, totalPages }) => {
  const [lines, setLines] = useState([]);
  const viewportHeight = useRef(0);
  const totalHeight = useRef(0);
  const linesContainerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      viewportHeight.current = window.innerHeight;
      totalHeight.current = viewportHeight.current * totalPages;
      generateLines();
    }

    const handleResize = () => {
      viewportHeight.current = window.innerHeight;
      totalHeight.current = viewportHeight.current * totalPages;
      generateLines();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [totalPages]);

  useEffect(() => {
    console.log('Framer Motion features available:', {
      motion: !!motion,
      useScroll: !!useScroll,
      useTransform: !!useTransform
    });
  }, []);

  const generateLines = () => {
    const newLines = [];
    const lineCount = Math.floor(totalHeight.current / 50);
    
    for (let i = 0; i < lineCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const length = 30 + Math.random() * 70;
      const width = 0.5 + Math.random() * 2;
      const x = Math.random() * 100;
      const y = Math.random() * totalHeight.current;
      const opacity = 0.1 + Math.random() * 0.2;

      newLines.push({
        angle,
        length,
        width,
        x,
        y,
        color: `rgba(106, 106, 106, ${opacity})`,
        id: `line-${i}-${Math.random().toString(36).substr(2, 9)}`
      });
    }
    
    setLines(newLines);
  };

  const { scrollY } = useScroll({
    container: containerRef,
    smooth: 0.1
  });


  const yOffset = useTransform(
    scrollY,
    [0, totalHeight.current],
    [0, -totalHeight.current * 0.5]
  );

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[#f9f6f0]" />
      
      <motion.div 
        ref={linesContainerRef}
        className="absolute inset-0 w-full"
        style={{
          height: `${totalHeight.current}px`,
          y: yOffset,
          willChange: 'transform'
        }}
      >
        <svg 
          width="100%" 
          height="100%" 
          preserveAspectRatio="none"
          style={{ 
            position: 'absolute',
            shapeRendering: 'auto',
            vectorEffect: 'non-scaling-stroke'
          }}
        >
          {lines.map((line) => (
            <line
              key={line.id}
              x1={`${line.x}%`}
              y1={`${line.y}px`}
              x2={`${line.x + Math.cos(line.angle) * line.length}%`}
              y2={`${line.y + Math.sin(line.angle) * line.length}px`}
              stroke={line.color}
              strokeWidth={line.width}
              strokeLinecap="round"
            />
          ))}
        </svg>
      </motion.div>
    </div>
  );
};

export default Background;
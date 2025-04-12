import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

const Background = ({ containerRef, totalPages }) => {
  const [viewportHeight, setViewportHeight] = useState(0);
  
  const { scrollY } = useScroll({
    container: containerRef,
    smooth: 0.1
  });

  const lines = useMemo(() => {
    const totalHeight = viewportHeight * totalPages;
    if (!totalHeight) return [];
    
    const newLines = [];
    const lineCount = Math.floor(totalHeight / 100);
    
    for (let i = 0; i < lineCount; i++) {
      const angleGroup = Math.random() * Math.PI * 2;
      const length = 20 + Math.random() * 60;
      const width = 0.5 + Math.random() * 3;
      const x = Math.random() * 100;
      const y = Math.random() * totalHeight;
      const opacity = 0.2 + Math.random() * 0.1;

      const colorVariations = [
        `rgba(106, 106, 106, ${opacity})`,
        `rgba(168, 132, 112, ${opacity * 1.2})`,
        `rgba(74, 85, 104, ${opacity * 0.8})`
      ];
      
      newLines.push({
        angle: angleGroup,
        length,
        width,
        x,
        y,
        opacity,
        color: colorVariations[Math.floor(Math.random() * colorVariations.length)]
      });
    }
    return newLines;
  }, [viewportHeight, totalPages]);

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [totalPages]);

  const yOffset = useTransform(
    scrollY,
    [0, viewportHeight * totalPages],
    [0, -viewportHeight * totalPages]
  );

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[#f9f6f0]" />
      
      <motion.div 
        className="absolute inset-0 w-full"
        style={{
          height: `${viewportHeight * totalPages}px`,
          y: yOffset,
          willChange: 'transform'
        }}
      >
        <svg 
          width="100%" 
          height="100%" 
          style={{ 
            position: 'absolute',
            shapeRendering: 'optimizeSpeed',
            vectorEffect: 'non-scaling-stroke'
          }}
        >
          {lines.map((line, index) => (
            <line
              key={index}
              x1={`${line.x}%`}
              y1={`${line.y}px`}
              x2={`${line.x + Math.cos(line.angle) * line.length}%`}
              y2={`${line.y + Math.sin(line.angle) * line.length}px`}
              stroke={line.color}
              strokeWidth={line.width}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>
      </motion.div>
    </div>
  );
};

export default Background;
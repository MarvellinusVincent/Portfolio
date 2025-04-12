import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Background = ({ containerRef, totalPages }) => {
  const lines = useRef(null);
  const viewportHeight = useRef(0);
  const initialized = useRef(false);

  const { scrollY } = useScroll({
    container: containerRef,
    smooth: 0.1
  });

  if (!initialized.current) {
    viewportHeight.current = typeof window !== 'undefined' ? window.innerHeight : 0;
    const totalHeight = viewportHeight.current * totalPages;
    const lineCount = Math.floor(totalHeight / 100);
    
    lines.current = Array.from({ length: lineCount }).map((_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const length = 20 + Math.random() * 60;
      const width = 0.5 + Math.random() * 3;
      const x = Math.random() * 100;
      const y = Math.random() * totalHeight;
      const opacity = 0.2 + Math.random() * 0.1;

      return {
        angle,
        length,
        width,
        x,
        y,
        color: `rgba(106, 106, 106, ${opacity})`,
        id: `line-${i}-${performance.now()}`
      };
    });

    initialized.current = true;
  }

  useEffect(() => {
    const handleResize = () => {
      viewportHeight.current = window.innerHeight;
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const yOffset = useTransform(
    scrollY,
    [0, viewportHeight.current * totalPages],
    [0, -viewportHeight.current * totalPages]
  );

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[#f9f6f0]" />
      
      <motion.div 
        className="absolute inset-0 w-full"
        style={{
          height: `${viewportHeight.current * totalPages}px`,
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
          {lines.current?.map((line) => (
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
import { motion } from 'framer-motion';
import React from 'react';

const Button = ({ 
  children, 
  icon, 
  href, 
  className = '',
  onClick, 
  ...props 
}) => {
  const handleClick = (e) => {
    if (href?.startsWith('mailto:')) {
      e.preventDefault();
      window.location.href = href;
    }
    onClick?.(e);
  };
  const Component = href ? motion.a : motion.button;
  
  return (
    <Component
      href={href}
      onClick={handleClick}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`inline-flex items-center gap-2 w-fit text-[#9b2c2c] font-mono text-sm border border-[#d08770] rounded-lg px-6 py-4 cursor-pointer ${className}`}
      whileHover={{
        y: -3,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{
        y: 1,
        transition: { duration: 0.1 }
      }}
      {...props}
    >
      <motion.span
        className="inline-block"
        animate={{
          x: [0, 3, -2, 1, 0],
          transition: {
            duration: 0.7,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror"
          }
        }}
        whileHover={{
          x: 0,
          transition: { duration: 0.2 }
        }}
      >
        {children}
      </motion.span>
      
      {icon && (
        <motion.img 
          src={icon} 
          className="w-5 h-5" 
          alt="" 
          animate={{
            rotate: [0, 8, -6, 0],
            transition: { 
              duration: 0.8,
              repeat: Infinity,
              repeatType: "mirror"
            }
          }}
        />
      )}
    </Component>
  );
};

export default Button;
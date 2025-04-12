import React from 'react';

const Footer = () => {
  return (
    <div className="snap-start h-auto flex items-center justify-center px-4 pb-12">
      <footer className="w-full max-w-2xl mx-auto text-center">
        <p className="font-mono text-xs sm:text-sm text-[#4a5568] leading-relaxed">
          Crafted with{' '}
          <a
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d08770] hover:underline"
          >
            React
          </a>
          ,{' '}
          <a
            href="https://vitejs.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d08770] hover:underline"
          >
            Vite
          </a>{' '}
          and{' '}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d08770] hover:underline"
          >
            Tailwind CSS
          </a>
          <br />
          Animated with{' '}
          <a
            href="https://www.framer.com/motion/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d08770] hover:underline"
          >
            Framer Motion
          </a>{' '}
          · Deployed on{' '}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d08770] hover:underline"
          >
            Vercel
          </a>
          <br />
          Type set in{' '}
          <a
            href="https://fonts.google.com/specimen/Poppins"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d08770] hover:underline"
          >
            Poppins
          </a>{' '}
          · Developed in{' '}
          <a
            href="https://code.visualstudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d08770] hover:underline"
          >
            VS Code
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
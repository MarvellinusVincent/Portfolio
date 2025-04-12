import React from 'react';

const Footer = () => {
  return (
    <div id="footer" className="snap-start h-auto px-6 py-8 sm:py-12">
      <footer className="max-w-2xl mx-auto text-center">
        <div className="flex flex-col space-y-2 sm:space-y-0 sm:block">
          <p className="font-mono text-xs sm:text-sm text-[#4a5568]">
            Built with{' '}
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="text-[#d08770] hover:underline">
              React
            </a>
            ,{' '}
            <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer" className="text-[#d08770] hover:underline">
              Vite
            </a>{' '}
            and{' '}
            <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-[#d08770] hover:underline">
              Tailwind CSS
            </a>
          </p>
          
          <p className="font-mono text-xs sm:text-sm text-[#4a5568]">
            Animated with{' '}
            <a href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer" className="text-[#d08770] hover:underline">
              Framer Motion
            </a>{' '}
            · Deployed on{' '}
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#d08770] hover:underline">
              Vercel
            </a>
          </p>
          
          <p className="font-mono text-xs sm:text-sm text-[#4a5568]">
            Type set in{' '}
            <a href="https://fonts.google.com/specimen/Poppins" target="_blank" rel="noopener noreferrer" className="text-[#d08770] hover:underline">
              Poppins
            </a>{' '}
            · Developed in{' '}
            <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer" className="text-[#d08770] hover:underline">
              VS Code
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
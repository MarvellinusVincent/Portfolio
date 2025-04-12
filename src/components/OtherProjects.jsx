import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { githubBlack } from '../assets';
import { otherProjects } from '../constants';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';

const OtherProjectCard = ({ 
  name, 
  description, 
  tags, 
  repo, 
  demo,
  link 
}) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      whileHover={{ 
        y: -4,
        transition: { 
          type: "tween",
          ease: "easeOut",
          duration: 0.15 
        }
      }}
      className="relative group h-full"
    >
      <div 
        onClick={() => window.open(link, '_blank')}
        className="block h-full cursor-pointer"
      >
        <div className="h-full flex flex-col bg-white rounded-xl overflow-hidden border border-[#ddd]/30 shadow-sm hover:shadow-md transition-all duration-200 hover:border-[#d08770]/50">
          <div className="p-6 pb-0">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-lg bg-[#d08770]/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#d08770]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              <div className="flex space-x-2" onClick={(e) => e.stopPropagation()}>
                {demo && (
                  <a 
                    href={demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#4a5568] hover:text-[#d08770] transition-colors duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
                <a 
                  href={repo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#4a5568] hover:text-[#d08770] transition-colors duration-200"
                >
                  <img src={githubBlack} alt="GitHub" className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-[#2d3748] mb-3 group-hover:text-[#d08770] transition-colors duration-200">{name}</h3>
          </div>
          
          <div className="p-6 pt-0 flex-grow">
            <p className="text-[#4a5568] mb-6 leading-relaxed">{description}</p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {tags.map((tag) => (
                <span 
                  key={tag.name} 
                  className="text-xs px-3 py-1 rounded-full bg-[#f5f5f5] text-[#4a5568] font-mono transition-colors duration-200"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d08770]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </div>
      </div>
    </motion.div>
  );
};

const OtherProjects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const projectsPerLoad = 3;
  const initialCount = 3;

  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + projectsPerLoad);
  };

  const showLessProjects = () => {
    setVisibleProjects(initialCount);
  };

  const hasMoreProjects = visibleProjects < otherProjects.length;
  const isShowingAll = visibleProjects >= otherProjects.length;

  const projectCards = useMemo(() => (
    otherProjects.slice(0, visibleProjects).map((project, index) => (
      <OtherProjectCard
        key={`other-project-${index}`}
        {...project}
      />
    ))
  ), [visibleProjects]);

  return (
    <section
      id="otherProjects"
      className="relative w-full snap-start scroll-mt-20 z-0 py-20"
    >
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <motion.div 
          variants={textVariant()} 
          className="mb-16 text-center"
        >
          <p className="text-[#d08770] font-mono text-sm mb-4">Beyond the Highlights</p>
          <h2 className="text-[#2d3748] text-4xl sm:text-5xl font-bold mb-4">A Few More Builds</h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#4a5568]/30 to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectCards}
        </div>
        
        {(hasMoreProjects || isShowingAll) && (
          <div className="text-center mt-16">
            <button
              onClick={hasMoreProjects ? loadMoreProjects : showLessProjects}
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white border border-[#ddd] text-[#2d3748] hover:border-[#d08770] hover:text-[#d08770] shadow-sm hover:shadow-md transition-all duration-200 group"
            >
              <span>
                {hasMoreProjects ? 'Show More Projects' : 'Show Less'}
              </span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 ml-2 transition-transform ${hasMoreProjects ? '' : 'rotate-180'}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default OtherProjects;
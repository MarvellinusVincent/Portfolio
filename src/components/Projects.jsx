import React from 'react';
import { motion } from 'framer-motion';
import { githubBlack } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ 
  name, 
  description, 
  tags, 
  image, 
  repo, 
  demo,
  link,
  index 
}) => {
  const isOdd = index % 2 !== 0;
  
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
      className="relative my-8 sm:my-12 md:my-16 lg:my-24 max-w-6xl mx-auto"
    >
      <div className="relative z-0">
        {/* Mobile layout */}
        <div className="block md:hidden">
          {/* Image */}
          <div className="w-full">
            <a 
              href={demo || link || repo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative h-[250px] sm:h-[300px] w-full overflow-hidden rounded-lg border border-[#ddd]/50 shadow-lg block"
            >
              <img
                src={image}
                alt={name}
                className="absolute h-full w-full object-cover transition-all duration-300 group-hover:opacity-100 opacity-90"
              />
              <div className="absolute inset-0 bg-[#f9f6f0]/70 transition-all duration-300 group-hover:opacity-0" />
            </a>
          </div>

          {/* Content */}
          <div className="mt-6">
            <div className="text-left">
              <p className="text-[#d08770] font-mono text-xs sm:text-sm mb-1 sm:mb-2">Featured Project</p>
              <h3 className="text-[#2d3748] text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                <a href={link || demo || repo} target="_blank" rel="noopener noreferrer" className="hover:text-[#d08770] transition-colors">
                  {name}
                </a>
              </h3>
            </div>

            {/* Description box */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg mb-4 z-10">
              <div className="text-[#4a5568] text-sm sm:text-base text-left">
                {typeof description === 'string' ? (
                  <p>{description}</p>
                ) : (
                  <p>
                    {description.text}
                    {description.links.map((linkItem, i) => (
                      <React.Fragment key={i}>
                        <a 
                          href={linkItem.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#d08770] hover:underline"
                        >
                          {linkItem.text}
                        </a>
                        {i < description.links.length - 1 ? ', ' : ''}
                      </React.Fragment>
                    ))}
                  </p>
                )}
              </div>
            </div>

            {/* Tags and links */}
            <div className="text-left">
              <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                {tags.map((tag) => (
                  <span 
                    key={tag.name} 
                    className="text-xs px-2 sm:px-3 py-1 rounded-full bg-[#444]/10 text-[#4a5568] font-mono"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 sm:gap-4">
                {demo && (
                  <a href={demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 sm:gap-2 text-[#2d3748] hover:text-[#1a202c] transition-colors text-sm sm:text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 sm:w-5 h-4 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>Demo</span>
                  </a>
                )}
                <a href={repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 sm:gap-2 text-[#2d3748] hover:text-[#1a202c] transition-colors text-sm sm:text-base">
                  <img src={githubBlack} alt="GitHub" className="w-4 sm:w-5 h-4 sm:h-5" />
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:block">
          <div className={`flex ${isOdd ? 'md:justify-end' : 'md:justify-start'}`}>
            {/* Image */}
            <div className="w-full md:w-[55%]">
              {demo ? (
                <a href={demo} target="_blank" rel="noopener noreferrer" className="group relative h-[350px] lg:h-[400px] w-full overflow-hidden rounded-lg border border-[#ddd]/50 shadow-lg block">
                  <img
                    src={image}
                    alt={name}
                    className="absolute h-full w-full object-cover transition-all duration-300 group-hover:opacity-100 opacity-90"
                  />
                  <div className="absolute inset-0 bg-[#f9f6f0]/70 transition-all duration-300 group-hover:opacity-0" />
                </a>
              ) : (
                <div className="group relative h-[350px] lg:h-[400px] w-full overflow-hidden rounded-lg border border-[#ddd]/50 shadow-lg">
                  <img
                    src={image}
                    alt={name}
                    className="absolute h-full w-full object-cover transition-all duration-300 group-hover:opacity-100 opacity-90"
                  />
                  <div className="absolute inset-0 bg-[#f9f6f0]/70 transition-all duration-300 group-hover:opacity-0" />
                </div>
              )}
            </div>
          </div>

          {/* Content container */}
          <div className={`mt-6 md:mt-0 md:absolute md:top-0 md:h-full md:w-[55%] flex items-center ${
            isOdd ? 'md:left-0 md:justify-start' : 'md:right-0 md:justify-end'
          }`}>
            <div className={`w-full ${isOdd ? 'md:pr-8 lg:pr-12' : 'md:pl-8 lg:pl-12'}`}>
              {/* Project title */}
              <div className={`${isOdd ? 'text-left' : 'text-right'}`}>
                <p className="text-[#d08770] font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-[#2d3748] text-2xl lg:text-3xl font-bold mb-4">
                  <a href={link || demo || repo} target="_blank" rel="noopener noreferrer" className="hover:text-[#d08770] transition-colors">
                    {name}
                  </a>
                </h3>
              </div>

              {/* White description box */}
              <div className={`bg-white p-6 rounded-lg shadow-lg mb-4 z-10 ${
                isOdd ? 'mr-0' : 'ml-0'
              }`}>
                <div className={`text-[#4a5568] ${isOdd ? 'text-left' : 'text-right'}`}>
                  {typeof description === 'string' ? (
                    <p>{description}</p>
                  ) : (
                    <p>
                      {description.text}
                      {description.links.map((linkItem, i) => (
                        <React.Fragment key={i}>
                          <a 
                            href={linkItem.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#d08770] hover:underline"
                          >
                            {linkItem.text}
                          </a>
                          {i < description.links.length - 1 ? ', ' : ''}
                        </React.Fragment>
                      ))}
                    </p>
                  )}
                </div>
              </div>

              {/* Tags and links */}
              <div className={`${isOdd ? 'text-left' : 'text-right'}`}>
                <div className={`flex flex-wrap gap-2 mb-4 ${isOdd ? '' : 'justify-end'}`}>
                  {tags.map((tag) => (
                    <span 
                      key={tag.name} 
                      className="text-xs px-3 py-1 rounded-full bg-[#444]/10 text-[#4a5568] font-mono"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>

                <div className={`flex gap-4 ${isOdd ? '' : 'justify-end'}`}>
                  {demo && (
                    <a href={demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#2d3748] hover:text-[#1a202c] transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>Live Demo</span>
                    </a>
                  )}
                  <a href={repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#2d3748] hover:text-[#1a202c] transition-colors">
                    <img src={githubBlack} alt="GitHub" className="w-5 h-5" />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full min-h-screen snap-start scroll-mt-20 z-0 py-12 sm:py-16 md:py-20 px-4 sm:px-6"
    >
      <div className="relative max-w-6xl mx-auto z-10">
        <motion.div variants={textVariant()} className="mb-8 sm:mb-12 md:mb-16">
          <p className="text-[#d08770] font-mono text-xs sm:text-sm mb-2 sm:mb-4">Some Things I've Built</p>
          <h2 className="text-[#2d3748] text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Projects</h2>
          <div className="w-16 sm:w-20 h-px bg-[#4a5568]/30" />
        </motion.div>

        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
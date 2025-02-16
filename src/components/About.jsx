import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        My journey into the world of computer science began from an unexpected detour during the end of my sophomore year. 
        Initially focusing on business, an online coding class opened my eyes to a whole new realm of possibilities. 
        From that moment on, I knew where my true passion lay
      </motion.p>

      <motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        Since embracing computer science as my second major in the summer of 2022, I've been on a journey of exploration and growth. 
        I've delved into various forms of development, from the development backend systems to the creative frontiers of user interface design. 
        From building web applications to mastering full-stack development and creating user friendly mobile experiences, 
        I've enjoyed tackling every process of it
      </motion.p>

      <motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        My main focus these days is continuing my search for job opportunities as an recent international student graduate while building side 
        projects that reflect my interest and skills. Currently, my goal is to create softwares that reside at the intersection of design 
        and engineering - things that look good but are also built well under the hood
      </motion.p>

      <motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        When I'm not glued to my computer screen, you can usually find me in the gym working out, playing sports, experimenting with new 
        recipes, or just kicking back and enjoying my favorite movies and shows
      </motion.p>


      <div className="mt-20 flex flex-wrap gap-40">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');

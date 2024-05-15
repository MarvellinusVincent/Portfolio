import {
  frontend,
  backend,
  mobileappdevelopment,
  python,
  java,
  javascript,
  django,
  reactjs,
  springboot,
  sql,
  git,
  kotlin,
  docker,
  postgresql,
  nosql,
  r,
  swift,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  iu,
  okanemo,
  self
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'tech',
    title: 'Technologies',
  },  
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'work',
    title: 'Experience',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Mobile App Developer',
    icon: mobileappdevelopment,
  }
];

const technologies = [
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Swift',
    icon: swift,
  },
  {
    name: 'Kotlin',
    icon: kotlin,
  },
  {
    name: 'SpringBoot',
    icon: springboot,
  },  
  {
    name: 'Django',
    icon: django,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'SQL',
    icon: sql,
  },
  {
    name: 'nosql',
    icon: nosql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'R',
    icon: r,
  },
];

const experiences = [
  {
    title: 'Business Development Intern',
    company_name: 'OKANEMO',
    icon: okanemo,
    iconBg: '#333333',
    date: 'June 2021 - August 2021',
  },
  {
    title: 'Supervisor',
    company_name: 'IU Dining',
    icon: iu,
    iconBg: '#333333',
    date: 'Aug 2021 - Aug 2023',
  },
  {
    title: 'Coding Tutor',
    company_name: 'Self',
    icon: self,
    iconBg: '#333333',
    date: 'Dec 2022 - Dec 2023',
  },
  {
    title: 'Data Mining Teaching Assistant',
    company_name: 'Indiana University',
    icon: iu,
    iconBg: '#333333',
    date: 'Jan 2024 - May 2024',
  },
  {
    title: 'Mobile App Development Teaching Assistant',
    company_name: 'Indiana University',
    icon: iu,
    iconBg: '#333333',
    date: 'Aug 2024 - Present',
  },
  {
    title: 'Math Teaching Assistant',
    company_name: 'Indiana University',
    icon: iu,
    iconBg: '#333333',
    date: 'Aug 2024 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Spotify Profile',
    description: 'A visually appealing personalized spotify data to view your top artists, top tracks, recently played tracks, and detailed audio information about each track',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Chess',
    description:
      'An iOS chess app that allows you to play singleplayer and multiplayer with a friend near you',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Wellness Tracking System',
    description: `A comprehensive Wellness Tracking System catering to fitness enthusiasts' needs, offering personalized workout plans, diet recommendations, and mindfulness exercises`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Patient Insurance Management System',
    description: 'A digital system designed to manage patient health information and insurance details aimed at improving healthcare management and accessibility',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
];

export { services, technologies, experiences, projects };

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
  statspot,
  chess,
  health,
  notes,
  iu,
  okanemo,
  self,
  rateMyUniversity
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
    title: 'Mobile App Development Associate Instructor',
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
    name: 'Rate My University',
    description: 'A web application designed to help students share their experiences at university. Users can rate various aspects of university life, such as campus facilities, classes, and social activities, and see how others have rated them',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'postgresql',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind, svg',
        color: 'pink-text-gradient',
      },
    ],
    image: rateMyUniversity,
    repo: 'https://github.com/MarvellinusVincent/ratemystudentlife',
    demo: 'https://ratemyuniversity.io',
  },
  {
    id: 'project-2',
    name: 'Spotify Profile',
    description: 'Stat Spot is a sleek web application that lets users track and analyze their Spotify listening habits. See github for credentials',
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
    image: statspot,
    repo: 'https://github.com/MarvellinusVincent/SpotiStats',
    demo: 'https://spotifystattrack.vercel.app',
  },
  {
    id: 'project-3',
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
    image: chess,
    repo: 'https://github.com/MarvellinusVincent/Chess-iOS',
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
    image: health,
    repo: 'https://github.com/orgs/Team-3-Patient-and-Insurance-Management/repositories',
    demo: 'https://frontend-1-hmaf.onrender.com',
  },
  {
    id: 'project-5',
    name: 'Notes',
    description: `A simple android notes app utilizing authentication for secure login and allows users to add, delete, and update their notes`,
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
    image: notes,
    repo: 'https://github.com/MarvellinusVincent/Notes',
  },
];

export { services, technologies, experiences, projects };

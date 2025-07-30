import {
  statspot,
  chess,
  health,
  notes,
  iu,
  okanemo,
  self,
  rateMyUniversity,
  vscodetheme
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
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

const experiences = [
  {
    title: 'Research Assistant',
    company_name: 'Indiana University',
    icon: iu,
    iconBg: '#333333',
    description: [
      'Developed Python scripts (OCR, text cleaning, OpenAI integration) to process 2,900+ scam-related images and videos, extracting and classifying text with Mistral-7B and Llama-2 via Ollama and LM Studio, improving dataset usability for NLP tasks',
      'Built a BERT-based multi-label classifier (PyTorch) to automate detection of psychological pressure tactics in scam posts, including data preprocessing, model training, and performance evaluation',
      'Collaborated on a codebook for annotation guidelines, refining definitions through literature review and analyzing 300+ posts to standardize labeling for pressure tactics and audience targeting'
    ],
    date: 'February 2024 - Present',
  },
  {
    title: 'Mobile App Development Associate Instructor',
    company_name: 'Indiana University',
    icon: iu,
    iconBg: '#333333',
    description: [
      'Assisted 30 students with mobile app development projects using Android Studio and Kotlin',
      'Conducted code walkthroughs to demonstrate how to solve common issues and optimize app performance',
      'Guided students through debugging processes and taught them how to use Android Studio’s debugging tools'
    ],
    date: 'Aug 2024 - December 2024',
  },
  {
    title: 'Math Teaching Assistant',
    company_name: 'Indiana University',
    icon: iu,
    iconBg: '#333333',
    description: [
      'Assisted students in understanding Finite Mathematics, Calculus I, and Calculus II'
    ],
    date: 'Aug 2024 - Present',
  },
  {
    title: 'Data Mining Teaching Assistant',
    company_name: 'Indiana University',
    icon: iu,
    iconBg: '#333333',
    description: [
      'Provided personalized guidance on data mining concepts, algorithms, and methodologies'
    ],
    date: 'Jan 2024 - May 2024',
  },
  {
    title: 'Coding Tutor',
    company_name: 'Self',
    icon: self,
    iconBg: '#333333',
    description: [
      'Taught foundational programming concepts including variables, loops, conditionals, and functions using Python and some Java',
      'Helped students understand core computer science principles such as data structures, algorithms, and object-oriented programming',
      'Evaluated student progress and provided feedback to support improvement and growth'
    ],
    date: 'Dec 2022 - Dec 2023',
  },
  {
    title: 'Supervisor',
    company_name: 'IU Dining',
    icon: iu,
    iconBg: '#333333',
    description: [
      'Supervised a team of over 100 service staff at the library eatery, ensuring excellent service for more than 1,000 customers daily',
      'Managed daily operations for 20 hours per week and collaborated with the general manager to improve efficiency, productivity, and cleanliness'
    ],
    date: 'Aug 2021 - Aug 2023',
  },
  {
    title: 'Business Development Intern',
    company_name: 'OKANEMO',
    icon: okanemo,
    iconBg: '#333333',
    description: [
      'Researched and presented insights on Binance Smart Chain and Binance Chain to executives to support the strategic planning of a new IT venture in the cryptocurrency sector'
    ],
    date: 'June 2021 - August 2021',
  }
];

const projects = [
  {
    id: 'project-1',
    name: 'Rate My University',
    link: 'http://ratemyuniversity.io',
    description: 'Rate My University is a dynamic web application that empowers students to share and explore university life experiences. From campus vibes to classroom quality, students can rate and compare various aspects of their university life — helping others make informed decisions',
    tags: [
      {
        name: 'React',
      },
      {
        name: 'Node.js',
      },
      {
        name: 'PostgreSQL',
      },
      {
        name: 'Tailwind',
      },
      {
        name: 'SVG',
      },
      {
        name: 'Vercel',
      },
      {
        name: 'Render',
      },
    ],
    image: rateMyUniversity,
    repo: 'https://github.com/MarvellinusVincent/ratemystudentlife',
    demo: 'http://ratemyuniversity.io',
  },
  {
    id: 'project-2',
    name: 'Arctic Depth Theme',
    link: 'https://arcticdepthshowcase.vercel.app',
    description: {
      text: 'A sleek, high-contrast dark blue theme designed for developers using VS Code who love rich blues and a futuristic aesthetic. Available on ',
      links: [
        {
          text: 'Visual Studio Marketplace',
          url: 'https://marketplace.visualstudio.com/items?itemName=MarvellinusVincent.arctic-depth'
        },
        {
          text: 'JetBrains',
          url: 'https://plugins.jetbrains.com/plugin/27074-arcticdepth'
        },
        {
          text: 'Zed',
          url: 'https://zed.dev/extensions/arctic-depth'
        },
        {
          text: 'npm',
          url: 'https://www.npmjs.com/package/arctic-depth'
        }
      ]
    },
    tags: [
      {
        name: 'VS Code',
      },
      {
        name: 'JetBrains',
      },
      {
        name: 'Zed',
      },
      {
        name: 'npm',
      },
    ],
    image: vscodetheme,
    repo: 'https://github.com/MarvellinusVincent/ArcticDepthShowcase',
    demo: 'https://arcticdepthshowcase.vercel.app',
  },
  {
    id: 'project-3',
    name: 'Spotify Stats',
    link: 'http://spotifystattrack.vercel.app',
    description: {
      text: 'Stat Spot is a web application that lets users track and analyze their Spotify listening habits. Dive deep into your top artists, tracks, and genres across different time ranges and discover insights about your unique musical taste. While awaiting Spotify extension approval, you can preview the app using the credentials provided on ',
      links: [
        {
          text: 'Github',
          url: 'https://github.com/MarvellinusVincent/SpotiStats'
        }
      ]
    },
    githubNote: 'https://github.com/MarvellinusVincent/SpotiStats',
    tags: [
      {
        name: 'React',
      },
      {
        name: 'JavaScript',
      },
      {
        name: 'Node.js',
      },
      {
        name: 'Spotify API',
      },
      {
        name: 'Vercel',
      },
    ],
    image: statspot,
    repo: 'https://github.com/MarvellinusVincent/SpotiStats',
    demo: 'http://spotifystattrack.vercel.app',
  },

];

const otherProjects = [
  {
    id: 'project-1',
    name: 'Patient Insurance Management System',
    link: 'https://frontend-1-hmaf.onrender.com',
    description: 'A digital system designed to manage patient health information and insurance details aimed at improving healthcare management and accessibility',
    tags: [
      {
        name: 'Java',
      },
      {
        name: 'SpringBoot',
      },
      {
        name: 'JavaScript',
      },
      {
        name: 'React',
      },
      {
        name: 'Firebase',
      },
      {
        name: 'Render',
      },
      {
        name: 'Docker',
      },
      {
        name: 'Twilio',
      },
    ],
    repo: 'https://github.com/orgs/Team-3-Patient-and-Insurance-Management/repositories',
    demo: 'https://frontend-1-hmaf.onrender.com',
  },
  {
    id: 'project-2',
    name: 'Chess',
    link: 'https://github.com/MarvellinusVincent/Chess-iOS',
    description: 'A user-friendly chess application for iOS that supports both Single Player (vs AI) and Pass & Play modes',
    tags: [
      {
        name: 'Swift',
      },
      {
        name: 'Xcode',
      },
      {
        name: 'iOS',
      },
      {
        name: 'UIKit',
      }
    ],
    repo: 'https://github.com/MarvellinusVincent/Chess-iOS',
  },
  {
    id: 'project-3',
    name: 'Pokemon Showdown',
    link: 'https://github.com/MarvellinusVincent/Intro_To_AI_FinalProject',
    description: 'A Pokémon battle AI project that features bots of varying complexity, designed to compete against online players using strategies like max damage, minimax, and reinforcement learning',
    tags: [
      {
        name: 'Python',
      },
      {
        name: 'Poke-env',
      },
      {
        name: 'Miximax',
      },
      {
        name: 'Reinforcement Learning',
      },
      
    ],
    repo: 'https://github.com/MarvellinusVincent/Intro_To_AI_FinalProject',
  },
  {
    id: 'project-4',
    name: 'Notes',
    link: 'https://github.com/MarvellinusVincent/Notes',
    description: 'An intuitive Android notes app built with Kotlin in Android Studio, designed for fast and simple note-taking with a clean user interface',
    tags: [
      {
        name: 'Kotlin',
      },
      {
        name: 'Jetpack',
      },
      {
        name: 'Android SDK',
      },
      {
        name: 'Firebase',
      },
      {
        name: 'Gradle',
      }
    ],
    repo: 'https://github.com/MarvellinusVincent/Notes',
  }
];

export { experiences, projects, otherProjects };

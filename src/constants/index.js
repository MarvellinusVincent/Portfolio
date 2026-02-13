import {
  statspot,
  chess,
  health,
  notes,
  iu,
  okanemo,
  self,
  moodmosaic,
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
      'Engineered scalable Python pipelines integrating OCR, text cleaning, and OpenAI APIs to process 2,900+ scam-related images and videos, extracting and classifying content using Mistral-7B and Llama-2 via Ollama and LM Studio to enhance dataset usability for NLP research',
      'Trained a BERT-based multi-label classification model in PyTorch to automate detection of psychological pressure tactics in scam posts, implementing end-to-end data preprocessing, model training, and performance evaluation workflows',
      'Led collaborative development of standardized annotation framework, conducting comprehensive literature review and analyzing 500+ posts to establish robust labeling guidelines for pressure tactics and audience targeting'
    ],
    date: 'February 2025 - December 2025',
  },
  {
    title: 'Mobile App Development Associate Instructor',
    company_name: 'Indiana University',
    icon: iu,
    iconBg: '#333333',
    description: [
      'Mentored 30 students in Android development using Kotlin and Android Studio, providing technical guidance on mobile app architecture, performance optimization, and debugging methodologies',
      'Conducted live code walkthroughs demonstrating systematic problem-solving approaches and best practices for resolving common development challenges'

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
    date: 'Aug 2024 - December 2024',
  },
  {
    title: 'Data Mining Teaching Assistant',
    company_name: 'Indiana University',
    icon: iu,
    iconBg: '#333333',
    description: [
      'Provided personalized guidance to students on data mining concepts, algorithms, and methodologies, fostering their understanding and problem-solving skills'
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
    name: 'MoodMosaic',
    link: 'https://play.google.com/store/apps/details?id=com.moodmosaic&hl=en',
    description: 'MoodMosaic is a mental wellness mobile application that helps users track and understand their emotional patterns. Built with React Native and Firebase, it provides cloud-based mood tracking with real-time synchronization and interactive data visualizations to identify trends in mental wellness over time',
    tags: [
      {
        name: 'React Native',
      },
      {
        name: 'Firebase',
      },
      {
        name: 'Cloudflare R2',
      },
      {
        name: 'JavaScript',
      },
      {
        name: 'Cloud Storage',
      },
    ],
    image: moodmosaic,
    repo: 'https://github.com/MarvellinusVincent/MoodMosaic',
    demo: 'https://play.google.com/store/apps/details?id=com.moodmosaic&hl=en',
  },
  {
    id: 'project-2',
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
    name: 'Arctic Depth Theme',
    link: 'https://arcticdepthshowcase.vercel.app',
    description: 'A sleek, high-contrast dark blue theme designed for developers using VS Code who love rich blues and a futuristic aesthetic. Available on Visual Studio Marketplace, JetBrains, Zed, and npm.',
    tags: [
      { name: 'VS Code' },
      { name: 'JetBrains' },
      { name: 'Zed' },
      { name: 'npm' },
    ],
    repo: 'https://github.com/MarvellinusVincent/ArcticDepthShowcase',
    demo: 'https://arcticdepthshowcase.vercel.app',
  },
  {
    id: 'project-2',
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
    id: 'project-3',
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
    id: 'project-4',
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
    id: 'project-5',
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

/**
 * Central portfolio data.
 * Edit this file to update every section of the site.
 * Replace the placeholder URLs (marked with TODO) with your real links.
 */

export interface NavItem {
  label: string
  href: string
}

export interface Project {
  title: string
  description: string
  tech: string[]
  image: string
  github: string
  demo: string
}

export interface Experience {
  role: string
  period: string
  responsibilities: string[]
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface Achievement {
  label: string
  value: string
}

export interface SocialLink {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'leetcode' | 'instagram' | 'mail'
}

export const site = {
  name: 'Priyanshu Tiwari',
  role: 'Software Engineer',
  // TODO: replace with your deployed domain
  url: 'https://priyanshutiwari.vercel.app',
  email: 'priyanshuganeshtiwari@gmail.com', // TODO: replace with your email
  location: 'Mumbai, India',
  resume: '/resume.pdf',
  profileImage: '/profile.png',
  tagline:
    'Software Engineer specializing in Java backend development — building scalable, high-quality enterprise software.',
}

export const nav: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Beyond Coding', href: '#beyond-coding' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const about = {
  intro:
    'Software Engineer specializing in Java backend development with experience in Spring Boot, REST APIs, cloud technologies, and scalable application development.',
  paragraphs: [
    'Started with MERN Stack development before transitioning into enterprise Java development.',
    'Passionate about backend engineering, AI applications, problem solving, and building high-quality software.',
  ],
  currentlyWorkingWith: [
    'Java',
    'Spring Boot',
    'REST APIs',
    'AWS',
    'Docker',
    'Kubernetes',
    'React',
    'CommerceTools',
    'Git',
  ],
}

export const experiences: Experience[] = [
  {
    role: 'Software Engineer',
    period: 'October 2025 — Present',
    responsibilities: [
      'Develop backend services using Java and Spring Boot.',
      'Build REST APIs.',
      'Work on enterprise POS applications.',
      'Contribute to frontend development when required.',
      'Develop backend services for Website Profile Service.',
      'Collaborate with cross-functional teams.',
    ],
  },
]

export const technicalBackground = {
  intro: 'Before joining as a Software Engineer I focused on:',
  items: [
    'MERN Stack Development',
    'Data Structures & Algorithms using Python',
    'Full Stack Web Development',
    'REST API Development',
    'AI-powered applications',
  ],
}

export const skills: SkillGroup[] = [
  {
    category: 'Programming Languages',
    items: ['Java', 'Python', 'JavaScript', 'SQL'],
  },
  {
    category: 'Backend',
    items: ['Spring Boot', 'Node.js', 'Express.js', 'Flask', 'REST APIs'],
  },
  {
    category: 'Frontend',
    items: ['React', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    category: 'Database',
    items: ['MySQL', 'MongoDB'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'Kubernetes'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Postman', 'CommerceTools'],
  },
]

export const projects: Project[] = [
  {
    title: 'ConversAI — Personalized Virtual Assistant',
    description:
      'An AI-powered virtual assistant with real-time conversations, speech-to-text and text-to-speech, intelligent actions, and context-aware responses.',
    tech: ['MERN', 'Google Gemini API', 'Speech-to-Text', 'Text-to-Speech'],
    image: '/projects/conversai.svg',
    github: 'https://github.com/priyanshutiwari09/AI-Assistant', // TODO
    demo: '#', // TODO: add live demo URL
  },
  {
    title: 'Real-Time Cross-Language Messenger',
    description:
      'A real-time messaging platform with automatic translation between languages and a fully responsive interface, powered by Socket.IO.',
    tech: ['MERN Stack', 'Socket.IO', 'Real-time', 'Auto Translation'],
    image: '/projects/messenger.svg',
    github: 'https://github.com/priyanshutiwari09/Chat-App-Mern', // TODO
    demo: '#', // TODO: add live demo URL
  },
  {
    title: 'Intelligent News Platform',
    description:
      'A news platform with AI-generated summaries, role-based authentication, text-to-speech, and REST APIs built on the MERN stack with OpenAI integration.',
    tech: ['MERN Stack', 'OpenAI', 'REST APIs', 'Role-based Auth'],
    image: '/projects/news.svg',
    github: 'https://github.com/priyanshutiwari09/news-portal', // TODO
    demo: '#', // TODO: add live demo URL
  },
  {
    title: 'AI Follow-up Email Agent',
    description:
      'An agent that sends automatic follow-up emails with configurable intervals and multiple follow-up attempts. Python backend with a React frontend.',
    tech: ['Python', 'React', 'Grok API', 'Automation'],
    image: '/projects/email-agent.svg',
    github: 'https://github.com/priyanshutiwari09/AI-Assistant', // TODO
    demo: '#', // TODO: add live demo URL
  },
]

export const achievements: Achievement[] = [
  { label: 'LeetCode problems solved', value: '300+' },
  { label: 'Acceptance rate', value: '63%' },
  { label: 'Badge earned', value: '100 Days' },
  { label: 'Badge earned', value: '50 Days' },
]

export const beyondCoding = {
  handle: '@mumbaiinlast24hrs',
  followers: '215K+',
  image: '/instagram.png',
  description:
    'Beyond software engineering, I manage @mumbaiinlast24hrs, a Mumbai-focused Instagram news platform with 215K+ followers. I’m also part of a broader news network that includes @indiainlast24hr (4M+ followers) and @worldinlast24hrs (1M+ followers), delivering local, national, and global news updates.',
  url: 'https://www.instagram.com/mumbaiinlast24hrs', // TODO: verify handle URL
}

export const education = {
  institution: 'Lokmanya Tilak College of Engineering',
  university: 'Mumbai University',
  degree: 'Bachelor of Engineering (Computer Science Engineering — Data Science)',
  period: '2021 — 2025',
  cgpa: 'CGPA: 8.0/10',
}

export const socials: SocialLink[] = [
  {
    label: 'Email',
    href: `mailto:${site.email}`,
    icon: 'mail',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/priyanshutiwari09', // TODO
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/priyanshutiwari09', // TODO
    icon: 'linkedin',
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/priyanshutiwari09', // TODO
    icon: 'leetcode',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/prlyanshutiwari',
    icon: 'instagram',
  },
]

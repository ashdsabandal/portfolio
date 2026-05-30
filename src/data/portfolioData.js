// ============================================================
// Portfolio Data Schema
// Edit this file to personalize your portfolio.
// ============================================================

export const owner = {
  name: 'Ashley Mark Sabandal',
  title: 'Full-Stack Developer',
  tagline: 'Building systems that cut through complexity.',
  location: 'Las Piñas, PH',
  email: 'ashdsabandal@gmail.com',
  github: 'https://github.com/ashdsabandal',
  linkedin: 'https://www.linkedin.com/in/ashley-mark-sabandal/',
  bio: `I'm a Computer Science student at the University of the Philippines Los Baños (UPLB) dedicated to building clean, efficient, and impactful software. I love exploring new frameworks and technologies to solve real-world problems through hands-on development.
From full-stack web applications to mobile tools and multiplayer games, I'm constantly learning and expanding my skill set. My goal is to leverage my academic foundation and project experience to grow as an engineer and launch a full-time career in the tech industry.`,
}

// ============================================================
// Skills Matrix
// ============================================================

export const skills = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C', 'Dart', 'SQL'],
  },
  {
    category: 'Web Dev',
    items: ['HTML / CSS', 'React', 'Next.js', 'Node.js', 'Express.js', 'TailwindCSS'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'Firebase'],
  },
  {
    category: 'Mobile & Game',
    items: ['Flutter', 'Android Studio', 'Godot', 'Unity', 'libGDX'],
  },
  {
    category: 'Tools & Tech',
    items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman'],
  },
]

// ============================================================
// Experience Timeline
// ============================================================

export const experience = [
  {
    id: 'exp-1',
    role: 'Backend Developer',
    company: 'The Haven Company, UPLB',
    period: 'Jan 2026',
    description:
      'Engineered high-performance, real-time backend architecture leveraging Next.js API routes and Supabase. Streamlined relational database schemas and optimized data access layers to minimize query latency, improve throughput, and secure tenant authentication.',
    tags: ['Next.js', 'Supabase', 'Database', 'Backend', 'Real-time'],
  },
  {
    id: 'exp-2',
    role: 'Lead Developer',
    company: 'UPLB COSS Game Jam Los Baños 2025',
    period: 'June 2025',
    description:
      'Spearheaded design and codebase development for a competitive game project, securing 4th place out of numerous entries. Architected core gameplay systems, optimized frame rendering/assets for smooth execution under constraints, and integrated immersive mechanics aligned with the theme.',
    tags: ['Game Development', 'Godot', 'Unity', 'Level Design'],
  },
  {
    id: 'exp-3',
    role: 'IT Assistant Intern',
    company: 'University of Perpetual Help System DALTA',
    period: 'June 2023',
    description:
      'Facilitated day-to-day IT operations and network infrastructure maintenance. Diagnosed and resolved hardware/software bottlenecks, optimized office technology workflows, and ensured high uptime for system-critical endpoints.',
    tags: ['IT Support', 'Networking', 'Troubleshooting', 'System Support'],
  },
]

// ============================================================
// Projects
// ============================================================

export const projects = [
  {
    id: 'proj-1',
    title: 'Akomi',
    summary: 'Full-stack student housing portal streamlining administrative and occupancy operations.',
    description:
      'A modern web application built to automate complex university dormitory workflows. Replaces paper-based processes with an end-to-end digital solution featuring real-time room bookings, utility/appliance registration, automated billing generation, and occupancy tracking.',
    tags: ['Web App'],
    tech: ['Next.js', 'React', 'Supabase', 'PostgreSQL', 'TailwindCSS'],
    github: 'https://github.com/ashdsabandal',
    live: null,
    highlights: [
      'Eliminated manual paperwork by introducing automated fee tracking and billing generation',
      'Designed an intuitive, real-time room selection interface for boarding students',
      'Built secure administrative tools for centralized registry management and occupancy reporting',
    ],
  },
  {
    id: 'proj-2',
    title: 'Spellcasters!',
    summary: 'Real-time cooperative multiplayer roguelite word game built with Java and libGDX.',
    description:
      'A unique 4-player cooperative roguelite that fuses tactical word puzzle mechanics with RPG strategy. Powered by a high-performance custom game loop and the KrowNet networking library to synchronize game states fluidly across concurrent players.',
    tags: ['Game Dev'],
    tech: ['Java', 'libGDX', 'ECS', 'KrowNet'],
    github: 'https://github.com/ashdsabandal',
    live: null,
    highlights: [
      'Designed and implemented the core game loop using the Ashley Entity Component System (ECS)',
      'Built a low-latency client-server synchronization model utilizing KrowNet for real-time multiplayer',
      'Engineered modular game mechanics blending vocabulary puzzles with real-time tactical combat',
    ],
  },
  {
    id: 'proj-3',
    title: 'Farm to Table',
    summary: 'Direct-to-consumer e-commerce marketplace empowering local agricultural producers.',
    description:
      'A full-stack marketplace designed to disintermediate the agricultural supply chain by connecting local farmers directly with end consumers. Features comprehensive inventory management, secure user roles, and order/transaction tracking.',
    tags: ['Web App'],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'MERN'],
    github: 'https://github.com/ashdsabandal',
    live: null,
    highlights: [
      'Bypasses middle-tier distributors to increase local farmers\' profit margins',
      'Implemented dynamic product catalog management with secure user authentication (JWT)',
      'Designed transactional order workflows with automated receipts and status tracking',
    ],
  },
  {
    id: 'proj-4',
    title: 'LakPlan',
    summary: 'Cross-platform mobile application for collaborative itinerary and trip planning.',
    description:
      'A cross-platform mobile application designed to streamline group travel planning. Leverages real-time data synchronization to allow users to build shared itineraries, set reminders, and view location pins dynamically.',
    tags: ['Mobile App'],
    tech: ['Flutter', 'Dart', 'Firebase', 'Google Maps API'],
    github: 'https://github.com/ashdsabandal',
    live: null,
    highlights: [
      'Co-developed a responsive mobile UI using Flutter for seamless iOS & Android support',
      'Integrated Firebase Firestore for real-time collaboration and itinerary synchronization',
      'Implemented location-based reminders and mapping features for enhanced trip navigation',
    ],
  },
]

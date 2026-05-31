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
      'Spearheaded design and codebase development for a competitive game project, securing 4th place overall, 2nd in Fun Factor, and 3rd in Innovation and Creativity out of numerous entries. Architected core gameplay systems, optimized frame rendering/assets for smooth execution under constraints, and integrated immersive mechanics aligned with the theme.',
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
    github: 'https://github.com/jcmagpantay/akomi',
    live: 'https://akomi-uplb.vercel.app/',
    // Drop images into public/screenshots/proj-1/ and list them here
    screenshots: [
      // '/screenshots/proj-1/thumb.png',
      // '/screenshots/proj-1/rooms.png',
      // '/screenshots/proj-1/billing.png',
    ],
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
    github: 'https://github.com/ashdsabandal/spellcasters',
    live: null,
    // Drop images into public/screenshots/proj-2/ and list them here
    screenshots: [
      '/screenshots/proj-2/1.png',
      '/screenshots/proj-2/2.png',
      '/screenshots/proj-2/3.png',
      '/screenshots/proj-2/4.png',
      '/screenshots/proj-2/5.png',
      '/screenshots/proj-2/6.png',
      '/screenshots/proj-2/7.png',
      '/screenshots/proj-2/8.png',
      '/screenshots/proj-2/9.png',
    ],
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
    github: null,
    live: null,
    // Drop images into public/screenshots/proj-3/ and list them here
    screenshots: [
      // '/screenshots/proj-3/home.png',
    ],
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
    github: null,
    live: null,
    // Drop images into public/screenshots/proj-4/ and list them here
    screenshots: [
      '/screenshots/proj-4/1.jpg',
      '/screenshots/proj-4/2.jpg',
      '/screenshots/proj-4/3.jpg',
      '/screenshots/proj-4/4.jpg',
      '/screenshots/proj-4/5.jpg',
      '/screenshots/proj-4/6.jpg',
      '/screenshots/proj-4/7.jpg',
    ],
    highlights: [
      'Co-developed a responsive mobile UI using Flutter for seamless iOS & Android support',
      'Integrated Firebase Firestore for real-time collaboration and itinerary synchronization',
      'Implemented location-based reminders and mapping features for enhanced trip navigation',
    ],
  },
  {
    id: 'proj-5',
    title: 'Tansan',
    summary: 'Surreal physics-based sipa game where you play as a sentient leg kicking a bottle cap.',
    description:
      'A physics-based sipa game developed in 72 hours for the UPLB COSS Game Jam Los Baños 2025, where it secured 4th place overall (2nd in Fun Factor, 3rd in Innovation & Creativity). Players awaken as a sentient leg and must harness the power of "SIPA" to kick a bottle cap (tansan), earn coins, and avoid obstacles while navigating a surreal environment.',
    tags: ['Game Dev'],
    tech: ['Godot', 'GDScript'],
    github: null,
    live: 'https://ashkbd.itch.io/tansan',
    screenshots: [
      'https://img.itch.zone/aW1hZ2UvMzYyNjk5MC8yMTU5NDM3My5wbmc=/original/p5tnYG.png',
      'https://img.itch.zone/aW1hZ2UvMzYyNjk5MC8yMTU5NDM3Mi5wbmc=/original/6pVbGx.png',
      'https://img.itch.zone/aW1hZ2UvMzYyNjk5MC8yMTU5NDM3NC5wbmc=/original/ORnL5k.png',
      'https://img.itch.zone/aW1hZ2UvMzYyNjk5MC8yMTU5NDM3NS5wbmc=/original/C6%2FZ0z.png',
    ],
    highlights: [
      'Awarded 4th place overall, 2nd in Fun Factor, and 3rd in Innovation & Creativity at the UPLB COSS Game Jam Los Baños 2025',
      'Engineered interactive physics-based mechanics in Godot, implementing heavy (left-click) and light (right-click) sipa kicks',
      'Designed procedural obstacles, coin pickup mechanics, and level-boundary collision routines',
    ],
  },
  {
    id: 'proj-6',
    title: 'Resonance',
    summary: 'A puzzle adventure across the stars, helping a lonely 52Hz space whale make friends.',
    description:
      'A cosmic puzzle game developed for Jame Gam #50. Players assist Boo, a rare space whale emitting a unique 52Hz frequency, by repairing ancient circuits, decoding signals, and solving spatial puzzles to help Boo find companionship in the vast void of space.',
    tags: ['Game Dev'],
    tech: ['Godot', 'GDScript'],
    github: null,
    live: 'https://rednuerocs.itch.io/resonance',
    screenshots: [
      "https://img.itch.zone/aW1nLzIxODA1MTU4LnBuZw==/original/HlS4TP.png",
      'https://img.itch.zone/aW1hZ2UvMzY2Mzg2OS8yMTgwNTg4MS5naWY=/original/tRGOWF.gif',
      'https://img.itch.zone/aW1hZ2UvMzY2Mzg2OS8yMTgwNjIzNS5naWY=/original/pq5SRQ.gif',
      'https://img.itch.zone/aW1hZ2UvMzY2Mzg2OS8yMTgwNTgyNi5naWY=/original/FfICT3.gif',
      'https://img.itch.zone/aW1hZ2UvMzY2Mzg2OS8yMTgwNTk4MC5naWY=/original/Nicyho.gif',
    ],
    highlights: [
      'Developed as a submission for Jame Gam #50, featuring thematic puzzles and a narrative-driven cosmic atmosphere',
      'Implemented circuit-repair mechanics and signal-decoding mini-games in Godot',
      'Designed spatial puzzle layouts combined with hand-crafted space-themed art and audio design',
    ],
  },
  {
    id: 'proj-7',
    title: 'ELEF',
    summary: 'Gamified mobile platform prototype streamlining recreational sports event coordination.',
    description:
      'A high-fidelity mobile application prototype designed to reduce the logistical friction of organizing informal sports games among university students. Developed through a rigorous Human-Computer Interaction (HCI) and design thinking process, ELEF centralizes event creation, real-time roster management, and group communication into a purpose-built, sports-native interface.',
    tags: ['UI/UX Design'],
    tech: ['Figma', 'Maze'],
    github: null,
    live: 'https://www.figma.com/proto/ad8GCSyBgeRpuwh0yL38ak/CMSC-173-GH2L?node-id=690-464&t=x94PMMTXL2qJ2I2l-1&scaling=min-zoom&content-scaling=fixed&page-id=690%3A278&starting-point-node-id=690%3A1272',
    // Drop images into public/screenshots/proj-7/ and list them here
    screenshots: [
      '/screenshots/proj-7/1.png',
      '/screenshots/proj-7/2.jpg',
      '/screenshots/proj-7/3.jpg',
      '/screenshots/proj-7/4.jpg',
      '/screenshots/proj-7/5.jpg',
    ],
    highlights: [
      'Conducted contextual inquiries and semi-structured interviews to build affinity diagrams and user personas defining core pain points',
      'Designed low-fidelity wireframes and transitioned to high-fidelity interactive prototypes in Figma, focusing on smart discovery feeds and advance scheduling features',
      'Facilitated a within-subjects usability study using Maze, proving the sports-specific interface produced substantially lower misclick rates compared to a generic social media layout',
    ],
  },
]

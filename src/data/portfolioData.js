// ============================================================
// Portfolio Data Schema
// Edit this file to personalize your portfolio.
// ============================================================

export const owner = {
  name: 'Ash Sabandal',
  title: 'Full-Stack Developer',
  tagline: 'Building systems that cut through complexity.',
  location: 'Manila, PH',
  email: 'ash@example.com',
  github: 'https://github.com/',
  linkedin: 'https://linkedin.com/in/',
  twitter: 'https://twitter.com/',
  resumeUrl: '/resume.pdf',
  bio: `I'm a full-stack developer obsessed with precision, performance, and purposeful design.
I build systems that feel fast, look sharp, and scale without breaking a sweat.
When I'm not shipping code, I'm reverse-engineering how things work — because understanding the machine is the only way to master it.`,
}

// ============================================================
// Skills Matrix
// ============================================================

export const skills = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Rust', 'SQL'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Vite', 'CSS / Sass', 'Framer Motion'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'FastAPI', 'PostgreSQL', 'Redis'],
  },
  {
    category: 'DevOps & Cloud',
    items: ['Docker', 'GitHub Actions', 'Vercel', 'AWS (EC2, S3)', 'Linux'],
  },
  {
    category: 'Tools',
    items: ['Git', 'VS Code', 'Figma', 'Postman', 'Turborepo'],
  },
]

// ============================================================
// Experience Timeline
// ============================================================

export const experience = [
  {
    id: 'exp-1',
    role: 'Senior Full-Stack Engineer',
    company: 'Apex Systems',
    period: '2023 – Present',
    description:
      'Led development of a multi-tenant SaaS dashboard serving 50K+ users. Architected a real-time notification system using WebSockets and Redis pub/sub.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    id: 'exp-2',
    role: 'Frontend Engineer',
    company: 'Neon Labs',
    period: '2021 – 2023',
    description:
      'Rebuilt the core UI with Next.js and TypeScript, reducing Time-to-Interactive by 40%. Designed and shipped a component library used across 3 product teams.',
    tags: ['Next.js', 'TypeScript', 'Storybook', 'Figma'],
  },
  {
    id: 'exp-3',
    role: 'Junior Developer',
    company: 'CodeCraft Studio',
    period: '2020 – 2021',
    description:
      'Built and maintained client web apps across various industries. First exposure to CI/CD pipelines and cloud deployment.',
    tags: ['React', 'Express', 'MySQL', 'GitHub Actions'],
  },
]

// ============================================================
// Projects
// ============================================================

export const projects = [
  {
    id: 'proj-1',
    title: 'Phantom Dashboard',
    summary: 'Multi-tenant analytics platform with real-time data pipelines.',
    description:
      'A full-stack SaaS analytics dashboard built for multi-tenant deployments. Features live data streaming via WebSockets, customizable chart widgets, role-based access control, and a Postgres-backed audit log.',
    tags: ['Fullstack', 'SaaS'],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'WebSockets'],
    github: 'https://github.com/',
    live: 'https://example.com',
    highlights: [
      'Handles 50K+ concurrent users with < 100ms p99 latency',
      'WebSocket pub/sub notification pipeline via Redis Streams',
      'Row-level security enforced at the database layer',
    ],
  },
  {
    id: 'proj-2',
    title: 'Forge CLI',
    summary: 'Terminal scaffolding tool for opinionated full-stack project templates.',
    description:
      'A Node.js CLI tool that generates production-ready full-stack project templates with a single command. Supports React, Next.js, and Express starters with pre-configured ESLint, Docker, and CI/CD.',
    tags: ['CLI', 'DevTools'],
    tech: ['Node.js', 'TypeScript', 'Commander.js', 'Handlebars'],
    github: 'https://github.com/',
    live: null,
    highlights: [
      'Generates project scaffolds in < 3 seconds',
      'Plugin-based architecture for custom template extensions',
      '800+ installs on NPM in first month',
    ],
  },
  {
    id: 'proj-3',
    title: 'Pulse API',
    summary: 'Lightweight REST + GraphQL gateway for microservice orchestration.',
    description:
      'A composable API gateway that aggregates multiple microservices behind a single REST and GraphQL interface. Includes request batching, caching middleware, and a rate limiter.',
    tags: ['Backend', 'System'],
    tech: ['Fastify', 'GraphQL', 'Redis', 'PostgreSQL', 'Jest'],
    github: 'https://github.com/',
    live: null,
    highlights: [
      'Schema-first GraphQL with automatic REST passthrough',
      'Redis LRU cache cuts upstream requests by 60%',
      'Full test coverage with Jest & Supertest',
    ],
  },
  {
    id: 'proj-4',
    title: 'Sigil UI',
    summary: 'A cyberpunk-inspired React component library with dark-first design.',
    description:
      'A React component library featuring glassmorphic and metallic design tokens, animated interactive elements, and a CLI for dropping components directly into any project.',
    tags: ['Frontend', 'Library'],
    tech: ['React', 'TypeScript', 'CSS Modules', 'Storybook', 'Rollup'],
    github: 'https://github.com/',
    live: 'https://example.com',
    highlights: [
      '40+ components with full Storybook docs',
      'Zero-dependency core with tree-shakeable exports',
      'Fully accessible — WCAG 2.1 AA compliant',
    ],
  },
]

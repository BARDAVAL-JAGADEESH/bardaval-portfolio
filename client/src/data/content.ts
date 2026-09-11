export const portfolioData = {
  personal: {
    name: 'Bardaval Jagadeesh',
    firstName: 'Bardaval',
    lastName: 'Jagadeesh',
    initials: 'BJ',
    role: 'Android Developer',
    headline: 'Android Developer | Enterprise MDM/UEM | Kotlin',
    company: 'ONESAZ',
    location: 'Hyderabad, Telangana, India',
    phone: '+91 9347052901',
    phoneHref: 'tel:+919347052901',
    email: 'jagadeeshbardaval78@gmail.com',
    summary:
      'Android Developer specializing in Kotlin, Jetpack Compose, Android Enterprise, and MDM/UEM. I build modern, scalable Android applications and enterprise solutions with a focus on clean architecture, performance, security, and reliability. Passionate about solving complex technical challenges and creating seamless experiences for both users and organizations.',
  },

  social: {
    github: 'https://github.com/BARDAVAL-JAGADEESH',
    linkedin: 'https://linkedin.com/in/bardaval-jagadeesh/',
  },

  nav: [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/#about' },
    { label: 'Experience', to: '/#experience' },
    { label: 'Projects', to: '/#projects' },
    { label: 'Skills', to: '/#skills' },
    { label: 'Contact', to: '/#contact' },
  ],

  hero: {
    bio: 'Building modern Android apps and enterprise MDM/UEM systems with Kotlin and Jetpack Compose.',
    cta: { label: "Let's get started", to: '/#contact' },
  },

  about: {
    title: 'About',
    heading: 'Professional Summary',
    facts: [
      { label: 'Location', value: 'Hyderabad, Telangana, India' },
      { label: 'Current role', value: 'Android Developer — ONESAZ' },
      { label: 'Focus', value: 'Kotlin · Compose · MDM/UEM' },
    ],
  },

  experience: [
    {
      role: 'Android Developer — Enterprise MDM/UEM Platform',
      company: 'ONESAZ',
      location: 'Hyderabad, India',
      period: 'Mar 2026 – Present',
      points: [
        'Architected and developed Acadhub MDM, an enterprise Android MDM/UEM platform for centralized device management, security, policy enforcement, and remote administration.',
        'Engineered Device Owner/DPC workflows using Kotlin and DevicePolicyManager for device enrollment, restrictions, application management, and kiosk control.',
        'Designed QR-based device provisioning and enrollment workflows covering Device Owner activation, policy synchronization, kiosk initialization, and device recovery.',
        'Built reliable remote-management pipelines using FCM, Room Database, and WorkManager for asynchronous commands, offline synchronization, retries, and background execution.',
        'Implemented remote capabilities including policy deployment, application installation/update, device restrictions, kiosk control, and administrative actions.',
        'Debugged and resolved production issues across synchronization failures, background execution, device recovery, and OS/OEM compatibility.',
        'Performed root-cause analysis and improved modular Android architecture for maintainable enterprise device-management workflows.',
      ],
    },
    {
      role: 'Android Development Intern',
      company: 'Skillcraft Technology',
      location: 'Remote',
      period: 'Jul 2025 – Aug 2025',
      points: [
        'Developed lifecycle-aware Android modules using Kotlin and XML.',
        'Integrated camera workflows for real-time QR-code scanning and asset barcode detection.',
        'Implemented local transactional data flows using SQLite for responsive task-tracking workflows.',
        'Worked on Android components, debugging, and application testing to improve reliability and user experience.',
      ],
    },
  ],

  projects: [
    {
      id: 'acadhub-mdm',
      title: 'Acadhub MDM',
      tag: 'Enterprise · Production',
      description:
        'Enterprise Android MDM/UEM platform for centralized device management, security, policy enforcement, and remote administration.',
      longDescription:
        'Built an enterprise MDM platform supporting device enrollment, policy deployment, kiosk management, application management, and remote administration. Implemented Device Owner/DPC, offline synchronization, remote commands, and device recovery workflows.',
      stack: [
        'Kotlin',
        'Android Enterprise',
        'DevicePolicyManager',
        'FCM',
        'Room',
        'WorkManager',
      ],
      github: 'https://github.com/BARDAVAL-JAGADEESH',
      highlights: [
        'Device enrollment and QR-based provisioning',
        'Device Owner / DPC and policy enforcement',
        'Kiosk / Lock Task management',
        'Application install, update, and management',
        'Remote commands with FCM, Room, and WorkManager',
        'Offline synchronization and device recovery',
      ],
    },
    {
      id: 'acadhub-notebook',
      title: 'Acadhub Notebook',
      tag: 'Education · Student App',
      description:
        'A student-focused Android notebook for organizing subjects, topics, and study notes in one place.',
      longDescription:
        'Acadhub Notebook is built for students who need a simple way to capture and organize class notes. The app helps students structure learning by subject and topic, keep notes easy to find, and stay productive during study sessions. Designed as part of the Acadhub education ecosystem with a clean Android experience.',
      stack: ['Kotlin', 'Jetpack Compose', 'Room', 'Android'],
      github: 'https://github.com/BARDAVAL-JAGADEESH',
      highlights: [
        'Built for students to manage study notes day to day',
        'Organize content by subjects and topics',
        'Create, edit, and review notes with a clear reading flow',
        'Local storage with Room for reliable offline access',
        'Modern Android UI with Jetpack Compose',
      ],
    },
    {
      id: 'booking-directory',
      title: 'Online Booking & Company Directory',
      tag: 'Team Project',
      description:
        'Android features for online booking and searchable company-directory workflows.',
      longDescription:
        'Developed Android application features for online booking and company-directory workflows as part of a team project. Implemented Room-based local persistence, Firebase integration, and searchable company-directory functionality.',
      stack: ['Kotlin', 'XML', 'Room Database', 'Firebase'],
      github: 'https://github.com/BARDAVAL-JAGADEESH',
      highlights: [
        'Online booking feature workflows',
        'Room-based local persistence',
        'Firebase integration',
        'Searchable company-directory functionality',
      ],
    },
  ],

  skills: {
    groups: [
      {
        title: 'Languages',
        items: ['Kotlin', 'Java', 'C++', 'SQL'],
      },
      {
        title: 'Android & Enterprise',
        items: [
          'Android Enterprise',
          'DevicePolicyManager',
          'Device Owner',
          'DPC',
          'Lock Task Mode',
          'Kiosk Mode',
          'Android Enterprise Management APIs',
        ],
      },
      {
        title: 'Frameworks & Libraries',
        items: [
          'Jetpack Compose',
          'Room Database',
          'WorkManager',
          'Firebase Cloud Messaging (FCM)',
        ],
      },
      {
        title: 'Core',
        items: [
          'MDM / UEM / EMM',
          'Device Provisioning',
          'Policy Enforcement',
          'Remote Device Management',
          'Offline Synchronization',
          'Debugging & Bug Fixing',
          'OOP',
          'DSA',
        ],
      },
      {
        title: 'Tools',
        items: ['Android Studio', 'Git', 'GitHub', 'Firebase', 'Claude Code', 'Cursor'],
      },
    ],
  },

  education: [
    {
      school: 'Lovely Professional University',
      degree: 'B.Tech — Computer Science & Engineering',
      detail: 'CGPA: 7.04/10',
      place: 'Jalandhar, Punjab, India',
      period: '2021 – 2025',
    },
    {
      school: 'SVS Junior College',
      degree: 'Higher Secondary — PCM',
      detail: '96.8%',
      place: 'Bodhan, Telangana, India',
      period: '2018 – 2020',
    },
  ],

  certifications: [
    'Android App Development with Jetpack Compose — Meta',
    'Java Programming Frameworks — NPTEL',
  ],

  achievements: [
    {
      title: 'IEEE ICPCN 2025',
      detail:
        'First author of “Enhanced Detection of Sugarcane Leaf Diseases Through Machine Learning Approaches.”',
    },
    {
      title: 'Competitive Programming',
      detail:
        'Top 10 among 3,000+ engineering students in LPU’s Advanced Competitive Programming Cohort.',
    },
    {
      title: 'Open Source',
      detail:
        'Bug fixes and improvements across existing codebases using Git/GitHub workflows.',
    },
  ],

  contact: {
    title: 'Get in touch',
    lede: 'Open to Android Developer roles focused on enterprise MDM/UEM and production Android systems.',
    cta: 'Email me',
  },
} as const

export type Project = (typeof portfolioData.projects)[number]

export function getProjectById(id: string): Project | null {
  return portfolioData.projects.find((project) => project.id === id) ?? null
}

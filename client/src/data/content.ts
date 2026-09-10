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
      'Android Developer specializing in Kotlin, Android Enterprise, Device Policy Controller (DPC), and MDM/UEM solutions. Experienced in device provisioning, policy enforcement, kiosk management, remote commands, offline synchronization, and device lifecycle management — with strong focus on debugging, production fixes, and root-cause analysis.',
  },

  social: {
    github: 'https://github.com/BARDAVAL-JAGADEESH',
    linkedin: 'https://linkedin.com/in/bardaval-jagadeesh/',
  },

  nav: [
    { label: 'Work', to: '/#work' },
    { label: 'Projects', to: '/#projects' },
    { label: 'Experience', to: '/#experience' },
    { label: 'Skills', to: '/#skills' },
    { label: 'About', to: '/#about' },
    { label: 'Contact', to: '/#contact' },
  ],

  hero: {
    eyebrow: 'Android Developer',
    lines: ['Enterprise MDM/UEM', 'Kotlin · Android'],
    tags: ['Android Enterprise', 'DPC', 'MDM/UEM', 'Kotlin', 'DevicePolicyManager'],
    primaryCta: { label: 'View work', to: '/#work' },
    secondaryCta: { label: 'Contact', to: '/#contact' },
    scrollLabel: 'Scroll',
  },

  about: {
    label: 'About',
    title: 'Building managed Android systems',
    body: 'I develop enterprise Android applications involving device provisioning, policy enforcement, kiosk management, application management, remote commands, offline synchronization, and device lifecycle management. I also debug production issues, perform root-cause analysis, and improve existing Android codebases.',
    facts: [
      { label: 'Location', value: 'Hyderabad, Telangana' },
      { label: 'Focus', value: 'MDM / UEM / DPC' },
      { label: 'Stack', value: 'Kotlin · Android Enterprise' },
    ],
  },

  device: {
    brand: 'ACADHUB',
    subtitle: 'Managed Device',
    statuses: [
      { label: 'Device Owner', active: true },
      { label: 'Policy Applied', active: true },
      { label: 'Kiosk Active', active: true },
    ],
  },

  enrollmentSteps: [
    {
      id: 'qr',
      title: 'QR Enrollment',
      description:
        'QR-based device provisioning starts Device Owner activation and enrollment into the MDM fleet.',
      status: 'READY',
    },
    {
      id: 'register',
      title: 'Device Owner / DPC',
      description:
        'Device Owner and DPC workflows establish enterprise control for restrictions and management.',
      status: 'ACTIVE',
    },
    {
      id: 'policy',
      title: 'Policy Sync',
      description:
        'Policies synchronize to the device for restrictions, apps, and administrative controls.',
      status: 'SYNCED',
    },
    {
      id: 'remote',
      title: 'Remote Commands',
      description:
        'FCM, Room, and WorkManager power asynchronous commands, retries, and offline sync.',
      status: 'ONLINE',
    },
    {
      id: 'kiosk',
      title: 'Kiosk Control',
      description:
        'Lock Task / kiosk mode initializes a restricted managed experience on the device.',
      status: 'LOCKED',
    },
  ],

  featured: {
    id: 'acadhub-mdm',
    title: 'Acadhub MDM',
    subtitle: 'Enterprise Android MDM/UEM Platform',
    description:
      'Enterprise Android MDM/UEM platform for centralized device management, security, policy enforcement, and remote administration.',
    stack: [
      'Kotlin',
      'Android Enterprise',
      'DevicePolicyManager',
      'DPC',
      'FCM',
      'Room',
      'WorkManager',
      'Lock Task Mode',
    ],
    layers: [
      { id: 'admin', label: 'Remote Administration', detail: 'Policies, apps, device actions' },
      { id: 'pipeline', label: 'Command Pipeline', detail: 'FCM · Room · WorkManager' },
      { id: 'device', label: 'Android DPC', detail: 'Device Owner · Kiosk · Restrictions' },
    ],
    concepts: [
      'Enrollment',
      'Device Owner',
      'Policy',
      'Kiosk',
      'App Management',
      'Offline Sync',
    ],
    highlights: [
      'Device enrollment, policy deployment, kiosk management, and remote administration',
      'Device Owner / DPC with DevicePolicyManager for restrictions and app control',
      'QR-based provisioning covering Device Owner activation and policy synchronization',
      'Remote pipelines with FCM, Room, and WorkManager for offline sync and retries',
      'Production debugging across sync failures, background execution, and OEM issues',
    ],
    github: 'https://github.com/BARDAVAL-JAGADEESH',
  },

  enrollmentPipeline: [
    { id: 'qr', label: 'QR Code', done: 'SCANNED' },
    { id: 'provision', label: 'Provisioning', done: 'PROVISIONED' },
    { id: 'owner', label: 'Device Owner', done: 'OWNER SET' },
    { id: 'policy', label: 'Policy Sync', done: 'SYNCED' },
    { id: 'apps', label: 'App Management', done: 'MANAGED' },
    { id: 'kiosk', label: 'Kiosk Init', done: 'ACTIVE' },
    { id: 'remote', label: 'Remote Commands', done: 'READY' },
    { id: 'recovery', label: 'Device Recovery', done: 'SUPPORTED' },
  ],

  policyEngine: {
    title: 'Policy & control',
    description:
      'Enterprise controls flow from administration to the device through DevicePolicyManager and DPC workflows.',
    flow: ['Enrollment', 'Device Owner', 'Policy', 'Restrictions', 'Kiosk'],
    categories: [
      { name: 'Kiosk / Lock Task', detail: 'Restricted managed experience' },
      { name: 'Applications', detail: 'Install, update, and manage apps' },
      { name: 'Device Restrictions', detail: 'Enterprise capability limits' },
      { name: 'Remote Actions', detail: 'Administrative device commands' },
      { name: 'Offline Sync', detail: 'Retries and background execution' },
      { name: 'Recovery', detail: 'Device recovery workflows' },
    ],
  },

  kiosk: {
    title: 'Kiosk Mode',
    description:
      'Devices move into Lock Task / kiosk mode for a restricted, administratively controlled experience.',
    lockingLabel: 'Locking device…',
    activeLabel: 'Kiosk Active',
    managedBy: 'Managed by Acadhub MDM',
  },

  architecture: {
    title: 'Under the hood',
    subtitle: 'How remote management reaches the Android device.',
    nodes: [
      {
        id: 'admin',
        label: 'Admin Actions',
        detail: 'Policy, apps, kiosk, and device commands',
      },
      {
        id: 'fcm',
        label: 'FCM',
        detail: 'Remote notifications and command delivery',
      },
      {
        id: 'work',
        label: 'WorkManager',
        detail: 'Background execution, retries, offline work',
      },
      {
        id: 'room',
        label: 'Room Database',
        detail: 'Local persistence for sync and state',
      },
      {
        id: 'dpc',
        label: 'Android DPC',
        detail: 'Device Owner management layer',
      },
      {
        id: 'dpm',
        label: 'DevicePolicyManager',
        detail: 'Restrictions, apps, and kiosk control',
      },
      {
        id: 'device',
        label: 'Managed Device',
        detail: 'Enforced enterprise device state',
      },
    ],
    packetSteps: [
      'Admin · Deploy policy',
      'FCM command',
      'WorkManager job',
      'Room sync',
      'DPC / DevicePolicyManager',
      'Policy applied ✓',
    ],
  },

  projects: [
    {
      id: 'booking-directory',
      title: 'Online Booking & Company Directory',
      tag: 'Team Project',
      description:
        'Android features for online booking and searchable company-directory workflows.',
      longDescription:
        'Team project focused on online booking and company-directory workflows. Built with Kotlin and XML, using Room for local persistence and Firebase for backend integration, including searchable company-directory functionality.',
      stack: ['Kotlin', 'XML', 'Room', 'Firebase'],
      github: 'https://github.com/BARDAVAL-JAGADEESH',
      highlights: [
        'Online booking feature workflows',
        'Room-based local persistence',
        'Firebase integration',
        'Searchable company directory',
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
        items: ['Android Studio', 'Git', 'GitHub', 'Firebase'],
      },
    ],
  },

  experience: [
    {
      year: '2026',
      role: 'Android Developer — Enterprise MDM/UEM',
      focus: 'Acadhub MDM',
      company: 'ONESAZ',
      location: 'Hyderabad, India',
      period: 'Mar 2026 – Present',
      points: [
        'Architected and developed Acadhub MDM, an enterprise Android MDM/UEM platform for centralized device management, security, policy enforcement, and remote administration.',
        'Engineered Device Owner/DPC workflows using Kotlin and DevicePolicyManager for enrollment, restrictions, application management, and kiosk control.',
        'Designed QR-based provisioning covering Device Owner activation, policy synchronization, kiosk initialization, and device recovery.',
        'Built remote-management pipelines with FCM, Room, and WorkManager for asynchronous commands, offline sync, retries, and background execution.',
        'Implemented remote capabilities including policy deployment, app install/update, restrictions, kiosk control, and administrative actions.',
        'Debugged production issues across sync failures, background execution, device recovery, and OS/OEM compatibility.',
        'Improved modular Android architecture and maintainable enterprise device-management workflows.',
      ],
    },
    {
      year: '2025',
      role: 'Android Development Intern',
      focus: 'Kotlin · XML',
      company: 'Skillcraft Technology',
      location: 'Remote',
      period: 'Jul 2025 – Aug 2025',
      points: [
        'Developed lifecycle-aware Android modules using Kotlin and XML.',
        'Integrated camera workflows for real-time QR-code scanning and asset barcode detection.',
        'Implemented local transactional data flows using SQLite for responsive task-tracking workflows.',
        'Worked on Android components, debugging, and application testing to improve reliability.',
      ],
    },
  ],

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
        'First author of research paper “Enhanced Detection of Sugarcane Leaf Diseases Through Machine Learning Approaches.”',
    },
    {
      title: 'Competitive Programming',
      detail:
        'Ranked Top 10 among 3,000+ engineering students in LPU’s Advanced Competitive Programming Cohort.',
    },
    {
      title: 'Open Source',
      detail:
        'Contributed by fixing bugs, improving functionality, and submitting changes through Git/GitHub workflows.',
    },
  ],

  currentlyBuilding: {
    title: 'Currently building',
    product: 'Acadhub MDM',
    status: 'IN PROGRESS',
    pillars: ['Device Owner', 'DPC', 'Kiosk', 'Remote Commands'],
    note: 'Enterprise Android MDM/UEM at ONESAZ — provisioning, policy, kiosk, and remote administration.',
  },

  contact: {
    titleLines: ['Let’s connect'],
    cta: 'Email me',
    lede: 'Open to Android Developer roles focused on enterprise MDM/UEM, DPC, and production Android systems.',
  },
} as const

export type ProjectDetail = {
  id: string
  title: string
  tag: string
  description: string
  longDescription: string
  stack: readonly string[] | string[]
  github: string
  highlights: readonly string[] | string[]
  featured?: boolean
  flow?: readonly string[]
  demo?: 'ocr'
}

export function getProjectById(id: string): ProjectDetail | null {
  if (id === portfolioData.featured.id) {
    return {
      id: portfolioData.featured.id,
      title: portfolioData.featured.title,
      tag: 'Featured',
      description: portfolioData.featured.description,
      longDescription: portfolioData.featured.description,
      stack: portfolioData.featured.stack,
      github: portfolioData.featured.github,
      highlights: portfolioData.featured.highlights,
      featured: true,
    }
  }

  const project = portfolioData.projects.find((item) => item.id === id)
  if (!project) return null

  return {
    id: project.id,
    title: project.title,
    tag: project.tag,
    description: project.description,
    longDescription: project.longDescription,
    stack: project.stack,
    github: project.github,
    highlights: project.highlights,
  }
}

export const profile = {
  ...portfolioData.personal,
  github: portfolioData.social.github,
  linkedin: portfolioData.social.linkedin,
}

export const navLinks = portfolioData.nav
export const experience = portfolioData.experience
export const projects = portfolioData.projects

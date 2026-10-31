export const site = {
  name: 'K M Vinayak Ram',
  shortName: 'KM Vinayak Ram',
  logo: 'VK.',
  title: 'Computer Science Student | Web Developer | Tech Enthusiast',
  roles: [
    'Computer Science Student',
    'Python Developer',
    'Frontend Engineer',
    'UI/UX Enthusiast',
    'Cloud Explorer',
    'Software Engineer',
    'Full Stack Developer',
    'AI/ML Enthusiast',
  ],
  location: 'Bengaluru, India',
  university: 'MS Ramaiah University of Applied Sciences',
  degree: 'B.Tech in Computer Science',
  graduation: '2023–2027',
  email: 'vinayakram2894@gmail.com',
  github: 'https://github.com/VinayakRamKM',
  githubLabel: 'VinayakRamKM',
  linkedin: 'https://www.linkedin.com/in/vinayakramkm',
  summary:
    'Computer Science student and software engineering intern building thoughtful web products, data tools, and practical computer-vision systems.',
  availability: 'Open to meaningful software opportunities',
}

export const skills = [
  {
    name: 'Python',
    icon: 'Py',
    tone: 'python',
    note: '',
  },
  {
    name: 'JavaScript',
    icon: 'JS',
    tone: 'javascript',
    note: 'Interactive product interfaces, API integration, and modern web development.',
  },
  {
    name: 'React.js',
    icon: '⚛',
    tone: 'react',
    note: 'Interactive interfaces, component systems, and responsive dashboards.',
  },
  {
    name: 'Node.js',
    icon: 'JS',
    tone: 'node',
    note: 'RESTful backends and service integration for full-stack products.',
  },
  {
    name: 'OpenCV',
    icon: 'CV',
    tone: 'opencv',
    note: 'Real-time image processing, human detection, and video analysis.',
  },
  {
    name: 'NumPy',
    icon: 'NP',
    tone: 'numpy',
    note: 'Numerical and array-based processing for data and video projects.',
  },
  {
    name: 'MySQL',
    icon: 'SQL',
    tone: 'mysql',
    note: 'Relational data modeling, queries, and database-backed applications.',
  },
  {
    name: 'MongoDB',
    icon: 'MDB',
    tone: 'mongodb',
    note: 'Flexible data storage for fast-moving application experiences.',
  },
  {
    name: 'Microsoft Azure',
    icon: 'AZ',
    tone: 'azure',
    note: 'Deploying and launching applications in a live cloud environment.',
  },
  {
    name: 'Figma',
    icon: 'Fi',
    tone: 'figma',
    note: 'Interface prototyping, user flows, and visual design systems.',
  },
  {
    name: 'Git',
    icon: 'Git',
    tone: 'git',
    note: 'Version control, collaboration, and iterative project workflows.',
  },
  {
    name: 'Jupyter',
    icon: 'Jp',
    tone: 'jupyter',
    note: 'Experimentation, analysis, and documenting data-science concepts.',
  },
]

export const highlights = [
  { label: 'Experience', value: '3 internships' },
  { label: 'Focus', value: 'Full-stack + AI' },
  { label: 'Based in', value: 'Bengaluru' },
  { label: 'Graduation', value: '2027' },
]

export type Experience = {
  company: string
  role: string
  period: string
  tools: string[]
  summary: string
  bullets: string[]
}

export const experience: Experience[] = [
  {
    company: 'Toyota Tsusho India',
    role: 'Software Engineering Intern',
    period: 'September 2026 · Bengaluru',
    tools: ['JavaScript', 'React', 'Microsoft Azure'],
    summary: 'Leading the development of a digital accident reporting solution for drivers and administrators.',
    bullets: [
      'Built a reporting flow that lets drivers submit accident details and upload photos online.',
      'Implemented role-based dashboards for drivers, location admins, and nationwide super admins.',
      'Managed deployment on Microsoft Azure to host and launch the application in a live environment.',
    ],
  },
  {
    company: 'Indus Engineering',
    role: 'Full Stack Web Development Intern',
    period: 'July 2025 – September 2025 · Bengaluru',
    tools: ['JavaScript', 'React', 'Python', 'Figma', 'NewsOrg API'],
    summary: 'Connected a Python data service to a responsive React experience for live, searchable news.',
    bullets: [
      'Prototyped user journeys in Figma and translated them into responsive React interfaces.',
      'Developed a custom Python scraping engine driven by dynamic, user-defined keywords.',
      'Integrated RESTful services and the NewsOrg API for continuously refreshed news feeds.',
    ],
  },
  {
    company: 'Innovate Intern',
    role: 'Python Programming & Development Intern',
    period: 'July 2024 – August 2024 · Bengaluru',
    tools: ['Python', 'OpenCV', 'NumPy', 'Git', 'Jupyter'],
    summary: 'Explored real-time video processing through a guided human detection and crowd-counting project.',
    bullets: [
      'Applied frame comparison and background subtraction to understand motion detection.',
      'Used NumPy for efficient numerical and array-based video processing.',
      'Documented experiments and computer-vision concepts in Jupyter Notebooks with Git.',
    ],
  },
]

export const coursework = [
  'Python Programming',
  'Java (Basics)',
  'Database Management Systems',
  'Data Analytics',
  'Data Structures & Algorithms',
  'System Architecture',
]

export const certifications = [
  {
    issuer: 'Cisco Networking Academy',
    title: 'Introduction to Data Science',
    detail: 'Data lifecycle, collection and cleaning, exploratory analysis, and machine learning with Python.',
  },
  {
    issuer: 'IBM Cognitive Classes',
    title: 'Python for Data Science',
    detail: 'Python fundamentals, Pandas, NumPy, Matplotlib, statistics, and introductory machine learning.',
  },
]

export type Project = {
  id: string
  title: string
  tag: 'Web' | 'AI' | 'Systems' | 'Data'
  blurb: string
  details: string[]
  stack: string[]
  github?: string
}

export const projects: Project[] = [
  {
    id: 'notes-flow',
    title: 'Notes-Flow',
    tag: 'Web',
    blurb:
      'An intelligent notes-sharing web application that allows students to seamlessly upload, search, and share study materials and course notes.',
    details: [
      'The NotesFlow project focuses on developing a comprehensive note-sharing application with a real-time AI-powered summary feature. The motivation is a more efficient, user-friendly way to manage and share notes among teams and individuals.',
      'The platform is a web-based portal for students to share, organize, and download academic notes. It includes subject/category filtering, keyword search, preview before download, and an AI companion that provides intelligent summaries and insights.',
      'Users can upload notes in multiple formats such as PDF and documents, then manage them from a personalized dashboard. Built with responsiveness and simplicity in mind, it supports fast navigation on desktop and mobile to foster collaborative learning.',
    ],
    stack: ['React', 'Python', 'AI summaries', 'Search'],
    github: 'https://github.com/VinayakRamKM/notes-sharing',
  },
  {
    id: 'ambubeam',
    title: 'AmbuBeam',
    tag: 'Systems',
    blurb:
      'An AI-powered green corridor system designed to prioritize emergency vehicles in traffic.',
    details: [
      'AmbuBeam aims to eliminate life-threatening ambulance delays at traffic intersections. Over 30% of ambulance trips are delayed and 1 in 5 critical patients do not reach the hospital in time.',
      'Smart reflectors with embedded audio sensors detect ambulance sirens. Data triangulation estimates location and overrides nearby signal logic to clear a path. The design is low-cost, energy-efficient, solar-powered, and GPS-independent.',
      'Core features include siren detection, wireless communication via RF/LoRa modules, and signal override logic. Validation included conversations with traffic police and ambulance drivers.',
    ],
    stack: ['Embedded', 'Audio sensing', 'RF / LoRa', 'Traffic systems'],
    github: 'https://github.com/VinayakRamKM/Traffic-light-alerting-system',
  },
  {
    id: 'cab-booking',
    title: 'Online Cab Booking',
    tag: 'Web',
    blurb:
      'A responsive web interface built with HTML and CSS for a streamlined user booking experience.',
    details: [
      'A user-friendly platform for seamless cab reservations and management, reducing the hassle of finding and booking rides.',
      'Users can book rides in real time, choose from multiple vehicle options, and track driver location for convenience and safety. The concept includes secure payments, transparent fare estimation, and route optimization.',
      'The main goal is to make urban travel faster, smarter, and more dependable.',
    ],
    stack: ['HTML', 'CSS', 'Responsive UI'],
    github: 'https://github.com/VinayakRamKM/CAB-Booking',
  },
  {
    id: 'human-detection',
    title: 'Human Detection and Counting',
    tag: 'AI',
    blurb:
      'A computer vision project for detecting and counting humans in real time using OpenCV and Python.',
    details: [
      'Built with Python, OpenCV, and the YOLOv3 deep learning model. A webcam feed is used for real-time human detection and counting, drawing bounding boxes while maintaining a live people count.',
      'Pre-trained YOLO config and weights are loaded with COCO class labels, focusing on the person class. Frames are converted into blobs, filtered by confidence, and cleaned with non-maximum suppression so each person is counted once per frame.',
      'Useful for crowd monitoring, security, smart buildings, and occupancy analysis — a practical example of applying AI to a real-world problem.',
    ],
    stack: ['Python', 'OpenCV', 'YOLOv3'],
    github: 'https://github.com/VinayakRamKM/Human-Detector',
  },
  {
    id: 'web-scraper',
    title: 'Web Scraper',
    tag: 'Data',
    blurb:
      'A Python-based news scraping tool integrated with a React frontend for data visualization.',
    details: [
      'A Python project designed to extract data from designated API websites automatically. It uses requests to navigate pages, parse HTML, and retrieve specific information such as news related to chosen keywords.',
      'Useful in web development, data extraction, and automation. It highlights HTTP requests, HTML parsing, and handling different data formats.',
      'Applicable to price comparison, social monitoring, market research, and content aggregation, with a React frontend for visualization.',
    ],
    stack: ['Python', 'Requests', 'React'],
  },
  {
    id: 'doork3y',
    title: 'Doork3y',
    tag: 'Web',
    blurb:
      'A collaboration-focused product experiment around shared access and teamwork workflows.',
    details: [
      'Doork3y is a collaboration project exploring how people can work together with clearer access and shared context.',
      'It sits alongside related repositories including Official-Doork3y and earlier Doorkey experiments.',
    ],
    stack: ['Collaboration', 'Product'],
    github: 'https://github.com/VinayakRamKM/Doork3y',
  },
  {
    id: 'mechanic',
    title: 'Mechanic Booking Dashboard',
    tag: 'Web',
    blurb:
      'A dashboard experience for managing mechanic bookings, schedules, and service flow.',
    details: [
      'A booking dashboard built to organize mechanic appointments and service operations in one place.',
      'Focuses on a clear operational UI for tracking requests and keeping the booking flow easy to scan.',
    ],
    stack: ['Dashboard', 'UI'],
    github: 'https://github.com/VinayakRamKM/mechanic-booking-dashboard',
  },
  {
    id: 'attrition',
    title: 'Employee Attrition',
    tag: 'Data',
    blurb:
      'A data science project exploring employee attrition patterns and the signals behind turnover.',
    details: [
      'Uses data analysis to understand why employees leave and which factors correlate with attrition.',
      'Demonstrates an interest in applied data science beyond web interfaces — turning datasets into usable insight.',
    ],
    stack: ['Python', 'Data Science'],
    github: 'https://github.com/VinayakRamKM/Employee-Attrition',
  },
]

export const terminalReplies: Record<string, string> = {
  help: 'Commands: whoami, skills, experience, education, projects, contact, clear',
  whoami: `${site.shortName} — ${site.title}`,
  skills: skills.map((s) => s.name).join(' · '),
  experience: experience.map((item) => `${item.role} @ ${item.company}`).join(' · '),
  education: `${site.degree} at ${site.university} (${site.graduation})`,
  projects: projects.map((p) => p.title).join(', '),
  contact: `${site.email} `,
}

export interface PersonalInfo {
  name: string;
  nameHighlight: string;
  title: string;
  shortBio: string;
  email: string;
  phone: string;
  location: string;
  avatarUrl: string;
  cvPdfPath: string;
  socials: {
    linkedin: string;
    githubPersonal: string;
    githubOrg: string;
    portfolioGoogleSites: string;
  };
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  orgContext?: string;
  period: string;
  type?: string;
  responsibilities: string[];
  note?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  major: string;
  institution: string;
  location: string;
  period: string;
  thesis: {
    title: string;
  };
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  topics: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  conference: string;
  dateOrYear: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  year: string;
  description?: string;
}

export interface AwardItem {
  id: string;
  title: string;
  year: string;
  description: string;
}

export interface AcademicReference {
  name: string;
  designation: string;
  department: string;
  institution: string;
  location: string;
  email: string;
  phone: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  fullOverview: string;
  purpose?: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl?: string;
  verifiedFeatures: string[];
  techStack: Record<string, string>;
  implementationDetails: string[];
  disclaimer?: string;
}

export const personalInfo: PersonalInfo = {
  name: "M R KHAN",
  nameHighlight: "DIPU",
  title: "Full Stack Web Developer | ML/AI Researcher",
  shortBio:
    "I build data-driven solutions, explore AI/ML research, and develop web applications that make an impact.",
  email: "mrkhan.ds.swe@gmail.com",
  phone: "+8801540320884",
  location: "Dhaka, Bangladesh",
  avatarUrl: "/images/mr-khan-dipu.jpg",
  cvPdfPath: "/M-R-Khan-Dipu-CV.pdf",
  socials: {
    linkedin: "https://www.linkedin.com/in/mrkhandipu/",
    githubPersonal: "https://github.com/mrkhan393",
    githubOrg: "https://github.com/theopsupcorp1009",
    portfolioGoogleSites: "https://sites.google.com/view/mrkhandipu",
  },
};

export const aboutContent = {
  introParagraph1:
    "I am M R Khan Dipu, a Software Engineering graduate with BSc and MSc degrees specializing in Data Science from Daffodil International University. My work spans full-stack web development, machine learning, and biomedical AI research, alongside professional experience in academic management and administration.",

  introParagraph2:
    "I build modern web applications and explore ways to integrate machine learning models into practical software, connecting data science research with applications that address real-world problems, particularly in healthcare.",

  fullBio: [
    "My background combines software engineering, data science, and applied machine learning. During my undergraduate and graduate studies, I worked with data analysis, machine learning, and deep learning, with research interests centered on biomedical signals and healthcare applications.",

    "In web development, I build responsive, interactive applications using Next.js, React, TypeScript, and Tailwind CSS, with backend technologies and databases such as Node.js, Express.js, and MongoDB. My projects include Bazar Dor, a Bengali market-price tracking platform; Bangla News 24, a Bengali news portal with authentication and dynamic news features; and FitLog, a workout planning application. I also develop AI-focused applications, including an Alzheimer’s dementia classifier.",

    "Alongside development, I have worked as an independent ML/AI researcher with the Group of Bio-Photomatix, focusing on biomedical signal processing, EEG analysis, feature extraction, medical data modeling, and research manuscript preparation. My research includes deep learning approaches to Major Depressive Disorder detection using physiological signals, epileptic seizure detection using a lightweight 1D convolutional neural network, and gastrointestinal disorder prediction. My research contributions have been presented at international conferences, including ICoICI 2026 and ICCCNT 2025.",

    "My professional experience also includes academic management at The DrAcademy and batch coordination at Udvash, where I handled student and mentor communication, eLearning operations, digital marketing, SEO content, teacher coordination, recruitment, and training.",

    "My vision is to bring machine learning beyond experimentation by integrating trained models into modern, accessible web applications. I am particularly interested in healthcare AI and software that makes data-driven tools easier to interact with and apply in real-world settings.",
  ],

  focusAreas: [
    "Full-Stack Web Application Development (Next.js, React, TypeScript)",
    "Applied Machine Learning & Deep Learning (TensorFlow, Keras, Scikit-learn)",
    "Biomedical Signal Processing & EEG Brain Analysis",
    "Medical Image Analysis & Computer Vision Modeling",
    "Academic Administration & Digital Marketing (SEO-friendly copywriting)",
  ],
  researchInterests: [
    "Biomedical Signal Processing & EEG Analysis",
    "Neurological Disorder Detection & Healthcare AI",
    "Medical Data Modeling & Parameter Optimization",
    "Convolutional Neural Networks for Disease Diagnosis",
    "Quantum Circuit Simulation & Algorithm Exploration",
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    iconName: "Code",
    skills: ["Python"],
  },
  {
    id: "web-dev",
    title: "Web Development",
    iconName: "Globe",
    skills: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
    ],
  },
  {
    id: "data-science",
    title: "Data Science & ML",
    iconName: "Database",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "EEG Signal Processing",
    ],
  },
  {
    id: "tools",
    title: "Tools",
    iconName: "Wrench",
    skills: ["Git", "GitHub", "Canva", "Microsoft Office"],
  },
  {
    id: "soft-skills",
    title: "Soft Skills",
    iconName: "Users",
    skills: [
      "Leadership",
      "Communication",
      "Teamwork",
      "Problem-solving",
      "Administration and Management",
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: "dracademy",
    role: "Executive, Academic Management",
    organization: "The DrAcademy",
    orgContext:
      "Medical coaching center for UK Royal College courses, PLAB, and OET",
    period: "August 2025 – June 2026",
    type: "Professional Employment",
    responsibilities: [
      "Focused primarily on digital marketing: wrote SEO-friendly advertising copy for Google and Facebook campaigns, YouTube content, and website blog posts.",
      "Applied basic SEO practices, including meta descriptions, heading structuring, avoiding repeated H1 headings, image alt text, and content ideation.",
      "Managed student relationships and mentor communication.",
      "Oversaw eLearning management, class management, and study materials preparation.",
      "Supported HR and administration functions.",
    ],
    note: "Role concluded due to company budget cuts.",
  },
  {
    id: "udvash",
    role: "Batch Coordinator, Q&A",
    organization: "Udvash",
    period: "October 2023 – January 2024",
    type: "Professional Employment",
    responsibilities: [
      "Monitored teacher interaction with students and assured quality of teacher responses.",
      "Administered teachers and prepared payment schemes for teaching staff.",
      "Conducted teacher training and teacher recruitment.",
    ],
  },
  {
    id: "bio-photomatix",
    role: "ML/AI Researcher",
    organization: "Group of Bio-Photomatix",
    period: "February 2024 – July 2026",
    type: "Independent, Unpaid, Remote Research",
    orgContext:
      "Independent research work conducted remotely alongside professional employment",
    responsibilities: [
      "Performed brain signal processing, image data processing, and feature extraction for biomedical research.",
      "Carried out medical data modeling and parameter tuning for machine learning models.",
      "Contributed to manuscript writing for research publications.",
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    id: "msc-swe",
    degree: "MSc in Software Engineering",
    major: "Data Science",
    institution: "Daffodil International University",
    location: "Dhaka, Bangladesh",
    period: "2023 – 2025",
    thesis: {
      title:
        "Major Depressive Disorder Diagnostics: Early Detection Through Advanced Deep Learning Analysis of Physiological Signal",
    },
  },
  {
    id: "bsc-swe",
    degree: "BSc in Software Engineering",
    major: "Data Science",
    institution: "Daffodil International University",
    location: "Dhaka, Bangladesh",
    period: "2019 – 2023",
    thesis: {
      title:
        "Research on Psychological Impact for Excessive Using of Smart Device with Respect to Social Media Addiction Using Artificial Neural Network",
    },
  },
];

export const courseworkData = [
  "Machine Learning Driven Data Analysis",
  "Statistical Data Analysis",
  "Data Science Major Capstone Project",
  "Applied Machine Learning",
  "Research Design and Applications for Data and Analysis",
  "Data Visualization and Communication",
  "Artificial Intelligence",
  "Object Oriented Design and Concepts",
  "Software Project Management",
];

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-hrdi",
    title: "Analytics Decision Making",
    issuer: "HRDI, Daffodil International University",
    topics: "Data Analysis, Visualization, Modeling",
  },
  {
    id: "cert-fcc",
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    topics: "HTML, JavaScript, Bootstrap",
  },
  {
    id: "cert-it-solution",
    title: "Office Application Course",
    issuer: "IT Solution",
    topics: "Microsoft Word, Excel, PowerPoint, Outlook, Access",
  },
];

export const publicationsData: PublicationItem[] = [
  {
    id: "pub-1",
    title:
      "Lightweight 1D Convolutional Neural Network Architecture for Detecting Epileptic Seizures",
    conference:
      "4th International Conference on Intelligent Cyber Physical Systems and Internet of Things (ICoICI 2026)",
    dateOrYear: "1–3 September 2026",
  },
  {
    id: "pub-2",
    title:
      "Gastrointestinal Health: A Convolutional Neural Network Approach for Gastrointestinal Disorders Prediction for Disease Diagnosis",
    conference:
      "16th International IEEE Conference on Computing, Communication and Networking Technologies (ICCCNT)",
    dateOrYear: "2025",
  },
];

export const activitiesData: ActivityItem[] = [
  {
    id: "act-1",
    title:
      "Participated in the 3MT Thesis Competition at the National Data Science & AI Startup Bootcamp 2024",
    year: "2024",
    description:
      "Presented research insights at Daffodil International University during the National Data Science & AI Startup Bootcamp.",
  },
  {
    id: "act-2",
    title: "Attended the Workshop on Data Science and Applied Machine Learning",
    year: "2024",
    description:
      "Hands-on academic workshop conducted at Daffodil International University covering modern applied machine learning techniques.",
  },
  {
    id: "act-3",
    title: "Member of the Data Science Club",
    year: "2022-2025",
    description:
      "Active member of the Data Science Club at Daffodil International University, participating in technical seminars and knowledge sharing.",
  },
  {
    id: "act-4",
    title: "Represented DIU at Teknofest-2022 Online",
    year: "2022",
    description:
      "Represented Daffodil International University internationally through the International Affairs division at Teknofest-2022.",
  },
  {
    id: "act-5",
    title:
      "Worked with Daffodil Prothom Alo Bondhushova and performed as a 'Nut Seller' in Choruivati",
    year: "2021-2022",
    description:
      "Cultural engagement and theatrical performance with Daffodil Prothom Alo Bondhushova during the Choruivati cultural event.",
  },
  {
    id: "act-6",
    title: "Volunteered with the DIU Voluntary Service Club",
    year: "2021",
    description:
      "Assisted university operations and logistical execution including admission-test candidate support and guidance.",
  },
  {
    id: "act-7",
    title:
      "Assisted in decorating and performing at the Freshers Reception Program",
    year: "2019",
    description:
      "Stage design, venue decoration, and cultural performance for welcoming incoming university batches.",
  },
  {
    id: "act-8",
    title: "Worked with the Daffodil Photography Club",
    year: "2019-2020",
    description:
      "Explored creative photography, framing techniques, and visual documentation projects.",
  },
];

export const awardsData: AwardItem[] = [
  {
    id: "award-1",
    title: "Merit Award",
    year: "2013",
    description:
      "Recognized for meritorious academic achievement in the Junior School Certificate Examination 2013.",
  },
];

export const academicReferences: AcademicReference[] = [
  {
    name: "Imran Mahmud",
    designation: "Associate Professor and Head",
    department: "Department of Software Engineering",
    institution: "Daffodil International University",
    location: "Birulia, Savar, Dhaka, Bangladesh",
    email: "imranmahmud@daffodilvarsity.edu.bd",
    phone: "+8801711370502",
  },
  {
    name: "Afsana Begum",
    designation: "Assistant Professor",
    department: "Department of Software Engineering",
    institution: "Daffodil International University",
    location: "Birulia, Savar, Dhaka, Bangladesh",
    email: "afsana.swe@diu.edu.bd",
    phone: "+8801717545414",
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "bazar-dor",
    slug: "bazar-dor",
    name: "Bazar Dor",
    tagline: "Bengali Daily Market Price Tracker",
    shortDescription:
      "Market-price web application with product browsing, price tracking, and user authentication.",
    fullOverview:
      "A Bengali-language daily market price tracker built with Next.js and Tailwind CSS. It shows today's prices for essential grocery commodities such as rice, lentils, oil, vegetables, fish, meat, eggs, and spices, highlights price increases and decreases compared to yesterday, and provides market-by-market price ranges. Includes full user authentication with Google and GitHub sign-in.",
    purpose:
      "To provide consumers with transparent, accessible, and up-to-date market prices for essential food commodities in Bangladesh, helping them track price fluctuations and make informed purchasing decisions across different local markets.",
    image: "/images/projects/bazar-dor.svg",
    tags: ["Next.js", "React", "Tailwind CSS", "MongoDB", "better-auth"],
    liveUrl: "https://bazar-dor-puce.vercel.app/",
    githubUrl: "https://github.com/theopsupcorp1009/bazar-dor",
    verifiedFeatures: [
      "Daily price overview with a hero banner displaying the current date and quick links to all product categories",
      "Price movement sections highlighting items whose prices went up ('আজ দাম বেড়েছে') and went down ('আজ দাম কমেছে') compared to yesterday",
      "All products catalog with client/server sorting (default order, price low-to-high, price high-to-low)",
      "Dedicated category pages (/category/[categoryId]) with category icons, product counts, and sortable product grids",
      "Detailed product pages (/products/[productId]) displaying today's price, unit, percentage change, lowest, highest, and average prices, plus market-by-market price ranges",
      "Live scrolling price ticker (marquee) linking directly to individual products",
      "Authentication via better-auth supporting email/password sign-up/in and Google/GitHub OAuth",
      "Protected routes (/profile, /profile/update, /products/*, /category/*) requiring session authentication with post-login redirect",
      "User profile page and profile update functionality (changing display name and avatar)",
      "Fully localized Bengali interface using Bengali numerals and authentic unit terminology",
    ],
    techStack: {
      Framework: "Next.js 16 (App Router)",
      "Language & Runtime": "JavaScript (React 19 with React Compiler)",
      Styling: "Tailwind CSS v4, daisyUI",
      Authentication: "better-auth + @better-auth/mongo-adapter",
      Database: "MongoDB",
      Icons: "react-icons",
      Notifications: "react-toastify",
      "Live Ticker": "react-marquee-text",
      "Data Source": "External REST API (products and categories)",
      "Hosting & Deployment": "Vercel",
    },
    implementationDetails: [
      "Built with Next.js App Router and React 19, taking advantage of the React Compiler for automatic memoization and optimal rendering performance.",
      "Configured better-auth with MongoDB adapter for secure session handling, OAuth callbacks for Google and GitHub, and custom credentials management.",
      "Implemented auth-gated middleware (proxy.js) protecting sensitive user profile and product detail routes.",
      "Developed a custom sorting engine and dynamic category routing system for fluid client navigation.",
      "Designed a responsive layout with a dedicated mobile header, custom loading spinners, and an on-brand 404 page.",
    ],
  },
  {
    id: "bangla-news-24",
    slug: "bangla-news-24",
    name: "Bangla News 24",
    tagline: "Dynamic Bengali News Portal",
    shortDescription:
      "News portal with live headlines, category browsing, Most Read, and user authentication.",
    fullOverview:
      "A modern Bengali-language news portal built with Next.js, TypeScript, and Tailwind CSS. It pulls live headlines and articles from an external news API, organizes stories into structured topics, and includes full user authentication with email verification and password reset flows.",
    purpose:
      "To deliver a real-time, categorized news reading experience with live headline streaming, curated editorial sections, and secure reader account management.",
    image: "/images/projects/bangla-news-24.svg",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "better-auth",
      "MongoDB",
      "Resend",
    ],
    liveUrl: "https://bangla-news-24-woad.vercel.app/",
    githubUrl: "https://github.com/theopsupcorp1009/bangla-news-24",
    verifiedFeatures: [
      "Live news feed fetched from an external news API, rendered as a comprehensive homepage with main headlines, sectioned stories, and a 'Most Read' sidebar",
      "Category pages (/category/[categoryId]) organizing articles by specific topics and beats",
      "Article detail pages (/news/[newsId]) with full article body, high-resolution imagery, and journalistic source attribution",
      "Authentication via better-auth supporting email/password and Google OAuth sign-in",
      "Email verification pipeline sent via Resend before account activation",
      "Forgot password / reset password workflow with secure emailed reset links",
      "Protected routes (/profile and /news/*) requiring an authenticated session",
      "Authenticated user profile dashboard displaying member details and reading status",
      "Live scrolling news marquee ticker, responsive navigation drawer for mobile devices, and pagination for article archives",
      "Bengali-localized transactional email templates for account verification and password recovery",
    ],
    techStack: {
      Framework: "Next.js 16 (App Router)",
      Language: "TypeScript",
      Styling: "Tailwind CSS v4, daisyUI",
      Authentication: "better-auth + @better-auth/mongo-adapter",
      Database: "MongoDB",
      "Transactional Email": "Resend",
      Icons: "lucide-react, react-icons",
      Notifications: "react-toastify",
      "News Data Source": "External News API (news-api-v2.vercel.app)",
      "Hosting & Deployment": "Vercel",
    },
    implementationDetails: [
      "Engineered with Next.js App Router and TypeScript, enforcing strict typing for news headlines, article payloads, and category schemas.",
      "Integrated better-auth with MongoDB persistence, configuring multi-factor verification logic using Resend for transactional emails in Bengali.",
      "Implemented route-level middleware in proxy.ts to enforce auth gates on article reading and profile management.",
      "Constructed a high-throughput homepage layout combining server-rendered lead stories with client-hydrated news tickers and sidebar widgets.",
      "Configured robust error handling, loading skeletons, and custom 404 views.",
    ],
  },
  {
    id: "fitlog",
    slug: "fitlog",
    name: "FitLog",
    tagline: "Workout Library & Gym Companion",
    shortDescription:
      "Gym companion to build workout plans, track exercises, minutes and calories.",
    fullOverview:
      "A dark, focused gym companion and workout library built with Next.js. Users can browse a comprehensive library of 12 workouts covering every major muscle group, inspect detailed specifications and step-by-step instructions, add exercises to 'Today's Plan' or save them for later, and track exercises, minutes, and calories in a unified dashboard.",
    purpose:
      "To provide gym-goers with an immediate, distraction-free tool to browse exercise libraries, assemble daily workout routines, monitor training volume, and retain routine progress across browser sessions.",
    image: "/images/projects/fitlog.svg",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "React Context API",
      "React Toastify",
    ],
    liveUrl: "https://fit-log-pink-seven.vercel.app/",
    githubUrl: "https://github.com/theopsupcorp1009/fit-log",
    verifiedFeatures: [
      "Workout library containing 12 workouts across major muscle groups with difficulty ratings, equipment, duration, calories, and instructions",
      "Individual workout detail pages (/exercises/[id]) providing step-by-step execution instructions and physiological specifications",
      "Dual action buttons to add workouts directly to 'Today's Plan' or 'Save for Later', accompanied by interactive toast alerts",
      "Real-time navbar badge counters reflecting planned and saved exercise totals with instant routing to the management dashboard",
      "Dedicated My Plan dashboard (/myplan) with live aggregated metrics: Exercises, Minutes, and Calories",
      "Tabbed management interface between 'Today's Plan' and 'Saved' routines with actions to Mark as Done and Remove",
      "Multi-criteria plan sorting by Duration, Calories, or Rating",
      "Client-side persistence via browser LocalStorage ensuring workout routines survive page reloads",
      "Smart plan limits automatically capping daily planned workouts at 5 to prevent overtraining",
      "Custom branded 404 page and responsive layout across mobile, tablet, and desktop viewports",
    ],
    techStack: {
      Framework: "Next.js (App Router)",
      "UI Library": "React",
      Styling: "Tailwind CSS, DaisyUI",
      "State Management": "React Context API",
      "Data Persistence": "Browser LocalStorage",
      Icons: "React Icons",
      Notifications: "React Toastify",
      API: "FitLog REST API (api.abcz.workers.dev)",
      "Hosting & Deployment": "Vercel",
    },
    implementationDetails: [
      "Architected using Next.js App Router with React Context API providing unified global state for planned and saved workouts.",
      "Implemented a two-way synchronization layer between React Context state and browser LocalStorage, preventing state loss on reload.",
      "Integrated dynamic fetching against the FitLog REST API for full library catalogs and individual exercise endpoints.",
      "Designed an accessible dark UI using Tailwind CSS and DaisyUI, featuring custom badge counters and responsive grid breakpoints.",
    ],
  },
  {
    id: "alzheimer-dementia-classifier",
    slug: "alzheimer-dementia-classifier",
    name: "Alzheimer Dementia Classifier",
    tagline: "Deep Learning MRI Dementia Stage Classifier",
    shortDescription:
      "Deep learning-powered MRI classifier for dementia severity classification.",
    fullOverview:
      "An AI-powered web prototype built with Streamlit and TensorFlow for classifying brain MRI scans into dementia severity stages using a trained Convolutional Neural Network (CNN). The application incorporates perceptual image hashing for MRI validation and displays prediction probabilities across four dementia severity classes.",
    purpose:
      "An educational deep learning prototype exploring automated brain MRI analysis to categorize scans into four severity classes and visualize prediction confidence distributions.",
    disclaimer:
      "This project is a research prototype built for educational purposes only. It is not a medical device and must not be used for actual clinical diagnosis, medical decision-making, or patient evaluation. Always consult a qualified healthcare professional for medical advice.",
    image: "/images/projects/alzheimer-dementia-classifier.svg",
    tags: ["Streamlit", "TensorFlow", "Keras", "ImageHash", "Pillow", "NumPy"],
    liveUrl:
      "https://alzheimer-dimentia-classifier-app-dbbudbgwneodzvmhusvl8o.streamlit.app/",
    githubUrl: "https://github.com/theopsupcorp1009/Alzheimer-Stage-Classifier",
    verifiedFeatures: [
      "Drag-and-drop web uploader accepting brain MRI images in .jpg, .jpeg, and .png formats",
      "Pre-inference MRI validation using perceptual image hashing (average hash) against reference MRI scans to reject non-medical images",
      "Automated image preprocessing pipeline: grayscale conversion, resizing to 128x128 pixels, and [0, 1] value normalization",
      "Trained Convolutional Neural Network (CNN) model (model.keras) performing inference across 4 dementia stages",
      "Classification into four distinct stages: Non Demented, Very Mild Demented, Mild Demented, and Moderate Demented",
      "Visual prediction output card with animated probability breakdown bars for all 4 candidate classes",
      "Transparent documentation of heuristic limitations and non-clinical prototype scope",
    ],
    techStack: {
      "UI Framework": "Streamlit",
      "Deep Learning": "TensorFlow, Keras (CNN)",
      "Image Processing": "Pillow (PIL)",
      "Validation Heuristic": "ImageHash (perceptual hashing)",
      "Numerical Operations": "NumPy",
      "Hosting & Deployment": "Streamlit Community Cloud",
    },
    implementationDetails: [
      "Constructed a validation filter using ImageHash average perceptual hashing against a curated reference MRI dataset to reject out-of-domain uploads.",
      "Implemented image tensor reshaping to (1, 128, 128, 1) matching the input dimensions of the trained CNN architecture.",
      "Deployed the trained Keras model artifact (.keras) for real-time inference within a lightweight Streamlit interface.",
      "Designed responsive probability bars presenting full softmax probability distributions for comparative diagnostic analysis.",
    ],
  },
  {
    id: "quantum-circuit-explorer",
    slug: "quantum-circuit-explorer",
    name: "Quantum Circuit Explorer",
    tagline: "Interactive Quantum Circuit Simulation & Visualization",
    shortDescription:
      "Interactive web app for building, simulating, and visualizing circuits with Bloch sphere.",
    fullOverview:
      "An interactive web application built with Streamlit and Qiskit for designing, simulating, and visualizing quantum circuits. Users can select from 12 classic quantum algorithms and demonstrations, adjust qubit count and shot counts in real-time, customize Rx/Ry/Rz rotation angles, and visualize circuit diagrams, measurement histograms, and Bloch sphere state representations.",
    purpose:
      "To provide students, researchers, and quantum computing enthusiasts with an accessible, visual playground to explore quantum superposition, entanglement, algorithms, and state representations interactively.",
    image: "/images/projects/quantum-circuit-explorer.svg",
    tags: ["Streamlit", "Qiskit", "Qiskit Aer", "Matplotlib"],
    liveUrl:
      "https://quantum-circuit-explorer-hhjif38rxyvkvsm7vljm4z.streamlit.app/",
    githubUrl: "https://github.com/theopsupcorp1009/Quantum-Circuit-Explorer",
    verifiedFeatures: [
      "12 built-in quantum circuits and algorithms: Bell State, GHZ State, Superposition, Custom Circuit (Rx/Ry/Rz), Quantum Teleportation, Quantum Fourier Transform (QFT), Grover's Algorithm, Deutsch–Jozsa Algorithm, Quantum Phase Estimation (QPE), Quantum Coin Toss, Bell-State Measurement, SWAP Test, and W-State",
      "Real-time parameter tuning: interactive sliders for qubit counts, shot counts (e.g. 1024 shots), and custom gate rotation angles",
      "Live quantum circuit diagram generation rendered dynamically upon configuration changes",
      "Quantum measurement simulation executed locally using the Qiskit Aer simulation backend",
      "Statistical measurement result histograms plotting output state frequencies and basis probabilities",
      "Interactive Bloch sphere visualization for circuits with up to 3 qubits, depicting state vector trajectories",
      "Modular Python architecture separating circuit construction (builder.py) and simulation/plotting (simulator.py)",
    ],
    techStack: {
      "UI Framework": "Streamlit",
      "Quantum SDK": "Qiskit",
      "Simulation Backend": "Qiskit Aer",
      Visualization: "Matplotlib, Qiskit Visualization",
      "Hosting & Deployment": "Hugging Face Spaces / Streamlit Community Cloud",
    },
    implementationDetails: [
      "Organized codebase into a modular explorer package with builder.py for algorithmic circuit synthesis and simulator.py for Qiskit Aer execution.",
      "Constructed customizable parameterized circuits supporting arbitrary single-qubit rotations (Rx, Ry, Rz) and multi-qubit entangling gates (CNOT, Toffoli).",
      "Implemented statevector calculation and Bloch vector projection for visual inspection of qubit superposition states.",
      "Configured automatic simulation execution with configurable shot samples and Matplotlib figure rendering for web display.",
    ],
  },
];

// ==================== TIMELINE.JS (ADVANCED WITH TRANSLATION & FIXED RTL) ====================
// هذا الملف خاص بصفحة timeline.html فقط
// المميزات: Scroll Animation + Load More + Skeleton متسلسل + ترجمة + سهم RTL

// بيانات الـ Timeline (من الأحدث للأقدم)
// const timelineData = [
//   {
//     id: 1,
//     icon: "fa-rocket",
//     date: "2026",
//     dateEnd: "Future",
//     titleKey: "timeline_future_title",
//     descKey: "timeline_future_desc",
//     longKey: "timeline_future_long",
//     roleKey: "timeline_future_role",
//     locationKey: "timeline_future_location",
//     achievementKeys: [
//       "timeline_future_achievement_1",
//       "timeline_future_achievement_2",
//       "timeline_future_achievement_3",
//     ],
//     defaultTitle: "Open for New Opportunities",
//     defaultDesc:
//       "B2 English | Looking for Full Stack Roles | Continuous Learning",
//     defaultLong:
//       "Actively seeking Full Stack Developer positions where I can leverage my skills in .NET Core, Angular, and cloud technologies. Open to remote and on-site opportunities.",
//     defaultRole: "Job Seeker",
//     defaultLocation: "Remote / Egypt",
//     defaultAchievements: [
//       "B2 English Certification",
//       "Continuous learning in Cloud & AI",
//       "Available for immediate start",
//     ],
//     tags: ["React", "Node.js", "Cloud", "AI"],
//     color: "future",
//     status: "upcoming",
//   },
//   {
//     id: 2,
//     icon: "fa-heartbeat",
//     date: "08/2025",
//     dateEnd: "Present",
//     titleKey: "timeline_medical_title",
//     descKey: "timeline_medical_desc",
//     longKey: "timeline_medical_long",
//     roleKey: "timeline_medical_role",
//     locationKey: "timeline_medical_location",
//     achievementKeys: [
//       "timeline_medical_achievement_1",
//       "timeline_medical_achievement_2",
//       "timeline_medical_achievement_3",
//       "timeline_medical_achievement_4",
//       "timeline_medical_achievement_5",
//     ],
//     defaultTitle: "Comprehensive Medical Platform",
//     defaultDesc:
//       "EHR | Telemedicine | RBAC | Real-time Notifications | Scalable Architecture",
//     defaultLong:
//       "Developed and maintained a secure medical platform providing appointment scheduling, Electronic Health Records (EHR), telemedicine, and clinic management. Worked on both frontend and backend to deliver scalable, high-performance solutions with strong focus on data security and healthcare compliance.",
//     defaultRole: "Full Stack Developer",
//     defaultLocation: "Cairo, Egypt",
//     defaultAchievements: [
//       "Delivered a functional MVP within a short timeline, including appointment booking and EHR modules",
//       "Reduced appointment booking time by ~60% through UI/UX and workflow optimization",
//       "Implemented role-based access control and encrypted data storage for sensitive medical records",
//       "Built real-time notifications and reminders, reducing patient no-show rates by ~40%",
//       "Designed a scalable architecture capable of handling thousands of medical records efficiently",
//     ],
//     tags: [".NET Core", "Angular", "SQL Server", "SignalR", "Azure"],
//     color: "medical",
//     status: "current",
//   },
//   {
//     id: 3,
//     icon: "fa-flag",
//     date: "03/2025",
//     dateEnd: "06/2025",
//     titleKey: "timeline_saudi_title",
//     descKey: "timeline_saudi_desc",
//     longKey: "timeline_saudi_long",
//     roleKey: "timeline_saudi_role",
//     locationKey: "timeline_saudi_location",
//     achievementKeys: [
//       "timeline_saudi_achievement_1",
//       "timeline_saudi_achievement_2",
//       "timeline_saudi_achievement_3",
//     ],
//     defaultTitle: "Social Media Services - Saudi Company",
//     defaultDesc: "Mobile-friendly landing page design and development",
//     defaultLong:
//       "Designed and developed a mobile-friendly landing page for a Saudi social media services company using HTML5, CSS3, Bootstrap, and Tailwind CSS. Focused on clear content structure, reusable components, and performance optimization to align with the brand and improve user experience.",
//     defaultRole: "Front-End Developer",
//     defaultLocation: "Gada, Saudi Arabia (Remote)",
//     defaultAchievements: [
//       "Built fully responsive landing page",
//       "Optimized performance for mobile devices",
//       "Reusable component architecture",
//     ],
//     tags: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
//     color: "saudi",
//     status: "completed",
//   },
//   {
//     id: 4,
//     icon: "fa-calendar-alt",
//     date: "12/2024",
//     dateEnd: "03/2025",
//     titleKey: "timeline_event_title",
//     descKey: "timeline_event_desc",
//     longKey: "timeline_event_long",
//     roleKey: "timeline_event_role",
//     locationKey: "timeline_event_location",
//     achievementKeys: [
//       "timeline_event_achievement_1",
//       "timeline_event_achievement_2",
//       "timeline_event_achievement_3",
//       "timeline_event_achievement_4",
//     ],
//     defaultTitle: "Event Management Platform",
//     defaultDesc: "Venue Booking | Budget Tracking | Real-time Updates",
//     defaultLong:
//       "Designed and developed a complete website for event organization with full stack technologies. Implemented booking features, including venue availability management and budget tracking. Built an intuitive and responsive UI, enhancing the user journey for seamless event planning and booking.",
//     defaultRole: "Full Stack Developer",
//     defaultLocation: "Aswan, Egypt",
//     defaultAchievements: [
//       "Complete event booking system",
//       "Venue availability management",
//       "Budget tracking feature",
//       "Real-time updates for event operations",
//     ],
//     tags: [".NET Core", "Angular", "MongoDB", "REST API"],
//     color: "event",
//     status: "completed",
//   },
//   {
//     id: 5,
//     icon: "fa-coins",
//     date: "10/2024",
//     dateEnd: "07/2025",
//     titleKey: "timeline_pointpay_title",
//     descKey: "timeline_pointpay_desc",
//     longKey: "timeline_pointpay_long",
//     roleKey: "timeline_pointpay_role",
//     locationKey: "timeline_pointpay_location",
//     achievementKeys: [
//       "timeline_pointpay_achievement_1",
//       "timeline_pointpay_achievement_2",
//       "timeline_pointpay_achievement_3",
//       "timeline_pointpay_achievement_4",
//     ],
//     defaultTitle: "PointPay - E-commerce Rewards Platform",
//     defaultDesc:
//       "CQRS | Mediator | Clean Architecture | Customer loyalty system",
//     defaultLong:
//       "Designed and developed a customer loyalty system where users earn points through purchases and recycling initiatives, with the option to donate points to charities. Collaborated with a development team to implement secure, scalable, and user-friendly features using ASP.NET MVC, Web API, and Angular.",
//     defaultRole: "Full Stack Developer",
//     defaultLocation: "ITI Project",
//     defaultAchievements: [
//       "Applied CQRS, Mediator, and Unit of Work patterns",
//       "Clean Architecture with Entity Framework Core",
//       "Optimized database performance",
//       "Point donation system for charities",
//     ],
//     tags: ["CQRS", "Mediator", "Clean Arch", "ASP.NET MVC", "Angular"],
//     color: "pointpay",
//     status: "completed",
//   },
//   {
//     id: 6,
//     icon: "fa-graduation-cap",
//     date: "10/2024",
//     dateEnd: "07/2025",
//     titleKey: "timeline_iti_title",
//     descKey: "timeline_iti_desc",
//     longKey: "timeline_iti_long",
//     roleKey: "timeline_iti_role",
//     locationKey: "timeline_iti_location",
//     achievementKeys: [
//       "timeline_iti_achievement_1",
//       "timeline_iti_achievement_2",
//       "timeline_iti_achievement_3",
//       "timeline_iti_achievement_4",
//     ],
//     defaultTitle: "ITI Professional Track",
//     defaultDesc: "BI-infused CRM (9 Months) | Professional Certificate",
//     defaultLong:
//       "Intensive 9-month professional program specializing in BI-infused CRM development. Gained hands-on experience with Microsoft Dynamics 365, Power BI, and modern software development practices.",
//     defaultRole: "Trainee",
//     defaultLocation: "ITI - Information Technology Institute",
//     defaultAchievements: [
//       "Completed 9-month intensive program",
//       "Mastered Dynamics 365 CRM",
//       "Power BI data visualization",
//       "Agile development practices",
//     ],
//     tags: ["CRM", "Power BI", ".NET", "Dynamics 365"],
//     color: "iti",
//     status: "completed",
//   },
//   {
//     id: 7,
//     icon: "fa-book",
//     date: "06/2024",
//     dateEnd: "10/2024",
//     titleKey: "timeline_study_title",
//     descKey: "timeline_study_desc",
//     longKey: "timeline_study_long",
//     roleKey: "timeline_study_role",
//     locationKey: "timeline_study_location",
//     achievementKeys: [
//       "timeline_study_achievement_1",
//       "timeline_study_achievement_2",
//       "timeline_study_achievement_3",
//       "timeline_study_achievement_4",
//     ],
//     defaultTitle: "Self Study for ITI Program",
//     defaultDesc:
//       "Intensive preparation for ITI admission | .NET Core | Angular | DSA",
//     defaultLong:
//       "Focused self-study period to prepare for ITI admission exams and technical interviews. Covered advanced .NET Core concepts, Angular framework, data structures, and algorithms.",
//     defaultRole: "Self Learner",
//     defaultLocation: "Cairo, Egypt",
//     defaultAchievements: [
//       "Mastered .NET Core fundamentals",
//       "Angular framework proficiency",
//       "Data Structures & Algorithms",
//       "Successfully passed ITI admission",
//     ],
//     tags: [".NET Core", "Angular", "Data Structures", "Algorithms"],
//     color: "study",
//     status: "completed",
//   },
//   {
//     id: 8,
//     icon: "fa-shield-alt",
//     date: "04/2023",
//     dateEnd: "06/2024",
//     titleKey: "timeline_military_title",
//     descKey: "timeline_military_desc",
//     longKey: "timeline_military_long",
//     roleKey: "timeline_military_role",
//     locationKey: "timeline_military_location",
//     achievementKeys: [
//       "timeline_military_achievement_1",
//       "timeline_military_achievement_2",
//       "timeline_military_achievement_3",
//     ],
//     defaultTitle: "Military Service",
//     defaultDesc: "National Service - Completed",
//     defaultLong:
//       "Completed mandatory military service in Egypt. Developed discipline, teamwork, and leadership skills in a structured environment.",
//     defaultRole: "Soldier",
//     defaultLocation: "Egypt",
//     defaultAchievements: [
//       "Successfully completed national service",
//       "Developed strong discipline and teamwork",
//       "Leadership experience",
//     ],
//     tags: ["Discipline", "Teamwork", "Leadership"],
//     color: "military",
//     status: "completed",
//   },
//   {
//     id: 9,
//     icon: "fa-code",
//     date: "07/2022",
//     dateEnd: "04/2023",
//     titleKey: "timeline_personal_title",
//     descKey: "timeline_personal_desc",
//     longKey: "timeline_personal_long",
//     roleKey: "timeline_personal_role",
//     locationKey: "timeline_personal_location",
//     achievementKeys: [
//       "timeline_personal_achievement_1",
//       "timeline_personal_achievement_2",
//       "timeline_personal_achievement_3",
//       "timeline_personal_achievement_4",
//     ],
//     defaultTitle: "Personal Projects & Skill Development",
//     defaultDesc: "Enhancing .NET Core, Angular, and Data Structures knowledge",
//     defaultLong:
//       "Focused on building personal projects to enhance full-stack development skills. Worked on multiple projects including e-commerce platforms, recipe apps, and UI clones to strengthen practical knowledge.",
//     defaultRole: "Self Learner",
//     defaultLocation: "Egypt",
//     defaultAchievements: [
//       "Built multiple full-stack projects",
//       "Enhanced problem-solving skills",
//       "GitHub portfolio development",
//       "Continuous learning mindset",
//     ],
//     tags: [".NET Core", "Angular", "DSA", "Problem Solving"],
//     color: "personal",
//     status: "completed",
//   },
//   {
//     id: 10,
//     icon: "fa-language",
//     date: "09/2021",
//     dateEnd: "07/2022",
//     titleKey: "timeline_hiero_title",
//     descKey: "timeline_hiero_desc",
//     longKey: "timeline_hiero_long",
//     roleKey: "timeline_hiero_role",
//     locationKey: "timeline_hiero_location",
//     achievementKeys: [
//       "timeline_hiero_achievement_1",
//       "timeline_hiero_achievement_2",
//       "timeline_hiero_achievement_3",
//       "timeline_hiero_achievement_4",
//     ],
//     defaultTitle: "Hieroglyphic Text Translation Platform",
//     defaultDesc:
//       "AI-powered translation of Ancient Egyptian Hieroglyphics | Grade: Excellent (A)",
//     defaultLong:
//       "Built a mobile app that translates hieroglyphic texts into modern languages using Machine Learning and Natural Language Processing. Contributed to both frontend and backend using Flutter, Dart, and Firebase. Implemented and trained ML models to improve translation accuracy.",
//     defaultRole: "Mobile Developer",
//     defaultLocation: "Luxor University",
//     defaultAchievements: [
//       "AI-powered translation system",
//       "Flutter & Firebase implementation",
//       "ML model training and optimization",
//       "Grade: Excellent (A)",
//     ],
//     tags: ["Flutter", "Dart", "Firebase", "ML", "NLP"],
//     color: "hiero",
//     status: "completed",
//   },
//   {
//     id: 11,
//     icon: "fa-university",
//     date: "09/2018",
//     dateEnd: "07/2022",
//     titleKey: "timeline_university_title",
//     descKey: "timeline_university_desc",
//     longKey: "timeline_university_long",
//     roleKey: "timeline_university_role",
//     locationKey: "timeline_university_location",
//     achievementKeys: [
//       "timeline_university_achievement_1",
//       "timeline_university_achievement_2",
//       "timeline_university_achievement_3",
//       "timeline_university_achievement_4",
//     ],
//     defaultTitle: "Bachelor's Degree in Computer Science",
//     defaultDesc:
//       "Luxor University | Graduated with Distinction (GPA: 2.79, B-)",
//     defaultLong:
//       "Completed Bachelor's degree in Computer Science from Faculty of Computing and Informatics, Luxor University. Graduated with Distinction, specializing in software development and algorithms.",
//     defaultRole: "Student",
//     defaultLocation: "Luxor, Egypt",
//     defaultAchievements: [
//       "Graduated with Distinction",
//       "GPA: 2.79 (B-)",
//       "Specialized in Software Development",
//       "Multiple academic projects",
//     ],
//     tags: ["Computer Science", "Software Engineering", "Algorithms"],
//     color: "university",
//     status: "completed",
//   },
// ];
// بيانات الـ Timeline (من الأحدث للأقدم)
const timelineData = [
  {
    id: 1,
    icon: "fa-rocket",
    date: "2026",
    dateEnd: "Future",
    titleKey: "timeline_future_title",
    descKey: "timeline_future_desc",
    longKey: "timeline_future_long",
    roleKey: "timeline_future_role",
    locationKey: "timeline_future_location",
    achievementKeys: [
      "timeline_future_achievement_1",
      "timeline_future_achievement_2",
      "timeline_future_achievement_3",
    ],
    defaultTitle: "Open for New Opportunities",
    defaultDesc:
      "B2 English | Looking for Full Stack Roles | Continuous Learning",
    defaultLong:
      "Actively seeking Full Stack Developer positions where I can leverage my skills in .NET Core, Angular, and cloud technologies. Open to remote and on-site opportunities.",
    defaultRole: "Job Seeker",
    defaultLocation: "Remote / Egypt",
    defaultAchievements: [
      "B2 English Certification",
      "Continuous learning in Cloud & AI",
      "Available for immediate start",
    ],
    tags: ["React", "Node.js", "Cloud", "AI"],
    color: "future",
    status: "upcoming",
    order: 1,
  },
  {
    id: 2,
    icon: "fa-heartbeat",
    date: "08/2025",
    dateEnd: "Present",
    titleKey: "timeline_medical_title",
    descKey: "timeline_medical_desc",
    longKey: "timeline_medical_long",
    roleKey: "timeline_medical_role",
    locationKey: "timeline_medical_location",
    achievementKeys: [
      "timeline_medical_achievement_1",
      "timeline_medical_achievement_2",
      "timeline_medical_achievement_3",
      "timeline_medical_achievement_4",
      "timeline_medical_achievement_5",
    ],
    defaultTitle: "Comprehensive Medical Platform",
    defaultDesc:
      "EHR | Telemedicine | RBAC | Real-time Notifications | Scalable Architecture",
    defaultLong:
      "Developed and maintained a secure medical platform providing appointment scheduling, Electronic Health Records (EHR), telemedicine, and clinic management. Worked on both frontend and backend to deliver scalable, high-performance solutions with strong focus on data security and healthcare compliance.",
    defaultRole: "Full Stack Developer",
    defaultLocation: "Cairo, Egypt",
    defaultAchievements: [
      "Delivered a functional MVP within a short timeline, including appointment booking and EHR modules",
      "Reduced appointment booking time by ~60% through UI/UX and workflow optimization",
      "Implemented role-based access control and encrypted data storage for sensitive medical records",
      "Built real-time notifications and reminders, reducing patient no-show rates by ~40%",
      "Designed a scalable architecture capable of handling thousands of medical records efficiently",
    ],
    tags: [".NET Core", "Angular", "SQL Server", "SignalR", "Azure"],
    color: "medical",
    status: "current",
    order: 2,
  },
  {
    id: 3,
    icon: "fa-flag",
    date: "03/2025",
    dateEnd: "06/2025",
    titleKey: "timeline_saudi_title",
    descKey: "timeline_saudi_desc",
    longKey: "timeline_saudi_long",
    roleKey: "timeline_saudi_role",
    locationKey: "timeline_saudi_location",
    achievementKeys: [
      "timeline_saudi_achievement_1",
      "timeline_saudi_achievement_2",
      "timeline_saudi_achievement_3",
    ],
    defaultTitle: "Social Media Services - Saudi Company",
    defaultDesc: "Mobile-friendly landing page design and development",
    defaultLong:
      "Designed and developed a mobile-friendly landing page for a Saudi social media services company using HTML5, CSS3, Bootstrap, and Tailwind CSS. Focused on clear content structure, reusable components, and performance optimization to align with the brand and improve user experience.",
    defaultRole: "Front-End Developer",
    defaultLocation: "Gada, Saudi Arabia (Remote)",
    defaultAchievements: [
      "Built fully responsive landing page",
      "Optimized performance for mobile devices",
      "Reusable component architecture",
    ],
    tags: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
    color: "saudi",
    status: "completed",
    order: 3,
  },
  {
    id: 4,
    icon: "fa-calendar-alt",
    date: "12/2024",
    dateEnd: "03/2025",
    titleKey: "timeline_event_title",
    descKey: "timeline_event_desc",
    longKey: "timeline_event_long",
    roleKey: "timeline_event_role",
    locationKey: "timeline_event_location",
    achievementKeys: [
      "timeline_event_achievement_1",
      "timeline_event_achievement_2",
      "timeline_event_achievement_3",
      "timeline_event_achievement_4",
    ],
    defaultTitle: "Event Management Platform",
    defaultDesc: "Venue Booking | Budget Tracking | Real-time Updates",
    defaultLong:
      "Designed and developed a complete website for event organization with full stack technologies. Implemented booking features, including venue availability management and budget tracking. Built an intuitive and responsive UI, enhancing the user journey for seamless event planning and booking.",
    defaultRole: "Full Stack Developer",
    defaultLocation: "Aswan, Egypt",
    defaultAchievements: [
      "Complete event booking system",
      "Venue availability management",
      "Budget tracking feature",
      "Real-time updates for event operations",
    ],
    tags: [".NET Core", "Angular", "MongoDB", "REST API"],
    color: "event",
    status: "completed",
    order: 4,
  },
  {
    id: 5,
    icon: "fa-coins",
    date: "10/2024",
    dateEnd: "07/2025",
    titleKey: "timeline_pointpay_title",
    descKey: "timeline_pointpay_desc",
    longKey: "timeline_pointpay_long",
    roleKey: "timeline_pointpay_role",
    locationKey: "timeline_pointpay_location",
    achievementKeys: [
      "timeline_pointpay_achievement_1",
      "timeline_pointpay_achievement_2",
      "timeline_pointpay_achievement_3",
      "timeline_pointpay_achievement_4",
    ],
    defaultTitle: "PointPay - E-commerce Rewards Platform",
    defaultDesc:
      "CQRS | Mediator | Clean Architecture | Customer loyalty system",
    defaultLong:
      "Designed and developed a customer loyalty system where users earn points through purchases and recycling initiatives, with the option to donate points to charities. Collaborated with a development team to implement secure, scalable, and user-friendly features using ASP.NET MVC, Web API, and Angular.",
    defaultRole: "Full Stack Developer",
    defaultLocation: "ITI Project",
    defaultAchievements: [
      "Applied CQRS, Mediator, and Unit of Work patterns",
      "Clean Architecture with Entity Framework Core",
      "Optimized database performance",
      "Point donation system for charities",
    ],
    tags: ["CQRS", "Mediator", "Clean Arch", "ASP.NET MVC", "Angular"],
    color: "pointpay",
    status: "completed",
    order: 5,
  },
  {
    id: 6,
    icon: "fa-graduation-cap",
    date: "10/2024",
    dateEnd: "07/2025",
    titleKey: "timeline_iti_title",
    descKey: "timeline_iti_desc",
    longKey: "timeline_iti_long",
    roleKey: "timeline_iti_role",
    locationKey: "timeline_iti_location",
    achievementKeys: [
      "timeline_iti_achievement_1",
      "timeline_iti_achievement_2",
      "timeline_iti_achievement_3",
      "timeline_iti_achievement_4",
    ],
    defaultTitle: "ITI Professional Track",
    defaultDesc: "BI-infused CRM (9 Months) | Professional Certificate",
    defaultLong:
      "Intensive 9-month professional program specializing in BI-infused CRM development. Gained hands-on experience with Microsoft Dynamics 365, Power BI, and modern software development practices.",
    defaultRole: "Trainee",
    defaultLocation: "ITI - Information Technology Institute",
    defaultAchievements: [
      "Completed 9-month intensive program",
      "Mastered Dynamics 365 CRM",
      "Power BI data visualization",
      "Agile development practices",
    ],
    tags: ["CRM", "Power BI", ".NET", "Dynamics 365"],
    color: "iti",
    status: "completed",
    order: 6,
  },
  {
    id: 7,
    icon: "fa-book",
    date: "06/2024",
    dateEnd: "10/2024",
    titleKey: "timeline_study_title",
    descKey: "timeline_study_desc",
    longKey: "timeline_study_long",
    roleKey: "timeline_study_role",
    locationKey: "timeline_study_location",
    achievementKeys: [
      "timeline_study_achievement_1",
      "timeline_study_achievement_2",
      "timeline_study_achievement_3",
      "timeline_study_achievement_4",
    ],
    defaultTitle: "Self Study for ITI Program",
    defaultDesc:
      "Intensive preparation for ITI admission | .NET Core | Angular | DSA",
    defaultLong:
      "Focused self-study period to prepare for ITI admission exams and technical interviews. Covered advanced .NET Core concepts, Angular framework, data structures, and algorithms.",
    defaultRole: "Self Learner",
    defaultLocation: "Cairo, Egypt",
    defaultAchievements: [
      "Mastered .NET Core fundamentals",
      "Angular framework proficiency",
      "Data Structures & Algorithms",
      "Successfully passed ITI admission",
    ],
    tags: [".NET Core", "Angular", "Data Structures", "Algorithms"],
    color: "study",
    status: "completed",
    order: 7,
  },
  {
    id: 8,
    icon: "fa-shield-alt",
    date: "04/2023",
    dateEnd: "06/2024",
    titleKey: "timeline_military_title",
    descKey: "timeline_military_desc",
    longKey: "timeline_military_long",
    roleKey: "timeline_military_role",
    locationKey: "timeline_military_location",
    achievementKeys: [
      "timeline_military_achievement_1",
      "timeline_military_achievement_2",
      "timeline_military_achievement_3",
    ],
    defaultTitle: "Military Service",
    defaultDesc: "National Service - Completed",
    defaultLong:
      "Completed mandatory military service in Egypt. Developed discipline, teamwork, and leadership skills in a structured environment.",
    defaultRole: "Soldier",
    defaultLocation: "Egypt",
    defaultAchievements: [
      "Successfully completed national service",
      "Developed strong discipline and teamwork",
      "Leadership experience",
    ],
    tags: ["Discipline", "Teamwork", "Leadership"],
    color: "military",
    status: "completed",
    order: 8,
  },
  {
    id: 9,
    icon: "fa-code",
    date: "07/2022",
    dateEnd: "04/2023",
    titleKey: "timeline_personal_title",
    descKey: "timeline_personal_desc",
    longKey: "timeline_personal_long",
    roleKey: "timeline_personal_role",
    locationKey: "timeline_personal_location",
    achievementKeys: [
      "timeline_personal_achievement_1",
      "timeline_personal_achievement_2",
      "timeline_personal_achievement_3",
      "timeline_personal_achievement_4",
    ],
    defaultTitle: "Personal Projects & Skill Development",
    defaultDesc: "Enhancing .NET Core, Angular, and Data Structures knowledge",
    defaultLong:
      "Focused on building personal projects to enhance full-stack development skills. Worked on multiple projects including e-commerce platforms, recipe apps, and UI clones to strengthen practical knowledge.",
    defaultRole: "Self Learner",
    defaultLocation: "Egypt",
    defaultAchievements: [
      "Built multiple full-stack projects",
      "Enhanced problem-solving skills",
      "GitHub portfolio development",
      "Continuous learning mindset",
    ],
    tags: [".NET Core", "Angular", "DSA", "Problem Solving"],
    color: "personal",
    status: "completed",
    order: 9,
  },
  {
    id: 10,
    icon: "fa-language",
    date: "09/2021",
    dateEnd: "07/2022",
    titleKey: "timeline_hiero_title",
    descKey: "timeline_hiero_desc",
    longKey: "timeline_hiero_long",
    roleKey: "timeline_hiero_role",
    locationKey: "timeline_hiero_location",
    achievementKeys: [
      "timeline_hiero_achievement_1",
      "timeline_hiero_achievement_2",
      "timeline_hiero_achievement_3",
      "timeline_hiero_achievement_4",
    ],
    defaultTitle: "Hieroglyphic Text Translation Platform",
    defaultDesc:
      "AI-powered translation of Ancient Egyptian Hieroglyphics | Grade: Excellent (A)",
    defaultLong:
      "Built a mobile app that translates hieroglyphic texts into modern languages using Machine Learning and Natural Language Processing. Contributed to both frontend and backend using Flutter, Dart, and Firebase. Implemented and trained ML models to improve translation accuracy.",
    defaultRole: "Mobile Developer",
    defaultLocation: "Luxor University",
    defaultAchievements: [
      "AI-powered translation system",
      "Flutter & Firebase implementation",
      "ML model training and optimization",
      "Grade: Excellent (A)",
    ],
    tags: ["Flutter", "Dart", "Firebase", "ML", "NLP"],
    color: "hiero",
    status: "completed",
    order: 10,
  },
  {
    id: 11,
    icon: "fa-university",
    date: "09/2018",
    dateEnd: "07/2022",
    titleKey: "timeline_university_title",
    descKey: "timeline_university_desc",
    longKey: "timeline_university_long",
    roleKey: "timeline_university_role",
    locationKey: "timeline_university_location",
    achievementKeys: [
      "timeline_university_achievement_1",
      "timeline_university_achievement_2",
      "timeline_university_achievement_3",
      "timeline_university_achievement_4",
    ],
    defaultTitle: "Bachelor's Degree in Computer Science",
    defaultDesc:
      "Luxor University | Graduated with Distinction (GPA: 2.79, B-)",
    defaultLong:
      "Completed Bachelor's degree in Computer Science from Faculty of Computing and Informatics, Luxor University. Graduated with Distinction, specializing in software development and algorithms.",
    defaultRole: "Student",
    defaultLocation: "Luxor, Egypt",
    defaultAchievements: [
      "Graduated with Distinction",
      "GPA: 2.79 (B-)",
      "Specialized in Software Development",
      "Multiple academic projects",
    ],
    tags: ["Computer Science", "Software Engineering", "Algorithms"],
    color: "university",
    status: "completed",
    order: 11,
  },
];
// ==================== متغيرات التحكم ====================
let currentIndex = 0;
let isLoading = false;
const ITEMS_PER_LOAD = 3;

// ==================== دالة جلب النص المترجم ====================
function getTranslatedText(key, defaultValue, translations) {
  if (translations && translations[key]) {
    return translations[key];
  }
  return defaultValue;
}

// ==================== عرض الـ Skeleton ====================
function showSkeletonLoader(count = ITEMS_PER_LOAD) {
  const container = document.getElementById("timeline-container");
  if (!container) return;

  if (currentIndex === 0) {
    // حفظ محتوى السهم إذا وجد
    const arrowContainer = document.querySelector(".timeline-arrow-container");
    container.innerHTML =
      '<div class="timeline-wrapper" id="timeline-wrapper"></div>';
    if (arrowContainer && currentIndex === 0) {
      // إعادة إضافة السهم بعد مسح المحتوى
      const section = document.querySelector(".timeline-section .container");
      if (section && !section.querySelector(".timeline-arrow-container")) {
        section.insertAdjacentElement("beforeend", arrowContainer);
      }
    }
  }

  const wrapper = document.getElementById("timeline-wrapper");
  if (!wrapper) return;

  const skeletons = Array(count)
    .fill()
    .map(
      () => `
    <div class="timeline-item skeleton-timeline-card">
      <div class="timeline-icon skeleton skeleton-icon"></div>
      <div class="timeline-content">
        <div class="timeline-date">
          <div class="skeleton skeleton-date-start"></div>
          <span class="timeline-arrow">→</span>
          <div class="skeleton skeleton-date-end"></div>
        </div>
        <div class="skeleton skeleton-title" style="width: 70%; height: 28px; margin-bottom: 12px;"></div>
        <div class="skeleton skeleton-line" style="width: 100%; height: 16px; margin-bottom: 8px;"></div>
        <div class="skeleton skeleton-line" style="width: 85%; height: 16px; margin-bottom: 8px;"></div>
        <div class="skeleton skeleton-line" style="width: 60%; height: 16px; margin-bottom: 12px;"></div>
        <div class="timeline-tags">
          <div class="skeleton skeleton-tag"></div>
          <div class="skeleton skeleton-tag"></div>
          <div class="skeleton skeleton-tag"></div>
        </div>
      </div>
    </div>
  `,
    )
    .join("");

  wrapper.insertAdjacentHTML("beforeend", skeletons);
}

// ==================== إزالة الـ Skeleton ====================
function removeSkeletonLoader() {
  const skeletons = document.querySelectorAll(".skeleton-timeline-card");
  skeletons.forEach((skeleton) => skeleton.remove());
}

// ==================== عرض عنصر واحد مع الترجمة ====================
function renderTimelineItem(item, translations, currentLang) {
  const title = getTranslatedText(
    item.titleKey,
    item.defaultTitle,
    translations,
  );
  const description = getTranslatedText(
    item.descKey,
    item.defaultDesc,
    translations,
  );
  const longDescription = getTranslatedText(
    item.longKey,
    item.defaultLong,
    translations,
  );
  const role = getTranslatedText(item.roleKey, item.defaultRole, translations);
  const location = getTranslatedText(
    item.locationKey,
    item.defaultLocation,
    translations,
  );

  // جلب الإنجازات المترجمة
  let achievementsHtml = "";
  if (item.achievementKeys && item.achievementKeys.length > 0) {
    const achievementsList = [];
    for (let i = 0; i < item.achievementKeys.length; i++) {
      const achievementText = getTranslatedText(
        item.achievementKeys[i],
        item.defaultAchievements[i],
        translations,
      );
      achievementsList.push(
        `<li><i class="fas fa-check-circle"></i> ${achievementText}</li>`,
      );
    }
    achievementsHtml = `
      <div class="timeline-achievements">
        <div class="achievements-title">
          <i class="fas fa-trophy"></i> ${currentLang === "ar" ? "الإنجازات الرئيسية" : "Key Achievements"}
        </div>
        <ul class="achievements-list">
          ${achievementsList.join("")}
        </ul>
      </div>
    `;
  }

  return `
    <div class="timeline-item ${item.status} timeline-hidden" data-id="${item.id}">
      <div class="timeline-icon ${item.color}">
        <i class="fas ${item.icon}"></i>
      </div>
      <div class="timeline-content">
        <div class="timeline-date">
          <span class="date-start">${item.date}</span>
          <span class="timeline-arrow">→</span>
          <span class="date-end ${item.status === "current" ? "pulse-date" : ""}">${item.dateEnd}</span>
          ${item.status === "current" ? `<span class="current-badge">● ${currentLang === "ar" ? "حالي" : "Current"}</span>` : ""}
          ${item.status === "upcoming" ? `<span class="upcoming-badge">● ${currentLang === "ar" ? "قادم" : "Upcoming"}</span>` : ""}
        </div>
        <h3 class="timeline-title">${title}</h3>
        
        ${role ? `<div class="timeline-role"><div class="role-title"><i class="fas fa-briefcase"></i> ${role}</div></div>` : ""}
        
        <p class="timeline-description">${longDescription}</p>
        
        ${achievementsHtml}
        
        ${location ? `<div class="timeline-location"><i class="fas fa-map-marker-alt"></i> ${location}</div>` : ""}
        
        <div class="timeline-tags">
          ${item.tags.map((tag) => `<span class="timeline-tag">${tag}</span>`).join("")}
        </div>
      </div>
    </div>
  `;
}

// ==================== تحميل الدفعة التالية ====================
function loadNextBatch() {
  if (isLoading) return;
  if (currentIndex >= timelineData.length) return;

  isLoading = true;
  showSkeletonLoader(ITEMS_PER_LOAD);

  setTimeout(() => {
    const wrapper = document.getElementById("timeline-wrapper");
    if (!wrapper) {
      isLoading = false;
      return;
    }

    removeSkeletonLoader();

    const endIndex = Math.min(
      currentIndex + ITEMS_PER_LOAD,
      timelineData.length,
    );
    const newItems = timelineData.slice(currentIndex, endIndex);

    const currentLang = window.currentLanguage || "en";
    const translations = window.translations || {};

    newItems.forEach((item) => {
      wrapper.insertAdjacentHTML(
        "beforeend",
        renderTimelineItem(item, translations, currentLang),
      );
    });

    currentIndex = endIndex;
    isLoading = false;

    if (typeof AOS !== "undefined") AOS.refresh();
    initScrollAnimation();

    if (currentIndex >= timelineData.length) {
      const loadMoreBtn = document.getElementById("load-more-btn");
      if (loadMoreBtn) loadMoreBtn.style.display = "none";
    }

    // تحديث السهم بعد التحميل
    if (window.verticalArrow) {
      setTimeout(() => window.verticalArrow.updateArrowPosition(), 200);
    }

    // console.log(`✅ Loaded ${currentIndex}/${timelineData.length} items`);
  }, 800);
}

// ==================== Scroll Animation (Intersection Observer) ====================
function initScrollAnimation() {
  const hiddenElements = document.querySelectorAll(".timeline-hidden");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("timeline-visible");
          entry.target.classList.remove("timeline-hidden");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2, rootMargin: "0px 0px -50px 0px" },
  );
  hiddenElements.forEach((el) => observer.observe(el));
}

// ==================== إضافة زر Load More ====================
function addLoadMoreButton() {
  const container = document.getElementById("timeline-container");
  if (!container) return;

  // تجنب إضافة الزر مرتين
  if (document.getElementById("load-more-container")) return;

  const buttonHTML = `
    <div class="load-more-container" id="load-more-container">
      <button class="load-more-btn" id="load-more-btn">
        <span class="btn-text">Load More</span>
        <span class="btn-loader" style="display: none;">
          <i class="fas fa-spinner fa-spin"></i> Loading...
        </span>
      </button>
    </div>
  `;
  container.insertAdjacentHTML("beforeend", buttonHTML);

  const loadMoreBtn = document.getElementById("load-more-btn");
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      const btnText = loadMoreBtn.querySelector(".btn-text");
      const btnLoader = loadMoreBtn.querySelector(".btn-loader");
      btnText.style.display = "none";
      btnLoader.style.display = "inline-flex";
      loadMoreBtn.disabled = true;
      loadNextBatch();
      setTimeout(() => {
        btnText.style.display = "inline-flex";
        btnLoader.style.display = "none";
        loadMoreBtn.disabled = false;
      }, 1000);
    });
  }
}

// ==================== إضافة أنماط CSS إضافية ====================
function addAdvancedStyles() {
  const style = document.createElement("style");
  style.textContent = `
    .timeline-hidden { opacity: 0; transform: translateX(-30px); transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1); }
    .timeline-visible { opacity: 1; transform: translateX(0); }
    .load-more-container { text-align: center; margin-top: 3rem; padding: 2rem; }
    .load-more-btn { background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%); color: white; border: none; padding: 0.8rem 2rem; border-radius: 50px; font-size: 1rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease; display: inline-flex; align-items: center; gap: 0.5rem; box-shadow: 0 4px 15px rgba(var(--primary-rgb), 0.3); }
    .load-more-btn:hover { transform: translateY(-3px); box-shadow: 0 8px 25px rgba(var(--primary-rgb), 0.4); }
    .load-more-btn:disabled { opacity: 0.7; cursor: not-allowed; }
    .timeline-progress { text-align: center; margin-bottom: 2rem; font-size: 0.85rem; color: var(--text-secondary); }
    .progress-bar { width: 200px; height: 4px; background: var(--border-color); border-radius: 4px; margin: 0.5rem auto 0; overflow: hidden; }
    .progress-fill { height: 100%; background: linear-gradient(90deg, var(--primary), var(--secondary)); border-radius: 4px; transition: width 0.3s ease; }
    .skeleton { background: linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%); background-size: 200% 100%; animation: skeletonShimmer 1.2s infinite; }
    @keyframes skeletonShimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
    @media (prefers-color-scheme: dark) { .skeleton { background: linear-gradient(90deg, #2a2a2a 25%, #353535 50%, #2a2a2a 75%); } }
    .timeline-wrapper { display: flex; flex-direction: column; gap: 2rem; }
    html { scroll-behavior: smooth; }
    @media (max-width: 768px) { .timeline-hidden { transform: translateX(-20px); } .load-more-btn { padding: 0.6rem 1.5rem; font-size: 0.9rem; } }
    
    /* Animation for slideGlow */
    @keyframes slideGlow {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
  `;
  document.head.appendChild(style);
}

// ==================== تحديث شريط التقدم ====================
function updateProgress() {
  const progressFill = document.getElementById("progress-fill");
  if (progressFill) {
    progressFill.style.width = `${(currentIndex / timelineData.length) * 100}%`;
  }
}

// ==================== إضافة شريط التقدم ====================
function addProgressBar() {
  const container = document.getElementById("timeline-container");
  if (!container) return;

  // تجنب إضافة شريط التقدم مرتين
  if (document.querySelector(".timeline-progress")) return;

  const progressHTML = `<div class="timeline-progress"><span>Your Journey Progress</span><div class="progress-bar"><div class="progress-fill" id="progress-fill" style="width: 0%"></div></div></div>`;
  container.insertAdjacentHTML("afterbegin", progressHTML);
}

// ==================== VERTICAL ARROW (SIDE ARROW) LOGIC - FIXED FOR RTL ====================
let arrowLine = null;
let arrowHead = null;
let reachedEnd = false;
let arrowUpdateTimeout = null;

function initVerticalArrow() {
  arrowLine = document.querySelector(".timeline-arrow-line");
  arrowHead = document.querySelector(".timeline-arrow-head");

  if (!arrowLine || !arrowHead) {
    console.warn("⚠️ Vertical arrow elements not found");
    return;
  }

  // تأخير بسيط للتأكد من تحميل كل العناصر
  setTimeout(() => {
    updateArrowPosition();
  }, 200);

  // استخدام requestAnimationFrame للتحسين
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateArrowPosition();
        ticking = false;
      });
      ticking = true;
    }
  });

  window.addEventListener("resize", () => {
    setTimeout(() => updateArrowPosition(), 100);
  });

  // مراقبة التغييرات في الـ DOM
  const observer = new MutationObserver(() => {
    if (arrowUpdateTimeout) clearTimeout(arrowUpdateTimeout);
    arrowUpdateTimeout = setTimeout(() => updateArrowPosition(), 150);
  });

  const wrapper = document.getElementById("timeline-wrapper");
  if (wrapper) {
    observer.observe(wrapper, {
      childList: true,
      subtree: true,
      attributes: true,
    });
  }

  if (arrowHead) {
    arrowHead.addEventListener("click", (e) => {
      e.preventDefault();
      scrollToNextSection();
    });
  }

  // console.log("✅ Vertical Arrow initialized");
}

function updateArrowPosition() {
  if (!arrowLine || !arrowHead) return;

  const timelineWrapper = document.getElementById("timeline-wrapper");
  if (!timelineWrapper) return;

  const timelineItems = document.querySelectorAll(
    ".timeline-item:not(.skeleton-timeline-card)",
  );
  if (timelineItems.length === 0) {
    // إخفاء السهم إذا لم توجد عناصر
    arrowLine.style.display = "none";
    arrowHead.style.display = "none";
    return;
  }

  // إظهار السهم
  arrowLine.style.display = "block";
  arrowHead.style.display = "block";

  const isRTL = document.documentElement.dir === "rtl";
  const container = document.querySelector(".timeline-container");
  if (!container) return;

  const containerRect = container.getBoundingClientRect();
  const scrollTop = window.scrollY;
  const containerTop = containerRect.top + scrollTop;

  // الحصول على أول وآخر عنصر
  const firstItem = timelineItems[0];
  const lastItem = timelineItems[timelineItems.length - 1];

  if (!firstItem || !lastItem) return;

  const firstRect = firstItem.getBoundingClientRect();
  const lastRect = lastItem.getBoundingClientRect();

  let startY, endY;

  if (isRTL) {
    // في RTL: من آخر عنصر إلى أول عنصر
    startY = lastRect.top + scrollTop - containerTop;
    endY = firstRect.bottom + scrollTop - containerTop;
  } else {
    // في LTR: من أول عنصر إلى آخر عنصر
    startY = firstRect.top + scrollTop - containerTop;
    endY = lastRect.bottom + scrollTop - containerTop;
  }

  // التأكد من القيم الموجبة
  if (endY < startY) {
    [startY, endY] = [endY, startY];
  }

  const totalHeight = Math.max(0, endY - startY);

  // تطبيق الارتفاع والموقع
  arrowLine.style.height = `${totalHeight}px`;
  arrowLine.style.top = `${startY}px`;

  // تحديث موقع رأس السهم
  const arrowHeadOffset = isRTL ? -15 : -10;
  arrowHead.style.top = `${endY + arrowHeadOffset}px`;

  // التحقق من الوصول للنهاية
  const scrollPosition = scrollTop + window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const isAtEnd = scrollPosition >= documentHeight - 150;

  if (isAtEnd && !reachedEnd) {
    reachedEnd = true;
    arrowLine.classList.add("reached-end");
    arrowHead.classList.add("reached-end");
  } else if (!isAtEnd && reachedEnd) {
    reachedEnd = false;
    arrowLine.classList.remove("reached-end");
    arrowHead.classList.remove("reached-end");
  }

  // إظهار/إخفاء السهم بناءً على عدد العناصر
  const shouldShow = timelineItems.length > 2;
  const arrowContainer = document.querySelector(".timeline-arrow-container");
  if (arrowContainer) {
    arrowContainer.style.display = shouldShow ? "block" : "none";
  }
}

function scrollToNextSection() {
  const timelineItems = document.querySelectorAll(
    ".timeline-item:not(.skeleton-timeline-card)",
  );
  if (timelineItems.length === 0) return;

  const isRTL = document.documentElement.dir === "rtl";
  const windowHeight = window.innerHeight;
  let nextItem = null;

  if (isRTL) {
    // في RTL: نمر من اليمين لليسار (من الأحدث للأقدم)
    for (let i = 0; i < timelineItems.length; i++) {
      const rect = timelineItems[i].getBoundingClientRect();
      if (rect.top > windowHeight / 3) {
        nextItem = timelineItems[i];
        break;
      }
    }
    if (!nextItem && timelineItems.length > 0) {
      nextItem = timelineItems[timelineItems.length - 1];
    }
  } else {
    // في LTR: نمر من اليسار لليمين (من الأقدم للأحدث)
    let foundCurrent = false;
    for (let i = 0; i < timelineItems.length; i++) {
      const rect = timelineItems[i].getBoundingClientRect();
      if (rect.bottom > windowHeight - 100) {
        nextItem = timelineItems[i + 1];
        foundCurrent = true;
        break;
      }
    }
    if (!foundCurrent && timelineItems.length > 0) {
      nextItem = timelineItems[0];
    }
  }

  if (nextItem) {
    nextItem.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function reinitVerticalArrow() {
  setTimeout(() => updateArrowPosition(), 150);
}

function watchLanguageChange() {
  // مراقبة تغيير اتجاه الصفحة
  const observer = new MutationObserver(() => {
    reinitVerticalArrow();
    reRenderTimeline();
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["dir"],
  });

  // الاستماع لحدث تغيير اللغة
  window.addEventListener("languageChanged", () => {
    reinitVerticalArrow();
    reRenderTimeline();
  });

  // إعادة تهيئة السهم عند تغيير حجم الصفحة
  window.addEventListener("resize", () => {
    reinitVerticalArrow();
  });
}

// ==================== إعادة رسم الـ Timeline عند تغيير اللغة ====================
function reRenderTimeline() {
  const wrapper = document.getElementById("timeline-wrapper");
  if (!wrapper) return;

  const currentLang = window.currentLanguage || "en";
  const translations = window.translations || {};

  // احتفظ بعدد العناصر المعروضة حالياً
  const renderedItems = document.querySelectorAll(
    ".timeline-item:not(.skeleton-timeline-card)",
  );
  const renderedCount = renderedItems.length;

  if (renderedCount === 0) return;

  // حفظ حالة الظهور لكل عنصر
  const visibleStates = Array.from(renderedItems).map((item) =>
    item.classList.contains("timeline-visible"),
  );

  // امسح المحتوى الحالي وأعد رسمه
  wrapper.innerHTML = "";

  const itemsToRender = timelineData.slice(0, renderedCount);
  itemsToRender.forEach((item, index) => {
    wrapper.insertAdjacentHTML(
      "beforeend",
      renderTimelineItem(item, translations, currentLang),
    );
  });

  // إعادة تطبيق حالة الظهور
  const newItems = document.querySelectorAll(
    ".timeline-item:not(.skeleton-timeline-card)",
  );
  newItems.forEach((item, index) => {
    if (visibleStates[index]) {
      item.classList.add("timeline-visible");
      item.classList.remove("timeline-hidden");
    } else {
      item.classList.add("timeline-hidden");
      item.classList.remove("timeline-visible");
    }
  });

  if (typeof AOS !== "undefined") AOS.refresh();

  setTimeout(() => {
    if (window.verticalArrow) window.verticalArrow.updateArrowPosition();
  }, 200);

  // console.log(`✅ Timeline re-rendered for language: ${currenظtLang}`);
}

// تصدير الكائن للاستخدام الخارجي
window.verticalArrow = {
  initVerticalArrow,
  updateArrowPosition,
  reinitVerticalArrow,
};

// ==================== التهيئة الرئيسية ====================
document.addEventListener("DOMContentLoaded", function () {
  // إضافة الأنماط
  addAdvancedStyles();

  // إضافة شريط التقدم
  addProgressBar();

  // تحميل الدفعة الأولى
  loadNextBatch();

  // إضافة زر Load More
  setTimeout(() => addLoadMoreButton(), 100);

  // تهيئة AOS
  if (typeof AOS !== "undefined") {
    AOS.init({ duration: 800, once: true, offset: 50, easing: "ease-in-out" });
  }

  // تهيئة السهم العمودي ومراقبة تغيير اللغة
  setTimeout(() => {
    initVerticalArrow();
    watchLanguageChange();
  }, 500);

  // console.log("✅ Advanced Timeline.js initialized with Translation & RTL Support");
});

// تصدير الدوال للاستخدام الخارجي
window.timelineFunctions = {
  loadNextBatch,
  initScrollAnimation,
  updateProgress,
  reRenderTimeline,
  reinitVerticalArrow,
};

import type { Project } from "./portfolio";

export const projects: Project[] = [
  {
    name: "Phone Accessories System",
    role: "BUSINESS ANALYST / FULL-STACK DEVELOPER · 01/2026 - 03/2026",
    description:
      "A web and mobile e-commerce system where customers can browse, purchase, and review phone accessories, while administrators and staff manage products, orders, inventory, users, branches, and pricing. I built product browsing, cart, checkout, payment, order-tracking, and admin flows; integrated RESTful APIs and role-based access; and supported Redux Toolkit state management, UI testing, and form validation.",
    tech: ["ReactJS", "TypeScript", "React Native", "MongoDB", "Redux Toolkit", "VNPay Sandbox"],
    links: [
      { label: "Frontend", href: "https://github.com/nganne2203/SDN302_PROJECT_FE" },
      { label: "Backend", href: "https://github.com/nganne2203/SDN302_PROJECT_BE" },
    ],
  },
  {
    name: "Hackathon Management System",
    role: "BUSINESS ANALYST / FULL-STACK DEVELOPER · 05/2026 - 07/2026",
    description:
      "A hackathon management platform for participants, coordinators, judges, mentors, and administrators. I developed responsive web interfaces and multi-role React Native screens for event management, team formation, submissions, judging, scoring, results, workshops, check-in, chat, and notifications; then integrated APIs, UI access control, Socket.IO real-time features, and UI testing fixes.",
    tech: ["React Native", "TypeScript", "NodeJS", "Socket.IO", "Redis", "Docker"],
    links: [
      { label: "Frontend", href: "https://github.com/nganne2203/WDP301_HACKATHON_G04_FE" },
      { label: "Backend", href: "https://github.com/nganne2203/WDP301_HACKATHON_G04_BE" },
      { label: "Mobile", href: "https://github.com/nganne2203/WDP301_HACKATHON_G04_RN" },
    ],
  },
  {
    name: "Maihongo Japanese Learning App",
    role: "BUSINESS ANALYST / FULL-STACK DEVELOPER · 05/2026 - 07/2026",
    description:
      "A cross-platform Japanese learning app featuring vocabulary, flashcards, quizzes, listening, speaking, writing, bookmarks, learning history, progress tracking, and offline learning. I built the Flutter learning flows, integrated RESTful APIs with Dio and Riverpod, authentication and token refresh, audio recording and playback, SQLite storage, and synchronization; and developed Node.js services for learning content, Gemini-powered speaking and writing evaluation, and Cloudflare R2 media storage.",
    tech: ["Flutter", "Riverpod", "SQLite", "ExpressJS", "Gemini API", "Cloudflare R2"],
    links: [
      { label: "Mobile", href: "https://github.com/nganne2203/PRM393_MaiHonGo_MB" },
      { label: "Backend", href: "https://github.com/nganne2203/PRM393_MaiHonGo_BE" },
    ],
  },
];

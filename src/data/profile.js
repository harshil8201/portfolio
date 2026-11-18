/**
 * Single source of truth for every piece of text on the portfolio.
 *
 * Keep this file in step with the resume, LinkedIn and GitHub profile.
 * Components only render what is here, so updating content never means
 * touching layout code.
 */

export const profile = {
  name: "Harshil Patel",
  role: "Full Stack Developer",
  location: "Guelph, Ontario, Canada",
  headline:
    "I build web and mobile apps with TypeScript, React, Next.js, Node.js and Python, and I like owning a feature from idea to production.",
  email: "harshilpatel33h@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/harshil8201/",
    github: "https://github.com/harshil8201",
    crevion: "https://www.crevion.com",
  },
};

/** Short paragraphs for the About section. */
export const about = [
  "I'm a full stack developer based in Guelph, Ontario. Since February 2026 I've been building Crevion, an AI design platform that turns one sentence into an editable marketing poster. I built it on my own: three production apps, payments, a creator marketplace and an AI layout pipeline.",
  "Before Canada I worked as a full stack developer in India, building React and React Native features, Node.js APIs and Flutter apps. I hold a postgraduate diploma in Full Stack Software Development from Lambton College in Toronto.",
  "I care about shipping work that holds up in production: tested, secure and easy for the next person to change.",
];

/** Headline numbers shown under the featured project. */
export const crevion = {
  name: "Crevion",
  tagline: "AI design platform for small businesses",
  summary:
    "Crevion turns one sentence into a finished, editable marketing poster. The owner types what they're promoting, the AI writes the copy, picks a layout and a photo, and returns three styled options to finish in a full browser editor.",
  stats: [
    { value: "3", label: "production apps" },
    { value: "172", label: "API endpoints" },
    { value: "57", label: "database tables" },
    { value: "29", label: "test suites" },
  ],
  highlights: [
    "In-browser design editor on Fabric.js with layers, effects, undo history and PNG, JPG and PDF export",
    "AI pipeline with schema validation, automatic repair and fallbacks, plus a fine-tuned open-source model",
    "Stripe subscriptions and creator payouts, Clerk sign-in, AWS S3 and CloudFront",
    "Python tooling for layout conversion, data cleaning, training data and layout scoring",
  ],
  stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Stripe", "AWS", "Fabric.js", "Python"],
  liveUrl: "https://www.crevion.com",
  caseStudyUrl: "https://github.com/harshil8201/crevion-showcase",
};

/** Work history, newest first. Matches the resume. */
export const experience = [
  {
    role: "Full Stack Developer",
    company: "Crevion (own product)",
    period: "Feb 2026 – Present",
    location: "Guelph, ON",
    points: [
      "Built and launched three production web apps with Next.js, React and TypeScript: about 144,000 lines of code on Supabase PostgreSQL.",
      "Built the AI poster pipeline and the Python tooling behind it, including a fine-tuned layout model.",
      "Set up the release workflow: Jest and Playwright tests, preview builds, numbered migrations and Sentry monitoring.",
    ],
  },
  {
    role: "Technical Support Advisor",
    company: "Concentrix",
    period: "Mar 2026 – Jul 2026",
    location: "Hamilton, ON",
    points: [
      "Diagnosed and resolved customers' hardware, software and account issues, and documented every case.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Suven Consultants and Technology",
    period: "Nov 2022 – Jul 2023",
    location: "Mumbai, India",
    points: [
      "Built web and mobile features with React, React Native and TypeScript from Figma designs.",
      "Developed REST APIs with Node.js and Express on MongoDB and PostgreSQL, with OAuth 2.0 and Stripe and Razorpay payments.",
    ],
  },
  {
    role: "Software Developer",
    company: "OyeBusy Technologies",
    period: "Jan 2022 – Oct 2022",
    location: "Pune, India",
    points: [
      "Developed cross-platform Android and iOS apps with Flutter and Firebase, and managed Play Store releases.",
    ],
  },
];

/** Skills grouped the same way as the resume. */
export const skills = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "Dart"] },
  { group: "Frontend", items: ["React", "Next.js", "React Native", "Flutter", "Tailwind CSS", "Zustand"] },
  { group: "Backend", items: ["Node.js", "Express", "REST APIs", "GraphQL", "Supabase", "Firebase"] },
  { group: "Data", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Pinecone"] },
  { group: "Cloud & tools", items: ["AWS", "Vercel", "Docker", "Git", "Jest", "Playwright", "Sentry"] },
];

/** Other projects, shown as cards after Crevion. */
export const projects = [
  {
    name: "Tutoring Center",
    description:
      "Lambton College group project: a courses and learning resources website with a Node.js and Express backend.",
    stack: ["Node.js", "Express", "JavaScript", "HTML", "CSS"],
    url: "https://github.com/harshil8201/Tutoring-Center-Full-Project",
  },
  {
    name: "30 Days with React.js",
    description:
      "A 30-day challenge building a new responsive website UI each day, from travel and jewellery stores to restaurants.",
    stack: ["React", "Tailwind CSS"],
    url: "https://github.com/harshil8201/30-Days-with-React.js",
  },
  {
    name: "Flutter projects",
    description:
      "Collection of Flutter apps: authentication flows, Firebase storage, REST API clients and small games.",
    stack: ["Flutter", "Dart", "Firebase"],
    url: "https://github.com/harshil8201/Flutter-Projects",
  },
  {
    name: "Cracking the Coding Interview",
    description:
      "Java solutions for arrays and strings, linked lists, stacks and queues, and trees and graphs.",
    stack: ["Java", "Data structures", "Algorithms"],
    url: "https://github.com/harshil8201/Cracking-The-Coding-Interview",
  },
];

export const education = [
  {
    title: "Postgraduate Diploma, Full Stack Software Development",
    school: "Lambton College, Toronto",
    period: "Sep 2023 – Apr 2025",
  },
  {
    title: "Bachelor of Technology, Information Technology",
    school: "Parul University, Gujarat, India",
    period: "2018 – 2022",
  },
];

export const certifications = [
  "HackerRank Certified Software Engineer Intern",
  "HackerRank Certified Problem Solving",
  "Certified Web Developer, Johns Hopkins University",
];

/** In-page navigation, in the order sections appear. */
export const navLinks = [
  { id: "about", label: "About" },
  { id: "work", label: "Crevion" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

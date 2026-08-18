// ============================================================
// portfolioData.js — Centralized configuration for Parveenkumar's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Parveenkumar",
  firstName: "Parveenkumar",
  brandName: "Parveenkumar",
  titles: ["Cyber Security Student", "Full Stack Developer", "Web Developer"],
  emails: {
    primary: "parveenkumar01072007@gmail.com",
  },
  phone: "+91 88702 80126",
  phoneDisplay: "8870280126",
  summary:
    "Building secure digital experiences, creating modern web applications, and solving real-world challenges.",
  resumeUrl: "/resume.pdf",
  cartoonImage: "/cartoon.png",
  dashboardVideo: "/dashboard.mp4",
};

export const socialLinks = {
  github: "https://github.com/peaceking01",
  linkedin: "https://www.linkedin.com/in/parveenkumar-s-a37882391",
  email: "mailto:parveenkumar01072007@gmail.com",
  phone: "tel:+918870280126",
};

export const heroContent = {
  greeting: "Hi, I'm Parveenkumar",
  titles: ["Cyber Security Student", "Full Stack Developer", "Web Developer"],
  subtitle:
    "Building secure digital experiences, creating modern web applications, and solving real-world challenges.",
  ctaPrimary: { text: "View Projects", href: "#projects" },
  ctaResume: { text: "Download Resume", href: "/resume.pdf" },
};

export const aboutContent = {
  heading: "About Me",
  bio: "I am Parveenkumar, a Cyber Security student and Full Stack Developer passionate about secure digital experiences, web development, problem solving, and learning modern technologies.",
};

export const technicalSkills = {
  badge: "Technical Stack",
  heading: "My Skillset",
  description:
    "The languages, tools, and disciplines I use to build and secure modern web applications.",
  skills: [
    { name: "C" },
    { name: "C++" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "Python" },
    { name: "Firebase" },
    { name: "Git" },
    { name: "GitHub" },
    { name: "Cyber Security" },
    { name: "Web Development" },
  ],
};

export const projects = [
  {
    id: "cybervigil",
    number: "01",
    title: "CyberVigil",
    description: "Online scam awareness and reporting platform.",
    techTags: ["Web Development", "Cyber Security"],
    links: {},
  },
  {
    id: "smartbustrack",
    number: "02",
    title: "SmartBusTrack",
    description: "Tracking live location of college and school buses.",
    techTags: ["Full Stack", "Web Development"],
    links: {},
  },
  {
    id: "crackers-shop",
    number: "03",
    title: "Crackers Shop",
    description: "Landing page for a crackers shop.",
    techTags: ["HTML", "CSS", "JavaScript"],
    links: {},
  },
];

export const footerContent = {
  taglines: ["Cyber Security // Full Stack", "Secure. Modern. Reliable."],
  copyright: `© ${new Date().getFullYear()} Parveenkumar | Built with React`,
};

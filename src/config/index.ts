import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Neil Justin Mallari — Software Engineer",
  author: "Neil Justin Mallari",
  description:
    "Software Engineer based in Cavite, Philippines. I specialize in full-stack development with MERN stack.",
  lang: "en",
  siteLogo: "/neil-profile.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/neil-mallari/" },
    { text: "Github", href: "https://github.com/neil-justin" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Neil Justin Mallari",
    specialty: "Software Engineer",
    summary:
      "Software Engineer based in Cavite, Philippines. I specialize in full-stack development with MERN stack.",
    email: "neiljustin.mallari@proton.me",
  },
  experience: [
    {
      company: "Career TEAM",
      position: "Software Engineer",
      startDate: "May 2025",
      endDate: "Present",
      summary: [
        `Developed multi-tenant web applications for multiple clients, ensuring
         secure data separation using MongoDB and tailored functionality for
         each tenant using NestJS and Next.js`,
        `Facilitated daily standup meetings on a rotating schedule for a
         cross-functional team of engineers and product specialists`,
      ],
    },
  ],
  projects: [
    {
      name: "MarkNote",
      summary: "A fully-functional note-taking app with markdown support.",
      linkPreview: "/",
      linkSource: "https://github.com/neil-justin/marknote",
      image: "/marknote.jpeg",
    },
    {
      name: "Tasky",
      summary: "A full-functional to-do list app inspire by Todoist.",
      linkPreview: "/",
      linkSource: "https://github.com/neil-justin/todo-list-app",
      image: "/tasky.jpeg",
    },
  ],
  about: {
    description: `
      Hello, I'm Neil Justin Mallari, an enthusiastic Software Engineer currently pursuing
      my Computer Science degree. I've dedicated years to refining my expertise
      in full-stack development.
      
      I am presently part of the skilled engineering team at Career TEAM, a
      US-based company. Our technology stack centers around Next.js, NestJS,
      MongoDB, and TypeScript.

      Beyond my professional work, I've built various personal projects using
      Express and am currently expanding my skills by learning PHP with Laravel.
    `,
    image: "/neil-profile.jpg",
  },
};
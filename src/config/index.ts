import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Neil Justin Mallari — Software Engineer",
  author: "Neil Justin Mallari",
  description:
    "Software Engineer based in Cavite, Philippines, specializing in full-stack development with Next.js, NestJS, and TypeScript.",
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
      "Software Engineer based in Cavite, Philippines, specializing in full-stack development with Next.js, NestJS, and TypeScript.",
    email: "neiljustin.mallari@proton.me",
  },
  experience: [
    {
      company: "Thorne Consulting (US, Remote)",
      position: "Lead Software Engineer",
      startDate: "Jun 2026",
      endDate: "Present",
      summary: [
        "Drive the end-to-end engineering roadmap, balancing hands-on feature development with product planning, cross-functional prioritization, and full sprint/ticket lifecycle management.",
        "Enforce architectural integrity and code quality across the full stack by establishing design pattern standards and leading comprehensive code reviews.",
        "Scale the engineering team by designing and conducting technical interviews focused on system design, architecture, and cultural alignment."
      ],
    },
    {
      company: "Career TEAM (US, Remote)",
      position: "Software Engineer",
      startDate: "May 2025",
      endDate: "Jun 2026",
      summary: [
        "Developed multi-tenant web apps with NestJS and Next.js, using MongoDB to build a tenant isolation layer that secured data across different clients.",
        "Led daily standups for a 15-person cross-functional team, acting as the bridge between developers and product to keep sprint goals on track.",
        "Facilitated team growth by conducting technical interviews and personally guiding new hires through their local environment setup and codebase walkthroughs."
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
      summary: "A fully-functional to-do list app inspired by Todoist.",
      linkPreview: "/",
      linkSource: "https://github.com/neil-justin/todo-list-app",
      image: "/tasky.jpeg",
    },
  ],
  about: {
    description: `
      Hello, I'm Neil Justin Mallari, a Software Engineer pursuing my Computer Science degree. 
      I specialize in full-stack development with expertise in Next.js, NestJS, MongoDB, and TypeScript.
      
      Currently working remotely as Lead Software Engineer at Thorne Consulting, a US-based company.
      I've also built personal projects using Express and am expanding my skills by learning C#.
    `,
    image: "/neil-profile.jpg",
  },
};
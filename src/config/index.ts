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
  socialImage: "/neil-profile.jpg",
  canonicalURL: "https://portfolio-three-mu-53.vercel.app",
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
      company: "Thorne Consulting (US, Remote) — Contract",
      position: "Lead Software Engineer (Interim)",
      startDate: "Mar 2026",
      endDate: "Sept 2026",
      summary: [
        "Second engineer on the founding team of a career-readiness startup; grew into the interim lead role.",
        "Planned features end-to-end — specifying database schemas, API contracts, and frontend component breakdowns that mentored engineers built against — then reviewed the code they shipped.",
        "Managed deployments and releases, and acted as the bridge between engineering and non-technical staff for day-to-day support.",
        "Conducted ~55 technical interviews covering system design and culture fit, directly mentored 2 interns, and onboarded new engineers on the codebase's architecture and engineering process."
      ],
    },
    {
      company: "Career Team LLC (US, Remote)",
      position: "Software Engineer",
      startDate: "May 2025",
      endDate: "Jun 2026",
      summary: [
        "Built features on a multi-tenant workforce platform serving thousands of users across government agencies and school organizations, using NestJS, Next.js, and MongoDB.",
        "Built the multi-tenant admin dashboard and improved its load performance by fixing slow MongoDB queries.",
        "Shipped admin profile management and configurable workforce forms used by client organizations.",
        "Facilitated daily standups for a 15-person cross-functional team, acting as the bridge between developers and product to keep sprint goals on track.",
        "Conducted technical interviews for engineering candidates and buddied 2 new engineers through onboarding and codebase walkthroughs."
      ],
    },
  ],
  projects: [
    {
      name: "MarkNote",
      summary: "Full-stack markdown note-taking app built with the MERN stack, containerized with Docker and deployed on Render.",
      linkPreview: "/",
      linkSource: "https://github.com/neil-justin/marknote",
      image: "/marknote.jpeg",
    },
    {
      name: "Tasky",
      summary: "A to-do list app built in vanilla JavaScript and CSS — no frameworks, just fundamentals.",
      linkPreview: "/",
      linkSource: "https://github.com/neil-justin/todo-list-app",
      image: "/tasky.jpeg",
    },
  ],
  about: {
    description: `
      Hello, I'm Neil Justin Mallari, a Software Engineer based in Cavite, Philippines.
      I specialize in full-stack development with Next.js, NestJS, MongoDB, and TypeScript.

      Most recently, I served as interim Lead Software Engineer at Thorne Consulting, a US-based career-readiness startup,
      after building multi-tenant workforce platforms at Career Team used by thousands across government agencies and schools.

      Outside of work, I'm deepening my knowledge of distributed systems and system design.
    `,
    image: "/neil-profile.jpg",
  },
};
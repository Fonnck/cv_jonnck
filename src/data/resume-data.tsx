import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Jhonattan Fonseca",
  initials: "JFonnck",
  location: "Bogotá, Colombia",
  locationLink: "https://www.google.com/maps/place/Bogot%C3%A1",
  about:
    "Frontend Developer focused on building products with extra attention to detail",
  summary:
    "As a Frontend Developer, I have successfully taken multiple projects from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with React + TypeScript, using Vite or Astro as a Framework. I have over 2.5 years of experience in Frontend World.",
  avatarUrl: "https://cdn.leonardo.ai/users/a2cfe853-60d5-4f46-9ed8-f8834e46a580/generations/812764ed-17d9-465c-8cf5-96bebcc3cde8/Default_8k_LinkedIn_professional_profile_photo_of_fonnk_in_a_s_0.jpg",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "jfonnck@gmail.com",
    tel: "+573212250857",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Fonnck",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/fonnck/",
        icon: LinkedInIcon,
      },
      /* {
        name: "X",
        url: "https://x.com/BartoszJarocki",
        icon: XIcon,
      }, */
    ],
  },
  education: [
    {
      school: "Universidad de los Andes",
      degree: "Systems Engineering & Design ",
      start: "2016",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Advantage Microsystems",
      link: "https://www.advantage.com.co/",
      badges: ["Hybrid"],
      title: "Mid Frontend Developer",
      logo: ParabolLogo,
      start: "2023",
      end: "Current",
      description:
        "Implemented new features on ERP software, led squad, worked on improving the way developers ship the code. Worked on online loan web application. Technologies: React, TypeScript",
    },
    {
      company: "Traktor Digital Solutions Spa (Agrak)",
      link: "https://agrak.com/",
      badges: ["Remote"],
      title: "Junior Frontend Developer",
      logo: ClevertechLogo,
      start: "2022",
      end: "2023",
      description:
        "Co-created web app called Agrak which provides comprehensive, sturdy, and easy-to-use solutions for digitizing most of agricultural operations. Applying and strengthening my knowledge in React and design patterns such as Micro-frontends with Microservices. Technologies: React, TypeScript, Nest.js",
    },
    {
      company: "Advantage Microsystems Col",
      link: "https://www.advantage.com.co/",
      badges: ["On site"],
      title: "Junior Frontend Developer",
      logo: JojoMobileLogo,
      start: "2021",
      end: "2022",
      description:
        "Built a BPM engine web platform to model procedures for weapons acquisition in the Colombian Army. I participated creating a web application to provide online legal advice for the acquisition of military housing from scratch. Technologies: React, TypeScript, Angular",
    }
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Astro",
    "Node.js",
    "Nest.js",
    "Responsive Design",
    "UX/UI",
    "CSS3",
    "Framer Motion",
    "Tailwind CSS",
    "Zunstand",
    "TanStack",
    "Hooks/CustomHooks",
  ],
  projects: [
    {
      title: "Fonnck.me",
      techStack: ["Astro", "React", "CSS", "Framer Motion", ""],
      description:
        "My personal portfolio website. Built with Astro + React and Framer Motion (Still on develop)",
      logo: JarockiMeLogo,
      link: {
        label: "dc_portfolio",
        href: "https://fonnck-portfolio.netlify.app/",
      },
    },
    {
      title: "Agrak",
      techStack: [
        "TypeScript",
        "React",
        "Microfrontends",
        "Nest.js"
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "QuickDataERP",
        href: "https://agrak.com/",
      },
    },
    {
      title: "Forpo Plus",
      techStack: ["Side Project", "TypeScript", "Vite", "React", "Boostrap5", "Responsive"],
      description:
        "Online loan web application snd lading page",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://develop.advantage.com.co/forpo-plus/#/app/login",
      },
    },
    {
      title: "QuickDataERP",
      techStack: [
        "Side Project",
        "TypeScript",
        "Vite + React",
        "Responsive"
      ],
      description: "A platform to manage and grow your industry, managing day-to-day business activities",
      logo: ConsultlyLogo,
      link: {
        label: "QuickDataERP",
        href: undefined,
      },
    },
    {
      title: "QuickTurn",
      techStack: [
        "TypeScript",
        "Angular"
      ],
      description: "A platform to handle the priority management of shifts in a waiting room",
      logo: ConsultlyLogo,
      link: {
        label: "QuickDataERP",
        href: undefined,
      },
    },
  ],
} as const;

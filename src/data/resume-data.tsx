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
    "Experienced Frontend Developer with over 3 years of hands-on experience in building responsive web applications. Proficient in React.js, TypeScript, and other frontend technologies, with a keen eye for detail and a passion for creating exceptional user experiences. Adept at implementing reusable components and utilizing systems design as a software architectural fundamental to optimize development time. Strong believer in the importance of planning as a guide to follow and overview of projects or milestones, ensuring successful outcomes.",
  avatarUrl: "https://cdn.leonardo.ai/users/a2cfe853-60d5-4f46-9ed8-f8834e46a580/generations/812764ed-17d9-465c-8cf5-96bebcc3cde8/Default_8k_LinkedIn_professional_profile_photo_of_fonnk_in_a_s_0.jpg",
  personalWebsiteUrl: "https://main--fonnck-portfolio.netlify.app/",
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
      description: [
        'Developed and maintained new features on ERP software',
        'Led the frontend development team in executing three projects simultaneously. I planned sprints according to the schedule, enabling effective communication and synchronized integration with the backend and design teams to deliver high-quality products within the established timelines.',
        'Participated in the creation of a web portal for quick small loans. The portal managed applicant evaluation and approved or rejected the loan based on set parameters. It also allowed for simulation of different types of loans offered by the entity and included an e-commerce section where purchases were offered as credit products by the entity.',
      ]
      /* description:
        "Implemented new features on ERP software, led squad, worked on improving the way developers ship the code. Worked on online loan web application. Technologies: React, TypeScript", */
    },
    {
      company: "Traktor Digital Solutions Spa (Agrak)",
      link: "https://agrak.com/",
      badges: ["Remote"],
      title: "React Frontend Developer",
      logo: ClevertechLogo,
      start: "2022",
      end: "2023",
      description: [
        'I had the opportunity to participate in the creation of the innovative Agrak platform, a web solution designed to manage, administer, and supervise field processes and tasks.',
        'I actively participated in the implementation of the various features offered by the platform, translating Figma designs into interfaces with careful attention to detail. I utilized architectures such as BFF and design systems, which allowed for accelerated development and the implementation of 70% of the web application in a record time of 6 months.'
      ]
      /*  description:
         "Co-created web app called Agrak which provides comprehensive, sturdy, and easy-to-use solutions for digitizing most of agricultural operations. Applying and strengthening my knowledge in React and design patterns such as Micro-frontends with Microservices. Technologies: React, TypeScript, Nest.js", */
    },
    {
      company: "Advantage Microsystems Col",
      link: "https://www.advantage.com.co/",
      badges: ["On site"],
      title: "Junior Frontend Developer",
      logo: JojoMobileLogo,
      start: "2021",
      end: "2022",
      description: [
        'I worked on the design and implementation of a web platform for the management of procedures for the DCCA (Colombia, Department of Guns and Explosives Control). Among my notable contributions are the creation of a module for biometric authentication, and the integration of flow control through a BPM engine.',
        'Co-worked redesign of a shift management system, improving its appearance and optimizing its functionalities. I contributed to the team with a positive attitude and by providing new ideas to enhance the product, resulting in an increase in sales.',
        'Collaborated with designers and backend developers to implement new features and enhancements',
      ]
    }
  ],
  skills: [
    "My English level is B2. I am able to interact with native speakers with a sufficient degree of fluency and naturalness, ensuring that communication occurs effortlessly for all parties involved.",
    "Proficient in React.js, TypeScript, JavaScript, HTML, CSS.",
    "Experience with Vue.js, Astro, Next.js, Nuxt, and other frontend frameworks.",
    "Strong understanding of web standards and responsive design principles",
    "Ability to translate Figma designs into pixel-perfect web pages",
    "Excellent problem-solving skills and ability to work in a fast-paced environment",
    "Strong communication and collaboration skills, with a proven track record of working effectively in cross-functional teams.",
    "Perfect understanding of UX/UI principles.",
    "Skilled in Scrum methodology, with experience in agile project management practices.",
    "Experience with continuous integration technologies and best practices",
  ],
  technologies: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Astro,Vue.js",
    "Node.js",
    "Nest.js",
    "CSS3",
    "Framer Motion",
    "Tailwind CSS",
    "Zunstand",
    "TanStack",
  ],
  projects: [
    {
      title: "Fonnck.me",
      techStack: ["Astro", "React", "CSS", "Framer Motion", ""],
      description:
        "My personal portfolio website. Built with Astro + React and Framer Motion (Still on development)",
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
        "Online loan web application and lading page",
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




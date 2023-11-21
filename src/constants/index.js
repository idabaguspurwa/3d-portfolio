import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  git,
  github,
  html,
  javascript,
  linkedin,
  nextjs,
  nodejs,
  pricewise,
  python,
  react,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  LuGraduationCap,
  CgWorkAlt,
  FaReact,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Machine Learning",
  },
];

export const experiences = [
  {
    title: "Sharing Knowledge Event Treasurer",
    company_name: "Keluarga Mahasiswa Hindu Bina Nusantara",
    icon: meta,
    iconBg: "#accbe1",
    date: "Nov 2021 - Dec 2021",
    points: [
      "Responsible for managing KMH budget to find a speaker for the Sharing Knowledge Event.",
      "Responsible for managing KMH budget to find and give door prize to selected attendees.",
    ],
  },
  {
    title: "MC of HIMTI Care Movie Day",
    company_name: "HIMTI BINUS University",
    icon: shopify,
    iconBg: "#fbc3bc",
    date: "2022",
    points: ["Officiated HIMTI Care's Movie Day as the Master of Ceremony."],
  },
  {
    title: "Contestant",
    company_name: "ICPC - International Collegiate Programming Contest",
    icon: starbucks,
    iconBg: "#b7e4c7",
    date: "2022",
    points: ["Competing nationally against Top Universities in Indonesia."],
  },
  {
    title: "Relation Expansion Commision Activist",
    company_name: "HIMTI BINUS University",
    icon: tesla,
    iconBg: "#a2d2ff",
    date: "March 2022 - Present",
    points: [
      "Part of a team that's responsible for managing an internal activity for the members to connect with each others.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/idabaguspurwa",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/ida-bagus-gede-purwa-manik-adiputra-0509861b8/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "MtGraphy Photography Website",
    description:
      "This is a HCI projects to make a photography website, and this is my take on that.",
    link: "https://github.com/idabaguspurwa/mtgraphy",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Portfolio Website",
    description:
      "This is a portfolio website that i make using vanilla CSS, HTML, and JavaScript file.",
    link: "https://github.com/idabaguspurwa/vanilla-portfolio",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Fake News Detection Paper using Machine Learning and Deep Learning Technique",
    description:
      "Fake News Detection Paper using ML and DL technique like Bert, TF-IDF, and GLOVE.",
    link: "https://github.com/idabaguspurwa/fakeNewsDetection-ML",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Contractor Website UI/UX",
    description:
      "A Software Engineering Projects, and our team take on that is to make a Website that help user find a contractor. (This is only the prototype)",
    link: "https://www.figma.com/file/sbIo50vnABJ3KFq8LSRJVY/Web-Kontraktor?type=design&node-id=0%3A1&mode=design&t=TnHmWwpgcGOt6bEi-1",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "React Portfolio Website",
    description:
      "This a Portfolio Website that i made using React and NextJs (This is my main Portfolio Website).",
    link: "https://idabaguspurwa.vercel.app",
  },
];

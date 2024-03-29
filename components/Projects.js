import React from "react";
import { FaSass, FaShopify } from "react-icons/fa";
import {
  SiHeroku,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiFirebase,
  SiVercel,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Getir-Clone",
    imgUrl: "https://i.hizliresim.com/tar9sfw.png",
    description:
      "In this project, I developed a clone of getir.com using React JS and Tailwind CSS.",
    demoUrl: "https://getir-clone-delta.vercel.app/",
    useTech: [
      { name: SiReact },
      { name: SiTailwindcss },
      { name: SiHeroku },
      { name: SiVercel },
    ],
  },
  {
    id: 2,
    title: "Spotify-Clone",
    imgUrl: "https://i.hizliresim.com/r4sqtdi.png",
    description:
      "In this project, I developed a clone of spotify.com using React JS and Tailwind CSS.",
    demoUrl: "https://spotify-clone-rosy.vercel.app/",
    useTech: [{ name: SiReact }, { name: SiTailwindcss }, { name: SiVercel }],
  },
  {
    id: 3,
    title: "Tatilbudur.com Clone",
    imgUrl: "https://i.hizliresim.com/cutp73u.png",
    description:
      "In this project, I participated in the front-end hiring challenge by Tatilbudur.com and entered the top 3 and came in 2nd.",
    demoUrl: "https://tatilbudur-serifcolakel.vercel.app/",
    useTech: [
      { name: SiNextdotjs },
      { name: SiTailwindcss },
      { name: SiVercel },
    ],
  },
  {
    id: 4,
    title: "Messenger App",
    imgUrl: "https://i.hizliresim.com/luknil9.png",
    description:
      "In this project, I developed a clone of the messaging application using React JS and Firebase.",
    demoUrl: "https://messenger-app-serifcolakel.vercel.app/",
    useTech: [{ name: SiReact }, { name: SiFirebase }, { name: SiVercel }],
  },
  {
    id: 5,
    title: "Dashboard App",
    imgUrl: "https://i.hizliresim.com/496swps.jpg",
    description:
      "In this project, I developed the Dashboard design using ChartJS, NextJs and TailwindCSS. You can login with serifcolakel@gmail.com and 1234.",
    demoUrl: "https://dashboard-serifcolakel.vercel.app/",
    useTech: [
      { name: SiNextdotjs },
      { name: SiTailwindcss },
      { name: SiVercel },
    ],
  },
  {
    id: 6,
    title: "Todo App",
    imgUrl: "https://i.hizliresim.com/73ov4ud.jpg",
    description:
      "In this project, I developed the Todo App, which was created by full stack developers at the beginning, using NextJS, MongoDB, SASS, Vercel and Heroku.",
    demoUrl: "https://todo-serifcolakel.vercel.app/",
    useTech: [
      { name: SiNextdotjs },
      { name: FaSass },
      { name: SiVercel },
      { name: SiHeroku },
      { name: SiMongodb },
    ],
  },
  {
    id: 7,
    title: "Shopify App",
    imgUrl: "https://i.hizliresim.com/3sf9j24.jpg",
    description:
      "I developed Shopify App using NextJS, TailwindCSS, Shopify API.",
    demoUrl: "https://serif-shopify.vercel.app/",
    useTech: [
      { name: SiNextdotjs },
      { name: SiVercel },
      { name: SiTailwindcss },
      { name: FaShopify },
    ],
  },
  {
    id: 8,
    title: "Find Event",
    imgUrl: "https://i.hizliresim.com/9ogyjkw.png",
    description:
      "In this project, I participated in the hiring challenge competition created by etstur.",
    demoUrl: "http://etstur-findevent.vercel.app/",
    useTech: [
      { name: SiNextdotjs },
      { name: SiTailwindcss },
      { name: SiVercel },
    ],
  },
  {
    id: 9,
    title: "Yusuf Oztel - Portfolio",
    imgUrl: "https://i.hizliresim.com/c8q4t13.png",
    description:
      "In this project, I developed the portfolio of Yusuf Oztel using NextJS, TailwindCSS, TypeScript and Vercel.",
    demoUrl: "https://yusuf-oztel.vercel.app/",
    useTech: [
      { name: SiNextdotjs },
      { name: SiTailwindcss },
      { name: SiVercel },
      { name: SiTypescript },
    ],
  },
  {
    id: 10,
    title: "Getir Mobile App /with React Native",
    imgUrl: "https://i.hizliresim.com/rkqinr7.jpg",
    description:
      "In this project, I developed the fetch mobile application using react-native, redux-toolkit, react-native-maps & typescript. You can review the codes on my Github account and review the details of the work by watching the video I uploaded on youtube.",
    demoUrl: "https://www.youtube.com/watch?v=m5N7z8EUGUo",
    useTech: [{ name: SiReact }, { name: SiTypescript }],
  },
];
//
export default function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col gap-y-4 items-center justify-center bg-bgprojects p-8"
    >
      <h1 id="skills" className="text-3xl font-extrabold text-black">
        Projects
      </h1>
      <div className="grid md:grid-cols-2 md:w-[1130px] gap-y-4 md:gap-y-8 gap-x-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col items-center gap-2  md:p-8 p-8 bg-et-top rounded-2xl border-2 border-background-aboutme"
          >
            <p className="truncate font-extrabold p-2 rounded-2xl bg-image-color-1 text-brand-gray">
              {project.title}
            </p>

            <a href={project.demoUrl} target="_blank">
              <img
                src={project.imgUrl}
                alt="project"
                className="object-contain md:h-[400px] hover:opacity-70 "
              />
            </a>
            <p className="p-2 text-center">{project.description}</p>
            <a
              className="truncate font-extrabold px-6 py-2 bg-button-primary hover:bg-primary-brand-color rounded-2xl hover:text-et-top"
              href={project.demoUrl}
              target="_blank"
            >
              Project Demo
            </a>
            <div className="flex flex-row gap-x-4">
              {project.useTech.map((tech, i) => (
                <tech.name
                  key={i}
                  className="w-12 h-12 p-2 hover:text-image-color-1 text-primary-brand-color"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

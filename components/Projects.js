import React from "react";
import { SiNextdotjs, SiHeroku, SiReact, SiTailwindcss } from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Getir-Clone",
    imgUrl: "https://i.hizliresim.com/tar9sfw.png",
    description:
      "Bu projemde getir.com'un klonunu ReactJS ve TailwinCSS kullanarak geliştirdim.",
    demoUrl: "https://getir-clone-delta.vercel.app/",
    useTech: [{ name: SiReact }, { name: SiTailwindcss }, { name: SiHeroku }],
  },
  {
    id: 2,
    title: "Spotify-Clone",
    imgUrl: "https://i.hizliresim.com/r4sqtdi.png",
    description:
      "Bu projemde spotify.com'un klonunu ReactJS ve TailwinCSS kullanarak geliştirdim.",
    demoUrl: "https://spotify-clone-rosy.vercel.app/",
    useTech: [{ name: SiReact }, { name: SiTailwindcss }],
  },
];
export default function Projects() {
  return (
    <div
      id="projects"
      className="flex items-center justify-center bg-bgprojects p-8"
    >
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
                className="object-scale-down hover:opacity-70"
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
              {project.useTech.map((tech) => (
                <tech.name className="w-12 h-12 p-2 hover:text-image-color-1 text-primary-brand-color" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
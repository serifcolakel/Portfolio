import { useState } from "react";
import Header from "./Header";

const pagesLink = [
  { id: 1, link: "#aboutme", desc: "About Me" },
  { id: 2, link: "#skills", desc: "Skills" },
  { id: 3, link: "#projects", desc: "Projects" },
  { id: 4, link: "#contactme", desc: "Contact Me" },
];
export default function ResponsiveMenu(props) {
  const [hide, setHide] = useState(props.openMenu);

  return (
    <>
      {hide ? (
        <div className="fixed w-screen h-full bg-brand-color p-10 ">
          <div className=" gap-y-2 text-primary-white flex h-full">
            <div className="flex  flex-col justify-between ">
              <div className="flex flex-col gap-y-4 ">
                {pagesLink.map((x) => (
                  <a
                    href={x.link}
                    key={x.id}
                    rel="noreferrer"
                    onClick={() => {
                      setHide(false);
                    }}
                  >
                    <span className="hover:text-image-color-1 font-bold text-xl">
                      {x.desc}
                    </span>
                  </a>
                ))}
              </div>

              <div className=" cursor-pointer flex flex-col justify-end ">
                <a
                  href="http://getir-clone-delta.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-[89px] h-10 text-primary-white-600"
                    alt="noReferer"
                    src="/logo.png"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

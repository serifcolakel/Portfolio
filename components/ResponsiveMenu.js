import { useState, useEffect } from "react";

const pagesLink = [
  { id: 1, link: "#aboutme", desc: "About Me" },
  { id: 2, link: "#skills", desc: "Skills" },
  { id: 3, link: "#projects", desc: "Projects" },
  { id: 4, link: "#contactme", desc: "Contact Me" },
];
export default function ResponsiveMenu({ openMenu }) {
  const [hide, setHide] = useState(openMenu);
  return (
    <>
      {hide ? (
        <div className="fixed top-0 right-0 left-0 bottom-0 w-screen h-[100vh] bg-brand-color p-10 z-50">
          <div className=" gap-y-2 text-primary-white flex h-full">
            <div className="flex  flex-col justify-between ">
              <div className="flex flex-col gap-y-4 ">
                {pagesLink.map((x) => (
                  <a
                    href={x.link}
                    key={x.id}
                    rel="noreferrer"
                    onClick={() => setHide(!hide)}
                  >
                    <span className="hover:text-image-color-1 font-bold text-xl">
                      {x.desc}
                    </span>
                  </a>
                ))}
              </div>

              <div className="flex flex-col justify-end ">
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

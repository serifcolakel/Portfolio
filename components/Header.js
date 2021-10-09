import { GiHamburgerMenu } from "react-icons/gi";
import ResponsiveMenu from "./ResponsiveMenu";
import { useState } from "react";
import { SiNixos } from "react-icons/si";

const pagesLink = [
  { id: 1, link: "#footer", desc: "About Me" },
  { id: 2, link: "#skills", desc: "Skills" },
  { id: 3, link: "#projects", desc: "Projects" },
  { id: 4, link: "#contactme", desc: "Contact Me" },
];

export default function Header() {
  const [show, setShow] = useState(false);

  return (
    <>
      {show ? <ResponsiveMenu openMenu={setShow} /> : null}
      <div id="header" className="bg-brand-color">
        <div className="flex  flex-row md:w-[1130px] mx-auto justify-between h-13 pl-4 md:h-20 items-center">
          <div className=" cursor-pointer">
            <a href="/" rel="noreferrer">
              <img
                className="md:w-full w-[89px] md:h-10 md:fill-current text-primary-white"
                alt="noReferer"
                src="/logo.png"
              />
            </a>
          </div>
          <div className="md:flex text-primary-white z-1 ">
            <div className="md:hidden w-12 h-12 flex items-center justify-center text-primary-white ">
              <button onClick={() => setShow(!show)}>
                {show ? (
                  <SiNixos className="scale-150 text-image-color-1" />
                ) : (
                  <GiHamburgerMenu className="scale-150" />
                )}
              </button>
            </div>
            <div className="md:flex text-primary-white gap-x-10">
              <div className="hidden items-center justify-center md:flex md:pl-6 md:gap-x-10">
                {pagesLink.map((page, i) => (
                  <a href={page.link} rel="noreferrer" key={page.id}>
                    <span className="hover:text-image-color-1 font-bold text-base	">
                      {page.desc}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

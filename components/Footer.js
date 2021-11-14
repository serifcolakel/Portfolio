import React from "react";

import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const link = [
  {
    link: "https://www.facebook.com/Srf247/",
    icon: <FaFacebookF />,
  },
  {
    link: "https://www.instagram.com/serifcolakell/?hl=tr",
    icon: <FaInstagram />,
  },
  {
    link: "https://twitter.com/ColakelSerif",
    icon: <FaTwitter />,
  },

  {
    link: "https://www.linkedin.com/in/serifcolakel/",
    icon: <FaLinkedin />,
  },

  {
    link: "https://github.com/serifcolakel",
    icon: <FaGithub />,
  },

  {
    link: "mailto:serifcolakel0@gmail.com",
    icon: <GrMail />,
  },
];

export default function Footer() {
  return (
    <>
      <div
        id="footer"
        className="bg-brand-color p-4 md:p-8 md:flex flex-col md:gap-y-2 gap-y-4 z-0"
      >
        <div className="flex flex-row items-end justify-end md:p-2">
          <a href="#header" className="flex flex-col  rounded-full ">
            <img
              className="animate-bounce-slow "
              src="https://img.icons8.com/color/48/000000/double-up--v2.png"
            />
          </a>
        </div>
        <div className="flex  flex-col justify-center items-center md:items-center gap-y-8 md:justify-center md:w-[1130px]  md:pt-12 p-2 mx-auto  text-primary-white ">
          <div className="flex items-center flex-row gap-x-8 md:scale-150">
            {link.map((x, i) => (
              <a
                href={x.link}
                target="_blank"
                className="scale-150 hover:text-image-color-1 "
                key={i}
              >
                {x.icon}
              </a>
            ))}
          </div>

          <p className="flex text-center">
            <strong className="text-image-color-1 ">
              @2021 Serif Colakel,
            </strong>
            {"  "}
            All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
}

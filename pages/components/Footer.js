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
  {
    link: "tel:+905398568303",
    icon: <FaPhoneSquareAlt />,
  },
];

export default function Footer() {
  return (
    <div className="bg-brand-color p-4">
      <div className="flex  flex-col justify-center items-center md:items-center gap-y-8 md:justify-center md:w-[1130px] mx-auto md:pt-20 pt-8  text-primary-white ">
        <div className="md:flex flex flex-row gap-x-8 md:scale-150 ">
          {link.map((x, i) => (
            <a
              href={x.link}
              target="_blank"
              className="scale-150 hover:text-image-color-1"
            >
              {x.icon}
            </a>
          ))}
        </div>

        <p>
          <strong>@2021 Serif Colakel,</strong> All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

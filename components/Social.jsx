"use client";
import React from "react";
import {
  RiWhatsappFill,
  RiMailFill,
  RiLinkedinFill,
  RiGithubFill,
  RiDiscordfill,
  RiRedditFill,
  RiTwitterXFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://wa.me/+2349056449863",
    name: <RiWhatsappFill />,
  },
  {
    path: "/",
    name: <RiMailFill />,
  },
  // {
  //   path: "/",
  //   name: <RiDiscordFill />,
  // },
  // {
  //   path: "/",
  //   name: <RiTwitterXFill />,
  // },
  // {
  //   path: "/",
  //   name: <RiRedditFill />,
  // },
];

const Social = ({ containerStyle, iconsStyles }) => {
  return (
    <div className={`${containerStyle}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Social;

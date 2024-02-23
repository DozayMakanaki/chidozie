"use client";
import React from "react";
import {
  RiWhatsappFill,
  RiLinkedinFill,
  RiGithubFill,
  RiTwitterFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "/",
    name: <RiWhatsappFill />,
  },
  {
    path: "/",
    name: <RiLinkedinFill />,
  },
  {
    path: "/",
    name: <RiGithubFill />,
  },
  {
    path: "/",
    name: <RiTwitterFill />,
  },
  {
    path: "/",
    name: <RiInstagramFill />,
  },
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
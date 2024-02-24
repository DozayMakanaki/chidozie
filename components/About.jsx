import React from "react";
import Image from "next/image";
import Devlmg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  PhoneCall,
  GraduationCap,
  CableCarIcon,
  Briefcase,
  HomeIcon,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Dozie Umeodinka",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+234 80 6634 5068 ",
  },
  {
    icon: <MailIcon size={20} />,
    text: "Chidoziemail@gmail.com",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Lagos, Nigeria",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Example University",
        qualification: "B.sc Mathematics",
        years: "2016 - 2020",
      },
      {
        university: "Example University",
        qualification: "B.sc Mathematics",
        years: "2016 - 2020",
      },
      {
        university: "Example University",
        qualification: "B.sc Mathematics",
        years: "2016 - 2020",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Abc Inc.",
        qualification: "Software",
        years: "2016",
      },
      {
        company: "Abc Inc.",
        qualification: "Software",
        years: "2016",
      },
      {
        company: "Abc Inc.",
        qualification: "Software",
        years: "2016",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "HTML, CSS",
      },
      {
        name: "HTML, CSS",
      },
      {
        name: "HTML, CSS",
      },
    ],
  },
];
const About = () => {
  return <div>About</div>;
};

export default About;

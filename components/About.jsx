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
import Anime from "./Anime";

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
        name: "JavaScript",
      },
      {
        name: "React.Js",
      },
      {
        name: "Tailwind",
      },
      {
        name: "Next.js",
      },
      {
        name: "Typescript",
      },
      {
        name: "Node.Js",
      },
    ],
  },
  {
    title: "Software",
    data: [
      {
        imgPath: '/about/vscode.svg',
      },
      {
        imgPath: '/about/wordpress.svg',
      },
      {
        imgPath: '/about/photoshop.svg',
      },
      {
        imgPath: "/about/xd.svg",
      },
      {
        imgPath: '/about/figma.svg',
      },
    ],
  },
];


const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title );
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row"> 
          {/*  lottie animation */}
          <div className="">
            <Anime />
          </div>
          <div className="flex-1 items-center justify-center ">
            <Tabs defaultValue="info">
              <TabsList className=' grid xl:grid-cols-3 xl:max-w=[520px]'>
                <TabsTrigger value="info">Info</TabsTrigger>
                <TabsTrigger value="credentials">Credentials</TabsTrigger>
                <TabsTrigger value="proficiency">Proficiency</TabsTrigger>
              </TabsList>

              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="info">Info</TabsContent>
                <TabsContent value="credentials">Credentials</TabsContent>
                <TabsContent value="proficiency">Proficiency</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  ); 
};

export default About;

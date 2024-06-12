"use client";

import React from "react";
import Image from "next/image";
import Devlmg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {motion } from "framer-motion";
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



const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.5,
    }
  },
  open:{
    transition:{
      staggerChildren:0.5,
    }
  }
}

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Akaninyene Udeme",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+234 80 ",
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


const skillData = [
  {
    title: "frontend",
    data: [
      {
        name: "HTML",
        imgPath: "/stack/html.svg",
      },
      {
        name: "CSS",
        imgPath: "/stack/css.svg",
      },
      {
        name: "JAVASCRIPT",
        imgPath: "/stack/javascript.svg",
      },
      {
        name: "REACT.JS",
        imgPath: "/stack/react.svg",
      },
      {
        name: "Next.js",
        imgPath: "/stack/nextjs.svg",
      },
      {
        name: "Typescript",
        imgPath: "/stack/typescript.svg",
      },
      {
        name: "TAILWIND",
        imgPath: "/stack/tailwind.svg",
      },
    ],
  },

  {
    title: "backend",
    data: [
      {
        stack: "NODE.JS",
        imgPath: "/stack/nodejs.svg",
      },
      {
        stack: "EXPRESS.JS",
        imgPath: "/stack/express.svg",
      },
      {
        stack: "PHP",
        imgPath: "/stack/php.svg",
      },
      {
        stack: "LARAVEL",
        imgPath: "/stack/laravel.svg",
      },
      {
        stack: "MONGO.DB",
        imgPath: "/stack/mongodb.svg",
      },
    ],
  },

  {
    title: "Software",
    data: [
      {
        software: "VS CODE",
        imgPath: "/stack/vscode.svg",
      },
      {
        software: "PHOTOSHOP",
        imgPath: "/stack/photoshop.svg",
      },
      {
        software: "XD",
        imgPath: "/stack/xd.svg",
      },
      {
        software: "FIGMA",
        imgPath: "/stack/figma.svg",
      },
    ],
  },
];


const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title );
  };

  return (
    <section className="snap-start xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/*  lottie animation */}
          <div className=" hidden xl:flex flex-1 relative">
            <Anime />
            {/* <iframe
              src="https://my.spline.design/untitled-2618df90d4d8efc66aa546f5bb98f5bd/"
              frameborder="0"
              width="100%"
              height="100%"
            ></iframe> */}
          </div>
          <div className="flex-1 ">
            <Tabs defaultValue="info">
              <TabsList className=" grid xl:grid-cols-4 xl:max-w-[540px] ">
                <TabsTrigger className="w-[162px] xl:w-auto" value="info">
                  Info
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="Frontend">
                  Frontend
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="Backend">
                  Backend
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="Tools">
                  Software
                </TabsTrigger>
              </TabsList>

              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="info">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Commodi quisquam eligendi perferendis. Obcaecati excepturi
                      at, .
                    </p>
                    {/* icons */}
                    <motion.div
                      // variants={fadeInAnimationVariants}
                      initial="initial"
                      animate="animate"
                      whileInView="animate"
                      viewport={{
                        once: true,
                      }}
                      className="grid xl:grid-cols-2 gap-4 mb-12"
                    >
                      {infoData.map((item, index) => (
                        <motion.div
                          key={index}
                          variants={containerVars}
                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
                        >
                          <div className="text-primary">{item.icon}</div>
                          <div>{item.text}</div>
                        </motion.div>
                      ))}
                    </motion.div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Hobbies</div>
                      <div className="border-b border-border"></div>
                      <div>Sports, Music, Learning</div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="Frontend">
                  <div>
                    <h3 className="h3 nb8 text-center xl:text-left">
                      Frontend
                    </h3>
                    {/* frontend */}
                    <div className="mb-16">
                      <div className="border-b border-border mb4"></div>

                      {/* frontend  list */}
                      <div className="grid xl:grid-cols-4 mb-11">
                        {getData(skillData, "frontend").data.map(
                          (item, index) => {
                            const { name, imgPath } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-center mx-auto xl:mx-0 flex items-center p-2"
                                key={index}
                              >
                                <div className="p-2">{name}</div>
                                <Image
                                  src={imgPath}
                                  width={20}
                                  height={20}
                                  alt=""
                                  priority
                                />
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="Backend">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Backend</h3>
                    {/* frontend */}
                    <div className="mb-16">
                      <div className="border-b border-border mb4"></div>

                      {/* frontend  list */}
                      <div className="grid xl:grid-cols-4 mb-11">
                        {getData(skillData, "backend").data.map(
                          (item, index) => {
                            const { stack, imgPath } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-center mx-auto xl:mx-0 flex items-center p-2"
                                key={index}
                              >
                                <div className="p-2">{stack}</div>
                                <Image
                                  src={imgPath}
                                  width={20}
                                  height={20}
                                  alt=""
                                  priority
                                />
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* TOOLS */}
                <TabsContent value="Tools">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Softwares</h3>

                    {/* tools */}
                    <div>
                      <div className="border-b border-border mb-4"></div>

                      {/* frontend  list */}
                      <div className="grid xl:grid-cols-4 mb-11">
                        {getData(skillData, "Software").data.map(
                          (item, index) => {
                            const { software, imgPath } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-center mx-auto xl:mx-0 flex items-center p-2"
                                key={index}
                              >
                                <div className="p-2">{software}</div>
                                <Image
                                  src={imgPath}
                                  width={20}
                                  height={20}
                                  alt=""
                                  priority
                                />
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  ); 
};

export default About;

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
    text: "Uyo, Akwa Ibom",
  },
];


const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Universitry Of Uyo",
        qualification: "Bachelor Of Science Economics",
        years: "2020 to 2024",
      },
      {
        university: "Cousera",
        qualification: "Certified Social Media Manager",
        years: "2023 to 2024",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "FTX Exchange",
        role: "Ambassador",
        years: "2021 to 2022",
      },
      {
        company: "Yellow Card",
        role: "Ambassador",
        years: "2023 to 2023",
      },
      {
        company: "EOS Nigeria",
        role: "Moderator",
        years: "2022 to 2024",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "Social Media Mangement",
      },
      {
        name: "Community Manangement",
      },

      {
        name: "Blockchain and Decentralized Finance Knowledge",
      },
      {
        name: "Ability to Troubleshoot Technical Issues",
      },
      {
        name: "Blockchain and Decentralized Finance Knowledge",
      },
      {
        name: "Marketing Analytics",
      },
      {
        name: "SEO/SEM",
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
              <TabsList className=" grid xl:grid-cols-2 xl:max-w-[540px] ">
                <TabsTrigger className="w-[162px] xl:w-auto" value="info">
                  Info
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">
                  Qualification
                </TabsTrigger>
                {/* <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger> */}
                {/* <TabsTrigger className="w-[162px] xl:w-auto" value="Tools">
                  Software
                </TabsTrigger> */}
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

                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My awesome Journey
                    </h3>
                    {/* experience and qualification wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-{22px} text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className=" font-semibold text-xl leading-none mb-2 ">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-8">
                        <div className="flex gap-x-4 items-center text-{22px} text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className=" font-semibold text-xl leading-none mb-2 ">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                  
                {/* skills */}
                {/* <TabsContent value='skills'>

                </TabsContent>
                 */}
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  ); 
};

export default About;

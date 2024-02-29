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

// const qualificationData = [
//   {
//     title: "Dev skills",
//     data: [
//       {
//         university: "Example University",
//         qualification: "B.sc Mathematics",
//         years: "2016 - 2020",
//       },
//       {
//         university: "Example University",
//         qualification: "B.sc Mathematics",
//         years: "2016 - 2020",
//       },
//       {
//         university: "Example University",
//         qualification: "B.sc Mathematics",
//         years: "2016 - 2020",
//       },
//     ],
//   },
//   {
//     title: "experience",
//     data: [
//       {
//         company: "Abc Inc.",
//         qualification: "Software",
//         years: "2016",
//       },
//       {
//         company: "Abc Inc.",
//         qualification: "Software",
//         years: "2016",
//       },
//       {
//         company: "Abc Inc.",
//         qualification: "Software",
//         years: "2016",
//       },
//     ],
//   },
// ];

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
              <TabsList className=" grid xl:grid-cols-2 xl:max-w-[420px] ">
                <TabsTrigger className='w-[162px] xl:w-auto' value="info">Info</TabsTrigger>
                {/* <TabsTrigger className='w-[162px] xl:w-auto' value="credentials">Credentials</TabsTrigger> */}
                <TabsTrigger className='w-[162px] xl:w-auto' value="proficiency">Proficiency</TabsTrigger>
              </TabsList>

              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="info">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Commodi quisquam eligendi perferendis. Obcaecati excepturi at,
                      .</p>
                      {/* icons */}
                      <div className="grid xl:grid-cols-2 gap-4 mb-12">
                        {infoData.map((item, index) => {
                          return (
                            <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                              <div className="text-primary">{item.icon}</div>
                              <div>{item.text}</div>
                            </div>
                          );
                        })}
                      </div>
                      {/* languages */}
                      <div className="flex flex-col gap-y-2">
                        <div className="text-primary">Hobbies</div>
                        <div className="border-b border-border"></div>
                        <div>Sports, Music, Learning</div>
                      </div>
                  </div>
                </TabsContent>

                
                {/* <TabsContent value="credentials">
                  <div>
                    <h3 className="h3 nb8 text-center xl:text-left">Tech Skills
                    </h3>
                  </div>
                </TabsContent> */}
                
                <TabsContent value="proficiency">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">My Skills</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">
                        Languages
                      </h4>
                      <div className="border-b border-border mb4"></div>

                      {/* skiill list */}
                      <div>
                        {getData(skillData, 'skills').data.map((item, index) =>{
                          const {name} = item;
                          return <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                            <div className="font-medium">{name}</div>
                          </div>
                        })}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
                      <div className="border-b border-border mb-4"></div>

                      {/* tool list */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, 'Software').data.map((item, index)=> {
                          const {imgPath} = item;
                          return (
                            <div key={index}>
                              <Image src={imgPath} width={40} height={40} alt="" priority />
                            </div>
                          );
                        }) }
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

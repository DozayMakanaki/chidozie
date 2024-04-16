"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/3.png",
    cartegory: "React js",
    name: "Nexa web",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ea ex",
    github: "/",
    link: "/",
  },
  {
    image: "/work/2.png",
    cartegory: "React js",
    name: "Nexa web",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ea ex",
    github: "/",
    link: "/",
  },
  {
    image: "/work/1.png",
    cartegory: "React js",
    name: "Nexa web",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ea ex",
    github: "/",
    link: "/",
  },
  {
    image: "/work/4.png",
    cartegory: "React js",
    name: "Nexa web",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ea ex",
    github: "/",
    link: "/",
  },
  {
    image: "/work/2.png",
    cartegory: "React js",
    name: "Nexa web",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ea ex",
    github: "/",
    link: "/",
  },
  {
    image: "/work/1.png",
    cartegory: "React js",
    name: "Nexa web",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ea ex",
    github: "/",
    link: "/",
  },
  {
    image: "/work/3.png",
    cartegory: "React js",
    name: "Nexa web",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ea ex",
    github: "/",
    link: "/",
  },
  {
    image: "/work/4.png",
    cartegory: "React js",
    name: "Nexa web",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ea ex",
    github: "/",
    link: "/",
  },
];
const uniqueCartegories = [
  "all projects",
  ...new Set(projectData.map((item) => item.cartegory)),
];
const page = () => {
  const [cartegories, setCartegories] = useState(uniqueCartegories);
  const [cartegory, setCartegory] = useState("all projects");

   const filteredProjects = projectData.filter(project => {
    //
    return cartegory === 'all projects' ? project : project.cartegory === cartegory;
   })
  return (
    <section className=" min-h-screen pt-12 ">
      <div className="container mx-auto">
        <h2 className=" section-title mb-8 xl:mb-16 text-center mx-auto ">
          Projects
        </h2>
        <Tabs defaultValue={cartegory} className=" mb-24 xl:mb-48 ">
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:md:border-none '>
            {cartegories.map((cartegory, index) => {
              return (
                <TabsTrigger onClick={()=> setCartegory(cartegory)} value={cartegory} key={index} className="capitalize w-[162px] md:w-auto">
                  {cartegory}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
         <div className=" text-lg  xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 ">
          {filteredProjects.map((project, index) => {
            return <TabsContent value={cartegory} key={index}>
              <ProjectCard project={project}/>
            </TabsContent>
          }
          )}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default page;

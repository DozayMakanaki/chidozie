"use client";

import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cards";

import "swiper/swiper-bundle.css";
import ProjectCard from "./ProjectCard";

import { Navigation, Pagination, Scrollbar, EffectCards } from "swiper/modules";


const projectData = [
  {
    image: "/work/3.jpg",
    cartegory: "Community Moderator",
    name: "CORAL APP",
    // description:
    //   " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ea ex",
    // github: "/",
    link: "/",
  },
  {
    image: "/work/2.jpg",
    cartegory: "Community Moderator",
    name: "ULTRADE",
    // description:
    //   " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ea ex",
    // github: "/",
    link: "/",
  },
  {
    image: "/work/1.jpg",
    cartegory: "Community Moderator",
    name: "ASTUT",
    // description:
    //   " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ea ex",
    // github: "/",
    link: "/",
  },
  
 
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}

        <div
          className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] 
        flex flex-col justify-center items-center xl:items-start"
        >
          <h2 className="section-title mb-4">Projects</h2>
          <p className=" subtitle mb-8">
            Here is a few out of many projects i have workd for
          </p>
          <Link href="/projects">
            <Button className="gap-x-2 hover:text-primary hover:bg-slate-100 dark:hover:text-green dark:hover:bg-slate-900">
              Projects
            </Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[380px] max-w-[280px] xl:absolute right-40 top-0 mx-auto ">
          <Swiper
            className="h-[480px]"
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            // slidesPerView={1}
            // breakpoints={{
            //   640: {
            //     slidesPerView: 2,
            //   },
            // }}
            // spaceBetween={30}
            // modules={[ Pagination ]}
            // pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;

"use client";

import React from "react";
import Lottie from "lottie-react";
import animationData from "@/app/animation.json";

const Anime = () => {
  return (
    <div className="w-[350px]">
      <Lottie animationData={animationData}  />
    </div>
  );
};

export default Anime;

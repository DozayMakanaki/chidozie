"use client";

import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "@/app/mailanime.json";

const Mail = () => {
  const [isAnimationLoaded, setIsAnimationLoaded] = useState(false);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setIsAnimationLoaded(true);
    }, 4000); // Adjust the delay time (in milliseconds) as needed

    return () => clearTimeout(delayTimeout);
  }, []);

  return (
    <div className="w-[350px]">
      {isAnimationLoaded && (
        <Lottie animationData={animationData} loop={true} data="" />
      )}
    </div>
  );
};

export default Mail;

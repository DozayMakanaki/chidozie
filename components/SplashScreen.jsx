import React, { useEffect } from "react";
import { gsap } from "gsap";

export default function SplashScreen({ finishLoading, className }) {
  useEffect(() => {
    const logoPath = document.getElementById("path");

    if (logoPath) {
      const length = logoPath.getTotalLength();

      gsap.set(logoPath, { strokeDasharray: length, strokeDashoffset: length });

      const timeline = gsap.timeline();

      // Animation for the #logo element
      timeline.fromTo(
        "#logo",
        { opacity: 0 },
        {
          duration: 1,
          opacity: 1,
        }
      );

      // Drawing animation for the path
      timeline.to(logoPath, {
        strokeDashoffset: 4,
        duration: 4,
        scale: 1,
      });

      // Animation for the #logop element
      timeline.fromTo(
        "#logop",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 5,
          delay: 2,
          onComplete: finishLoading,
        },
        "<" // The "<" indicates that the second animation should start at the same time as the first
      );
    }
  }, [finishLoading]);

  return (
    <div
      className={`flex h-screen items-center justify-center text-white text-2xl ${className}`}
    >
      <svg
        id="logo"
        className="stroke-white fill-opacity-0 stroke-11"
        xmlns="http://www.w3.org/2000/svg"
        height="80"
        width="80"
        viewBox="0 0 416 512"
      >
        <path
          id="path"
          fillOpacity="0"
          stroke="4"
          d="M397.9 160H256V19.6L397.9 160zM304 192v130c0 66.8-36.5 100.1-113.3 100.1H96V84.8h94.7c12 0 23.1 .8 33.1 2.5v-84C212.9 1.1 201.4 0 189.2 0H0v512h189.2C329.7 512 400 447.4 400 318.1V192h-96z"
        />
      </svg>
      <h2 id="logop" className=" text-gray-500 ">
        OZIE
      </h2>
    </div>
  );
}

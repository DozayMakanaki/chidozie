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

{/* <script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.54/build/spline-viewer.js"></script>
<spline-viewer url="https://prod.spline.design/Hs9lOREdW98wMQ7c/scene.splinecode"></spline-viewer> */}

// <iframe src='https://my.spline.design/untitled-2618df90d4d8efc66aa546f5bb98f5bd/' frameborder='0' width='100%' height='100%'></iframe>
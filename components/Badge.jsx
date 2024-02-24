"use client";
import CountUp from "react-countup";

import React from "react";

const Badge = ({
  containerStyles,
  icon,
  endCountNum,
  endCountText,
  badgeText,
}) => {
  return <div className={`badge ${containerStyles}`}>
    <div className="tect-3xl text-primary">{icon}</div>
    <div className="flex items-center gap-x-2">
      <div className="text-4xl leading-none font-bold text-primary">
        <CountUp end={endCountNum} delay={1} duration={5} />
        {endCountText}
      </div>
      <div className="max-w-[70px] leading-none text-[15px] font-medium text-gray-800 dark:text-gray-100">{badgeText}</div>
    </div>
  </div>;
};

export default Badge;

import React from "react";
import Image from "next/image";
const Devlmg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image
        src={imgSrc}
        fill
        priority
        alt=""
        className={`w-[200px] h-[auto] `}
      />
    </div>
  );
};

export default Devlmg;

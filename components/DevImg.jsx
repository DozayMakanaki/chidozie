import React from "react";
import Image from "next/image";

const Devlmg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles} relative `}>
      <Image
        src={imgSrc}
        width={380}
        height={110} // Set the height according to your requirements
        alt=""
        priority
        className=" mt-0 mb-9 pt-0 "
       
      />
    </div>
  );
};

export default Devlmg;

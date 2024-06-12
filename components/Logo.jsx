import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoImage from "../public/logo.png";

const logo = () => {
  return (
    <Link href="/">
      <Image src={LogoImage} alt="Logo" className="bg-primary rounded-full" width={54} height={54} priority />
    </Link>
  );
};

export default logo;

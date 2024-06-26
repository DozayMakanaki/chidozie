"use client";

import React from 'react'
import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react'
import Mail from '@/components/Mail';
import Form from '@/components/Form';

const page = () => {
  return (
    <section>
      <div className=" container mx-auto ">
        {/* text and illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4  ">
              <span className=" w-[30px] h-[2px] bg-primary "></span>
              say hello
            </div>
            <h1 className="h1 max-w-md mb-8 ">Lets WORK Together</h1>
            <p className="subtitle max-w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, quia?
            </p>
          </div>

          {/* illustration */}
          <div className="hidden xl:flex w-full bg-contain bg-no-repeat bg-top">
            <Mail />
          </div>
        </div>
        {/* info text an */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className=" text-primary " />
              <div>Chidoziemail@gmail.com</div>
            </div>
            {/* addess */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className=" text-primary " />
              <div>Lagos, Nigeria</div>
            </div>
            {/* phone */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className=" text-primary " />
              <div>08024272901</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
}

export default page
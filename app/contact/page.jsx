import React from 'react'
import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react'

const page = () => {
  return (
    <section>
      <div className=" container mx-auto ">
        {/* text and illustration */}
        <div>
          <div className="flex flex-col justify-center">
            <div className='flex items-center gap-x-4 text-primary  '>
              <span className=" w-[30px] h-[2px] bg-primary "></span>
              <div>say hello</div>
            </div>
          </div>
        </div>
        {/* info text an */}
        <div> info text</div>
      </div>
    </section>
  );
}

export default page
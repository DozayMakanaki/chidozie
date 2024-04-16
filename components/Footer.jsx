import React from 'react'
import Social from './Social'

const Footer = () => {
  return (
    <footer className=' bg-secondary py-9 '>
      <div className="container mx-auto ">
        <div className="flex flex-col items-center justify-between ">
          {/* social */}
          <Social containerStyle="flex gap-x-6 mx-auto xl:mx-0 mb-4 " 
          iconsStyles=" text-primary dark:text-white/70 hover:text-white dark:hover:text-primary" />
          {/* copyright */}
          <div className="text-muted-foreground">
            Copyright &copy; Dozie Umeodinka. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
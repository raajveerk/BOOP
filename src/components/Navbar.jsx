import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

export const Navbar = () => {
  return (
    <div className='w-full flex bg-[#130713] bg-opacity-5 backdrop-blur-md justify-center navBarX'>
        <div className='xl:max-w-[1000px] lg:max-w-[900px] md:max-w-[725px] sm:max-w-[540px] max-w-[350px] text-[#130713] pt-4 pb-4 md:pt-4 md:pb-4 w-full'>
            <h1 className='sm:text-sm lg:text-md text-md font-bold flex justify-end'><p className='pt-[2px] pr-1 text-lg'><HiOutlineMail /></p> <p className='pr-[30px]'>khattarraajveer@gmail.com</p> <p className='pt-1 pr-1'><FiPhoneCall /></p> <p className='p-0'>+91-81410-88633</p></h1>
        </div>
    </div>
  )
}

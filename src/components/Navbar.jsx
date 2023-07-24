import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <div className='w-full flex bg-[#130713] bg-opacity-5 backdrop-blur-md justify-center navBarX'>
        <div className='xl:max-w-[1000px] lg:max-w-[900px] md:max-w-[680px] sm:max-w-[540px] max-w-[350px] font-cursive text-[#130713] pt-2 pb-2 md:pt-4 md:pb-4 w-full'>
            <h1 className='sm:text-sm lg:text-md text-2xl font-bold flex justify-between md:justify-end'>
              <motion.a className='flex' href="mailto:khattarraajveer@gmail.com" rel='noopener' target='_blank' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <span className='pt-[1px] md:pr-1 md:text-lg text-3xl'><HiOutlineMail /></span> <span className='md:block hidden pr-[30px]'>khattarraajveer@gmail.com</span>
              </motion.a>
              <motion.a href="tel:+91-81410-88633" rel='noopener' target='_blank' className='flex' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <span className='pt-[4px] md:pt-1 pl-6 md:pr-1'><FiPhoneCall /></span> <span className='md:block hidden p-0'>+91-81410-88633</span>
              </motion.a>
               </h1>
        </div>
    </div>
  )
}

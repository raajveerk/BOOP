import React from 'react'
import { BsLinkedin, BsGithub } from "react-icons/bs";
import '../index.css'

export const Footer = () => {

    // const forLinkedIn = () => {
    //     window.location.replace('https://www.linkedin.com/in/raajveer-khattar/')
    // }
    // const forGithub = () => {
    //     window.location.replace('https://github.com/raajveerk')
    // }
    // const forInsta = () => {
    //     window.location.replace('https://www.instagram.com/raajveerkhattar/')
    // }

  return (
    <div className='flex flex-col w-full bg-[#130713] bg-opacity-10 backdrop-blur-md py-4 text-[#130713]'>
        <p className='flex justify-center md:text-md text-sm font-normal font-cursive'>
            {/* <a href='https://www.linkedin.com/in/raajveer-khattar/' target='_blank' rel='noopener noreferrer' className='sm:pl-[250px] pl-6 pr-8 mt-1 cursor-pointer'><BsLinkedin /></a> */}
            <span className='text-center justify-center items-center cursor-default'>'BOOP.' made by <a href='https://linktr.ee/raajveerkhattar' target='_blank' rel='noopener noreferrer' className='underline text-sky-950 font-semibold ml-1 cursor-pointer'>Raajveer Khattar</a></span>
            {/* <a href='https://github.com/raajveerk' target='_blank' rel='noopener noreferrer' className='sm:pr-[250px] pr-6 pl-8 mt-1 cursor-pointer'><BsGithub /></a> */}
        </p>
    </div>
  )
}
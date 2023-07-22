import React from 'react'
import '../index.css';
import { HiArrowNarrowDown } from "react-icons/hi";
import { GoFileMedia } from "react-icons/go";
import { TbWorldWww } from "react-icons/tb";
import { SlSocialInstagram } from "react-icons/sl";
import { PiHandshakeFill, PiHandTap } from "react-icons/pi";
import { AiOutlineForm } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
import emo1 from '../sunglasses.png';

export const Hero = () => {

  // const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  // const enhance = id => {
  // const element = document.getElementById(id),
  //       text = element.innerText.split("");
  
  // element.innerText = "";
  
  // text.forEach((value, index) => {
  //   const outer = document.createElement("span");
    
  //   outer.className = "outer";
    
  //   const inner = document.createElement("span");
    
  //   inner.className = "inner";
    
  //   inner.style.animationDelay = `${rand(-5000, 0)}ms`;
    
  //   const letter = document.createElement("span");
    
  //   letter.className = "letter";
    
  //   letter.innerText = value;
    
  //   letter.style.animationDelay = `${index * 1000 }ms`;
    
  //   inner.appendChild(letter);    
    
  //   outer.appendChild(inner);    
    
  //   element.appendChild(outer);
  // });
  // }

  // enhance("channel-link");

  return (
    <div className='mx-auto h-screen w-full flex items-center bg-transparent wrapperHero'>
        <div className='flex flex-col justify-center items-center text-center mt-[1850px] md:mt-[1825px]'>
            <h1 className='flex flex-col'>
              {/* <img src={emo1} alt="sunglasses" className='absolute h-[25px] w-[25px] top-[15px] rotate-12 left-[165px] z-[10]'/> */}
                <p className='p-0 m-0 text-4xl md:text-4xl z-[20] font-bold text-[#130713] text-center font-cursive'>Hello</p> <br />
                <p className='mt-[-25px] md:mt-[-20px] text-[0.75rem] md:text-lg font-cursive font-normal text-center text-[#130713]'>Stranger from the Internet!</p>

                <h3 className='text-[#130713] text-center mx-auto pt-[100px] items-center  justify-center animate-bounce text-xs md:text-md'><HiArrowNarrowDown /></h3>
            </h1>
            <h1 id="text" className='mx-auto flex flex-col mt-[180px] md:mt-[110px]'>
              <p className='word font-cursive font-normal text-sm md:text-lg text-[#130713] mx-auto items-center text-center word'>Welcome to</p>
              <p id="channel-link" className='word fancy inner text-6xl md:text-8xl font-sans text-cyan-600 text-center flex font-semibold ml-[20px] md:ml-[25px] mt-[12px] md:mt-[18px]'>
                {/* BOOP */}
                <span className='uno outer text-6xl md:text-8xl'>
                  <span className='inner'>
                    <span className='letter'>B</span>
                  </span>
                </span>
                <span className='dos outer text-6xl md:text-8xl'>
                  <span className='inner'>
                    <span className='letter'>O</span>
                  </span>
                </span>
                <span className='tres outer text-6xl md:text-8xl'>
                  <span className='inner'>
                    <span className='letter'>O</span>
                  </span>
                </span>
                <span className='quattro outer text-6xl md:text-8xl'>
                  <span className='inner'>
                    <span className='letter'>P</span>
                  </span>
                </span>
                <span className='sinko outer text-5xl md:text-6xl ml-[-10px] mt-[12px] md:mt-[34px]'>
                  <span className='inner'>
                    <span className='letter'>.</span>
                  </span>
                </span>
                <span className='word md:hidden block text-sm mt-[25px] ml-[5px] rotate-[-24deg] animate-pulse text-[#130713]'>
                  <PiHandTap />
                </span>
                {/* <span className='dos letter text-8xl'>O</span>
                <span className='tres letter text-8xl'>O</span>
                <span className='quattro letter text-8xl'>P</span>
                <span className=''>.</span> */}
              </p>
              <p className='word font-cursive font-normal text-xs md:text-lg text-[#130713] mt-[0px] mx-auto items-center text-center word'>(Blown out of Proportions.)</p>
            </h1>
            <h1 className='mx-auto flex flex-col mt-[225px]'>
                <h3 className='text-center items-center mx-auto flex flex-col'>
                  <span className='text-2xl md:text-3xl font-normal font-sans text-red-400'>WHO BOOP?</span>
                  <span className='text-[1.2rem] md:text-2xl font-normal font-sans text-green-600 mt-[-5px] md:mt-[-3px]'>WHAT BOOP?</span>
                  <span className='text-[1.15rem] md:text-[1.40rem] font-normal font-sans text-blue-400 mt-[-5px] md:mt-[-6px]'>WHY BOOP?</span>
                </h3>
            </h1>
            <div className='xl:w-[510px] lg:w-[455px] md:w-[370px] sm:w-[275px] w-[175px] rounded-2xl bg-teal-200 bg-opacity-100 drop-shadow-lg border-blue-950 border-4 backdrop-blur-md mt-[35px]'>
                <p className='text-[0.56rem] md:text-[0.8rem] font-normal md:justify-center font-cursive text-[#130713] md:items-center md:text-center p-[15px]'>
                  <span className='font-semibold'>BOOP</span> is a Multi-Media Agency, run by a bunch of college mates, that speacializes in <span className='font-semibold '>Digital Media and Web-Development.</span> With more than four years of experience in curating digital media and web-designs, BOOP is here to <span className='font-semibold'>SUPERCHARGE</span> your business/brand that leaves people saying "Whoa, that brand has <span className='font-semibold'>Blown Out Of Proportions!</span>". 
                </p>
            </div>
            <div className='items-center flex flex-col mx-auto mt-[210px]'>
              <h1 className='font-normal font-cursive text-[0.65rem] md:text-sm text-[#130713] w-[175px] md:w-[400px] rounded-2xl items-center text-center border-2 border-[#130713] p-[10px]'>
                Here at <span className='font-semibold'>BOOP,</span> we are big fans of <span className='font-semibold'>Visual Learning.</span><br />
                So, naturally we'd suggest you to check our work out. <br /><span className='hidden md:block'>That'll aid you to go for an informed decision.</span>
              </h1>
              <div className='grid grid-cols-2 justify-between items-stretch w-[175px] md:w-full h-[65px] md:h-[105px] space-x-2 mt-[35px] md:mt-[45px]'>
                <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} href='https://drive.google.com/drive/folders/1yIdBnonTQU85xOR7_c4mWW7piXZ3qeon?usp=drive_link' rel='noopener' target='_blank' className='bg-green-200 linkUno bg-opacity-100 border-2 rounded-xl border-[#130713]'>
                  <p className='font-semibold font-cursive text-[0.65rem] leading-3 md:leading-normal md:text-xs text-[#130713] items-center flex flex-col text-center md:p-[31px] p-[10px]'>
                    <span className='text-xl mb-[-10px] mt-[7px] md:mt-0 md:mb-[-12px] font-semibold text-center items-center mx-auto'><GoFileMedia /></span> <br /> Digital Media
                  </p>
                </motion.a>
                <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} href='https://docs.google.com/document/d/1uzy4BblCAfzfNiIpplGQlaMF_UkgSG81qn_TSl-DNPY/edit?usp=sharing' rel='noopener' target='_blank' className='bg-green-200 bg-opacity-100 border-2 rounded-xl border-[#130713]'>
                  <p className='font-semibold font-cursive text-[0.65rem] md:leading-normal leading-3 md:text-xs text-[#130713] items-center flex flex-col text-center md:p-[30px] p-[10px]'>
                    <span className='text-[1.40rem] md:mt-0 mt-[0px] mb-[-8px] md:mb-[-12px] font-semibold text-center items-center mx-auto'><TbWorldWww /></span> <br /> Web Development
                  </p>
                </motion.a>
              </div>
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} href='https://docs.google.com/document/d/1-Dk5zWl_6xnPOpuVLCRyuQcCdoE_QV9JeV94TMaZasc/edit?usp=sharing' rel='noopener' target='_blank' className='w-full h-[85px] md:h-[105px] mt-4 md:mt-3 bg-cyan-400 bg-opacity-100 border-2 rounded-xl border-[#130713]'>
                  <p className='font-semibold font-cursive text-xs text-[#130713] items-center flex flex-col text-center p-[10px] md:p-[31px]'>
                    <span className='text-[1.40rem] md:mt-0 mt-[10px] mb-[-12px] font-semibold text-center items-center mx-auto'><SlSocialInstagram /></span> <br /> Social Media
                  </p>
              </motion.a>
            </div>
            <div className='mt-[225px] mb-[110px] mx-auto space-x-4 hidden md:grid md:grid-cols-3 xl:w-[400px] lg:w-[400px] md:w-[370px] sm:w-[275px] w-[150px]'>
                <div className='flex'>
                  <h1 className='w-[150px] text-left text-lg font-sans font-normal text-[#130713] items-left'>
                    <span>Wanna Cook?</span><br />
                    <span className='text-4xl'>Let's Cook!</span>
                  </h1>
                </div>
                <span className='m-0 text-center flex justify-center text-2xl text-[#130713] items-center'><PiHandshakeFill /></span>
                <div className='grid grid-rows-2 pl-6 space-y-2'>
                  <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} href='https://forms.gle/rcjASW7NBxkXFGD16' rel='noopener' target='_blank' className='flex w-full justify-center rounded-lg border-2 border-[#130713] bg-green-200 text-center text-lg text-[#130713] items-center'><AiOutlineForm /></motion.a>
                  <motion.a href='mailto:khattarraajveer@gmail.com' rel='noopener' target='_blank' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className='flex w-full justify-center rounded-lg border-2 border-[#130713] bg-green-200 text-center text-lg text-[#130713] items-center'><AiOutlineMail /></motion.a>
                </div>
            </div>
            <div className='mt-[225px] mb-[110px] mx-auto space-y-4 md:hidden grid grid-rows-2 xl:w-[400px] lg:w-[400px] md:w-[370px] sm:w-[275px] w-[175px]'>
                <div className='flex flex-col'>
                  <h1 className='w-[175px] text-center text-lg font-sans font-normal text-[#130713] items-center justify-center'>
                    <span>Wanna Cook?</span><br />
                    <span className='text-3xl'>Let's Cook!</span>
                  </h1>
                </div>
                {/* <span className='m-0 text-center flex justify-center text-2xl text-[#130713] items-center'><PiHandshakeFill /></span> */}
                <div className='grid grid-cols-2 space-x-2 w-[175px] items-center justify-center ml-[-4px]'>
                  <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} href='https://forms.gle/rcjASW7NBxkXFGD16' rel='noopener' target='_blank' className='flex w-full justify-center rounded-lg border-2 border-[#130713] bg-green-200 text-center text-lg text-[#130713] items-center p-[20px]'><AiOutlineForm /></motion.a>
                  <motion.a href='mailto:khattarraajveer@gmail.com' rel='noopener' target='_blank' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} className='flex w-full justify-center rounded-lg border-2 border-[#130713] bg-green-200 text-center text-lg text-[#130713] items-center p-[20px]'><AiOutlineMail /></motion.a>
                </div>
            </div>
            {/* <div className='flex flex-col w-full bg-black bg-opacity-30 backdrop-blur-md py-4 text-white'>
              <p className='flex justify-between md:text-md text-sm font-semibold'>
                <a href='https://www.linkedin.com/in/raajveer-khattar/' target='_blank' rel='noopener noreferrer' className='sm:pl-20 pl-6 pr-8 mt-1 cursor-pointer'><BsLinkedin /></a>
                <span className='text-center cursor-default'>'Who's at the Terrace?' made by <a href='https://linktr.ee/raajveerkhattar' target='_blank' rel='noopener noreferrer' className='underline text-teal-400 cursor-pointer'>Raajveer Khattar</a></span>
                <a href='https://github.com/raajveerk' target='_blank' rel='noopener noreferrer' className='sm:pr-20 pr-6 pl-8 mt-1 cursor-pointer'><BsGithub /></a>
              </p>
            </div> */}
        </div>
    </div>
  )
}

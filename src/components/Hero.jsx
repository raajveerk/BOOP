import React from 'react'
import '../index.css';
import emo1 from '../sunglasses.png';

export const Hero = () => {
  return (
    <div className='mx-auto h-[1500px] w-full flex items-center bg-transparent wrapperHero'>
        <div className='flex justify-center items-center text-center mt-0'>
            <h1 className='relative mt-[-450px]'>
              {/* <img src={emo1} alt="sunglasses" className='absolute h-[25px] w-[25px] top-[0px] left-[100px] z-[10]'/> */}
                <p className='p-0 m-0 text-4xl z-[20] font-bold text-[#130713] text-center font-cursive'>Hello</p> <br />
                <p className='mt-[-20px] text-lg font-cursive font-normal text-center text-[#130713]'>Stranger from the Internet!</p>
            </h1>
        </div>
    </div>
  )
}

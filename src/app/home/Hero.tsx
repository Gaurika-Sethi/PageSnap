import React from 'react'
import Image from 'next/image'
import Typewriter from "./Typewriter";
import {EB_Garamond,Cinzel} from 'next/font/google'

const eb= EB_Garamond({subsets:['latin'], weight:['400']});
const cinzel= Cinzel({subsets:['latin'], weight:['400']});

function Hero() {
  return (
    <div className="min-h-screen flex items-center px-6 py-10 pt-20 ">
      <div className="flex flex-row justify-between items-center w-full max-w-[1400px] mx-auto">
        {/* LEFT: Text content */}
        <div className="flex flex-col w-[60%] space-y-20">
          <h1 className={`${eb.className} text-[50px] font-semibold text-[#4d303a] `}>
            Welcome to PageSnap
          </h1>

          {/* TYPEWRITER container with wrap */}
          <div className="min-h-[60px] w-[800px]">
          <div className='flex ml-40 gap-x-36'>
           <Image src="/icon1.png" width={40} height={40} className="floating-icon" alt="magic wand icon" />
           <Image src="/icon2.png" width={40} height={40} className="floating-icon" alt="book icon" />
           </div>
           <div className="relative  ">
           <div className="absolute top-0 right-28 z-10">
               <Image
                 src="/icon3.png"
                 width={40}
                 height={40}
                 className="floating-icon"
                 alt="picture icon"
               />
             </div>
             <div className='relative inline-block sparkle'>
             <Typewriter
                lines={[
                  "Fine words deserve fine home",
                  "Old quotes with breath anew",
                  "From page to timeless haven",
                  "Where quiet book souls speak",
                  "From page to timeless haven"
                 ]}
                speed={100}
                pause={1500}
                loop
                fontClass={`${cinzel.className} text-[#2E2E2E] text-[40px]`}
              />
             </div>
              
           </div>

           <div className='flex ml-64 gap-x-48'>
           <Image src="/icon5.png" width={40} height={40} className="floating-icon" alt="bookshelf icon" />
           <Image src="/icon4.png" width={40} height={40} className="floating-icon" alt="camera icon" /> 
          </div>
          </div>
          <div className='flex'>

          </div>
          

        </div>

        {/* RIGHT: Image */}
        <div className="w-[40%] flex justify-center">
          <Image
            width={600}
            height={600}
            src="/hero.png"
            alt="Postman delivering letters"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;








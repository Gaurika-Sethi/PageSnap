import React from 'react'
import Image from 'next/image'
import {Crimson_Text,Cinzel,Lato,Satisfy} from 'next/font/google'
const cinzel = Cinzel({ subsets: ['latin'], weight: '400' })
const cormorant = Crimson_Text({ subsets: ['latin'], weight: '400' })
const lato = Lato({ subsets: ['latin'], weight: '400' })
const satisfy = Satisfy({ subsets: ['latin'], weight: '400' })

function About() {
  return (
    <div className=' h-full bg-gradient-to-r from-[#5D4037] from-27.64% via-[#714D42] via-60.31% to-[#8C5F51] to-88.8% text-white   pt-6 pb-3'>
    <div className='flex  items-center space-x-[70px] '>
    <div className='relative  ml-0'>
        <Image src='/footer.png' alt='letters and hearts' width={700} height={700}></Image>
      </div>
      <div className='text-center mt-6 '>
      <h1 className={` ${cormorant.className} text-[70px] font-[400] text-center `}>Read . Save . Create </h1>
        <p className={` ${cinzel.className} text-left mt-20 text-[40px]`}>
            Your favorite lines,
            <br />
            beautifully remembered
        </p>
        <div className='flex flex-col  ml-80 mt-16 text-left '>
        <p className={` ${lato.className} mt-4 text-[15px]`}>gaurikasethi88@gamil.com</p>
        <p className={` ${satisfy.className} text-[#E8CEB0] text-[40px] mt-2`}>PageSnap</p>
      </div>
      </div>
    </div>     
    </div>
  )
}

export default About


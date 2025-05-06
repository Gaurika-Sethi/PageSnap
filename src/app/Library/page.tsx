import React from 'react'
import WordHelper from './Wordhelper'

import {Playfair_Display} from 'next/font/google'
const play = Playfair_Display({ subsets: ['latin'], weight: '400' })




function Library_input() {
  return (
    <div className='p-10'>
      <h1 className={`${play.className} text-[#2E2E2E] text-[50px] mb-12`}>Your Personal Library of Words</h1>

      {/*input row*/}
      <div className='flex items-center pb-28'>
          <input
            type='text'
            placeholder='Book title'
            className='placeholder-mc placeholder:text-[#6D4C41] placeholder:text-[14px] text-[#5c423a] text-[18px] w-[150px] h-[60px] bg-[#DAC29A] border-[3px] border-[#8B5E3C] px-4 focus:outline-none hover:border-[#C9A66B]'
          />

          <input
            type='text'
            placeholder='Author (optional)'
            className='placeholder-mc placeholder:text-[#6D4C41] placeholder:text-[14px] text-[#5c423a] text-[18px] w-[200px] h-[60px] bg-[#DAC29A] border-[3px] border-[#8B5E3C] px-4 ml-6 focus:outline-none hover:border-[#C9A66B]'
          />

          <textarea
            placeholder='Quote'
            className='placeholder-mc placeholder:text-[#6D4C41] placeholder:text-[14px] text-[#5c423a] text-[18px] flex-grow h-[60px] bg-[#DAC29A] border-[3px] border-[#8B5E3C] px-4 py-2 ml-16 focus:outline-none hover:border-[#C9A66B] overflow-y-auto resize-none'
          />

          <button
            className={`${play.className} px-6 py-1.5 ml-6 bg-[#D4AF87] border-[3px] border-[#8B5E3C] hover:border-[#C9A66B] rounded-[30px] transition`}>
            Save
          </button>
       </div>

    <WordHelper/>

    </div>
  )
}

export default Library_input

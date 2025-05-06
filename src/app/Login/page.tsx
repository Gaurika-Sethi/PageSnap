import React from 'react'
import Link from "next/link"

import {Playfair_Display} from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'], weight: '400' });

function Login() {
  return (
        <div className={`${playfair.className} min-h-screen flex flex-col items-center justify-center`}>
          <div className="flex flex-col w-full max-w-md bg-transparent space-y-6">
            <h2 className="text-[40px] text-center">Login</h2>
    
              <input
              type='text'
              placeholder='Username:'
              className='placeholder-mc placeholder:text-[#6D4C41] placeholder:text-[14px] text-[#5c423a] text-[18px] h-[60px] bg-[#DAC29A] border-[3px] border-[#8B5E3C] px-4 ml-6 focus:outline-none hover:border-[#C9A66B]'
              />
  
    
              <input
              type='password'
              placeholder='Password:'
              className='placeholder-mc placeholder:text-[#6D4C41] placeholder:text-[14px] text-[#5c423a] text-[18px] h-[60px] bg-[#DAC29A] border-[3px] border-[#8B5E3C] px-4 ml-6 focus:outline-none hover:border-[#C9A66B]'
              />
    
            <button className="px-6 py-1.5 ml-6 bg-[#D4AF87] border-[3px] border-[#8B5E3C] hover:border-[#C9A66B] rounded-[30px] transition">
              Log in
            </button>

             <Link href='/Login/Signup'>
             <button className="px-6 py-1.5 ml-6 bg-[#D4AF87] border-[3px] border-[#8B5E3C] hover:border-[#C9A66B] rounded-[30px] transition">
              Sign up
             </button>
             </Link>
          </div>
        </div>
      );
    }
export default Login


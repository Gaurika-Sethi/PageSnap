
import Link from 'next/link'
import Image from 'next/image'
import {Satisfy} from 'next/font/google'

const satisfy= Satisfy({subsets:['latin'], weight:['400']});

function Navbar() {
  return (
    <nav className='bg-[#5D4037] text-[#FAF3E0] p-4 flex items-center justify-between fixed top-0 left-0 right-0 z-20'>
        <div className='flex items-center space-x-2'>
            <Image  src='/logo.png' alt='logo' width={50} height={50}/>
            <Link href='/'><span className={`${satisfy.className} mt-4 text-[30px]`}>PageSnap</span></Link>
        </div>
        <div className='flex space-x-6'>
            <Link className= 'text-[#FAF3E0] text-[20px] font-[500] px-4 py-1 rounded-[50px] transition-all ease-linear hover:bg-[#FAF3E0] ]  hover:text-[#5D4037] 'href="/Login">Login</Link>
            <Link className= 'text-[#FAF3E0] text-[20px] font-[500] px-4 py-1 rounded-[50px] transition-all ease-linear hover:bg-[#FAF3E0] ]  hover:text-[#5D4037] 'href="/Library">Library</Link>
            <Link className= 'text-[#FAF3E0] text-[20px] font-[500] px-4 py-1 rounded-[50px] transition-all ease-linear hover:bg-[#FAF3E0] ]  hover:text-[#5D4037] 'href="/Textify">Textify</Link>
            <Link className= 'text-[#FAF3E0] text-[20px] font-[500] px-4 py-1 rounded-[50px] transition-all ease-linear hover:bg-[#FAF3E0] ]  hover:text-[#5D4037] 'href="/Imagify">Imagify</Link> 
            <Link className= 'text-[#FAF3E0] text-[20px] font-[500] px-4 py-1 rounded-[50px] transition-all ease-linear hover:bg-[#FAF3E0] ]  hover:text-[#5D4037] 'href="/Chatbot">Bookbot</Link>
            <Link className= 'text-[#FAF3E0] text-[20px] font-[500] px-4 py-1 rounded-[50px] transition-all ease-linear hover:bg-[#FAF3E0] ]  hover:text-[#5D4037] 'href="/About">About</Link>  
        </div>
    </nav>
  )
}

export default Navbar

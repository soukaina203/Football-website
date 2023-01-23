import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineClose } from 'react-icons/md'
export default function Header() {
  const [isClicked, setClicked] = useState({ menu: true, exit: false })
  let handleClick = () => {
    if (isClicked.menu) {
      setClicked({ menu: false, exit: true })
    }
    else {
      setClicked({ menu: true, exit: false })
    }
  }
  return (
    <div className='flex flex-row h-[83px] w-[100%]  z-40 '>
      <img src="0.png" alt="" className='w-[114px]  h-[100px] '/>
       
      <button className=' text-2xl absolute right-4 top-5 md:right-5 md:top-5 ' onClick={() => {
        handleClick()
      }}>
        {isClicked.menu ? <GiHamburgerMenu className='lg:hidden' /> : <MdOutlineClose className='lg:hidden' />}
      </button>
      {isClicked.menu ? " " : <div className='flex flex-col mt-[5rem] h-[12rem] ml-[-5.5rem] text-xl z-40
      w-[100%]
      bg-home-cl2  
       md:w-screen
       lg:hidden
        '>
        <ul className=' flex flex-col  gap-4 font-medium ml-[25px] z-40 duration-500 text-white opacity-1  p-10 w-[100%] relative top-[-0.75rem]
          md:ml-[6rem] md:mt-[-1rem] md:duration-500 
        lg:w-[100%] lg:flex lg:justify-center lg:items-center

        '>
          <Link to="/" className='hover:text-bg-darkRed duration-500'>Home </Link>
          <Link to="/about" className='hover:text-bg-darkRed duration-500'>About</Link>
          <Link to="/contact" className='hover:text-white duration-500'>Contact</Link>
        </ul>

      </div>
      }
      <div>
        <ul className='hidden md:hidden lg:flex gap-[12rem] text-2xl font-semibold relative top-5 left-[33rem] text-white'>
          <Link to="/" className='hover:text-bg-darkRed duration-500'>Home </Link>
          <Link to="/about" className='hover:text-bg-darkRed duration-500'>About</Link>
          <Link to="/contact" className='hover:text-black duration-500'>Contact</Link>
        </ul>
      </div>


    </div>

  )
}



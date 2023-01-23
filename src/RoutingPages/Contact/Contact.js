import React from 'react'
// import './contact.css'
function Contact() {
  return (
    <div className=''>
      <div className='flex  justify-center flex-col items-center gap-5 h-[100vh]'>
        <h1 className=' font-semibold lg:font-semibold lg:text-[50px] lg:absolute lg:top-[15rem] md:text-[19px] md:font-semibold'> We'd Love To Hear From You
        </h1>
        <div className='flex flex-row gap-5 md:text-[19px] md:p-[10px]'>
          <button className=' lg:p-[20px] text-[12px] p-[10px] bg-index-color5 md:text-[29px] font-semibold text-white lg:font-bold '><i class="fa-brands fa-square-instagram"> <a href="https://www.instagram.com/soukaina9mourabit/?hl=fr" target="_blank"> Our Instagram </a></i></button>
          <button className='lg:p-[20px] text-[12px] p-[10px] bg-index-color5 md:text-[29px] font-semibold text-white flg:ont-bold '><i class="fa-solid fa-envelope"><a href="https://mail.google.com/mail/u/0/#inbox" target="_blank"> Our Email </a></i></button>
        </div>
      </div>
    </div>
  )
}
export default Contact
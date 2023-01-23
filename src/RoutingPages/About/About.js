import React from 'react'
function About() {
  return (
    <div className='flex flex-col items-center
h-[100vh] md:h-screen
    '>
      <h1 className='mt-8 font-bold 
      lg:text-3xl lg:font-bold lg:ml-[15px] lg:mt-[12%] '>The Author of this website</h1>
      <br />
      <div className=' w-[15rem] h-[19rem] flex flex-col mt-1
      lg:font-normal lg:w-[35%] lg:text-[35px]'>
          I am Soukaina Mourabit
          a student in digital development that starts her journey in web from scratch
          and this is the first website that i deployed done by using React & Tailwind.
          <img src="14.png" alt="" className='lg:absolute lg:left-[8%] lg:top-[25%] lg:w-[30rem] md:h-[18rem]'/>
     
      </div>
    </div>
  )
}
export default About
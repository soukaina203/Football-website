import React from 'react'
import Paragraphe from '../../../Paragraphes&Images/Paragraphes/Paragraphes'
function Section2() {
  return (
    <div className='flex flex-col w-[100%] h-[53em]  mt-[-8rem] text-white
    md:mt-[-4rem]
lg:mt-[13rem]
    '>
      <div className='mt-[3rem] '>
        <Paragraphe title={"The Participations of the Moroccan national team in the world cups"} Text={"Morroco has qualified for the final stages of the FIFA World Cup on six occasions, which were in 1970,1986,1994,1998,2018 and 2022. Their best performances were in 1986 and 2022, where they reached the round of 16."} />
        <br />
        <Paragraphe title={"Morocco in Qatar world cup 2022"} Text={""} />
      </div>
      <br />
      <br className='hidden lg:flex'/>
      <div className='flex flex-col gap-4 justify-center items-center w-full
      
       md:flex-row
       lg:w-[55rem%] lg:flex-row lg:h-[22em] lg:justify-center lg:items-center lg:gap-12 '>
        <img src="4.png" alt="" className='w-3/4 lg:w-[30rem] lg:h-[25rem] md:h-[20rem] md:w-[16rem] ' />
        <img src="1.png" alt="" className='w-3/4  lg:w-[30rem] lg:h-[25rem] md:h-[20rem]  md:w-[16rem] ' />
      </div>


      <div className=' mt-[1rem] lg:mt-[5rem]'>
        <Paragraphe Text={"the Moroccan national team  did a really incredible performance in qatar world cup he progressed into the FIFA World Cup Round of 16 after its 2-1 win against Canada in a Group F fixture on Thursday at the AL Thumama stadium. This is the first time that Morocco has qualified to the knockouts since the 1986 World Cup, where it lost to West Germany in the Round of 16."} />
      </div>
    </div>
  )
}

export default Section2
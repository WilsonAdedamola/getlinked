import React from 'react'
import illustration1 from '../assets/illustration1.svg'
import arrow from '../assets/arrow.svg'

const Introduction = () => {
  return (
    <section className='mb-20'>
      <div className="max-w-[80%] mx-auto flex flex-col items-center lg:flex-row md:justify-center lg:justify-between lg:gap-10 xl:justify-around">
        <div className="flex items-center justify-center w-full lg:justify-start">
          <div className="relative">
            <img src={arrow} alt="techHackathon" className='hidden w-16 absolute bottom-0 -right-7 lg:block' />
            <img src={illustration1} alt="techHackathon" />
          </div>
        </div>
        <div className="flex items-center justify-center w-16 my-4 lg:hidden lg:my-0">
          <img src={arrow} alt="techHackathon" className='w-12' />
        </div>
        <div className="flex flex-col items-center justify-center w-full text-center lg:text-start lg:w-[95%] xl:w-[80%] lg:items-end">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className='wrap text text-white max-w-sm text-xl mb-5 md:max-w-md md:text-4xl'>Introduction to getlinked <span className='text-[#D434FE]'>tech Hackathon 1.0</span></h1>
            <p className='wrap text-white text-sm max-w-xl lg:max-w-lg'>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction

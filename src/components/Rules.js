import React from 'react'
import illustration2 from '../assets/illustration2.svg'

const Rules = () => {
    return (
        <section className='border my-20 pb-20'>
            <div className="relative max-w-[80%] mx-auto flex flex-col-reverse items-center flex-auto lg:flex-row md:justify-center lg:justify-between lg:gap-10">
                <div className="absolute -z-10 top-5 left-0 blur rounded-full w-28 h-28 bg-[#903aff] sm:w-56 sm:h-56 lg:left-16"></div>
                <div className="absolute right-0 top-60 -z-10 blur rounded-full w-28 h-28 bg-[#903aff] sm:top-80 lg:-right-20 lg:w-60 lg:h-60"></div>
                <div className="flex flex-col items-center justify-center w-full text-center flex-auto lg:text-start lg:items-start">
                    <h1 className='wrap text  max-w-[150px] text-white text-xl mb-5 md:max-w-xs md:text-4xl'>Rules and <span className='text-[#D434FE]'>Guidelines</span></h1>
                    <p className='wrap text-white text-sm max-w-xl lg:max-w-lg'>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
                </div>
                <div className="flex items-center justify-center w-full lg:justify-end">
                    <img src={illustration2} alt="techHackathon" />
                </div>
            </div>
        </section>
    )
}

export default Rules

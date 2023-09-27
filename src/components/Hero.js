import React from 'react'
import curve from '../assets/hero-curve.svg'
import heroIllustration from '../assets/hero-image.png'
import chain from '../assets/chain.svg'
import lightbulb from '../assets/lightbulb.svg'

const Hero = () => {
    return (
        <section className='border relative pt-7 mb-20' id='#overview'>
            <div className='max-w-[90%] ml-auto'>
                <div className="absolute -z-10 translate-y-12 translate-x-26 blur rounded-full w-40 h-40 bg-[#903aff] sm:w-80 sm:h-80 sm:-translate-y-3 md:translate-x-40"></div>
                <div className="hidden absolute right-28 -z-10 blur translate-y-48 rounded-full bg-[#903aff] lg:right-20 lg:translate-y-40 lg:w-60 lg:h-60 lg:block xl:w-96 xl:h-96"></div>
                <div className="flex justify-center text-center w-full mb-20 lg:justify-end">
                    <div className="relative lg:mr-20">
                        <h1 className='text-white text-sm italic font-bold sm:text-2xl lg:text-4xl'>Igniting a Revolution in HR Innovation</h1>
                        <img src={curve} alt="" className='absolute right-0 w-20 sm:w-40 lg:w-56' />
                    </div>
                </div>
                <div className="w-full flex flex-col justify-between items-center text-white lg:flex-row">
                    <div className="flex flex-col items-center lg:items-start">
                        <div className="relative">
                            <img src={lightbulb} alt="getlinked" className='absolute right-6 -top-8 w-8 lg:w-12 lg:-top-14' />
                            <h1 className='text text-4xl font-bold sm:text-5xl lg:text-7xl'>getlinkedTech</h1>
                        </div>
                        <div className="flex items-center flex-nowrap">
                            <h1 className='text text-3xl mb-2 font-bold w-max sm:text-5xl lg:text-6xl xl:text-7xl md:my-2'>Hackathon <span className='text-[#D434FE]'>1.0</span></h1>
                            <img src={chain} alt="getlinked" className='w-14 -mt-3 sm:w-20 sm:mt-0 md:w-26 lg:w-34 xl:w-40' />
                        </div>
                        <p className='wrap text-center text-sm max-w-lg md:text-xl lg:text-left'>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                        <p className='gradient py-2 px-10 mt-8 rounded cursor-pointer'>Register</p>
                        <div className='my-10'>
                            <p className='text-5xl md:text-6xl'><span className='time'>00<span className='min text-sm'>H</span></span><span className='time mx-7'>00<span className='min text-sm'>M</span></span><span className='time'>00<span className='min text-sm'>S</span></span></p>
                        </div>
                    </div>
                    <div className="">
                        <img src={heroIllustration} alt="getlinked" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero

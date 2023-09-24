import React from 'react'
import illustration5 from '../assets/illustration5.svg'
import silver_medal from '../assets/silver_medal.png'
import gold_medal from '../assets/gold_medal.png'
import bronze_medal from '../assets/bronze_medal.png'

const Prizes = () => {
    return (
        <section className='my-40 flex flex-col items-center justify-center'>
            <div className="text-white text-center xl:text-start xl:ml-[39rem]">
                <h1 className='wrap mx-auto max-w-[10rem] font-bold text-xl lg:max-w-xs lg:text-4xl xl:mx-0'>Prizes and <span className='text-[#D434FE]'>Reward</span></h1>
                <p className='text-xs max-w-[18rem] mx-auto mt-2 text-center lg:text-base xl:text-start xl:max-w-sm xl:mx-0'>Highlight of the prizes or rewards for winners and for participants.</p>
            </div>
            <div className="relative max-w-[90%] mx-auto flex flex-col justify-center gap-20 mt-10 lg:mt-20 lg:gap-44 xl:gap-52 xl:mt-52 xl:flex-row xl:justify-between">
                <div className="absolute -z-10 -top-10 left-0 blur rounded-full w-32 h-32 bg-[#903aff] sm:w-56 sm:h-56 sm:-top-10 sm:-left-20 xl:top-0  xl:left-52"></div>
                <div className="absolute -right-12 bottom-0 -z-10 blur rounded-full w-36 h-36 bg-[#903aff] xl:-right-80 lg:w-60 lg:h-80"></div>
                <div className='flex items-center w-full justify-center lg:-mt-20 xl:justify-start'>
                    <img src={illustration5} alt="Prizes and Rewards" />
                </div>
                <div className="flex items-center justify-center gap-5">
                    <div className="prize-border rounded-md bg-[#d434fe1f] w-[5.6rem] h-[8rem] flex flex-col items-center lg:min-w-[13rem] lg:min-h-[18rem]">
                        <img src={silver_medal} alt="2nd runner" className='-mt-10 mb-2 lg:mb-6 lg:-mt-20' />
                        <p className='text-white text-xs font-bold lg:text-4xl'>2nd</p>
                        <p className='mt-1 mb-2 font-semibold text-white text-xs lg:mt-2 lg:mb-4 lg:text-2xl'>runner</p>
                        <p className='text-sm text-[#D434FE] font-bold lg:text-4xl'>N300000</p>
                    </div>
                    <div className="first-prize mt-8 rounded-md bg-[#903aff1f] w-[5.6rem] h-[8rem] flex flex-col items-center lg:min-w-[13rem] lg:min-h-[18rem]">
                        <img src={gold_medal} alt="1st runner" className='absolute -mt-20 w-[8rem] lg:w-[18rem] lg:-mt-40' />
                        <p className='text-white text-xs mt-14 font-bold lg:mt-32 lg:text-4xl'>1st</p>
                        <p className='mt-1 mb-2 font-semibold text-white text-xs lg:mt-2 lg:mb-4 lg:text-2xl'>runner</p>
                        <p className='text-sm text-[#D434FE] font-bold lg:text-4xl'>N400000</p>
                    </div>
                    <div className="prize-border rounded-md bg-[#d434fe1f] w-[5.6rem] h-[8rem] flex flex-col items-center lg:min-w-[13rem] lg:min-h-[18rem]">
                        <img src={bronze_medal} alt="3rd runner" className='-mt-10 mb-2 lg:mb-6 lg:-mt-20' />
                        <p className='text-white text-xs font-bold lg:text-4xl'>3rd</p>
                        <p className='mt-1 mb-2 font-semibold text-white text-xs lg:mt-2 lg:mb-4 lg:text-2xl'>runner</p>
                        <p className='text-sm text-[#D434FE] font-bold lg:text-4xl'>N150000</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Prizes

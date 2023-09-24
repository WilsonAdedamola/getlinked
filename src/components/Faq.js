import React from 'react'
import illustration4 from '../assets/illustration4.svg'


const Faq = () => {
    return (
        <section className='border py-20'>
            <div className="relative max-w-[80%] mx-auto flex flex-col gap-10 items-center lg:flex-row md:justify-center lg:justify-between">
                <div className="flex flex-col items-center justify-center w-full text-center lg:text-start lg:items-start">
                    <div className="flex flex-col items-center text-start lg:items-start">
                        <h1 className='wrap text max-w-[150px] text-white text-xl md:max-w-xs md:text-4xl'>Frequently Ask<span className='text-[#D434FE]'>Question</span></h1>
                        <p className='wrap mt-3 mb-16 text-white text-sm lg:max-w-lg'>We got answers to the questions that you might want to ask about <span className='font-semibold'>getlinked Hackathon 1.0</span></p>
                        <div className="border-bottom w-full flex justify-between items-center gap-3 pb-3 cursor-pointer">
                        <p className='wrap text-white text-xs lg:text-base'>Can I work on a project I started before the hackathon?</p>
                        <p className='text-[#D434FE] text-xl'>+</p>
                        </div>
                        <div className="border-bottom w-full flex justify-between items-center gap-3 pb-3 my-7 cursor-pointer">
                        <p className='wrap text-white text-xs lg:text-base'>What happens if I need help during the hackathon?</p>
                        <p className='text-[#D434FE] text-xl'>+</p>
                        </div>
                        <div className="border-bottom w-full flex justify-between items-center gap-3 pb-3 cursor-pointer">
                        <p className='wrap text-white text-xs lg:text-base'>What happens if I don't have an idea for a project?</p>
                        <p className='text-[#D434FE] text-xl'>+</p>
                        </div>
                        <div className="border-bottom w-full flex justify-between items-center gap-3 pb-3 my-7 cursor-pointer">
                        <p className='wrap text-white text-xs lg:text-base'>Can I join a team or do I have to come with one?</p>
                        <p className='text-[#D434FE] text-xl'>+</p>
                        </div>
                        <div className="border-bottom w-full flex items-center justify-between gap-3 pb-3 cursor-pointer">
                        <p className='wrap text-white text-xs lg:text-base'>What happens after the hackathon ends</p>
                        <p className='text-[#D434FE] text-xl'>+</p>
                        </div>
                        <div className="border-bottom w-full flex justify-between items-center gap-3 pb-3 mt-7 cursor-pointer">
                        <p className='wrap text-white text-xs lg:text-base'>Can I work on a project I started before the hackathon?</p>
                        <p className='text-[#D434FE] text-xl'>+</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full lg:justify-end">
                    <img src={illustration4} alt="techHackathon" />
                </div>
            </div>
        </section>
    )
}

export default Faq

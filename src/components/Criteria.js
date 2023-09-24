import React from 'react'
import illustration3 from '../assets/illustration3.svg'

const Criteria = () => {
    return (
        <section className='mb-20'>
            <div className="relative max-w-[80%] mx-auto flex flex-col items-center lg:flex-row md:justify-center lg:justify-between lg:gap-10">
                <div className="absolute -z-10 top-90 left-10 blur rounded-full w-20 h-20 bg-[#903aff] sm:w-56 sm:h-56 lg:top-94"></div>
                <div className="absolute -right-10 bottom-16 -z-10 blur rounded-full w-36 h-36 bg-[#903aff] lg:-right-20 lg:-bottom-20 lg:w-60 lg:h-60"></div>
                <div className="flex items-center justify-center w-full lg:justify-start">
                    <img src={illustration3} alt="techHackathon" />
                </div>
                <div className="flex flex-col items-center justify-center w-full text-center lg:text-start lg:items-end">
                    <div className="flex flex-col items-center lg:items-start">
                    <h1 className='wrap text max-w-[150px] text-white text-xl mb-5 md:max-w-xs md:text-4xl'>Judging Criteria <span className='text-[#D434FE]'>Key attributes</span></h1>
                    <p className='wrap text-white text-sm max-w-xl lg:max-w-lg lg:text-base'><span className='font-semibold text-[#D434FE]'>Innovation and Creativity</span>: Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</p>
                    <p className='wrap text-white my-5 text-sm max-w-xl lg:max-w-lg lg:text-base'><span className='font-semibold text-[#D434FE]'>Functionality</span>: Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.</p>
                    <p className='wrap text-white text-sm max-w-xl lg:max-w-lg lg:text-base'><span className='font-semibold text-[#D434FE]'>Impact and Relevance</span>:Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.</p>
                    <p className='wrap text-white my-5 text-sm max-w-xl lg:max-w-lg lg:text-base'><span className='font-semibold text-[#D434FE]'>Technical Complexity</span>: Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.</p>
                    <p className='wrap text-white text-sm max-w-xl lg:max-w-lg lg:text-base'><span className='font-semibold text-[#D434FE]'>Adherence to Hackathon Rules</span>:Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.</p>
                    <p className='gradient text-white py-2 px-10 mt-8 rounded cursor-pointer'>Read more</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Criteria

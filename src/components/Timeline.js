import React from 'react'

const Timeline = () => {
    return (
        <section className='my-20'>
            <div className="max-w-[80%] text-white mx-auto flex flex-col items-center justify-center w-full">
                <h1 className='text-xl font-bold lg:text-4xl'>Timeline</h1>
                <p className='wrap text-sm mt-5 text-center'>Here is the breakdown of the time we anticipate using for the upcoming event.</p>

                <div className="mt-10 lg:mt-56">
                    {MobileTimeline()}
                    <div className="hidden lg:block">
                        <div className="flex items-center justify-center gap-20">
                            <div className="flex flex-col text-end w-full">
                                <p className='font-bold text-[#D434FE] text-2xl'>Hackathon Announcement</p>
                                <p className='text-sm'>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
                            </div>
                            <div className="gradient relative before:bg-[#D434FE] before:absolute before:w-1 before:h-32 before:-top-36 flex items-center justify-center rounded-full p-5 w-7 h-7">
                                <p className='font-bold text-2xl'>1</p>
                            </div>
                            <div className="flex w-full">
                                <p className='font-bold text-[#D434FE] text-2xl'>November 18, 2023</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-20 mt-32">
                            <div className="flex justify-end w-full">
                                <p className='font-bold text-[#D434FE] text-2xl'>November 18, 2023</p>
                            </div>
                            <div className="gradient relative before:bg-[#D434FE] before:absolute before:w-1 before:h-24 before:-top-28 flex items-center justify-center rounded-full p-5 w-7 h-7">
                                <p className='font-bold text-2xl'>2</p>
                            </div>
                            <div className="flex flex-col text-start w-full">
                                <p className='font-bold text-[#D434FE] text-2xl'>Teams Registration begins</p>
                                <p className='text-sm'>Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-20 mt-32">
                            <div className="flex flex-col text-end w-full">
                                <p className='font-bold text-[#D434FE] text-2xl'>Teams Registration ends</p>
                                <p className='text-sm'>Interested Participants are no longer Allowed to register</p>
                            </div>
                            <div className="gradient relative before:bg-[#D434FE] before:absolute before:w-1 before:h-24 before:-top-28 flex items-center justify-center rounded-full p-5 w-7 h-7">
                                <p className='font-bold text-2xl'>3</p>
                            </div>
                            <div className="flex w-full">
                                <p className='font-bold text-xs text-[#D434FE] lg:text-2xl'>November 18, 2023</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-20 mt-32">
                            <div className="flex justify-end w-full">
                                <p className='font-bold text-[#D434FE] text-2xl'>November 18, 2023</p>
                            </div>
                            <div className="gradient relative before:bg-[#D434FE] before:absolute before:w-1 before:h-24 before:-top-28 flex items-center justify-center rounded-full p-5 w-7 h-7">
                                <p className='font-bold text-2xl'>4</p>
                            </div>
                            <div className="flex flex-col text-start w-full">
                                <p className='font-bold text-[#D434FE] text-2xl'>Announcement of the accepted teams and ideas</p>
                                <p className='text-sm'>All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-20 mt-32">
                            <div className="flex flex-col text-end w-full">
                                <p className='font-bold text-[#D434FE] text-2xl'>Getlinked Hackathon 1.0 Offically Begins</p>
                                <p className='text-sm'>Accepted teams can now proceed to build their ground breaking skill driven solutions</p>
                            </div>
                            <div className="gradient relative before:bg-[#D434FE] before:absolute before:w-1 before:h-24 before:-top-28 flex items-center justify-center rounded-full p-5 w-7 h-7">
                                <p className='font-bold text-2xl'>5</p>
                            </div>
                            <div className="flex w-full">
                                <p className='font-bold text-[#D434FE] text-2xl'>November 18, 2023</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-20 mt-32">
                            <div className="flex justify-end w-full">
                                <p className='font-bold text-[#D434FE] text-2xl'>November 18, 2023</p>
                            </div>
                            <div className="gradient relative before:bg-[#D434FE] before:absolute before:w-1 before:h-24 before:-top-28 flex items-center justify-center rounded-full p-5 w-7 h-7">
                                <p className='font-bold text-2xl'>6</p>
                            </div>
                            <div className="flex flex-col text-start w-full">
                                <p className='font-bold text-[#D434FE] text-2xl'>Demo Day</p>
                                <p className='wrap text-sm'>Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

//Mobile view design

const MobileTimeline = () => {
    return (
        <div className='w-full lg:hidden'>
            <div className="flex items-center justify-center w-full gap-2">
                <div className="flex flex-col items-center justify-center gap-2">
                    <div className="w-0.5 h-20 bg-[#D434FE]"></div>
                    <p className='gradient flex items-center justify-center rounded-full p-3 w-3 h-3 font-bold text-xs'>1</p>
                </div>
                <div className="flex flex-col justify-between gap-3">
                    <p className='font-bold text-[#D434FE] text-xs'>Demo Day</p>
                    <p className='text-xs'>Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</p>
                    <p className='font-bold text-[#D434FE] text-xs'>November 18, 2023</p>
                </div>
            </div>
        </div>
    )
}


export default Timeline

import React, { useState, useEffect } from 'react'
import { imgWebDesk, imgWebMob } from './assets'
import { news, popularNews } from './constants'

const NewsPage = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const updateDimensions = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions)
        return () => window.removeEventListener("resize", updateDimensions)
    }, [])

    return (
        <>
            <section className='px-4 md:px-10 font-inter text-veryDarkblue sm:flex sm:flex-row sm:space-x-6 max-w-screen-xl lg:mx-auto'>
                <div className='sm:basis-8/12 md:basis-8/12 lg:basis-8/12'>
                    <img src={width >= 768 ? imgWebDesk : imgWebMob} className="object-cover overflow-hidden" alt='Web 3' />
                    <div className='py-7 sm:py-0 sm:pt-7 lg:flex lg:justify-between lg:space-x-4'>
                        <div className='lg:max-w-[400px]'>
                            <h1 className='text-5xl font-bold mb-6 lg:mb-0 lg:text-6xl '>The Brigth Future of Web 3.0?</h1>
                        </div>
                        <div className='lg:max-w-[350px] lg:px-2 lg:my-auto'>
                            <p className='text-[15px] leading-7 text-darkGrayishblue mb-6'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                            <button className='py-3 px-8 bg-softRed hover:bg-veryDarkblue text-offWhite uppercase text-[15px] font-normal tracking-[0.2em]'>read more</button>
                        </div>
                    </div>
                </div>

                <div className='bg-veryDarkblue text-offWhite px-4 lg:px-8 pt-6 lg:pt-10 sm:my-0 sm:basis-4/12 md:basis-4/12 lg:basis-4/12'>
                    <h1 className='text-softOrange text-3xl'>New</h1>
                    <div className='divide-y divide-darkGrayishblue'>
                        {news.map((list) => (
                        <div key={list.id} className='py-6 lg:py-7'>
                            <h1 className='text-lg font-bold cursor-pointer hover:text-softOrange inline-block pb-2'>{list.title}</h1>
                            <p className='text-[15px] text-grayishBlue leading-6'>{list.content}</p>
                        </div> 
                        ))}
                    </div>
                </div>

            </section>

            <section className='px-4 md:px-10 font-inter'>
                <div className='py-3 sm:space-x-4 sm:py-10 pb-7 sm:flex max-w-[1200px] lg:mx-auto'>
                    {popularNews.map((top) => (
                        <div key={top.id} className='flex sm:flex-col lg:flex-row items-center py-4 sm:py-0'>
                            <img src={top.img} className='w-[100px] lg:w-[100px] sm:w-full h-full lg:h-full sm:h-[128px] object-cover sm:object-center' alt="Retro" />
                            <div className='pl-4 sm:pl-0 lg:pl-4 sm:py-4 lg:py-0'>
                                <h1 className='text-2xl font-bold text-grayishBlue'>{top.id}</h1>
                                <h2 className='text-lg font-bold text-veryDarkblue cursor-pointer hover:text-softRed inline-block py-2'>{top.title}</h2>
                                <p className='text-[15px] text-darkGrayishblue leading-6'>{top.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default NewsPage

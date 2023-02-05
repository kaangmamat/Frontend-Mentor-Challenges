import React, { useEffect, useState } from 'react'
import imgMobile from './assets/image-header-mobile.jpg'
import imgDesk from './assets/image-header-desktop.jpg'

const StatsPreviewCard = () => {
    const [width, seWidth] = useState(window.innerWidth)

    const updateDimensions = () => {
        seWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions)
        return () => window.removeEventListener("resize", updateDimensions)
    }, [])

  return (
    <div className='flex flex-col justify-center items-center min-h-screen p-4 bg-veryDarkblue px-6 text-whitee'>
        <div className='sm:flex sm:flex-row-reverse bg-darkDesaturatedblue rounded-lg'>
            <div className='relative rounded-t-lg sm:rounded-t-none sm:rounded-r-lg sm:max-w-lg'>
                <img className='rounded-t-lg sm:rounded-t-none sm:rounded-r-lg object-cover h-full' src={width >= 640 ? imgDesk : imgMobile} alt="Hangout" />
                <div className='absolute bg-softViolet/50 inset-0 rounded-t-lg sm:rounded-t-none sm:rounded-r-lg'></div>
            </div>
            <div className='p-11 sm:p-16 sm:max-w-lg'>
                <div className='font-inter text-center tracking-wide sm:text-left '>
                    <h1 className='text-3xl font-bold pb-6 text-whitee'>Get <span className='text-softViolet'>insights</span> that help your business grow.</h1>
                    <p className='text-slightlyTransmain font-normal text-sm leading-relaxed tracking-wider pb-12'>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
                </div>
                <div className='flex flex-col sm:flex-row items-center font-lexendDeca space-y-5 sm:space-y-0 sm:space-x-10'>
                    <div className='flex flex-col items-center'>
                        <span className='text-2xl font-bold'>100+</span>
                        <span className='uppercase font-normal text-sm tracking-wider text-slightlyTransmain pt-2'>companies</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <span className='text-2xl font-bold'>314</span>
                        <span className='uppercase font-normal text-sm tracking-wider text-slightlyTransmain pt-2'>templates</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <span className='text-2xl font-bold'>12M+</span>
                        <span className='uppercase font-normal text-sm tracking-wider text-slightlyTransmain pt-2'>queries</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default StatsPreviewCard
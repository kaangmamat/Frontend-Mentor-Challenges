import React, { useEffect, useState } from 'react'
import { heroMob, heroDesk, databiz, audiophile, meet, maker } from './assets'

const IntroSection = () => {
  const [width, setWidth] = useState(window.innerWidth)

  const updateDimention = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", updateDimention)
    return () => window.removeEventListener("resize", updateDimention)
  }, [])

  return (
    <section className='bg-almostWhite min-h-screen'>
      <div className='md:flex flex-row-reverse md:justify-center max-h-fit'>
        <img className='w-full md:object-contain md:max-w-md' src={width >= 768 ? heroDesk : heroMob} alt="Hero" />
        <div className='md:flex md:flex-col md:justify-end px-2 md:px-4'>
          <div className='text-center md:text-left py-10 md:py-0 md:pr-20 lg:pr-32 font-epilogue'>
            <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold text-almostBlack'>Make{width >= 768 ? (<br />) : ('')} remote work</h1>
            <p className='text-[16px] text-mediumGray py-4 md:py-12 md:leading-7' >Get your team in sync, no matter your location. {width >= 768 ? (<br />) : undefined} Streamline processes, create {width <= 768 ? (<br />) : undefined} team rituals, and {width >= 768 ? (<br />) : undefined} watch productivity soar.</p>
            <button className='py-2 hover:py-[0.38rem] px-5 hover:px-[1.1rem] text-[16px] hover:text-almostBlack rounded-xl bg-almostBlack hover:bg-almostWhite hover:border-2 hover:border-almostBlack text-white'>Learn more</button>
          </div>
          <div className='flex items-center justify-center md:justify-start space-x-6 md:mt-20'>
            <img className='object-contain h-4' src={databiz} alt="Databiz" />
            <img className='object-contain h-6' src={audiophile} alt="Audiophile" />
            <img className='object-contain h-4' src={meet} alt="Meet" />
            <img className='object-contain h-4' src={maker} alt="Maker" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroSection
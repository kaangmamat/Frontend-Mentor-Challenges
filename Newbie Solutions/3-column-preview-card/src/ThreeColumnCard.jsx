import React from 'react'
import { features } from '.'

const ThreeColumnCard = () => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-veryLightgray px-6 py-20'>
        <div className='flex flex-col sm:flex-row max-w-3xl'>
            {features.map((feature) => {
                return (
                    <div key={feature.id} className={`${feature.id === "feature-1" ? 'bg-brightOrange rounded-t-lg sm:rounded-none sm:rounded-l-lg' : feature.id === "feature-2" ? 'bg-darkCyan' : 'bg-veryDarkcyan rounded-b-lg sm:rounded-none sm:rounded-r-lg'} p-10`}>
                        <div>
                            <img src={feature.icon} />
                        </div>
                        <div>
                            <h1 className='text-veryLightgray uppercase font-bigShoulders font-bold text-5xl my-7'>{feature.title}</h1>
                            <p className='text-transparentWhite text-[15px] font-normal leading-6 font-lexendDeca mb-16 tracking-wide'>{feature.content}</p>
                            <button className={`bg-veryLightgray py-3 px-7 hover:py-[0.6rem] hover:px-[1.60rem] rounded-3xl font-lexendDeca ${feature.id === "feature-1" ? ' text-brightOrange hover:text-veryLightgray hover:bg-brightOrange hover:border-2 hover:border-veryLightgray' : feature.id === "feature-2" ? 'text-darkCyan hover:text-veryLightgray hover:bg-darkCyan hover:border-2 hover:border-veryLightgray' : 'text-veryDarkcyan hover:text-veryLightgray hover:bg-veryDarkcyan hover:border-2 hover:border-veryLightgray'} capitalize`}>learn more</button>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ThreeColumnCard
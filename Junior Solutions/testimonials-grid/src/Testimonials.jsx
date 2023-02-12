import React from 'react'
import { bgQuote } from './assets'
import {testimonials} from './constants'

const Testimonials = () => {
  return (
    <section className='md:grid md:grid-cols-2 lg:grid-cols-4 space-y-4 md:space-y-0 gap-6 max-w-[1042px] font-barlow'>
        {testimonials.map((testi) => {
            return (
                <div key={testi.id} style={{backgroundImage: `url(${testi.id === "01" ? bgQuote : undefined})`}} className={`break-inside-avoid px-6 lg:px-7 py-6 rounded-lg shadow-xl ${testi.id === "01" ? 'bg-moderateViolet lg:col-span-2 bg-no-repeat bg-[84%_top] md:order-first lg:order-none' : testi.id === "02" ? 'bg-veryDarkGrayishblue md:order-last lg:order-none' : testi.id === "03" ? 'bg-whitee md:col-span-2 lg:col-span-1 lg:row-span-2' : testi.id === "04" ? 'bg-whitee' : 'bg-veryDarkBlackishblue lg:col-span-2 md:order-first lg:order-none'}`}>
                    <div className='flex items-center'>
                        <img src={testi.img} className="rounded-full h-8 w-8 ring-2 ring-whitee/50" alt={testi.name} />
                        <div className='text-sm pl-4'>
                            <p className={`${testi.id === "03" ? 'text-veryDarkBlackishblue' : testi.id === "04" ? 'text-veryDarkBlackishblue' : 'text-whitee'}`}>{testi.name}</p>
                            <span className={`${testi.id === "03" ? 'text-veryDarkBlackishblue/50' : testi.id === "04" ? 'text-veryDarkBlackishblue/50' : 'text-whitee/50'}`}>{testi.status}</span>
                        </div>
                    </div>
                    <div className=''>
                        <h1 className={`text-lg leading-6 py-4 ${testi.id === "03" ? 'text-veryDarkBlackishblue' : testi.id === "04" ? 'text-veryDarkBlackishblue' : 'text-whitee'}`}>{testi.title}</h1>
                        <blockquote className={`text-[12px] leading-5 break-words ${testi.id === "03" ? 'text-veryDarkBlackishblue/50' : testi.id === "04" ? 'text-veryDarkBlackishblue/50 ' : 'text-whitee/50'}`}>{testi.quote}</blockquote>
                    </div>
                </div>
            )
        })}
    </section>
  )
}

export default Testimonials
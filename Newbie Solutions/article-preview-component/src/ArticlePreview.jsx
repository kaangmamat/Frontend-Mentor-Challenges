import React, { useState } from 'react'
import { avatar, drawers, share } from './assets'
import { FaFacebookSquare, FaPinterest, FaTwitter  } from 'react-icons/fa'


const ArticlePreview = () => {
    const [popdown, setPopdown] = useState(false)

    return (
        <section className='relative mx-8 rounded-lg sm:rounded-l-lg shadow-xl sm:flex max-w-[768px]'>
            <img src={drawers} className="object-cover sm:object-left w-full rounded-t-lg sm:rounded-bl-lg sm:rounded-tr-none" alt="Drawers" />
            <div className='relative px-7 sm:px-10 bg-white pt-8 pb-5 sm:pb-8 rounded-b-lg sm:rounded-bl-none sm:rounded-tr-lg sm:max-w-md'>
                <h1 className='font-bold sm:text-[20px] mb-3 text-veryDarkGrayishblue'>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
                <p className='text-desDarkblue text-[13px] sm:text-[14px] pb-4'>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.</p>
                <div className='flex pt-6 sm:pt-2 relative'>
                    <img src={avatar} className="h-10 w-10 rounded-full" alt="Michelle" />
                    <div className=' w-full flex justify-between items-center'>
                        <div className='ml-5'>
                            <h2 className='text-[13px] font-bold text-veryDarkGrayishblue'>Michelle Appleton</h2>
                            <p className='text-[13px] pt-1 text-grayishBlue'>28 Jun 2020</p>
                        </div>
                        
                        {!popdown ? 
                            (
                                <div onClick={() => setPopdown(!popdown)} className='h-8 w-8 rounded-full bg-lightGrayishblue flex justify-center items-center cursor-pointer'>
                                    <img src={share} className="object-cover" alt="Share" />
                                </div>
                            ) :
                            (
                                <>
                                    <div className='flex items-center -left-0 space-x-4 sm:hidden absolute z-10'>
                                        <h1 className='uppercase tracking-[0.3em] text-[13px] text-grayishBlue'>share</h1>
                                        <div className='h-6 w-6 cursor-pointer'>
                                            <FaFacebookSquare className='h-6 w-6 text-white' />
                                        </div>
                                        <div className='h-6 w-6 cursor-pointer'>
                                            <FaTwitter className='h-6 w-6 text-white' />
                                        </div>
                                        <div className='h-6 w-6 cursor-pointer'>
                                            <FaPinterest className='h-6 w-6 text-white' />
                                        </div>
                                    </div>
                                    <div onClick={() => setPopdown(!popdown)} className='h-8 w-8 rounded-full bg-desDarkblue flex justify-center items-center cursor-pointer z-10 '>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#fff" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>
                                    </div>
                                </>
                            )
                        }

                    </div>
                </div> 

                {popdown ? 
                    (
                        <div className='hidden sm:flex sm:justify-center sm:items-center sm:space-x-4 sm:rounded-xl absolute h-14 w-60 bottom-[100px] sm:right-6 lg:-right-[54px] bg-veryDarkGrayishblue'>
                            <h1 className='uppercase tracking-[0.3em] text-[14px] text-grayishBlue'>share</h1>
                            <div className='h-6 w-6 cursor-pointer'>
                                <FaFacebookSquare className='h-6 w-6 text-white' />
                            </div>
                            <div className='h-6 w-6 cursor-pointer'>
                                <FaTwitter className='h-6 w-6 text-white' />
                            </div>
                            <div className='h-6 w-6 cursor-pointer'>
                                <FaPinterest className='h-6 w-6 text-white' />
                            </div>
                            <div className='absolute -bottom-4 sm:right-4 lg:right-[95px] border-l-[20px] border-l-transparent border-t-[16px] border-t-veryDarkGrayishblue border-r-[16px] border-r-transparent'>
                            </div>
                        </div>
                    ) : undefined
                }

            </div>

            <div className={`${popdown ? 'absolute sm:hidden h-20 w-full bottom-0 left-0 right-0 -translate-y-0 ease-in-out duration-50 rounded-b-lg bg-veryDarkGrayishblue' : 'translate-y-0'} `}></div>

        </section>
    )
}

export default ArticlePreview
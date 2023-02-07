import React, { useEffect, useState } from 'react'
import { logo, bgMobile, doc, folder, upload, bgDesk } from './assets'

const FyloDataStorage = () => {
    const [width, setWidth] = useState(window.innerWidth)

    const updateDimention = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimention)
        return () => window.removeEventListener("resize", updateDimention)
    }, [])

    return (
        <div className='flex flex-col justify-center items-center min-h-screen bg-no-repeat bg-cover sm:bg-contain sm:bg-bottom sm:bg-veryDarkblue' style={{backgroundImage: `url(${width >= 640 ? bgDesk : bgMobile})`}}>
            <div className='relative sm:flex sm:flex-row sm:space-x-6'>
                <div className=' bg-darkBlue w-80 p-10 rounded-xl rounded-tr-[100px]'>
                    <img className='mb-8' src={logo} alt='Logo' />
                    <div className='flex flex-row space-x-3'>
                        <div className='flex bg-veryDarkblue p-3 rounded-xl'>
                            <img className='self-center' src={doc} alt='Document' />
                        </div>
                        <div className='flex bg-veryDarkblue p-3 rounded-xl'>
                            <img className='self-center' src={folder} alt='Folder' />
                        </div>
                        <div className='flex bg-veryDarkblue p-3 rounded-xl'>
                            <img className='self-center' src={upload} alt='Uploud' />
                        </div>
                    </div>
                </div>

                <div className='relative bg-darkBlue mt-4 font-raleway text-grayishBlue px-8 pt-8 pb-6 sm:pb-0 sm:pt-8  sm:px-10  rounded-xl sm:w-[584px] sm:h-40 sm:self-end'>
                    <h1 className='text-center sm:text-left'>You've used <span className='font-bold text-paleBlue'>815 GB</span> of your storage</h1>
                    <div className='relative flex flex-col mt-5 mb-8 sm:mb-0'>
                        <div className='bg-veryDarkblue rounded-full overflow-hidden'>
                            <div className='bg-gradient-to-r from-gradientFrom to-gradientTo w-2/3 h-4 m-[2px] rounded-full' role="progressbar" aria-label='storage progress' aria-valuenow='1456' aria-valuemin='0' aria-valuemax='4550'></div>
                        </div>
                        <div className='absolute h-[12px] w-[12px] bg-paleBlue left-2/3 top-[3.50px] -ml-[12px] rounded-full'>
                            <div></div>
                        </div>
                        <div className='flex justify-between font-bold text-paleBlue mt-2'>
                            <div>0 GB</div>
                            <div>1000 GB</div>
                        </div>
                        <div className='relative sm:hidden flex justify-center bg-slate-500'>
                            <div className='absolute flex justify-center items-center -bottom-24 bg-white h-20 w-52 self-center rounded-xl'>
                                <h2 className='text-veryDarkblue font-bold text-5xl'>185</h2>
                                <span className='text-grayishBlue font-bold uppercase text-base ml-2'>gb left</span>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className='absolute right-10 -top-4 hidden sm:flex sm:justify-center items-center bg-white h-20 w-52 font-raleway rounded-xl sm:rounded-br-none'>
                    <h2 className='text-veryDarkblue font-bold text-5xl'>185</h2>
                    <span className='text-grayishBlue font-bold uppercase text-base ml-2'>gb left</span>
                </div>
                <span className='absolute hidden sm:block right-10 top-[60px] w-0 h-0 border-l-[28px] border-l-transparent border-t-[20px] border-t-white border-r-[0px] border-r-transparent'></span>
            </div>
        </div>
    )
}

export default FyloDataStorage
import React from 'react'
import { logo, illDash } from './assets'
import { FaInstagram, FaFacebookF, FaTwitter, FaRegCopyright } from 'react-icons/fa'

const ComingSoonPage = () => {
  return (
    <main className='font-libreFranklin min-h-screen flex flex-col justify-center items-center'>
        <div className='md:pt-8'>
            <div className='flex flex-col justify-center items-center'>
                <img className='mb-12 md:mb-8' src={logo} />
                <h1 className='text-2xl text-gray tracking-wide'>We are launching <span className='font-bold text-veryDarkBlue'>soon!</span></h1>
                <p className='pt-4 pb-8 text-veryDarkBlue'>Subscribe and get notified</p>
            </div>
            
            <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-2 md:flex-row'>
                <div className='flex flex-col'>
                    <input className='peer border invalid:border-lightRed border-paleBlue pl-6 h-12 w-80 rounded-3xl focus:outline-none' type="email" placeholder='Your email address...' />
                    <p className='mt-2 text-center md:-ml-9 invisible peer-invalid:visible peer-valid:hidden text-pink-600 text-sm'>Please provide a valid email address.</p>
                </div>
                <button className='bg-Blue h-12 w-80 md:w-40 text-white tracking-wide rounded-3xl hover:shadow-xl' type='submit'>Notify Me</button>
            </div>
        </div>
        <img className='mt-14 md:mt-6 max-w-sm md:max-w-lg' src={illDash} />
        <div className='flex justify-center space-x-4 md:pt-3 md:pb-2 pt-28 pb-8'>
            <div className='p-2 rounded-full border border-paleBlue'>
                <FaFacebookF className='text-Blue' />
            </div> 
            <div className='p-2 rounded-full border border-paleBlue'>
                <FaTwitter className='text-Blue' />
            </div> 
            <div className='p-2 rounded-full border border-paleBlue'>
                <FaInstagram className='text-Blue' />
            </div> 
        </div>
        <div className='flex justify-center items-center space-x-[2px] '>
            <FaRegCopyright className='text-xs text-gray' />
            <p className='text-xs text-gray'>Copyright Ping. All rights reserved.</p>
        </div>
    </main>
  )
}

export default ComingSoonPage
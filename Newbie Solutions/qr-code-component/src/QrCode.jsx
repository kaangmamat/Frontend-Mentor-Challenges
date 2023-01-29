import React from 'react'
import Qrcode from '../src/assets/image-qr-code.png'

const QrCode = () => {
  return (
    <main className='bg-lightGray min-h-screen flex flex-col justify-center items-center px-6'>
      <div className='bg-whitee p-4 rounded-3xl max-w-sm'>
        <img className='rounded-2xl' src={Qrcode} alt='QR Code' />
        <div className='text-center px-4 py-6'>
          <h1 className='text-2xl font-Outfit font-bold text-darkBlue pb-4'>Improve your front-end skills by building projects</h1>
          <p className='text-base text-grayishBlue font-normal px-4'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </main>
  )
}

export default QrCode

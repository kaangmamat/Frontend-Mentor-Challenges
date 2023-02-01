import React from 'react'
import { avatar, equilibrium, icClock, icEthereum, icView } from './assets'

const NftPreviewCard = () => {
  return (
    <main className='bg-veryDarkBlueMain min-h-screen flex justify-center items-center px-6'>
        <div className='bg-veryDarkBlueCard max-w-sm p-6 rounded-2xl shadow-2xl'>
            <div className='relative group'>
                <img className='rounded-lg bg-contain' src={equilibrium} />
                <div className='absolute inset-0 bg-cyan/50 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-lg cursor-pointer transition-all duration-300'>
                    <img className='hover:opacity-100' src={icView} />
                </div>
            </div>
            <div className='font-outfit pt-6'>
                <h1 className='text-whitee text-2xl font-semibold hover:text-cyan inline-block cursor-pointer'>Equilibrium #3429</h1>
                <p className='text-softBlue font-light pt-4'>Our Equilibrium collection promotes balance and calm</p>
                <div className='flex justify-between py-4 border-b border-veryDarkBlueLine'>
                    <div className='flex flex-row items-center space-x-2'>
                        <img className='h-5' src={icEthereum} />
                        <span className='text-cyan font-normal'>0.041ETH</span>
                    </div>
                    <div className='flex flex-row items-center text-softBlue space-x-2'>
                        <img className='h-4 w-4' src={icClock} />
                        <span>3 days left</span>
                    </div>
                </div>
                <div className='flex flex-row items-center pt-4 space-x-4'>
                    <img className='h-8 w-8 border rounded-full' src={avatar} />
                    <p className='text-softBlue text-base'>Creation of <a className='text-whitee hover:text-cyan' href="#">Jules Wyvern</a></p>
                </div>
            </div>
        </div>
    </main>
  )
}

export default NftPreviewCard
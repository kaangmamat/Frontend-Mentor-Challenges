import React, { useState } from 'react'
import icStar from '../src/assets/icon-star.svg'
import icIlls from '../src/assets/illustration-thank-you.svg'
import Footer from './Footer'

const InteractiveRating = () => {
    const [colorSub, setColorSub] = useState()
    const [isShown, setShown] = useState(false)

    const numList = [
        {id: 1, value: "1"},
        {id: 2, value: "2"},
        {id: 3, value: "3"},
        {id: 4, value: "4"},
        {id: 5, value: "5"}
    ]

    const handleClick = () => {
        setShown(true)
    }

    const BtnSubmit = () => {
        return (
            <>
                <button onClick={colorSub ? handleClick : undefined} className='text-white2 uppercase font-semibold bg-orange w-full py-3 rounded-3xl tracking-[4px] hover:bg-white2 hover:text-orange'>submit</button>
            </>
        )
    }

    return (
        <div className='bg-veryDarkBlue2 px-6 h-screen flex flex-col items-center justify-center'>
            <div className='px-6 py-8 bg-darkBlue rounded-xl max-w-md'>
                <div className={`${isShown ? 'hidden' : ''}`}>
                    <div className='bg-onStar w-14 h-14 rounded-full flex flex-col items-center justify-center'>
                        <img src={icStar} />
                    </div>
                    <div>
                        <h1 className='font-overpass font-semibold tracking-wide text-2xl text-white2 py-4'>How did we do?</h1>
                        <p className='font-overpass text-mediumGray font-normal'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                    </div>
                    <div className='flex flex-row justify-between py-6'>
                        {numList.map((list) => (
                            <ul 
                                onClick={() => setColorSub(list.value)} 
                                className={`${colorSub === list.value ? 'bg-lightGray text-white' : ''} cursor-pointer w-14 h-14 bg-onStar rounded-full text-mediumGray font-overpass flex items-center justify-center hover:bg-orange hover:text-white2`} 
                                key={list.id}>
                                {list.value}
                            </ul>
                        ))}
                    </div>
                    <BtnSubmit />
                </div>

                <div className={`${isShown ? '' : 'hidden'}`}>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={icIlls} alt="" />
                    </div>
                    <div className='flex justify-center items-center py-6'>
                        <p className='bg-onStar text-orange w-52 flex justify-center font-overpass py-2 rounded-3xl'>You selected {colorSub} out of {numList.length}</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='font-overpass font-semibold tracking-wide text-2xl text-white2 pb-4'>Thank you</h1>
                        <p className='font-overpass text-mediumGray font-normal text-center'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default InteractiveRating
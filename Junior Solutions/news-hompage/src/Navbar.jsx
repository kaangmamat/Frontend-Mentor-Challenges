import React, { useState } from 'react'
import { logo, menu, close } from './assets'
import { navLinks } from './constants'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <>
            <nav className='flex justify-between items-center font-inter text-darkGrayishblue py-8 px-4 md:px-10 bg-offWhite max-w-screen-xl lg:mx-auto '>
                <img src={logo} alt='Logo' />
                <ul className='hidden md:flex md:items-center md:space-x-10'>
                    {navLinks.map((nav) => (
                        <li key={nav.id}>
                            <a href={`#${nav.id}`} className='hover:text-softRed'>{nav.title}</a>
                        </li>
                    ))}
                </ul>

                {!toggle ? 
                    (
                        <img 
                            src={menu} 
                            className={`${toggle ? '' : 'object-contain cursor-pointer md:hidden'}`}
                            alt='Menu'
                            onClick={() => setToggle(!toggle)} 
                        />
                    ) : 
                    (
                        <div className='flex md:hidden z-10 fixed right-0 mr-4' onClick={() => setToggle(!toggle)}>
                            <img 
                                src={close} 
                                className='object-contain cursor-pointer'
                                alt='Close'
                                onClick={() => setToggle(!toggle)} 
                            />
                        </div>
                    )
                }
            
                <div className={`top-0 left-0 fixed bg-veryDarkblue/50 w-full h-full md:hidden ${toggle ? 'translate-x-0' : '-translate-x-full'}`}></div>
                <div className={`top-0 right-0 fixed bg-offWhite w-[250px] h-full md:hidden ${toggle ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-200`}>
                    <ul className='space-y-4 ml-4 mt-40 text-veryDarkblue'>
                        {navLinks.map((nav) => (
                            <li key={nav.id}>
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
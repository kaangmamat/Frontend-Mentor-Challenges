import React, { useEffect, useState } from 'react'
import { arrDown, arrUp, close, logo, menu } from './assets'
import { navList, dropDwnFeature, dropDwnCompany } from './constants'

const Navbar = () => {
    const [show, setShow] = useState(false)
    const [showFeature, setShowFeature] = useState(false)
    const [showCompany, setShowCompany] = useState(false)

    useEffect(() => {
        const closeDropdown = e => {
            if (e.target.tagName !== 'LI') {
                setShowFeature(false)
                setShowCompany(false)
            }
        }
        
        document.addEventListener("click", closeDropdown)
        return () => document.body.removeEventListener("click", closeDropdown)
    }, [])

    return (
        <nav className="px-5 py-6 bg-almostWhite">
            <div className='flex flex-row justify-between font-epilogue max-w-[1280px] mx-auto'>
                <div className='container mx-auto flex flex-row justify-between md:justify-start items-center'>
                    <img src={logo} alt="Logo" />

                    {!show ? 
                        (
                            <button onClick={() => setShow(!show)} className='md:hidden'>
                                <img className='object-containe' src={menu} alt="Menu" />
                            </button>
                        ) : 
                        (
                            <button onClick={() => setShow(!show)} className='md:hidden fixed right-0 mr-6 z-10'>
                                <img className='object-contain' src={close} alt="Menu" />
                            </button>
                        )
                    }

                    <div className={`top-0 left-0 right-0 fixed bg-almostBlack/50 w-full h-full md:hidden ${show ? 'translate-x-0' : '-translate-x-full'} ease-in-out duration-200`}></div>
                    <div className={`top-0 right-0 fixed bg-white w-[250px] h-full md:hidden ${show ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}>
                        <ul className='space-y-4 mx-5 mt-20 inline-block text-mediumGray'>
                            {navList.map((list) => (
                                <div key={list.id}>
                                    <div onClick={list.id === "01" ? () => setShowFeature(!showFeature) : list.id === "02" ? () => setShowCompany(!showCompany) : undefined} className='flex flex-col items-left'>
                                        <div className='flex flex-row items-center cursor-pointer hover:text-almostBlack'>
                                            <li className=''>{list.title}</li>
                                            {list.id === "01" ? (<img className='object-contain h-[6px] w-[10px] ml-2' src={showFeature ? arrUp : arrDown} alt="Down" />) : list.id === "02" ? (<img className='object-contain ml-2' src={showCompany ? arrUp : arrDown} alt="Down" />) : undefined}
                                        </div>
                                    </div>
                                    <li className={`${list.id == "01" && showFeature ? '' : list.id == "02" && showCompany ? '' : 'hidden'} flex flex-col space-y-2 ml-4`}>
                                        {list.id === "01" ? dropDwnFeature.map((downF) => (<div key={downF.id} className=''>{showFeature ? (<a className='flex hover:text-almostBlack cursor-pointer' href={`#${downF.id}`}><img className='w-[14px] mr-3 object-contain' src={downF.img} alt={downF.title} /> {downF.title}</a>) : undefined}</div>)) : list.id === "02" ? dropDwnCompany.map((downC) => (<a key={downC.id} href={`#${downC.id}`} className='hover:text-almostBlack cursor-pointer'>{showCompany ? downC.title : undefined}</a>)) : undefined}
                                    </li>
                                </div>
                            ))}
                        </ul>
                        <div className='flex flex-col space-y-4 mt-4 px-5 text-mediumGray'>
                            <button className='hover:text-almostBlack'>
                                <a href="#">Login</a>
                            </button>
                            <button className='border-2 border-mediumGray hover:border-almostBlack hover:text-almostBlack py-2 px-4 rounded-2xl'>
                                <a href="#">Register</a>
                            </button>
                        </div>
                    </div>

                    <ul className='relative hidden md:flex md:ml-[52px] md:space-x-8 lg:space-x-10 list-none'>
                        {navList.map((list) => (
                            <li onClick={list.id === "01" ? () => setShowFeature(!showFeature) : list.id === "02" ? () => setShowCompany(!showCompany) : undefined} key={list.id} className='flex text-mediumGray hover:text-almostBlack cursor-pointer'>
                                {list.id === "01" ? (<>{list.title}{showFeature ? (<img className='object-contain ml-2' src={arrUp} alt="Down" />) : (<img className='object-contain ml-2' src={arrDown} alt="Down" />)}</>) : list.id === "02" ? (<>{list.title}{showCompany ? (<img className='object-contain ml-2' src={arrUp} alt="Down" />) : (<img className='object-contain ml-2' src={arrDown} alt="Down" />)}</>) : (list.title)}
                            </li>  
                        ))}
                    </ul>

                    <div className='hidden md:block'>
                        {showFeature ? 
                            (
                                <ul className='absolute left-[13%] top-[68px] p-5 rounded-lg bg-white drop-shadow-2xl space-y-2 text-mediumGray'>
                                    {dropDwnFeature.map((donwF) => (
                                        <li className='flex hover:text-almostBlack cursor-pointer' key={donwF.id}>
                                            <img className='w-[14px] object-contain mr-3 ' src={donwF.img} alt={donwF.title} />
                                            {donwF.title}
                                        </li>
                                    ))}
                                </ul>
                            ) : undefined
                        }
                        
                        {showCompany ?
                            (
                                <ul className='absolute md:left-[34%] lg:left-[29%] xl:left-[26%] top-[68px] p-5 rounded-lg bg-white drop-shadow-2xl space-y-2 text-mediumGray'>
                                    {dropDwnCompany.map((donwC) => (
                                        <li className='flex hover:text-almostBlack cursor-pointer' key={donwC.id}>
                                            {donwC.title}
                                        </li>
                                    ))}
                                </ul>
                            ) : undefined
                        }
                    </div>
                </div>

                <div className='hidden md:flex space-x-4 lg:space-x-8 text-mediumGray'>
                    <button className='hover:text-almostBlack'>
                        <a href="#">Login</a>
                    </button>
                    <button className='border-2 border-mediumGray hover:border-almostBlack hover:text-almostBlack py-2 px-4 rounded-2xl'>
                        <a href="#">Register</a>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
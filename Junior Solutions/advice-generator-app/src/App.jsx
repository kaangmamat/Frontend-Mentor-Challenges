import { useState, useEffect } from "react"
import patterMob from './assets/pattern-divider-mobile.svg'
import dice from './assets/icon-dice.svg'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, []) 
  
  const fetchData = async () => {
    const res = await fetch('https://api.adviceslip.com/advice', {cache: 'no-cache'})
    const api = await res.json()
    setData(api.slip)
  }

  return (
    <main>
      <section className=" bg-darkBlue flex flex-col justify-center items-center min-h-screen">
        <div className="relative max-w-lg text-center font-manrope bg-darkGrayishblue px-14 pt-8 pb-20 m-4 rounded-xl">
          <span className="text-neonGreen text-[13px] tracking-[3px]">ADVICE #{data.id}</span>
          <blockquote className="text-lightCyan py-6 text-[24px] md:text-[28px]">“{data.advice}”</blockquote>
          <img className="mx-auto w-full bg-contain" src={patterMob} alt="Quote" />
          <button onClick={fetchData} className="absolute -bottom-7 left-0 right-0 mx-auto h-16 w-16 flex items-center cursor-pointer hover:drop-shadow-[0rem_0rem_0.5rem_#52ffa8] rounded-full bg-neonGreen">
            <img className="mx-auto" src={dice} />
          </button>
        </div>
      </section>
    </main>
  )
}

export default App

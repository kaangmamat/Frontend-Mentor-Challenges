import React, { Component } from 'react'
import desk from '../src/assets/image-product-desktop.jpg'
import image from '../src/assets/image-product-mobile.jpg'
import myIcon from '../src/assets/icon-cart.svg'

export default class CardComponent extends Component {
  state = {
    changeScreen: window.innerWidth
  }
  
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this))
    this.resize()
  }
  
  resize() {
    this.setState({
      changeScreen: window.innerWidth
    })
  }
  
  getImage(screen) {
    if (screen <= 640) {
      return image
    }
    return desk
  }

  render() {
    return (
      <main style={{backgroundColor: 'hsl(30, 38%, 92%)'}} className="min-h-screen md:flex justify-center items-center">
        <div className='py-[26px] px-[16px] rounded-lg md:rounded-none md:flex md:max-w-3xl md:max-h-5xl'>
          <img src={this.getImage(this.state.changeScreen)} className="rounded-t-lg object-cover w-full md:flex-1 md:rounded-none md:rounded-l-lg" />
          <div className='py-[24px] px-[24px] md:px-[36px] md:py-[42px] bg-whitee rounded-b-lg md:rounded-none md:rounded-r-lg md:flex-1'>
            <p className='uppercase tracking-[6px] text-darkGrayishBlue font-montserrat text-[18px]'>perfume</p>
            <h1 className='text-4xl font-fraunces text-veryDarkBlue py-[18px] md:py-[24px]'>Gabrielle Essence <br /> Eau De Parfum</h1>
            <p className='text-darkGrayishBlue font-montserrat text-[18px] leading-relaxed pb-[18px] md:pb-[24px]'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
            <div className='flex flex-row items-center'>
              <p className='font-fraunces text-4xl text-darkCyan mr-6'>$149.99</p>
              <span className='text-darkGrayishBlue line-through'>$169.99</span>
            </div>
            <button className='flex flex-row items-center justify-center bg-darkCyan hover:bg-veryDarkBlue py-3 mt-[18px] md:mt-[24px] w-full text-whitee font-montserrat font-semibold rounded-lg'>
              <img src={myIcon} className="mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    )
  }
}


  

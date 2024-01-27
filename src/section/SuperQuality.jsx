import React from 'react'
import Buttn from '../components/Buttn'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section id="about-us" className='flex justify-between items-center max-lg:fex-col gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col'>
        {/* Text and button */}
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          <span className='font-montesarrat xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>We Provide You Super</span>
          <br />
          <span className='mt-3 text-coral-red inline-block'>Quality</span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>Ensuring premium comfort and style, our meticulously crafted footware is designed to elevate your experience, providing you with unmatched quality, innovation and a touch of elegance.</p>
        <p className='mt-6 lg:max=w-lg info-text'>Our dedication to detail and excellence ensures your satisfaction</p>
        <div className='mt-11'><Buttn label="View Details"/></div>
  
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} height={522} width={570} alt="" className='object-contain' />
      </div>

    </section>
  )
}

export default SuperQuality

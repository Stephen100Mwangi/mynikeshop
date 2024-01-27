import React from 'react'
import Buttn from '../components/Buttn'
import { offer } from '../assets/images'
import { arrowRight } from '../assets/icons'

const SpecialOffers = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex'>
        <img src={offer} alt=""  width={673} height={56} className='object-contain w-full'/>
  
      </div>
      <div className='flex flex-1 flex-col'>
        {/* Text and button */}
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          <span className='mt-3 text-coral-red inline-block'>Special</span> Offers
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>Ensuring premium comfort and style, our meticulously crafted footware is designed to elevate your experience, providing you with unmatched quality, innovation and a touch of elegance.</p>
        <p className='mt-6 lg:max=w-lg info-text'>Our dedication to detail and excellence ensures your satisfaction</p>
        <div className='mt-11 flex gap-4'><Buttn label="Shop now" iconLabel={arrowRight}/> <Buttn label="Learn more" className='bg-slate-gray'/></div>
  
      </div>
      
    </section>
  )
}

export default SpecialOffers

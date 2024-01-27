import React from 'react'
import { truckFast } from '../assets/icons'
import { shieldTick } from '../assets/icons'
import { support } from '../assets/icons'

const Services = () => {
    // Services
    const services = [
        {
            imgURL:truckFast,
            label:"Free Shipping",
            subtext:"Enjoy seamless shopping ith our complementary shipping services."
        },
        {
            imgURL:shieldTick,
            label:"Secure Payment",
            subtext:"Experince worry free transactions with our secure payment options."
        },
        {
            imgURL:support,
            label:"Love to help you",
            subtext:"Our dedicated team is here to assist you every step of the way."
        }
    ]
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
        {services.map((service)=><div className='flex-1 sm:w-[350px] sm:min-w-[350px] width-full rounded-[20px] px-10 py-16 shadow-3xl'><div className='bg-coral-red rounded-full w-11 h-11 flex justify-center items-center'><img src={service.imgURL} alt="transport" className='bg-coral-red rounded-full items-center justify-center' height={24} width={24} /></div><p className='my-[20px] font-bold text-coral-red'>{service.label}</p><p className='leading-normal text-slate-gray'>{service.subtext}</p></div>)}
      
    </section>
  )
}

export default Services

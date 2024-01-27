import React from 'react'
import Buttn from '../components/Buttn'

const Subscribe = () => {
  return (
    <section className='max-container flex-col justify-between items-center max-lg:flex-col gp-10' id='contact-us'>
      <h3 className='font-bold text-3xl'>Sign Up for <span className='text-coral-red'>Updates </span> & Newsletter</h3>
      <div className='flex justify-center items-center border-2 rounded-full  gap-10 p-2 mt-4 max-sm:flex-col max-sm:border-0'>
        <input type="text" name="" id="" placeholder='subscribe@nike.com' className='input my-[20px]'/>
        <div>
          <Buttn label="Sign Up"></Buttn>
        </div>
      </div>
  
    </section>
  )
}

export default Subscribe

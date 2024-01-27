import React from 'react'
import { footerLogo } from '../assets/images'
import { facebook, instagram, twitter } from '../assets/icons'

const Footer = () => {
  return (
    <footer className='flex-col'>
      <div className='my-[20px]'>
        <img src={footerLogo} alt="" />
      </div>
      <p className='text-slate-gray w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas ratione pariatur cupiditate asperiores deleniti labore reiciendis vitae neque consequatur, minus rerum, nostrum voluptate porro fugiat et esse magnam inventore!</p>
      <div className='flex gap-10 my-[20px]'>
        <div className='bg-white h-9 w-9 rounded-full flex justify-center align-center p-2 cursor-pointer'><img src={twitter} alt="" /></div>
        <div className='bg-white h-9 w-9 rounded-full flex justify-center align-center p-2 cursor-pointer'><img src={instagram} alt="" /></div>
        <div className='bg-white h-9 w-9 rounded-full flex justify-center align-center p-2 cursor-pointer'><img src={facebook} alt="" /></div>
      </div>
     
     
      <div className='flex justify-evenly w-full max-sm:flex-col'>
        <div className='flex flex-col items-start mt-5'>
          <h3 className='text-white font-bold text-2xl'>Quick Links</h3>
          <a href="" className='text-slate-gray leading-10'>Home</a>
          <a href="" className='text-slate-gray leading-10'>Our Products</a>
          <a href="" className='text-slate-gray leading-10'>Services</a>
          <a href="" className='text-slate-gray leading-10'>Special Offers</a>
          <a href="" className='text-slate-gray leading-10'>Customer Feedback</a>
          <a href="" className='text-slate-gray leading-10'>Subscribe</a>
        </div>
        <div className='flex flex-col items-start mt-5'>
        <h3 className='text-white font-montesarrat font-bold leading-10 text-2xl'>Help</h3>
          <a href="" className='text-slate-gray leading-10'>About Us</a>
          <a href="" className='text-slate-gray leading-10'>FAQs</a>
          <a href="" className='text-slate-gray leading-10'>Payment policy</a>
          <a href="" className='text-slate-gray leading-10'>Privacy policy</a>
        </div>
        <div className='flex flex-col items-start mt-5'>
          <h3 className='text-white font-montesarrat font-bold leading-10 text-2xl'>Get in Touch</h3>
          <a href="tel:+254758725032" className='text-slate-gray leading-10'>0758725032</a>
          <a href="mailto:mwangiwahome70@gmail.com" className='text-slate-gray leading-10'>customercarenike@gmail.com</a>
        </div>
      </div>
      <p className='text-slate-gray font-bold w-full flex items-center justify-center'>Nike EST 2023 &copy;</p>
    </footer>
  )
}

export default Footer

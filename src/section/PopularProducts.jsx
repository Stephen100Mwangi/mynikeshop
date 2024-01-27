import React from 'react'
import { shoe4 } from '../assets/images'
import { shoe5 } from '../assets/images'
import { shoe6 } from '../assets/images'
import { shoe7 } from '../assets/images'
import { star } from '../assets/icons'

const PopularProducts = () => {
    // Shoe Products
    const shoeProducts = [
        {imgU:shoe4,name:"Nike Air Jordan-01",price:"$200.20",rating:"4.7"}, 
        {imgU:shoe5,name:"Nike Air Jordan-101",price:"$120.00",rating:"4.1"},
        {imgU:shoe6,name:"Nike Air Jordan-04",price:"$180.20",rating:"4.5"},
        {imgU:shoe7,name:"Nike Air Jordan-05",price:"$250.20",rating:"4.3"}

    ]
  return (
    <section id='products' className='max-container max-sm:mt-12'>
        <div className='flex flex-col justify-start gap-5'>
            <h2 className='text-4xl font-bold font-palanquin'>Our<span className='text-coral-red'> Popular </span> Products</h2>
            <p className='lg:max-w-lg mt-2 text-slate-gray font-montesarrat'>Experience top-notch quality and style with our sought-after selections.Discover a world of comfort design and value</p>
        </div>
        <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-col-2 grid-cols-1 sm:gap-4 gap-14'>
            {shoeProducts.map((product)=><div key={product.name}><div><img src={product.imgU} alt={product.imgU} /></div><p className='text-coral-red leading-normal' >{product.name}</p><p className='font-bold'>{product.price}</p><p className='flex gap-2 text-center justify-start m-[20px] mx-[0px] items-center leading-normal'><span><img src={star} alt="rating" className='w-[15px] h-[15px]'/></span>{product.rating}</p></div>)}
        </div>
       
    </section>
  )
}

export default PopularProducts

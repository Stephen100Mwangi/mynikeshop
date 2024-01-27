import React from 'react'
import { customer1 } from '../assets/images'
import { customer2 } from '../assets/images'
import { star } from '../assets/icons'

const CustomerReviews = () => {
  // Reviews
  const reviews = [
    {
      imgURL:customer1,
      name:"Steve M",
      rating:"4.0",
      feedback:"An excellent experience with your payment method seamless as well as secure"
    },
    {
      imgURL:customer2,
      name:"Hannah Joe",
      rating:"4.3",
      feedback:"An excellent experience with your payment method seamless as well as secure"
    }
  ]
  return (
    <section className='max-container'>
      <h3 className='text-4xl font-bold font-palanquin'>What Our <span className='text-coral-red'>Customers</span> Say</h3>
      <p className='info-text m-auto mt-4 mx-w-lg text-center'>Hear genuine stories from our satisfied customers about their exceptional experience with us</p>
      <div className='mt-4 justify-evenly flex flex-1 items-center gap-14 max-lg:flex-col'>
        {/* Reviews */}
        {
          reviews.map((review)=><div className='w-[350px] flex justify-center items-center flex-col text-center border-[1px] p-[20px] rounded-[20px] mt-10 shadow-3xl'><div><img src={review.imgURL} alt="" height={100} width={100} className='rounded-full'/></div><p className='leading-normal'>{review.feedback}</p><div className='flex gap-5 m-[15px] justify-center'><img src={star} alt="" height={24} width={24}/><p>{review.rating}</p></div><p className='text-slate-gray font-bold text-2xl'>{review.name}</p></div>)
        }

      </div>

    </section>
  )
}

export default CustomerReviews

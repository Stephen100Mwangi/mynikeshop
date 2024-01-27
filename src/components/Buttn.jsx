import React from 'react'

const Buttn = ({label,iconLabel}) => {
  return (
    <button className='flex justify-center leading-none align-center gap-2 px-7 py-4 bg-coral-red rounded-full text-white'>
        {label}

        {/* Image Icon */}
        {iconLabel && <img src={iconLabel} alt="arrow Right Icon" className='ml-2 rounded-full w-5 h-5' />}
      
    </button>
  )
}

export default Buttn

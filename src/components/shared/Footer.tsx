import React from 'react'

const Footer = () => {
  return (
    <div className='bg-orange-500 text-white  py-10'>
      <div className='conatiner mx-auto px-2.5 flex flex-col gap-5 md:flex-row items-center justify-between'>
        <p className='text-2xl font-bold tracking-widest cursor-pointer'>MernEats.com</p>
        <div className='flex items-center gap-6'>
          <p className='cursor-pointer'>Privacy Policy</p>
          <p className='cursor-pointer'>Terms of Service</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
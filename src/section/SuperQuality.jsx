import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../nike_landing_assets/assets/images'

function SuperQuality() {
  return (
    <section id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin text-4xl capitalize lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-coral-red '> Super</span>
          <span className='text-coral-red '> Quality </span>
          Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg capitalize'>ensuring primium comfort and style ,our meteculously crafted footwear is designed to elevate your experience ,providing you with unmatched quality, innovation, and touch of elegance</p>
        <p className='mt-6 lg:max-w-lg info-text'>Our dedication to detail and excellence ensures your satisfaction</p>
        <div className='mt-11'>
          
        <Button label="View Details"
        />
        </div>
      </div>
      <div className='flex flex-1 justify-center items-center'>
      <img src={shoe8} alt="shoe8" width={570} height={522} />
      </div>
    </section>
  )
}

export default SuperQuality

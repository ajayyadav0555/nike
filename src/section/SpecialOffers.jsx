import React from 'react'
import { offer } from '../nike_landing_assets/assets/images'
import Button from '../components/Button'
import { arrowRight } from '../nike_landing_assets/assets/icons'

function SpecialOffers() {
  return (
    <section className='flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} alt="offer" width={773} height={687} className='object-contain w-full' />

      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin text-4xl capitalize lg:max-w-lg font-bold'>
         
          <span className='text-coral-red '>Special </span>
          Offer
        </h2>
        <p className='mt-4 lg:max-w-lg capitalize text-slate-gray'>ensuring primium comfort and style ,our meteculously crafted footwear is designed to elevate your experience ,providing you with unmatched quality, innovation, and touch of elegance</p>
        <p className='mt-4 lg:max-w-lg capitalize text-slate-gray'>ensuring primium comfort and style ,our meteculously crafted footwear is designed to elevate your experience ,providing you with unmatched quality, innovation, and touch of elegance</p>
        <div className='mt-11 flex gap-5 flex-wrap'>
          
        <Button label="Shop now" iconURL={arrowRight}/>
        <Button backgroundColor="bg-white"
        textColor="border-slate-gray"
        borderColor="border-slate-gray"
        label="Learn more"/>
      </div>
      </div>
    </section>
  )
}

export default SpecialOffers

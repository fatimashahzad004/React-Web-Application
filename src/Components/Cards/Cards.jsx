import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from "../Button/Button";

export default function Cards({ image, name, price }) {
  return (
    <div className='bg-zinc-100 p-4 md:p-5 rounded-xl'>
      
      {/* Top Icons */}
      <div className='flex justify-between items-center'>
        <span className='text-2xl md:text-3xl text-zinc-300'>
          <FaHeart />
        </span>

        <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white 
          text-lg md:text-xl px-3 md:px-4 py-2 md:py-3 rounded-lg'>
          <FaPlus />
        </button>
      </div>

      {/* Image */}
      <div className='w-full h-40 md:h-48 lg:h-52 mt-3'>
        <img
          src={image}
          alt={name}
          className='w-full h-full object-contain'
        />
      </div>

      {/* Text */}
      <div className='text-center mt-4'>
        <h3 className='text-lg md:text-xl lg:text-2xl font-semibold'>
          {name}
        </h3>

        <p className='text-xl md:text-2xl font-bold mt-3 mb-3'>
          ${price.toFixed(2)}
        </p>

        <Button content="Shop Now" />
      </div>

    </div>
  )
}

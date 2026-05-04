import React from 'react'

export default function Button(props) {
  return (
    <button className="mt-6 text-sm md:text-lg bg-gradient-to-r from-red-600 to-orange-500
text-white px-3 py-2 md:px-6 md:py-3 rounded-lg font-semibold shadow-md 
hover:opacity-90 transition-all duration-300 cursor-pointer hover:scale-105">
  {props.content}
</button>

  )
}
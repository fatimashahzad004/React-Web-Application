import React from 'react'
import Banner from '../Banner/Banner'
import CategoryPage from '../CategoryPage/CategoryPage'

export default function Fruits() {
  return (
    <div>
      <CategoryPage title="Fruits and Veggies" categories={['Fruits']}/>
    </div>
  )
}

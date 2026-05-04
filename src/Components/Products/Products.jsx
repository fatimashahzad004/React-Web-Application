import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'
import Button from '../Button/Button'
import { Link } from "react-router-dom";

const Products = () => {

  const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'Seafood']
  let [activeTab, setActiveTab] = useState('All');

  const filteredProducts = activeTab === 'All'
    ? ProductList
    : ProductList.filter(product => product.category === activeTab);

  const renderCards = filteredProducts.slice(0, 8).map((product, i) => {
    return (
      <Cards
        key={i}
        image={product.image}
        name={product.name}
        price={product.price}
      />
    )
  })

  return (
    <section className='bg-white'>
      <div className='max-w-[1400px] mx-auto px-5 md:px-10 py-10 md:py-13'>
        <Heading highlight="Our" heading="Products" />

        {/* Tabs */}
        <div className='flex flex-wrap gap-3 justify-center mt-15 mb-10'>
          {categories.map(category => (
            <button
              key={category}
              className={`px-5 py-2 text-sm md:text-base font-medium rounded-lg transition-all
                ${activeTab === category
                  ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20'>
          {renderCards}
        </div>

        {/* Button */}
        <div className='flex justify-center mt-12'>
          <Link
            to='/allproducts'
            className="text-sm md:text-lg bg-gradient-to-r from-red-600 to-orange-500
              text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold shadow-md
              hover:opacity-90 transition-all duration-300 hover:scale-105"
          >
            View All
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Products

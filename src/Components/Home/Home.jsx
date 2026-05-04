// Home.jsx

import React from 'react'
import Hero from '../Hero/Hero'
import Discount from '../Discount/Discount'
import Process from '../Process/Process';
import Category from '../Category/Category';
import Values from '../Values/Values';
import Testimonials from '../Testimonials/Testimonials';
import Products from '../Products/Products';
import FAQs from '../FAQs/FAQs';

export default function Home() {
  return (
    <>
      <Hero />
      <Category />
      <Discount />
      <Values />
      <Process />
      <Products />
      <Testimonials />
      <FAQs />
    </>
  );
}
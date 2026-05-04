import React from "react";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function Category() {
  const renderCards = category.map((card) => {
    return (
      <div
        key={card.id}
        className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col"
      >
        {/* Image */}
        <div className="w-full h-52 lg:h-64 overflow-hidden">
          <img
            src={card.image}
            className="w-full h-full object-cover"
            alt={card.title}
          />
        </div>

        {/* Text */}
        <div className="p-6">
          <h3 className="text-zinc-800 text-xl font-bold">{card.title}</h3>
          <p className="text-zinc-600 mt-3 mb-5">{card.description}</p>
        <Link to={card.path} className="mt-6 text-sm md:text-lg bg-gradient-to-r from-red-600 to-orange-500
text-white px-3 py-2 md:px-6 md:py-3 rounded-lg font-semibold shadow-md 
hover:opacity-90 transition-all duration-300 cursor-pointer hover:scale-105">
          See All
        </Link>
        </div>
      </div>
    );
  });

  return (
    <section className="py-0 mt-20">
      <div className="max-w-[1400px] mx-auto px-5">
        <Heading highlight="Shop" heading="by Category" />

        {/* Cards Grid */}
        <div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {renderCards}
        </div>
      </div>
    </section>
  );
}

const category = [
  {
    id: 1,
    title: "Fruits & Veggies",
    description: "Fresh, organic produce sourced daily from local farms.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtdtYOfUnAHQxJiW_fr5JY91VdXtIpfpRlDQ&s",
   path: '/fruits'
    },
  {
    id: 2,
    title: "Dairy & Eggs",
    description: "Milk, cheese, butter, and fresh eggs from happy hens.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTOT38a1bq_6ZkVGqLobj-2b966XQU7h8QBw&s",
  path: '/dairy'
    },
  {
    id: 3,
    title: "Bakery",
    description: "Artisan breads, pastries, and sweet treats baked daily.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMicNRvYA6igCXPPArYtOsJ8Jece6e39x18A&s",
   path: '/seafood'
    },
];
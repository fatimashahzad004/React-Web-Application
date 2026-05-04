import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

export default function Error404() {
  return (
    <>
    
      <div className="min-h-[85vh] flex flex-col items-center justify-center px-6 text-center bg-gray-50">
        {/* Large 404 Background Text */}
        <div className="relative">
          <h1 className="text-[10rem] md:text-[12rem] font-black text-zinc-200 select-none">
            404
          </h1>
          {/* Overlay Badge */}
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12 bg-orange-500 text-white py-1 px-3 rounded shadow-lg font-bold text-xs md:text-sm uppercase tracking-widest">
            Page Not Found
          </span>
        </div>

        {/* Content Section */}
        <div className="max-w-sm -mt-8 z-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-800 mb-3">
            Lost in the Orchard?
          </h2>
          <p className="text-zinc-500 text-base mb-8 leading-relaxed">
            The page you are looking for might have been removed or is temporarily unavailable.
          </p>

          {/* Adjusted Action Button - Smaller Height/Width */}
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-2.5 rounded-lg font-semibold text-sm shadow-md hover:shadow-orange-100 hover:scale-105 transition-all duration-300 active:scale-95"
          >
            Back to Homepage
          </Link>
        </div>

        {/* Decorative Background Elements */}
        <div className="fixed top-20 left-10 w-24 h-24 bg-red-100 rounded-full blur-3xl -z-10 opacity-50"></div>
        <div className="fixed bottom-20 right-10 w-32 h-32 bg-orange-100 rounded-full blur-3xl -z-10 opacity-50"></div>
      </div>
    </>
  );
}
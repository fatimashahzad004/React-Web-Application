import React from "react";

export default function Discount() {
  return (
    <section className="py-16 overflow-hidden"> {/* overflow-hidden zaroori hai */}
      <div
        className="
          max-w-[1400px] mx-auto 
          bg-[#f4f4f4] rounded-xl 
          p-10
          flex flex-col md:flex-row 
          items-center justify-between 
          gap-10
          relative
        "
      >
        {/* LEFT SIDE — FIXED 20% TEXT */}
        <div className="relative flex items-center justify-center w-full md:w-auto">
          <div className="text-orange-600 font-bold text-6xl md:text-7xl lg:text-9xl 
                          rotate-0 md:-rotate-90 md:translate-y-0 translate-y-0
                          md:static relative py-4 md:py-20 leading-none">
            20%
          </div>
        </div>

        {/* CENTER TEXT */}
        <div className="text-center md:text-left flex-1 max-w-xl space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-800 leading-tight">
            First Order <br /> Discount!
          </h2>

          <p className="text-zinc-600 leading-relaxed">
            Enjoy an exclusive first order discount on our grocery website! Shop
            fresh essentials and save big on your first purchase. Fast delivery
            and quality guaranteed.
          </p>

          <button
            className="
              mt-4 bg-gradient-to-r from-orange-500 to-red-500 
              text-white px-6 py-3 rounded-lg font-semibold 
              shadow-md hover:opacity-90 hover:scale-105 
              transition-all duration-300
            "
          >
            Get a Discount
          </button>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hidden md:flex">
          <img
            src="https://media.istockphoto.com/id/995518546/photo/assortment-of-colorful-ripe-tropical-fruits-top-view.jpg?s=612x612&w=0&k=20&c=bz2zksjSPikOYm9I-mG-f8SAQWVpFsR4M_u4K9soLQ0="
            alt="fruits"
            className="w-[280px] md:w-[350px] lg:w-[420px] object-contain rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
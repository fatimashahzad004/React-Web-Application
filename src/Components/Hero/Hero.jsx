import React from "react";
import Button from "../Button/Button";

export default function Hero() {
  return (
  <section className="w-full pt-[12vh] md:pt-[14vh]">


<div className="max-w-[1400px] mx-auto px-6 md:px-10 grid md:grid-cols-2 items-center gap-10">

        {/* LEFT TEXT SECTION */}
        <div className="md:ms-30">
          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold">
            Super Best Quality...
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            Tasty Organic <br />
            <span className="text-orange-500">Fruits</span> &{" "}
            <span className="text-orange-600">Veggies</span> <br />
            In Your City
          </h1>

          <p className="text-gray-600 mt-4 max-w-md">
            Best for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>

        <Button content="Shop Now"/>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="https://www.cougar.com.pk/cdn/shop/files/preview_images/e65cda4038f34d14ac190759452734dc.thumbnail.0000000000.jpg?v=1764596276&width=2000"
            alt="basket"
            className="w-[320px] md:w-[420px] lg:w-[500px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
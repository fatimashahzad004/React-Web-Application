import React from "react";
import Heading from "../Heading/Heading";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";

export default function Values() {

  const leftValues = value.slice(0, 2).map((item) => (
    <div
      key={item.id}
      className="
        space-y-2 w-full
        text-center md:text-right // मोबाइल पर टेक्स्ट सेंटर में, डेस्कटॉप पर राइट में
      "
    >
      <div
        className="
          flex items-center gap-5 
          justify-center md:justify-end // मोबाइल पर सेंटर, डेस्कटॉप पर राइट में एलाइनमेंट
        "
      >
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-800">
          {item.title}
        </h3>

        <span
          className="
            flex justify-center items-center text-3xl text-white 
            bg-gradient-to-b from-orange-400 to-orange-500 
            w-14 h-14 rounded-full // नारंगी रंग का गोल आइकन कंटेनर
          "
        >
          {item.icon}
        </span>
      </div>

      <p className="text-zinc-600">{item.para}</p>
    </div>
  ));

  const rightValues = value.slice(2).map((item) => (
    <div
      key={item.id}
      className="
        space-y-2 w-full
        text-center md:text-left // मोबाइल पर सेंटर, डेस्कटॉप पर लेफ्ट में
      "
    >
      <div
        className="
          flex items-center gap-5 
          justify-center md:justify-start // मोबाइल पर सेंटर, डेस्कटॉप पर लेफ्ट में एलाइनमेंट
        "
      >
        <span
          className="
            flex justify-center items-center text-3xl text-white 
            bg-gradient-to-b from-orange-400 to-orange-500 
            w-14 h-14 rounded-full
          "
        >
          {item.icon}
        </span>

        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-800">
          {item.title}
        </h3>
      </div>

      <p className="text-zinc-600">{item.para}</p>
    </div>
  ));

  return (
    <section className="py-8">
      <div className="max-w-[1400px] mx-auto px-10">
        <Heading highlight="Our" heading="Values" /> 
      </div>

      <div
        className="
          max-w-[1400px] mx-auto px-10 mt-10
          flex flex-col lg:flex-row // मोबाइल पर वर्टिकल (नीचे), बड़े स्क्रीन पर हॉरिजॉन्टल (साइड-बाय-साइड)
          justify-between items-center
          gap-10
        "
      >
        <div className="flex flex-col gap-16 md:items-end items-center">
          {leftValues}
        </div>

    {/* CENTER IMAGE — hidden on mobile */}
<div className="hidden md:flex justify-center">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDkznO7UfqL2vDa7j_-hyajzYqV6iH6vKp-Q&s"
    alt="basket"
    className="
      w-[280px] md:w-[380px] lg:w-[450px] 
      object-contain
    "
  />
</div>


        <div className="flex flex-col gap-16 md:items-start items-center">
          {rightValues}
        </div>
      </div>
    </section>
  );
}

const value = [
  {
    id: 1,
    title: "Trust",
    para: "It is a long fact that a reader will be distracted by the readable",
    icon: <FaHeart />, 
  },
  {
    id: 2,
    title: "Trust",
    para: "It is a long fact that a reader will be distracted by the readable",
    icon: <FaLeaf />, 
  },
  {
    id: 3,
    title: "Food Safety",
    para: "It is a long fact that a reader will be distracted by the readable",
    icon: <FaShieldAlt />, 
  },
  {
    id: 4,
    title: "Food Safety",
    para: "It is a long fact that a reader will be distracted by the readable",
    icon: <FaSeedling />, 
  },
];
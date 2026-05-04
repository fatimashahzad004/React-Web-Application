import React from "react";
import Heading from "../Heading/Heading";
import { FaLeaf, FaIndustry, FaAward, FaTruck } from "react-icons/fa";

const processData = [
  {
    id: "01",
    title: "Sourcing",
    desc: "It is a long established fact that a reader",
    icon: <FaLeaf />,
  },
  {
    id: "02",
    title: "Manufacturing",
    desc: "It is a long established fact that a reader",
    icon: <FaIndustry />,
  },
  {
    id: "03",
    title: "Quality Control",
    desc: "It is a long established fact that a reader",
    icon: <FaAward />,
  },
  {
    id: "04",
    title: "Logistics",
    desc: "It is a long established fact that a reader",
    icon: <FaTruck />,
  },
];

const Process = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">

        {/* Heading */}
        <Heading highlight="Our" heading="Process" />

        {/* Process Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {processData.map((item) => (
            <div key={item.id} className="text-center">

              {/* Number Circle */}
              <div className="mx-auto mb-6 w-14 h-14 rounded-full border-2 border-dashed border-gray-400 
                              flex items-center justify-center text-xl font-semibold">
                {item.id}
              </div>

              {/* Icon Circle */}
              <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-orange-500 
                              flex items-center justify-center text-white text-2xl">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm">
                {item.desc}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

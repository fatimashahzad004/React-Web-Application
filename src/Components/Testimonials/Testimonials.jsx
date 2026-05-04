import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";

import Heading from "../Heading/Heading"; 

const Testimonials = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 md:py-16">

        {/* Header Section */}
        <div className="relative flex flex-col items-center justify-center mb-6">
          <div className="text-center">
            <Heading highlight="Customers" heading="Saying" />
          </div>

          {/* Navigation Arrows — SAME AS BEFORE */}
          <div className="flex items-center gap-3 mt-0 md:absolute md:right-0 md:top-0">
            <button className="custom-prev w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-xl bg-gray-100 text-gray-800 hover:bg-orange-500 hover:text-white transition-all duration-300 active:scale-95">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-4 h-4 md:w-5 md:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button className="custom-next w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-xl bg-gray-100 text-gray-800 hover:bg-orange-500 hover:text-white transition-all duration-300 active:scale-95">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-4 h-4 md:w-5 md:h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="max-w-[1400px] mx-auto">
        <Swiper
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation]}
          className="mySwiper px-4 sm:px-6 md:px-10"
        >
          {reviews.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="w-full bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col gap-8">

                  {/* Profile */}
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full border-2 border-orange-500 p-1 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col">
                      <h4 className="text-xl font-bold text-gray-900">
                        {item.name}
                      </h4>
                      <p className="text-gray-500 font-medium">
                        {item.profession}
                      </p>
                      <div className="flex gap-1 mt-1 text-orange-400">
                        {[...Array(item.rating)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Review */}
                  <p className="text-gray-600 text-lg leading-relaxed italic min-h-[15vh]">
                    "{item.para}"
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    profession: "Marketing Director",
    rating: 5,
    para:
      "Working with this team has been an absolute game-changer for our business. Their attention to detail and commitment to excellence is unmatched.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJVW5YgRaDw1Zu7_cHfR5SVANzNw7gDOr_bg&s",
  },
  {
    id: 2,
    name: "Michael Chen",
    profession: "Software Engineer",
    rating: 5,
    para:
      "The quality of service exceeded all my expectations. They delivered on time and the results were phenomenal. Highly recommended!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJVW5YgRaDw1Zu7_cHfR5SVANzNw7gDOr_bg&s",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    profession: "Business Owner",
    rating: 4,
    para:
      "Great experience from start to finish. Professional, responsive, and truly cared about delivering the best possible outcome for my project.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJVW5YgRaDw1Zu7_cHfR5SVANzNw7gDOr_bg&s",
  },
  {
    id: 4,
    name: "David Thompson",
    profession: "Product Manager",
    rating: 5,
    para:
      "Outstanding work! The team was creative, efficient, and always went the extra mile to ensure everything was perfect.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJVW5YgRaDw1Zu7_cHfR5SVANzNw7gDOr_bg&s",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    profession: "Creative Director",
    rating: 4,
    para:
      "Outstanding work! The team was creative, efficient, and always went the extra mile to ensure everything was perfect.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJVW5YgRaDw1Zu7_cHfR5SVANzNw7gDOr_bg&s",
  },
];

export default Testimonials;

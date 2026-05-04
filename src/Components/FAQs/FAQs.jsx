import React, { useState } from "react";

const faqsData = [
  {
    question: "What is your delivery time?",
    answer: "We usually deliver orders within 24 to 48 hours depending on your location."
  },
  {
    question: "Are your products fresh?",
    answer: "Yes, all our products are 100% fresh and sourced daily from trusted suppliers."
  },
  {
    question: "Do you offer cash on delivery?",
    answer: "Yes, we provide cash on delivery service in selected areas."
  },
  {
    question: "Can I return or replace an item?",
    answer: "If you receive a damaged or wrong item, you can request a return or replacement within 24 hours."
  }
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-orange-500">FAQs</span> – Need Help?
        </h2>

        {/* FAQ Cards */}
        <div className="space-y-6">
          {faqsData.map((faq, index) => (
            <div
              key={index}
              className="bg-zinc-100 rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="text-base md:text-lg font-semibold text-gray-800">
                  {faq.question}
                </span>

                <span
                  className={`w-8 h-8 flex items-center justify-center rounded-full text-white text-xl transition-all
                  ${activeIndex === index
                      ? "bg-gradient-to-b from-orange-400 to-orange-500 rotate-45"
                      : "bg-gradient-to-b from-orange-400 to-orange-500"
                    }`}
                >
                  +
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-5 pb-5 text-gray-600 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQs;

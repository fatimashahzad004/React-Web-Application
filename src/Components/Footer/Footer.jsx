import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white py-10 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">
            Gr<span className="text-orange-500">o</span>cify
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Bred for a high content of beneficial substances.<br />
            Our products are all fresh and healthy.
          </p>
          <p className="text-gray-400 text-sm mt-4">
            2025 © All Right Reserved
          </p>
        </div>

        {/* Company Links */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-500 text-sm">
            <li className="cursor-pointer hover:text-orange-500">About</li>
            <li className="cursor-pointer hover:text-orange-500">FAQ's</li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg">Support</h3>
          <ul className="flex flex-col gap-2 text-gray-500 text-sm">
            <li className="cursor-pointer hover:text-orange-500">Support center</li>
            <li className="cursor-pointer hover:text-orange-500">Feedback</li>
            <li className="cursor-pointer hover:text-orange-500">Contact us</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg">Stay Connected</h3>
          <p className="text-gray-500 text-sm">
            Questions or Feedback?<br />
            we'd love to hear from you.
          </p>
          <div className="relative mt-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full bg-gray-100 py-3 px-4 rounded-lg outline-none text-sm"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 p-2 rounded-md text-white hover:bg-orange-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}
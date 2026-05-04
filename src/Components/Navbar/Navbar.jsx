import React, { useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { TbMenu2,TbMenu3 } from "react-icons/tb";
import { Link } from "react-router-dom";


export default function Navbar() {

  let [showMenu,setShowMenu]=useState(false)
  
  return (
    <header className="w-full bg-white fixed top-0 right-0 left-0 shadow-lg">
      {/* This is the centered container */}
      {/* <nav className="max-w-[1400px] mx-auto md:h-[14vh] h-[12vh] flex justify-between 
      items-center px-10 fixed top-0 left-0 w-full bg-white shadow-md relative z-50 ..."> */}
        
      <nav className="max-w-[1400px] mx-auto md:h-[14vh] h-[12vh] flex justify-between 
items-center px-10 w-full bg-white z-50">

      
        {/* Logo */}
        <Link to='/' className="text-3xl font-semibold">
          Gr<span className="text-orange-500 uppercase">o</span>cify
        </Link>

        {/* Menu */}
        <ul className="md:flex text-lg items-center gap-x-15 hidden">
          <li><Link to='/' className="font-semibold tracking-wide text-orange-500">Home</Link></li>
         
          <li><Link to='/about' className="font-semibold tracking-wide hover:text-orange-500">About Us</Link></li>
         
          <li><Link to='/sourcing' className="font-semibold tracking-wide hover:text-orange-500">Our Sourcing</Link></li>
          
          <li><Link to='/contact' className="font-semibold tracking-wide hover:text-orange-500">Contact Us</Link></li>
        </ul>

        {/* Nav Action */}
        <div className="flex items-center gap-x-5">
          <div className="md:flex  p-1 border-2 border-orange-500 rounded-full hidden" >
            <input type="text" name="text" id="text" placeholder="Search..." autoComplete="off" className="flex-1 h-[5vh] px-3 focus:outline-none">
            </input>
            <button className="
  bg-gradient-to-r 
  from-red-600 
  to-orange-500 
  text-white 
  w-10 h-10 
  flex justify-center items-center 
  rounded-full 
  text-xl
">
 <IoSearch />

</button>
          </div>
<a href="#" className="text-zinc-800 text-2xl"> <GoHeartFill />
</a>
       
<a href="#" className="text-zinc-800 text-2xl"> <HiShoppingBag />
</a>

<a href="#" className="text-zinc-800 text-3xl md:hidden" onClick={()=>setShowMenu(!showMenu)}> 
 {
  showMenu?
<TbMenu3 />
  :
<TbMenu2 />
 }
 

</a>
        </div>

   {/*Mobile Menu */}
        <ul className={`flex flex-col gap-y-12 bg-orange-500/15 backdrop-blur-xl rounded-lg  p-10 text-lg items-center gap-x-15 md:hidden absolute top-30 -left-full transform -translate-x-1/2 transition-all duration-500 ${showMenu?'left-1/2':""}`} >
          <li><a href="#" className="font-semibold tracking-wide text-orange-500">Home</a></li>
          <li><Link to='/about' className="font-semibold tracking-wide hover:text-orange-500">About Us</Link></li>
          <li><Link to='/sourcing' className="font-semibold tracking-wide hover:text-orange-500">Our Sourcing</Link></li>
          <li><Link to='/contact' className="font-semibold tracking-wide hover:text-orange-500">Contact Us</Link></li>
          <li className="flex  p-1 border-2 border-orange-500 rounded-full md:hidden" >
            <input type="text" name="text" id="text" placeholder="Search..." autoComplete="off" className="flex-1 h-[5vh] px-3 focus:outline-none">
            </input>
            <button    className="bg-gradient-to-r from-red-600 to-orange-500 text-white  w-10 h-10 flex justify-center items-center rounded-full  text-xl">
             <IoSearch />
             </button>
          </li>   
        </ul>
      </nav>
    </header>
  );
}
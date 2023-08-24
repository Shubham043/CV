import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="w-full flex py-6 justify-between items-center  navbar">
          <img src={close} alt="Dashboard" className="w-[124px] h-[32px]" />
          <ul className="list-none sm:flex hidden justify-between items-center">
          
            <li  className={`font-poppins font-normal text-[16px] mr-10 cursor pointer  text-gradient `}>
             <a href="/Connection"> Connection</a>
            </li>
            <li  className={`font-poppins font-normal text-[16px] mr-10 cursor pointer  text-gradient `}>
             <a href="/Profile"> Profile</a>
            </li>
            <li  className={`font-poppins font-normal mr-4 text-[16px]  cursor pointer  text-gradient `}>
            <a href="/SignIn"> logout</a>
            </li>
          
          </ul>
       <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu}
        alt="Menu"
        className="w-[28px] h-[28px] object-contain"
        onClick={()=>setToggle((prev)=> !prev)} />
        <div className={`${toggle ? 'flex' : 'hidden'} py-6 px-8 mx-4 my-2 absolute top-20 right-0 rounded-xl  bg-discount-gradient z-10`}>
             <ul className="list-none flex flex-1 flex-col justify-between items-center sidebar">
           
            <li  className={`font-poppins font-normal mb-4 text-[16px]  cursor pointer  text-white `}>
            <a href="/Connection"> Connection</a>
            </li>
            <li  className={`font-poppins font-normal mb-4 text-[16px]  cursor pointer  text-white `}>
            <a href="/Connection"> Connection</a>
            </li>
            <li  className={`font-poppins font-normal mb-4 text-[16px]  cursor pointer  text-white `}>
            <a href="/SignIn"> logout</a>
            </li>
          
          </ul>
        </div>
        </div> 
    </nav>

    
  )
}

export default Navbar;

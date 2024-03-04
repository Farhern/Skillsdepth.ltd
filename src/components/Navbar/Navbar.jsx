import React, { useState, useEffect } from 'react';
import { navLinks } from '../../Data';
import { HiMenuAlt1, HiX } from "react-icons/hi";
import MobileNavLinks from './MobileNavLinks';
import NavLink from './NavLink';
import { motion } from "framer-motion";
// import logo from "../../assets/logo.jpg";
import skilldepth from "../../assets/skilldepth.png";
import { Outlet } from 'react-router-dom';

 const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);
  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);
   return (
     <>
        <div
      className={`${
        active ? "shadow-lg bg-white" : ""
      } fixed w-full top-0 left-0 z-20`}
    >
       <div>
       <div
          className={`${
            active ? "py-2 transition-all duration-300" : "py-4"
          } container  mx-auto flex items-center justify-between px-2`}
        >
             <div className='flex items-center gap-4'>
             <HiMenuAlt1 className='text-3xl sm:hidden cursor-pointer' 
             onClick={() => setToggle(true)} />
             <a href="/">
             <div className='text-xl ml-7 cursor-pointer'>
                 <img 
                 className='w-20 h-10'
                 src={skilldepth} 
                 alt="" 
                 />
             </div>
             </a>
             </div>
             <div className='sm:flex items-center hidden'>
                 {navLinks.map((navLink) => {
                     return <NavLink key={navLink.id} {...navLink} />;
                 })}
             </div>
             <a href="/courses">
             <button className="py-2 px-4 font-bold text-sm border border-solid border-teal-500 hover:bg-teal-500 duration-300 ease-in-out rounded-lg border-gray">
                Courses
             </button>
             </a>
             {toggle && (
             <motion.div
               initial={{ x: -500, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.3 }}
               className="fixed h-full w-96 top-0 left-0 z-20 bg-teal-800 text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8"
             >
               {navLinks.map((navLink) => {
                 return (
                   <MobileNavLinks
                     key={navLink.id}
                     {...navLink}
                     setToggle={setToggle}
                   />
                 );
               })}
               <HiX
                 className="absolute right-12 top-12 text-3xl cursor-pointer"
                 onClick={(prev) => setToggle(!prev)}
               />
             </motion.div>
           )}
         </div>
       </div>
     </div>

    <Outlet />
   </>

  )
}

export default Navbar;




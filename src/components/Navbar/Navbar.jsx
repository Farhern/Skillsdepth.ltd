import React, { useState, useEffect } from 'react';
import { navLinks } from '../../Data';
import { HiMenuAlt1, HiX } from "react-icons/hi";
import MobileNavLinks from './MobileNavLinks';
import NavLink from './NavLink';
import { motion } from "framer-motion";
// import { Link } from 'react-scroll';
import { Link, Outlet } from 'react-router-dom';

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
        <div className='fixed w-full top-0 left-0 z-20'>
      <div>
        <div className='container mx-auto py-4 flex items-center justify-between px-2'>
            <div className='flex items-center gap-4'>
            <HiMenuAlt1 className='text-3xl sm:hidden cursor-pointer' onClick={() => setToggle(true)} />
            <Link to="/">
            <div className='text-xl text-teal-500 uppercase tracking-wide font-bold cursor-pointer'>
                AdvancedSkills Hub
            </div>
            </Link>
            </div>
            <div className='sm:flex items-center hidden'>
                {navLinks.map((navLink) => {
                    return <NavLink key={navLink.id} {...navLink} />;
                })}
            </div>
            <button className="py-2 px-4 font-bold text-sm border border-solid rounded-lg border-gray">
               Sign Up
            </button>
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

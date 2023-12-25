import React from 'react'
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
    initial={{ height: 0 }}
      whileInView={{ height: "auto" }}
      transition={{ duration: 1 }}
      className="bg-teal-500 p-10"
    >
      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white">
        <div>
          <div className="font-bold mb-6">Get Started</div>
          <p className="text-sm leading-7">
          We are a premier training institute dedicated to providing high-quality, industry-relevant programs that equip learners with the knowledge, skills, and confidence they need to thrive in their chosen fields.


          </p>
        </div>
        <div>
          <div className="font-bold mb-6">Services</div>
          <div className="flex flex-col gap-4">
            <a href="/" className="text-sm hover:underline">
              Courses
            </a>
            <a href="/" className="text-sm hover:underline">
              Training
            </a>
            <a href="/" className="text-sm hover:underline">
              {" "}
              Consultancy
            </a>
            <a href="/" className="text-sm hover:underline">
              Team Expertise
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Company</div>
          <div className="flex flex-col gap-4">
            <a href="/" className="text-sm hover:underline">
              Privacy Policy
            </a>
            <a href="/" className="text-sm hover:underline">
              Sitemap
            </a>
            <a href="/" className="text-sm hover:underline">
              Careers
            </a>
            <a href="/" className="text-sm hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Follow us</div>
          <div className="text-sm mb-4">P.O BOX 328-70100, GARISSA</div>
          <div className="text-sm mb-4">SKILLSEDGETRAININGLTD@GMAIL.COM</div>
          <div className="text-sm">TEL NO. 0722718510/0722231522</div>
          <div className="flex gap-4 mt-4">
            <a href="/" className="hover:scale-110 text-xl">
              <BsFacebook />
            </a>
            <a href="/" className="hover:scale-110 text-xl">
              <BsInstagram />
            </a>
            <a href="/" className="hover:scale-110 text-xl">
              <BsTwitter />
            </a>
            <a href="/" className="hover:scale-110 text-xl">
              <BsPinterest />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
    
  )
}

export default Footer

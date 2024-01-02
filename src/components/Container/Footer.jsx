import React from 'react'
import map from "../../assets/maps-and-flags.svg";
import telephone from "../../assets/telephone.svg";
import envelope from "../../assets/envelope.svg";
import calender from "../../assets/calendar.svg";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";


const Footer = () => {
  return (
        <div className='w-full h-[80vh] md:h-[350px] bg-teal-500' id='contact'>
          <div  className='max-w-[1100px] mx-auto pt-7 md:flex items-center justify-between'>
          
            <div className=''>
                <h4><strong className='text-2xl'>General Contact</strong></h4>
                <p className='flex items-center text-sm tracking-widest'>
                  <img 
                     className='w-6 mt-6 mr-3'
                     src={map} 
                     alt="" 
                  /> <span className='mt-7'>70100 Garissa County. <br /> Township, Posta Road.</span>
                </p>
                <p className='flex items-center text-sm tracking-widest'>
                  <img 
                    className='w-6 mt-6 mr-3'
                    src={telephone} 
                    alt="/" 
                  />
                    <span className='mt-5'>0722718510/0722231522</span>
                </p>
                <p className='flex items-center text-sm tracking-widest'>
                  <img 
                    className='w-6 mt-6 mr-3'
                    src={envelope} 
                    alt="/" 
                  />
                    <span className='mt-5'>Skillsedgetrainingltd@gmail.com</span>
                </p>
                <p className='flex items-center'>
                  <img 
                    className='w-6 mt-6 mr-3'
                    src={calender} 
                    alt="/" 
                  />
                    <span className='mt-5'>Monday - Friday : 9:00 AM to 5:00 PM</span>
                </p>
            </div>
            <div className='md:-mt-[130px] mt-8 leading-10'>
              <h4 className=''><strong className='text-2xl md:ml-[170px] mb-4'>We are Social</strong> <br /> <span className='trackin-widest text-2xl mt-3'>Stay Connected with us for Notices & Updates</span></h4>
              <div>


              <div className="flex gap-6 mt-4 md:ml-[150px]">
                <a href="/" className="hover:scale-110 text-4xl">
                  <BsFacebook className='' />
                </a>
                <a href="/" className="hover:scale-110 text-4xl">
                  <BsInstagram />
                </a>
                <a href="/" className="hover:scale-110 text-4xl">
                  <BsTwitter />
                </a>
                <a href="/" className="hover:scale-110 text-4xl">
                  <BsLinkedin />
               </a> 
          </div>

              </div>
            </div>
          </div>
        </div>
        // <div>
        //   <div className="font-bold mb-6">Follow us</div>
        //   <div className="text-sm mb-4">P.O BOX 328-70100, GARISSA</div>
        //   <div className="text-sm mb-4">SKILLSEDGETRAININGLTD@GMAIL.COM</div>
        //   <div className="text-sm">TEL NO. 0722718510/0722231522</div>
        //   <div className="flex gap-4 mt-4">
        //     <a href="/" className="hover:scale-110 text-xl">
        //       <BsFacebook />
        //     </a>
        //     <a href="/" className="hover:scale-110 text-xl">
        //       <BsInstagram />
        //     </a>
        //     <a href="/" className="hover:scale-110 text-xl">
        //       <BsTwitter />
        //     </a>
        //     <a href="/" className="hover:scale-110 text-xl">
        //       <BsPinterest />
        //     </a>
        //   </div>
        //  </div>
  )
}

export default Footer;

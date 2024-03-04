import React from 'react';
import home from "../../assets/home.png";

const Home = () => {
  return (
    <div className='container'>
      <div className='section' id='home'>
        <div className='md:flex items-center justify-center'>
          <div>
            <div className='font-bold text-xs text-teal-500 mb-4'>
              {" "}
              Your learning partner
            </div>
            <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
              Providing <br /> modern and practical <br /> training solutions
            </div>
            <p className='text-sm leading-7 text-gray-500 max-w-sm'>
            Skillsdepth is
            dedicated to creating a positive impact by nurturing the skills and talents of the next generation of
            professionals.
            </p>
            <div className='mt-6'>
              <a href="/home#about us">
              <button className="px-6 py-3 font-bold hover:shadow-lg hover:bg-teal-500 hover:text-black border border-teal-500 duration-300 ease-in-out rounded-lg mr-4 text-sm">
                Learn More
                </button>
              </a>
            </div>
          </div>
          <div  className='md:w-[60%] mt-5'>
            <img 
              className='rounded-sm md:ml-10' 
              src={home} alt="/" 
            />
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Home;

import React from 'react';
import about from "../../assets/About.jpg";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='section' id='about us'>
      <div className='grid md:grid-cols-2 gap-8'>
        <div className='border-[3px] border-solid border-teal-500 rounded-lg'>
            <img src={about} alt="/" className='p-4' />
        </div>
        <div>
          <div>
            <h1 className='font-bold text-xl text-center mb-3'>INTRODUCTION</h1>
            <p className='text-sm mb-2 text-gray-700 leading-7'>
            <span className='font-bold text-black'>AdvancedSkills Hub</span> is a forward-thinking training institution dedicated to providing
            modern and practical training solutions. It caters to young and aspiring professionals,
            offering them the tools and knowledge necessary to excel in a rapidly evolving global
            landscape. <span className='font-bold text-black'>AdvancedSkills Hub</span> is dedicated to creating a positive impact by nurturing
            the skills and talents of the next generation of professionals, and by doing so,
            contributing to the development of the workforce and the economy in Kenya and the
            region.
            </p>
            <Link to="/aboutpage">
            <button className="py-3 px-6 text-sm border border-solid border-gray-500 mt-3 rounded-lg font-bold hover:bg-teal-500 duration-100 ease-in-out">
            Know More
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;

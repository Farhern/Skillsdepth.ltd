import React from 'react';
import about from "../../assets/About.jpg";

const About = () => {
  return (
    <div className='section' id='about us'>
      <div className='grid lg:grid-cols-2 gap-8'>
        <div className='border-[3px] border-solid border-teal-500 rounded-lg'>
            <img src={about} alt="/" className='p-4' />
        </div>
        <div>
          <div>
            <h1 className='font-bold text-xl text-center mb-2'>INTRODUCTION</h1>
            <p className='text-sm mb-2 text-gray-500'>
            <span className='font-bold'>AdvancedSkills Hub</span> is a forward-thinking training institution dedicated to providing
            modern and practical training solutions. It caters to young and aspiring professionals,
            offering them the tools and knowledge necessary to excel in a rapidly evolving global
            landscape. <span className='font-bold'>AdvancedSkills Hub</span> is dedicated to creating a positive impact by nurturing
            the skills and talents of the next generation of professionals, and by doing so,
            contributing to the development of the workforce and the economy in Kenya and the
            region.
            </p>
            <h1 className='font-bold text-xl text-center mb-2'>VISION</h1>
            <p className='text-sm mb-2'>
            Our vision is to become the preferred training provider in Kenya and the region. We
            aim to be the go-to institution for individuals seeking high-quality training and
            development opportunities.
            </p>
            <h1 className='font-bold text-xl text-center mb-2'>MISION</h1>
            <p className='text-sm mb-2'>
            Our mission is to address the skills gap within the country's workforce and provide
            solutions to real-world challenges. We achieve this through rigorous research and the
            delivery of cutting-edge training and consultancy services. Our commitment is to
            empower individuals and organizations with the skills and knowledge needed for
            success.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;

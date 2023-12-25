import React from 'react';
import courses from "../../assets/courses.jpg";

const Courses = () => {
  return (
    <div className='section' id='courses'>
      <div className='sm:flex mx-auto mb-10'>
        <div className='text-center'>
            <img 
            className='w-[270px] h-[320px] rounded-l shadow-0 lg:shadow-md bg-white rounded-lg p-4'
            src={courses} 
            alt="" 
            />
        </div>
        <div className='ml-10'>
            <button className='px-3 py-2 mb-4 font-semibold bg-gray-400 rounded-full focus:outline-none border-0'>
                4 Courses
            </button>
            <h3 className='mb-4 font-bold text-3xl text-teal-500 leading-7'>
               Ignite Your Potential with Skillsedge: Dive into our Masterful Courses!
            </h3>
            <p className='leading-7 text-gray-500'>
            Our courses are meticulously crafted by industry veterans, packed with practical insights, and delivered in engaging formats that make learning a joy.
            </p>
        </div>
        <br></br>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-[100px] shadow-lg'>
        <div  className='py-[200px] bg-slate-500'>
            <h1>CERTIFIED HUMAN RESOURCE PROFESSIONAL(CHRP)</h1>
        </div>
        <div  className='py-[200px] bg-slate-500'>
            <h1>CERTIFIED HUMAN RESOURCE PROFESSIONAL(CHRP)</h1>
        </div>
      </div>
    </div>
  )
}

export default Courses

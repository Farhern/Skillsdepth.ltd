import React from 'react';
import courses1 from "../../assets/courses1.jpg";
import courses2 from "../../assets/courses2.jpg";
import courses3 from "../../assets/courses3.jpg";
import courses4 from "../../assets/courses4.jpg";
import courses5 from "../../assets/courses5.jpg";
import courses6 from "../../assets/courses6.jpg";
import Copyright from '../Container/Copyright';

const Courses = () => {
  return (
    <>
    <div className='section' id='courses'>
      <div className='max-w-[700px] mx-auto mb-10'>
        <div>
            <h3 className='mb-4 font-bold text-3xl text-teal-500 leading-7'>
               Ignite Your Potential with Skillsedge: Dive into our Masterful Courses!
            </h3>
            <p className='leading-7 text-gray-500'>
               Whether you're a seasoned professional seeking to refine your expertise or 
               a curious beginner embarking on a new journey, <span className='font-bold'>Skillsdepth</span> has something for you. 
               Our courses are meticulously crafted by industry veterans, packed with practical insights, 
               and delivered in engaging formats that make learning a joy.
            </p>
        </div>
      </div>

      <br></br>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      <div>
      <div  className='py-[10px] text-center shadow-xl shadow-gray-400 rounded-md'>
            <div>
                <img 
                   className='md:w-[575px] h-[300px] w-[500px] md:ml-3 mt-0 rounded-md'
                  src={courses1} 
                  alt="/" 
                />
            </div>
            <h1 className='font-bold mt-3'>
                1. CERTIFIED HUMAN RESOURCE PROFESSIONAL(CHRP)
            </h1>
            <p className='ml-3 mr-3 text-sm leading-7 text-gray-600'>
            The Certified Human Resource Professional course is designed to equip individuals with
            competences and knowledge required by human resource professionals for effective job
            performance in both public and private sectors. It reflects the employers' demand for qualified
            personnel to manage the human resource function in a dynamic and competitive environment.
            </p>
            <div className='mt-5 mb-5'>
                <button className='bg-teal-500 rounded-md hover:bg-teal-600 hover:shadow-lg py-2 px-4 duration-300 ease-in-out cursor-pointer'>
                    Read PDF
                </button>
            </div>
        </div>
      </div>

      <div  className='py-[10px] text-center shadow-xl shadow-gray-400 rounded-md'>
             <div className='mt-0'>
                <img 
                   className='md:w-[575px] h-[300px] w-[500px] md:ml-3 mt-0 rounded-md'
                  src={courses2} 
                  alt="/" 
                />
             </div>
            <h1 className='font-bold mt-3'>
                2. CERTIFIED INFORMATION SYSTEMS SUPPORT EXPERT (CISSE)
            </h1>
            <div className='text-gray-600 text-sm mt-2'>
            <p className='text-sm mb-3 text-gray-800'>
                The course imparts knowledge, skills, values and attitudes to, among other competencies:
            </p>
            <ul className='max-w-[225px] sm:max-w-[450px] mx-auto list-disc'>
                <li>
                    <p className='list-disc -ml-[22px] sm:-ml-[90px]'>
                    Develop information systems solutions for a business.
                    </p>
                </li>
            </ul>
            <ul className='max-w-[225px] sm:max-w-[450px] mx-auto list-disc'>
                <li>
                    <p className='list-disc -ml-[3px] sm:-ml-[60px]'>
                    Design and operationalize database management systems.
                    </p>
                </li>
            </ul>
            <ul className='max-w-[225px] sm:max-w-[450px] mx-auto list-disc'>
                <li>
                    <p className='list-disc -ml-[4px] sm:-ml-[70px]'>
                    Design, configure and trouble shoot computer networks.
                    </p>
                </li>
            </ul>
            <ul className='max-w-[225px] sm:max-w-[450px] mx-auto list-disc'>
                <li>
                    <p className='list-disc -ml-[70px] sm:-ml-[275px]'>
                       Implement ICT projects.
                    </p>
                </li>
            </ul>
            <ul className='max-w-[225px] sm:max-w-[450px] mx-auto list-disc'>
                <li>
                    <p className='list-disc -ml-[30px] sm:-ml-[240px]'>
                    Manage and analyse big data.
                    </p>
                </li>
            </ul>
            </div>
            <div className='mt-5'>
                <button className='bg-teal-500 rounded-md hover:bg-teal-600 hover:shadow-lg py-2 px-4 duration-300 ease-in-out cursor-pointer'>
                    Read PDF
                </button>
            </div>
        </div>
      
     
        <div  className='py-[10px] text-center shadow-xl shadow-gray-400 rounded-md'>
            <div className='mt-0'>
                <img 
                   className='md:w-[575px] h-[300px] w-[500px] md:ml-3 mt-0 rounded-md'
                  src={courses3} 
                  alt="/" 
                />
            </div>
            <h1 className='font-bold mt-3'>
                3. CERTIFIED PROCUREMENT AND SUPPLY PROFESSIONAL OF KENYA 
            </h1>
            <p className='ml-3 mr-3 text-sm leading-7 text-gray-600'>
                The course is designed to equip trainees with knowledge, practical skills and attitudes that will
                enable him/her perform duties as a buyer, Supply Chain manager, supervisor and/or director in
                an organization. To achieve this, units such as, Asset Management and Managerial Accounting
                Finance in Supply Chain Management, Leadership and Governance and Public Private
                Partnerships are on offer, in addition to core Supply Chain Management subjects. The entire
                program comprises three parts including an industry-based learning.
            </p>
            <div className='mt-5 mb-5'>
                <button className='bg-teal-500 rounded-md hover:bg-teal-600 hover:shadow-lg py-2 px-4 duration-300 ease-in-out cursor-pointer'>
                    Read PDF
                </button>
            </div>
        </div>

        <div  className='py-[10px] text-center shadow-xl shadow-gray-400 rounded-md'>
             <div className='mt-0'>
                <img 
                   className='md:w-[575px] h-[300px] w-[500px] md:ml-3 mt-0 rounded-md'
                  src={courses4} 
                  alt="/" 
                />
             </div>
            <h1 className='font-bold mt-3'>
                4. CERTIFIED SECRETARY
            </h1>
            <div className='text-gray-600 text-sm mt-2'>
            <p className='text-sm mb-3 text-gray-800'>
                The course imparts knowledge, skills, values and attitudes to, among other competencies:
            </p>
            <ul className='max-w-[220px] sm:max-w-[450px] mx-auto list-disc'>
                <li>
                    <p className='list-disc -ml-[px]'>
                    practice and promote principles of good governances within public and private entities.
                    </p>
                </li>
            </ul>
            <ul className='max-w-[220px] sm:max-w-[450px] mx-auto list-disc'>
                <li>
                    <p className='list-disc sm:-ml-[px]'>
                    Implement and comply with legal, regulatory and ethical requirements in practice.
                    </p>
                </li>
            </ul>
            <ul className='max-w-[220px] sm:max-w-[450px] mx-auto list-disc'>
                <li>
                    <p className='list-disc -ml-[35px] sm:-ml-[90px]'>
                    Ensures proper conduct and management of meetings.
                    </p>
                </li>
            </ul>
            <ul className='max-w-[220px] sm:max-w-[450px] mx-auto list-disc'>
                <li>
                    <p className='list-disc -ml-[8px] sm:-ml-[5px]'>
                    Undertake consultancy and advisory services in corporate secretarial and related practices.
                    </p>
                </li>
            </ul>
            <ul className='max-w-[220px] sm:max-w-[450px] mx-auto list-disc'>
                <li>
                    <p className='list-disc sm:-ml-[250px]'>
                    Manage boardroom dynamics.
                    </p>
                </li>
            </ul>
            <ul className='max-w-[220px] sm:max-w-[450px] mx-auto list-disc'>
                <li>
                    <p className='list-disc -ml-[20px] sm:-ml-[155px]'>
                    Undertake governance and compliance audit.
                    </p>
                </li>
            </ul>
            </div>
            <div className='mt-5'>
                <button className='bg-teal-500 rounded-md hover:bg-teal-600 hover:shadow-lg py-2 px-4 cursor-pointer duration-300 ease-in-out shadow-gray-500'>
                    Read PDF
                </button>
            </div>
        </div>


        <div  className='py-[10px] text-center shadow-xl shadow-gray-400 rounded-md'>
      <div className='mt-0'>
                <img 
                   className='md:w-[575px] h-[300px] w-[500px] md:ml-3 mt-0 rounded-md'
                  src={courses5} 
                  alt="/" 
                />
            </div>
            <h1 className='font-bold mt-3'>
                4. CERTIFIED PUBLIC ACCOUNTANT
            </h1>
            <p className='ml-3 mr-3 text-sm leading-7 text-gray-600'>
            CPA certification is intended for those students who wish to qualify and work as professional
            accountants, auditors, finance managers, tax specialists and financial consultants.
            </p>
            <div className='mt-5 mb-5'>
                <button className='bg-teal-500 hover:bg-teal-600 hover:shadow-lg rounded-md py-2 px-4 duration-300 ease-in-out cursor-pointer'>
                    Read PD
                </button>
            </div>
        </div>

        <div  className='py-[10px] text-center shadow-xl shadow-gray-400 rounded-md'>
      <div className='mt-0'>
                <img 
                   className='md:w-[575px] h-[300px] w-[500px] md:ml-3 mt-0 rounded-md'
                  src={courses6} 
                  alt="/" 
                />
            </div>
            <h1 className='font-bold mt-3'>
                 REVISION CLASSES FOR THE EXIMANITIONS
            </h1>
            <p className='ml-3 mr-3 text-sm leading-7 text-gray-600'>
                 We are committed to providing our students with the best possible support to help them succeed
                in their professional exams. These revision classes will provide students with the opportunity to
                review key concepts, practice exam questions, and receive personalized feedback from
                experience instructors.
            </p>
            <div className='mt-5 mb-5'>
                <button className='bg-teal-500 hover:bg-teal-600 hover:shadow-lg rounded-md py-2 px-4 duration-300 ease-in-out cursor-pointer'>
                    Read PDF
                </button>
            </div>
        </div>

     </div>
    </div>
    <Copyright />
    </>
  )
}

export default Courses;

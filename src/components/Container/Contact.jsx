import React from 'react';
import map from "../../assets/maps-and-flags.svg";
import envelope from "../../assets/envelope.svg";
//import TextField from '@mui/material/TextField';

const Contact = () => {
  const iframeStyle = {
    border: '0',
  };


  return (
    <div className='section' id='contact'>
       <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className=''>
          <div>
              <img 
                className='w-[90px] h-[50px] ml-[100px] sm:ml-[200px] md:ml-[250px] mb-4'
                src={map} 
                alt="/" 
              />
              
               <p>
                   <iframe
                   className='rounded-md max-w-[280px] sm:max-w-[320px] lg:max-w-[760px]'
                     src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15958.770623833729!2d39.6436569!3d-0.4547454!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18204b5dc640f70f%3A0xe6754d0ccf40ee7!2shilac%20plaza!5e0!3m2!1sen!2ske!4v1703749371588!5m2!1sen!2ske"
                     width="600"
                     height="470"
                     style={iframeStyle}
                     allowFullScreen=""
                     title="Google Maps"
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                     ></iframe>
               </p>
          </div>
        </div>

        <div className='text-center rounded-md max-w-[280px] sm:max-w-[350px] lg:max-w-[760px]'>
          
              <p>
                <img  
                  className='w-[90px] h-[50px] ml-[100px] sm:ml-[300px] md:ml-[250px] mb-2'
                  src={envelope} 
                  alt="/" 
                />
              </p>
          
          
          <div className='text-center rounded-md shadow-xl shadow-gray-400'>
            <h4 className='font-semibold mb-4'>Send Us a message</h4>
            <form action='mailto:skillsedgetrainingltd@gmail.com' method='POST' encType='text/plain'>
            <div className='md:flex items-center'>
                <div className='mb-[40px] w-10 ml-3 sm:mb-0 md:w-1/2'>
                <input 
                     className="border-b-2 border-gray-600 sm:w-[150px] md:w-[140px] focus:border-teal-500 outline-none"
                     type='text'
                     name='name'
                     placeholder="First name" 
                     required 
                  />
                </div>

                <div class="w-10 ml-3 mt-6 md:m-2 md:w-1/2">
                   <input 
                      className="border-b-2 border-gray-600 sm:w-[150px] md:w-[140px] focus:border-teal-500 outline-none"
                      type='text'
                     name='name' 
                      placeholder="Other name" 
                      required
                    />
                </div>
            </div>

          <div className='md:flex mt-[60px]'>
            <div class="mb-[40px] sm:mb-[25px] w-10 ml-3 md:w-1/2">
                      <input 
                         className="border-b-2 border-gray-600 sm:w-[150px] md:w-[140px] focus:border-teal-500 outline-none" 
                         placeholder="Location" 
                         required 
                      />
                </div>
                <div class="w-10 ml-2 md:w-1/2">
                      <input 
                         className="border-b-2 border-gray-600 sm:w-[150px] md:w-[140px] focus:border-teal-500 outline-none" 
                         placeholder="Phone" 
                         required 
                      />
                </div>
              </div>
            
              <br />
              <div className='mt-[50px] sm:mt-[10px]'>
                  <div class="m-1 md:m-6">
                          <input 
                             className="border-b-2 w-full border-gray-600 focus:border-teal-500 outline-none" 
                             placeholder="Email" 
                             type='email'
                             required 
                          />
                  </div>
              </div>

              <br />
              <div className='mt-[40px] sm:mt-[30px]'>
                  <div class="m-1 md:m-6">
                          <input 
                             className="border-b-2 w-full border-gray-600 focus:border-teal-500 outline-none"
                             type="text"
                             name='message' 
                             placeholder="Message"
                             required 
                          />
                  </div>
              </div>
            </form>

              <br />

              <div class="text-center">
                <a mat-flat-button 
                className='py-3 px-6 text-sm border border-solid border-teal-500 mb-3 rounded-lg font-bold hover:bg-teal-500 duration-300 ease-in-out'
                href="mailto: Skillsedgetrainingltd@gmail.com?subject=Application" 
                type="submit"
                value="send"
                >
                  Send Message
                </a>
              </div>

          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Contact;




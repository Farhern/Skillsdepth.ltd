import React from 'react';
import map from "../../assets/maps-and-flags.svg";
import envelope from "../../assets/envelope.svg";

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
                className='w-[90px] h-[50px] ml-[130px] sm:ml-[250px] mb-4'
                src={map} 
                alt="/" 
              />
              
               <p>
                   <iframe
                   className='rounded-md max-w-[768px]'
                     src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15958.770623833729!2d39.6436569!3d-0.4547454!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18204b5dc640f70f%3A0xe6754d0ccf40ee7!2shilac%20plaza!5e0!3m2!1sen!2ske!4v1703749371588!5m2!1sen!2ske"
                     width="600"
                     height="450"
                     style={iframeStyle}
                     allowFullScreen=""
                     title="Google Maps"
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                     ></iframe>
               </p>
               
          </div>
        </div>
        <div>
          <img 
             className='w-[90px] h-[50px] ml-[130px] sm:ml-[250px] mb-4'
             src={envelope} 
             alt="/" 
          />
          <div className='text-center shadow-xl shadow-gray-400 mb-5'>
            <h5 className='font-semibold'>Send Us a message</h5>
            <div className='flex items-center'>
            <div class="md:w-1/2">
                <mat-form-field>
                  <input 
                     className="border-b-2 border-gray-600 focus:border-teal-500 outline-none"
                     matInput 
                     placeholder="First name" 
                     required 
                  />
                </mat-form-field>
            </div>
            <div class="md:w-1/5">
                 <mat-form-field>
                   <input 
                      className="border-b-2 border-gray-600 focus:border-teal-500 outline-none"
                      matInput 
                      placeholder="Other name" 
                    />
                 </mat-form-field>
            </div>
            </div>
            
            <div className='flex items-center mt-[70px] max-w-[700px]'>
            <div class="md:w-1/2">
                <mat-form-field>
                  <input 
                     className="border-b-2 border-gray-600 focus:border-teal-500 outline-none"
                     matInput 
                     placeholder="Location" 
                     required 
                  />
                </mat-form-field>
            </div>
            <div class="md:w-1/5">
                 <form>
                   <input 
                      className="border-b-2 border-gray-600 focus:border-teal-500 outline-none"
                      matInput 
                      placeholder="Phone Number" 
                    />
                 </form>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;




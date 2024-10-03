import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { allservices } from '../src/export';
import '../src/services.css';

const Services = () => {
  return (
    <div id='services' className='w-full h-full bg-white px-4 sm:px-6'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='m-auto flex flex-col justify-between items-center gap-[20px] py-[40px] sm:py-[80px]'
      >
        <motion.h1 variants={slideUpVariants} className='text-yellow-500 text-xl sm:text-2xl'>
          SPECIAL OFFER
        </motion.h1>
        <motion.h1 variants={slideUpVariants} className='text-black uppercase text-2xl sm:text-[40px] font-bold text-center'>
          OUR BEST SERVICES 
        </motion.h1>
        <motion.div variants={slideUpVariants} className='w-[120px] h-[6px] bg-yellow-500' />
        <motion.div
          initial="hidden" 
          whileInView="visible"
          variants={zoomInVariants}
          className='w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-start gap-[20px]'
        >
          {
            allservices.map((item) => (
              <motion.div
                key={item.id}
                className='service-card flip-card flex justify-center items-start border-gray-200 rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl mt-[20px] sm:mt-[40px]'
              >
                {/* Flip card inner */}
                <div className="flip-card-inner border-[5px] ">
                  {/* Front of the card */}
                  <div className="flip-card-front flex gap-5">
                    <img 
                      src={item.icon} 
                      alt={`${item.title} icon`} 
                      className='w-[80px] sm:w-[100px] rounded-lg p-2'
                    />
                    <div className='flex flex-col justify-center items-start gap-1 sm:gap-3'>
                      <h1 className='text-lg sm:text-xl font-bold text-black pb-2'>{item.title}</h1>
                      <p className='text-[16px] sm:text-[18px] text-justify pr-2'>{item.about}</p>
                    </div>
                  </div>
                  
                  {/* Back of the card */}
                  <div className="flip-card-back flex justify-center items-center">
                    <img src={item.backImage} alt="Service Image" className="w-full h-full object-cover " />
                  </div>
                </div>
              </motion.div>
            ))
          }
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Services;

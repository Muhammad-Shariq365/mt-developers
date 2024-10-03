import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { planning } from '../src/export';

const Services = () => {
  return (
    <div id='services' className='w-full bg-white px-4 sm:px-6'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className=' m-auto  flex flex-col justify-between
        items-center gap-[20px] py-[80px]'
      >
        <motion.h1
          variants={slideUpVariants}
          className='text-yellow-500 text-2xl'
        >
          STEP BY STEP
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className='text-black  uppercase text-[40px] font-bold text-center  '
        >
          HOW WE WORK
        </motion.h1>
        <motion.div
          variants={slideUpVariants}
          className='w-[120px] h-[6px] bg-yellow-500'
        />
        <motion.div
          initial="hidden" 
          whileInView="visible"
          variants={zoomInVariants}
          className='w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-start gap-[20px] '
        >
          {
            planning.map((item, index) => (
              <div key={index} className='flex flex-col justify-center items-center
              gap-5 border-2 border-yellow-500 rounded-mg p-6 mt-[40px]'>
                <div>
                  <item.icon className='size-[80px] bg-yellow-500 hover:bg-black
                  hover:fill-white p-4 rounded-full cursor-pointer' />
                </div>
                 <h1 className='text-2xl font-bold uppercase'>{item.title}</h1>        
                 <p className='text-[20px] text-center text-gray-600'>{item.about}</p>
              </div>
                
            ))
          }
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Services;

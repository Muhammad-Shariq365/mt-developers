import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

const About = () => {
  return (
    <div
      className='w-100% m-auto py-[80px] flex lg:flex-row flex-col justify-between items-start gap-[50px] bg-gray-900  p-10 shadow-lg'
      id='about'
    >
      {/* Left Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[55%] w-full flex flex-col justify-center items-start gap-8'
      >
        <motion.h1
          variants={slideUpVariants}
          className='text-yellow-400 text-xl tracking-widest'
        >
          Welcome To
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className='text-white  text-[48px] font-bold leading-tight'
        >
        Moten Developers<br/>
        and Builders
        </motion.h1>
        <div className='w-[100px] h-[4px] bg-yellow-400 rounded-full'></div>
        <p className='text-xl italic text-gray-200 mt-6 leading-relaxed'>
          From concept to creation, we bring your dreams to life.
        </p>
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[45%] w-full flex flex-col justify-center items-start gap-8'
      >
        <p className='text-gray-300 text-lg leading-loose text-justify '>
        Moten Developers and Builders is a leading construction and development company committed to transforming visions into reality. With a rich history of delivering top-tier residential, commercial, and industrial projects, we take pride in our ability to merge innovation, quality, and sustainability. Our team of experienced architects, engineers, and builders works meticulously to create spaces that meet the highest standards of design and functionality. Whether it's developing modern homes or cutting-edge commercial complexes,
        </p>
        <motion.button
          variants={zoomInVariants}
          className='bg-yellow-500 hover:bg-white hover:text-black px-5 py-3.5 rounded-3xl text-black font-bold'
        >
          Learn More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;

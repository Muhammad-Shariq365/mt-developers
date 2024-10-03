import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import banglow4 from '../src/assets/banglow4.jpg';
import banglow5 from '../src/assets/banglow5.jpg';
import banglow6 from '../src/assets/banglow6.jpg';
import '../src/slider.css';

const Hero = () => {
  return (
    <div className='bg-black bg-opacity-40 relative w-full lg:h-[700px] h-fit m-auto pt-[60px] lg:pt-[0px] lg:px-[150px] px-[20px] flex justify-between items-center lg:flex-row flex-col lg:gap-5 gap-[50px]'>
      {/* Background Image Slideshow */}
      <div className='absolute inset-0 z-[-1]'>
        <div className='slideshow'>
          <div className='slide' style={{ backgroundImage: `url('${banglow4}')` }}></div>
          <div className='slide' style={{ backgroundImage: `url('${banglow5}')` }}></div>
          <div className='slide' style={{ backgroundImage: `url('${banglow6}')` }}></div>
        </div>
      </div>

      {/* Text and Buttons */}
      <div className="w-screen h-full p-8 rounded-lg">
        <motion.div
          initial='hidden'
          whileInView='visible'
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className='lg:w-[60%] w-full flex flex-col justify-center items-start lg:gap-4 gap-4 relative z-10 sm:mt-20'
        >
          <motion.h1 variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className='text-yellow-500 text-2xl'>
            WE ARE BUILDERS & DEVELOPERS
          </motion.h1>
          <motion.h1 variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className='text-white uppercase text-[40px] sm:text-[50px]  font-bold min-h-[120px] sm:min-h-[150px]'>
            <Typewriter
              words={['We will build your dream', 'Your vision, our mission']}
              loop={Infinity}
              
              
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </motion.h1>
          <div className='w-[120px] h-[6px] z-10'></div>
          <p className='text-white text-[20px] '>
            From designing modern living spaces to constructing innovative commercial properties, we turn visions into reality. 
            Our team of experts is dedicated to delivering exceptional results.
          </p>
          <p className='text-white text-[20px] mt-4'>
            With years of experience, we ensure quality and timely project completion that meets your expectations and beyond.
          </p>
          <motion.div
            initial='hidden'
            whileInView='visible'
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            className='flex justify-center items-center gap-5'
          >
            <motion.button
              className='bg-yellow-500 hover:bg-white hover:text-black px-5 py-3.5 rounded-lg text-black font-bold'
            >
              Reach us
            </motion.button>
          
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
import React from 'react';
import Slider from 'react-slick';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'; // Importing icons
import project1 from './assets/project1.jpg';
import project2 from './assets/project2.jpg';
import project3 from './assets/project3.jpg';
import project4 from './assets/project4.jpg';
import project5 from './assets/project5.jpg';
import project6 from './assets/project6.jpg';
import project7 from './assets/project7.jpg';
import project8 from './assets/project8.jpg';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../src/custom-slider.css';  // Assuming you put the custom CSS here

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-yellow-500 rounded-full w-12 h-12 flex items-center justify-center text-white hover:bg-yellow-600 transition z-10"
      style={{ left: '5px' }} // Adjusted to ensure visibility
    >
      <AiOutlineLeft size={24} /> {/* Using AiOutlineLeft icon */}
    </button>
  );
};

// Custom Next Arrow
const NextArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-yellow-500 rounded-full w-12 h-12 flex items-center justify-center text-white hover:bg-yellow-600 transition z-10"
      style={{ right: '5px' }} // Adjusted to ensure visibility
    >
      <AiOutlineRight size={24} /> {/* Using AiOutlineRight icon */}
    </button>
  );
};

const Portfolio = () => {
  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,  // Use custom prev arrow
    nextArrow: <NextArrow />,  // Use custom next arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div id='portfolio' className='w-full bg-gray-900'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='m-auto flex flex-col justify-between items-center gap-[20px] py-[80px]'
      >
        <motion.h1
          variants={slideUpVariants}
          className='text-yellow-500 text-2xl '
        >
          PORTFOLIO
        </motion.h1>
        
        <motion.h1 
          variants={slideUpVariants}
          className='text-white uppercase text-[40px] font-bold text-center'
        >
          OUR BEST PROJECTS
        </motion.h1>
        
        <motion.div
          variants={slideUpVariants}
          className='w-[120px] h-[6px] bg-yellow-500 '
        />
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className='w-full m-auto relative mt-[40px] overflow-hidden' // Make sure this container is relative
        >
          <Slider {...settings}>
            <div>
              <img src={project1} alt='project image' className='h-[500px] w-full' />
            </div>
            <div>
              <img src={project2} alt='project image' className='h-[500px] w-full' />
            </div>
            <div>
              <img src={project3} alt='project image' className='h-[500px] w-full' />
            </div>
            <div>
              <img src={project4} alt='project image' className='h-[500px] w-full' />
            </div>
            <div>
              <img src={project5} alt='project image' className='h-[500px] w-full' />
            </div>
            <div>
              <img src={project6} alt='project image' className='h-[500px] w-full' />
            </div>
            <div>
              <img src={project7} alt='project image' className='h-[500px] w-full' />
            </div>
            <div>
              <img src={project8} alt='project image' className='h-[500px] w-full' />
            </div>
          </Slider>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Portfolio;

import React, { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../src/carasoule.css'; // Import CSS file
import { slideUpVariants } from './animation';

const videos = [
  'https://www.youtube.com/embed/D6pW5Li8bjU', // Embed URL for the first YouTube Short
  'https://www.youtube.com/embed/lXsX_s_O3e4', // Embed URL for the second YouTube Short
  'https://www.youtube.com/embed/cbi7sT3mq1o'  // Embed URL for the third YouTube Short
];

const VideoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const iframeRef = useRef(null);

  const handleNext = () => {
    if (currentIndex < videos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    // Pause video when changing slides
    if (iframeRef.current) {
      iframeRef.current.contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        '*'
      );
    }
  }, [currentIndex]);

  return (
    <>
      <div id='testimonials' className='w-full border-none bg-gray-900'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className='m-auto flex flex-col justify-between items-center gap-[20px] pt-[80px] pb-[50px]'
        >
          <motion.h1
            variants={slideUpVariants}
            className='text-yellow-500 text-2xl'
          >
            TESTIMONIALS
          </motion.h1>
          <motion.h1
            variants={slideUpVariants}
            className='text-white uppercase text-[40px] font-bold text-center'
          >
            WHAT THEY SAY ABOUT US
          </motion.h1>
          <motion.div
            variants={slideUpVariants}
            className='w-[120px] h-[6px] bg-yellow-500'
          />
        </motion.div>

        <div className="video-slider flex items-center justify-center">
          <button
            className="nav-button prev-button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <FaChevronLeft />
          </button>
          <div className="iframe-container">
            <iframe
              ref={iframeRef}
              src={videos[currentIndex]}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={`video-${currentIndex}`}
            ></iframe>
          </div>
          <button
            className="nav-button next-button"
            onClick={handleNext}
            disabled={currentIndex === videos.length - 1}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoSlider;

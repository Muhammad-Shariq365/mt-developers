import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants } from './animation';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaWhatsapp, FaYoutube, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div id="contact" className="w-full bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[80%] w-[90%] m-auto flex flex-col items-center gap-[20px] py-[80px]"
      >
        {/* Heading Section */}
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl"
        >
          CONTACT US
        </motion.h1>
        
        <motion.h2 
          variants={slideUpVariants}
          className="text-black uppercase text-[40px] font-bold text-center"
        >
          Get in Touch
        </motion.h2>

        <motion.div
          variants={slideUpVariants}
          className="w-[120px] h-[6px] bg-yellow-500 mb-8"
        />

        {/* Contact Information and Form Section */}
        <div className="flex flex-col lg:flex-row w-full justify-between items-start gap-10">
          {/* Contact Information */}
          <div className="lg:w-1/2 w-full bg-gray-100 p-6 rounded shadow-md flex flex-col gap-10">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-yellow-500 w-7 h-7 mt-2" />
              <div>
                <p className="font-bold">Address:</p>
                <p>123 Your Street, Your City, Your Country</p>
              </div>
            </div>
            <div className="flex items-start gap-3 ">
              <FaPhoneAlt className="text-yellow-500 w-7 h-7 mt-2" />
              <div>
                <p className="font-bold">Phone:</p>
                <p>+1 (234) 567-890</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaEnvelope className="text-yellow-500 w-7 h-7 mt-2" />
              <div>
                <p className="font-bold">Email:</p>
                <p>contact@yourdomain.com</p>
              </div>
            </div>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={35} className="text-green-500" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={35} className="text-blue-600" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={35} className="text-red-600" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={35} className="text-red-600" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2 w-full bg-gray-100 p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
              <button
                type="submit"
                className="bg-yellow-500 text-white p-3 rounded hover:bg-yellow-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Map Section */}
     .<div className="w-full  ">
  <h3 className="text-black uppercase text-[40px] font-bold text-center">
    Our Location
  </h3>
  <motion.div
    variants={slideUpVariants}
    className="w-full  pt-8"
  >
    {/* Responsive Google Map */}
   <div>
   <div className="relative w-full h-[400px] sm:h-[300px] md:h-[500px] "> {/* Adjust heights as needed */}
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509193!2d144.9537363153199!3d-37.816279979751776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f13c1ab%3A0x5045675218ce6f3!2sMelbourne%20CBD%2C%20Melbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1610546042893!5m2!1sen!2sus"
    className="absolute top-0 left-0 w-full h-full"
    allowFullScreen=""
    loading="lazy"
    style={{ border: 0 }}
  ></iframe>
</div>

   </div>
  </motion.div>
</div>

      </motion.div>
    </div>
  );
};

export default ContactUs;

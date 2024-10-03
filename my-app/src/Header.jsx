import React, { useState } from "react";
import { MdClose } from "react-icons/md"; // Import the close icon
import logo from "../src/assets/md.png"; // Ensure the correct path to your logo

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <style jsx>{`
        .modal-enter {
          opacity: 0;
          transform: scale(0.95);
        }
        .modal-enter-active {
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.3s, transform 0.3s;
        }
        .modal-exit {
          opacity: 1;
          transform: scale(1);
        }
        .modal-exit-active {
          opacity: 0;
          transform: scale(0.95);
          transition: opacity 0.3s, transform 0.3s;
        }
        .mobile-menu-enter {
          opacity: 0;
          transform: translateY(-10px);
        }
        .mobile-menu-enter-active {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.3s, transform 0.3s;
        }
        .mobile-menu-exit {
          opacity: 1;
          transform: translateY(0);
        }
        .mobile-menu-exit-active {
          opacity: 0;
          transform: translateY(-10px);
          transition: opacity 0.3s, transform 0.3s;
        }
      `}</style>

<nav className="backdrop-blur-md bg-white bg-opacity-30 fixed w-full z-50">

        <div className="flex justify-between items-center px-4 py-3 md:px-8">
          {/* Logo */}
          <div className="text-black text-2xl font-bold flex items-center z-10">
            <img src={logo} alt="Logo" className="h-10" /> {/* Adjust height as needed */}
          </div>

          {/* Hamburger Menu for Small Screens */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="black"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* Links and Appointment Button for Large Screens */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-white hover:text-gray-300">Home</a>
            <a href="#about" className="text-white hover:text-gray-300">About</a>
            <a href="#services" className="text-white hover:text-gray-300">Services</a>
            <a href="#portfolio" className="text-white hover:text-gray-300">Portfolio</a>
            <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
            <button onClick={toggleModal} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-400 transition duration-300">
              Appointment
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={`md:hidden mobile-menu-enter mobile-menu-enter-active`}>
            <ul className="backdrop-blur-md bg-opacity-30 text-black px-4 py-2 space-y-2 flex flex-col items-center">
              <li><a href="/" className="block hover:text-gray-300">Home</a></li>
              <li><a href="#about" className="block hover:text-gray-300">About</a></li>
              <li><a href="#services" className="block hover:text-gray-300">Services</a></li>
              <li><a href="#portfolio" className="block hover:text-gray-300">Portfolio</a></li>
              <li><a href="#contact" className="block hover:text-gray-300">Contact</a></li>
              <li>
                <button onClick={toggleModal} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-400 transition duration-300">
                  Appointment
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Modal for Appointment Form */}
      {isModalOpen && (
        <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 modal-enter modal-enter-active`}>
          <div className="bg-white p-6 rounded shadow-lg w-11/12 md:w-1/3 relative">
            <button onClick={toggleModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
              <MdClose size={24} /> {/* Close Icon from react-icons */}
            </button>
            <h2 className="text-xl font-semibold mb-4">Schedule an Appointment</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input type="text" className="border border-gray-300 p-2 w-full" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone Number</label>
                <input type="tel" className="border border-gray-300 p-2 w-full" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Date</label>
                <input type="date" className="border border-gray-300 p-2 w-full" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Time</label>
                <input type="time" className="border border-gray-300 p-2 w-full" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea className="border border-gray-300 p-2 w-full" rows="3"></textarea>
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-400 transition duration-300">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

"use client"
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaBell } from 'react-icons/fa';
export default function Nav2(){

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  

    return (
        <nav className="bg-black shadow-md w-full">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">Fitzone</div>
  
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <div className="space-x-4 flex items-center text-[#EC7807] ">
              <a href="#" className="">Home</a>
              <a href="#" className="">About</a>
              <FaBell className="text-white cursor-pointer" />
              <img
                src="https://randomuser.me/api/portraits/men/30.jpg"
                alt="Profile"
                className="w-8 h-8 rounded-full border"
              />
            </div>
          </div>
  
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-800"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
  
        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white shadow-md absolute w-full left-0 top-full ${
            isMobileMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="flex flex-col space-y-4 py-4 px-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <a href="#" className="text-gray-800 hover:text-blue-500">Home</a>
            <a href="#" className="text-gray-800 hover:text-blue-500">About</a>
            <FaBell className="text-gray-800 hover:text-blue-500" />
            <img
              src="https://randomuser.me/api/portraits/men/30.jpg"
              alt="Profile"
              className="w-8 h-8 rounded-full border"
            />
          </div>
        </div>
      </nav>
    )
}

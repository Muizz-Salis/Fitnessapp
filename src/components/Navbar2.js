"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar2() {
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="bg-black bg-opacity-50 text-[#ec7807] shadow-lg relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[4px] before:bg-gradient-to-r before:from-black before:via-orange-500 before:to-black z-[9999]">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          {/* Logo with Link to Homepage */}
          <Link
            href={"/"}
            className=" mx-12 relative text-2xl text-white font-bold mb-4 "
          >
            FI{" "}
            <span className="bg-orange-500 text-white  rounded-tl-lg rounded-br-lg">
              t
            </span>{" "}
            ZONE.
          </Link>
          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Links on the Right */}
          <div
            className={`md:flex md:space-x-6 md:items-center ${
              isMenuOpen ? "block" : "hidden"
            } absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent z-10`}
          >
            <Link
              href="/programs"
              className={`block md:inline-block px-2 py-2 rounded-lg transition hover:text-white ${
                router.pathname === "/" ? "border-b-2 border-orange-500" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m1.95-5.15a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                />
              </svg>
            </Link>
            <Link
              href="/"
              className={`block md:inline-block px-2 py-2 rounded-lg transition hover:text-white ${
                router.pathname === "/" ? "underline" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block md:inline-block px-1 py-2 rounded-lg transition hover:text-white"
            >
              About
            </Link>

            <Link
              href="/notification"
              className="block md:inline-block px-1 py-2 rounded-lg transition hover:text-white"
            >
              <div className="relative inline-block">
                {/* Notification Bell Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14V10a6 6 0 10-12 0v4c0 .386-.149.75-.405 1.05L4 17h5m6 0a3 3 0 11-6 0"
                  />
                </svg>

                {/* Notification Badge */}
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  5 
                </span>
              </div>
            </Link>
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="focus:outline-none flex"
              >
                <img
                  src="/profile-picture.png"
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
                />

                <svg
                  className={`w-5 h-5 my-2 mx-2 text-white transition-transform ${
                    dropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-4 z-[9999]">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <Link
                    href="/settings"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                  <button
                    onClick={() => handleLogout()}
                    className="block px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

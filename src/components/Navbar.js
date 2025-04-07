"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-[#ec7807] shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo with Link to Homepage */}
        <Link href="/">
          <h1 className="text-2xl font-bold text-white cursor-pointer transition">
            FITZONE
          </h1>
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
            href="/"
            className="block md:inline-block px-6 py-2 rounded-lg transition hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block md:inline-block px-6 py-2 rounded-lg transition hover:text-white"
          >
            About
          </Link>
          <Link
            href="/programs"
            className="block md:inline-block px-6 py-2 rounded-lg transition hover:text-white"
          >
            Programs
          </Link>
          <Link
            href="/community"
            className="block md:inline-block px-6 py-2 rounded-lg transition hover:text-white"
          >
            Community
          </Link>
          <Link
            href="/login"
            className="block md:inline-block text-white px-6 py-2 border-[#ec7807] border-solid border-[1px] rounded-lg transition hover:bg-[#ec7807] hover:text-black"
          >
            Log in
          </Link>
        </div>
      </div>
    </nav>
  );
}
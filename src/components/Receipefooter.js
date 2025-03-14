
import React from 'react'
import Link from 'next/link'


const Receipefooter = () => {
  return (
    <div>
        <footer className="bg-black text-white px-6 py-12 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="space-y-6">
          <div className="flex items-center">
            <div className="text-2xl font-bold flex items-center">
              <span className="text-orange-500">FI</span>
              <div className="relative w-5 h-6 mx-[-2px]">
                <div className="absolute inset-0 bg-orange-500 transform rotate-12 skew-x-12"></div>
                <div className="absolute inset-0 flex items-center justify-center text-black font-bold text-sm">T</div>
              </div>
              <span className="text-orange-500">ZONE</span>
              <span className="text-orange-500">.</span>
            </div>
          </div>
          <p className="text-gray-300 max-w-xs">
            Build your dream physique at Yanyan Fitness, the top fitness club in town.
          </p>
        </div>

        {/* Menu Column */}
        <div>
          <h3 className="text-orange-500 text-xl font-semibold mb-6">Menu</h3>
          <ul className="space-y-4">
            <li>
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/challenges" className="text-gray-300 hover:text-white transition-colors">
                Challenges
              </Link>
            </li>
            <li>
              <Link href="/trainers" className="text-gray-300 hover:text-white transition-colors">
                Trainers
              </Link>
            </li>
            <li>
              <Link href="/plans" className="text-gray-300 hover:text-white transition-colors">
                Plans
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="text-gray-300 hover:text-white transition-colors">
                Reviews
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Column */}
        <div>
          <h3 className="text-orange-500 text-xl font-semibold mb-6">Support</h3>
          <ul className="space-y-4">
            <li>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                Terms & Condition
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/support" className="text-gray-300 hover:text-white transition-colors">
                Support Center
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Column */}
        <div>
          <h3 className="text-orange-500 text-xl font-semibold mb-6">Social Media</h3>
          <ul className="space-y-4">
            <li>
              <Link href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                {/* <Twitter className="w-5 h-5" /> */}
                <span>Twitter</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                {/* <Facebook className="w-5 h-5" /> */}
                <span>Facebook</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                {/* <Instagram className="w-5 h-5" /> */}
                <span>Instagram</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                {/* <Youtube className="w-5 h-5" /> */}
                <span>YouTube</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-right text-gray-400 text-sm">Copyright ©2025 Yanyan fitness</div>
    </footer>
    </div>
  )
}

export default Receipefooter
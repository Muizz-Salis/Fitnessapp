import React from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { Search, Bell, ChevronDown, ArrowLeft } from 'lucide-react'
import Image from 'next/image'

const Receipenavbar = () => {
  return (
    <div>
      <header className="flex items-center justify-between px-6 py-4 border-b border-orange-600/30 bg-black">
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
        <div className="flex items-center gap-5">
          <Search className="text-white w-5 h-5" />
          <a href="#" className="text-orange-500 hover:text-orange-400">
            Home
          </a>
          <a href="#" className="text-orange-500 hover:text-orange-400">
            About
          </a>
          <div className="relative">
            <Bell className="text-white w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              5
            </span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-orange-500 overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt="Profile"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <ChevronDown className="w-4 h-4 text-white" />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Receipenavbar
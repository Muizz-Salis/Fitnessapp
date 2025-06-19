"use client"
import React from 'react'
import { ArrowLeft } from "lucide-react"

const Forgotpassword = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
    {/* Background Image */}
    <div
      className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/background.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
    </div>

    {/* Main Content */}
    <div className="relative z-10 w-full max-w-md">
      <div className="bg-black/40 backdrop-blur-sm border-2 border-orange-500 rounded-2xl p-8 space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="flex items-center space-x-1">
            <span className="text-white text-xl font-bold">FI</span>
            <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
              <div className="w-3 h-4 bg-white clip-path-lightning"></div>
            </div>
            <span className="text-white text-xl font-bold">ZONE</span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-white text-4xl font-bold mb-6">Forgot Password</h1>
          <p className="text-gray-300 text-base leading-relaxed">
            Enter your email and we'll send you instructions to reset your password.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-white text-base font-medium block">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-4 bg-transparent border-2 border-orange-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
            />
          </div>

          <button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 px-6 rounded-lg transition-colors">
            Send Email
          </button>
        </div>

        {/* Back Link */}
        <div className="flex justify-center">
          <button className="flex items-center space-x-2 text-white hover:text-orange-500 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back to Log In</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Forgotpassword
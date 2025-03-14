"use client"
import React from 'react'
import { useState } from "react"
import Image from "next/image"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Fitness = () => {
    const [otherGoal, setOtherGoal] = useState("")
    const [selectedGoal, setSelectedGoal] = useState("")
    const [timeframe, setTimeframe] = useState("")
      
  return (
    <div>
<div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-8 md:px-8 lg:px-12">
        {/* Logo */}
        <div className="mb-12">
          <div className="text-2xl font-bold flex items-center">
            <span className="text-orange-500">FI</span>
            <div className="relative w-5 h-6 mx-[-2px]">
              <div className="absolute inset-0 bg-orange-500 transform rotate-12 skew-x-12"></div>
              <div className="absolute inset-0 flex items-center justify-center text-black font-bold text-sm">T</div>
            </div>
            <span className="text-orange-500">ZONE</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form Section */}
          <div className="space-y-8">
            <h1 className="text-4xl font-bold mb-8">Fitness goal</h1>

            {/* Main Goal Selection */}
            <div className="space-y-6">
              <h2 className="text-2xl text-orange-500">What are your main fitness goal?</h2>

              <RadioGroup value={selectedGoal} onValueChange={setSelectedGoal}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="weight-loss" id="weight-loss" className="border-gray-600" />
                    <Label htmlFor="weight-loss" className="text-gray-300">
                      Weight loss
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="muscle-gain" id="muscle-gain" className="border-gray-600" />
                    <Label htmlFor="muscle-gain" className="text-gray-300">
                      Muscle gain
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="improve-endurance" id="improve-endurance" className="border-gray-600" />
                    <Label htmlFor="improve-endurance" className="text-gray-300">
                      Improve endurance
                    </Label>
                  </div>
                </div>
              </RadioGroup>

              {/* Others Input */}
              <div className="space-y-2">
                <Label htmlFor="other-goal" className="text-gray-300">
                  Others
                </Label>
                <Input
                  id="other-goal"
                  value={otherGoal}
                  onChange={(e) => setOtherGoal(e.target.value)}
                  className="bg-transparent border-orange-500 text-white placeholder:text-gray-500"
                  placeholder="Write...."
                />
              </div>
            </div>

            {/* Timeframe Selection */}
            <div className="space-y-6">
              <h2 className="text-2xl text-orange-500">How soon do you hope to achieve these goals?</h2>

              <RadioGroup value={timeframe} onValueChange={setTimeframe}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="short-term" id="short-term" className="border-gray-600" />
                    <Label htmlFor="short-term" className="text-gray-300">
                      Short-term
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="medium-term" id="medium-term" className="border-gray-600" />
                    <Label htmlFor="medium-term" className="text-gray-300">
                      Medium-term
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="long-term" id="long-term" className="border-gray-600" />
                    <Label htmlFor="long-term" className="text-gray-300">
                      Long term
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 pt-4">
              <Button
                variant="outline"
                className="w-32 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black"
              >
                Back
              </Button>
              <Button className="w-32 bg-orange-500 text-black hover:bg-orange-400">Next</Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="hidden md:block relative]">
            <Image
              src="/images/athlete.jpg"
              // backgroundimage="/images/athlete.jpg"
              alt="Artistic runner figure with colorful smoke effect"
              fill
              className=""
            />
          </div>
        </div>
      </div>
    </div>


    </div>
  )
}

export default Fitness
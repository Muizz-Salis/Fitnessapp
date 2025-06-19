"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Motivation = () => {
  const [motivation, setMotivation] = useState("");
  const [connectWithFriends, setConnectWithFriends] = useState(null);
  const [receiveNotifications, setReceiveNotifications] = useState(null);

  const handleBack = () => {
    console.log("Going back to previous step");
  };

  const handleFinish = () => {
    if (!motivation.trim() || connectWithFriends === null || receiveNotifications === null) {
      alert("Please answer all questions before continuing.");
      return;
    }

    const userData = {
      motivation,
      connectWithFriends,
      receiveNotifications,
    };
    console.log("User preferences:", userData);
    // Proceed or submit the data
  };

  return (
    <div className="min-h-screen bg-black flex">
      {/* Left - Form */}
      <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
        {/* Logo */}
        <div className="mb-12">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded transform rotate-45"></div>
            <span className="text-2xl font-bold text-white tracking-wider">FITZONE</span>
          </div>
        </div>

        {/* Motivation Section */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Motivation and support
          </h1>

          <div className="mb-8">
            <label className="block text-orange-400 text-lg font-medium mb-4">
              What motivates you to stay active?
            </label>
            <input
              type="text"
              placeholder="Write..."
              value={motivation}
              onChange={(e) => setMotivation(e.target.value)}
              className="w-full max-w-md px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="mb-8">
            <p className="text-orange-400 text-lg font-medium mb-6">
              Would you like to connect with friends or others for support and challenges?
            </p>
            <div className="space-y-4">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={connectWithFriends === true}
                  onChange={() => setConnectWithFriends(connectWithFriends === true ? null : true)}
                  className="form-checkbox h-5 w-5 text-orange-500"
                />
                <span className="text-white text-lg">Yes</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={connectWithFriends === false}
                  onChange={() => setConnectWithFriends(connectWithFriends === false ? null : false)}
                  className="form-checkbox h-5 w-5 text-orange-500"
                />
                <span className="text-white text-lg">No</span>
              </label>
            </div>
          </div>
        </div>

        {/* Notification Section */}
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Notification and reminders
          </h2>

          <div className="mb-8">
            <p className="text-orange-400 text-lg font-medium mb-6">
              Do you want to receive workout reminders and motivational notifications?
            </p>
            <div className="space-y-4">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={receiveNotifications === true}
                  onChange={() => setReceiveNotifications(receiveNotifications === true ? null : true)}
                  className="form-checkbox h-5 w-5 text-orange-500"
                />
                <span className="text-white text-lg">Yes</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={receiveNotifications === false}
                  onChange={() => setReceiveNotifications(receiveNotifications === false ? null : false)}
                  className="form-checkbox h-5 w-5 text-orange-500"
                />
                <span className="text-white text-lg">No</span>
              </label>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <Button
            onClick={handleBack}
            className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black px-8 py-3 rounded-lg font-semibold text-lg transition"
            variant="outline"
          >
            Back
          </Button>
          <Button
            onClick={handleFinish}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition"
          >
            Finish
          </Button>
        </div>
      </div>

      {/* Right - Image */}
      <div className="hidden lg:block lg:w-1/2">
  <Image
    src="/image/motivation.png"
    alt="Motivation"
    width={400}
    height={700}
    className=" object-cover mx-40 h-full"
  />


      </div>
    </div>
  );
};

export default Motivation;

"use client";

import { useState } from "react";

export default function HealthForm() {
  const [formData, setFormData] = useState({
    medicalCondition: "",
    diet: [],
    otherDiet: "",
    fitnessTime: "",
  });

  const handleCheckboxChange = (value, field) => {
    setFormData((prev) => {
      const isChecked = prev[field].includes(value);
      return {
        ...prev,
        [field]: isChecked
          ? prev[field].filter((item) => item !== value)
          : [...prev[field], value],
      };
    });
  };

  return (
    <div className="flex min-h-screen bg-black text-white p-6">
      {/* Left Form Section */}
      <div className="w-full lg:w-1/2 p-8">
        <h1 className="text-3xl font-bold mb-6">Health and lifestyle</h1>

      * Medical Conditions */
        <div className="mb-6">
          <p className="text-lg font-semibold text-orange-500">
            Do you have any medical conditions or injuries that could affect your workout?
          </p>
          <div className="flex flex-col gap-3 mt-3">
            {["Yes", "No"].map((option) => (
              <label key={option} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-6 h-6 accent-orange-500"
                  checked={formData.medicalCondition === option}
                  onChange={() => setFormData({ ...formData, medicalCondition: option })}
                />
                <span className="text-lg">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Diet Selection */}
        <div className="mb-6">
          <p className="text-lg font-semibold text-orange-500">
            How would you describe your current diet?
          </p>
          <div className="flex flex-col gap-3 mt-3">
            {["Balance", "Vegetarian", "High-protein"].map((diet) => (
              <label key={diet} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-6 h-6 accent-orange-500"
                  checked={formData.diet.includes(diet)}
                  onChange={() => handleCheckboxChange(diet, "diet")}
                />
                <span className="text-lg">{diet}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Other Diet Text Field */}
        <div className="mb-6">
          <p className="text-lg text-orange-500">Others</p>
          <input
            type="text"
            placeholder="Write...."
            className="w-full p-3 bg-black border-2 border-orange-500 rounded-md mt-2 text-white placeholder-gray-400"
            value={formData.otherDiet}
            onChange={(e) => setFormData({ ...formData, otherDiet: e.target.value })}
          />
        </div>

        {/* Fitness Time */}
        <div className="mb-6">
          <p className="text-lg font-semibold text-orange-500">
            How much time can you dedicate to fitness each week?
          </p>
          <input
            type="text"
            placeholder="Write...."
            className="w-full p-3 bg-black border-2 border-orange-500 rounded-md mt-2 text-white placeholder-gray-400"
            value={formData.fitnessTime}
            onChange={(e) => setFormData({ ...formData, fitnessTime: e.target.value })}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="px-6 py-3 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-black transition">
            Back
          </button>
          <button className="px-6 py-3 bg-orange-500 text-black rounded-lg hover:bg-orange-600 transition">
            Next
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="hidden lg:flex w-1/2 items-center justify-center p-8">
        <img src="image/leg.png" alt="Fitness" className="w-auto h--78 rounded-lg" />
      </div>
    </div>
  );
}

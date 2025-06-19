"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomDropdown from "./CustomD";
import FocusCheckbox from "./FocusCheckBox";
import Image from "next/image";

const FocusAreaSelection = () => {
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedHeight, setSelectedHeight] = useState("");
  const [selectedWeight, setSelectedWeight] = useState("");
  const [focusAreas, setFocusAreas] = useState([]);
  const [error, setError] = useState("");

  const ageOptions = ["18-25", "26-35", "36-45", "46-55", "55+"];
  const heightOptions = ["5'0\" - 5'3\"", "5'4\" - 5'7\"", "5'8\" - 5'11\"", "6'0\" - 6'3\"", "6'4\"+"];
  const weightOptions = ["100-130 lbs", "131-160 lbs", "161-190 lbs", "191-220 lbs", "220+ lbs"];

  const handleFocusAreaChange = (area, checked) => {
    if (checked) {
      setFocusAreas([...focusAreas, area]);
    } else {
      setFocusAreas(focusAreas.filter(item => item !== area));
    }
  };

  const handleNext = () => {
    if (!selectedAge || !selectedHeight || !selectedWeight || focusAreas.length === 0) {
      setError("Please complete all fields and select at least one focus area.");
      return;
    }
    setError("");
    console.log("Next clicked", { selectedAge, selectedHeight, selectedWeight, focusAreas });
    // Proceed to next step (e.g. router.push('/next-step'))
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <ArrowLeft className="text-orange-500 cursor-pointer hover:text-orange-400 transition-colors" size={24} />
        <div className="flex items-center gap-2">
          <div className="text-white font-bold text-xl">FIT</div>
          <div className="bg-orange-500 text-white px-2 py-1 text-sm font-bold transform -skew-x-12">ZONE</div>
        </div>
        <div />
      </div>

      {/* Title */}
      <h1 className="text-center text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-orange-400 to-orange-500 text-transparent bg-clip-text mb-6 relative">
        Please Choose Your Focus Area
        <span className="block h-1 w-24 bg-orange-500 mx-auto mt-2 rounded-full shadow-md shadow-orange-500/30 animate-pulse" />
      </h1>

      {/* Error message */}
      {error && (
        <div className="text-red-500 text-center font-medium mb-6 animate-pulse">
          {error}
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto w-full">
        {/* Left Section - Form */}
        <div className="flex-1 space-y-6">
          <div className="space-y-4">
            <CustomDropdown label="Age" value={selectedAge} onChange={setSelectedAge} options={ageOptions} />
            <CustomDropdown label="Height" value={selectedHeight} onChange={setSelectedHeight} options={heightOptions} />
            <CustomDropdown label="Weight" value={selectedWeight} onChange={setSelectedWeight} options={weightOptions} />
          </div>
        </div>

        {/* Center Section - Character */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-80 h-96 border-2 border-orange-500 rounded-2xl overflow-hidden bg-gray-900 shadow-lg shadow-orange-500/20">
            <Image
              src="/image/stj.png"
              alt="Focus Body"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Section - Focus Areas */}
        <div className="flex-1 space-y-4">
          <div className="space-y-3">
            <FocusCheckbox
              label="Flat tummy"
              checked={focusAreas.includes("Flat tummy")}
              onChange={(checked) => handleFocusAreaChange("Flat tummy", checked)}
            />
            <FocusCheckbox
              label="Slim Waist"
              checked={focusAreas.includes("Slim Waist")}
              onChange={(checked) => handleFocusAreaChange("Slim Waist", checked)}
            />
            <FocusCheckbox
              label="Big Butt"
              checked={focusAreas.includes("Big Butt")}
              onChange={(checked) => handleFocusAreaChange("Big Butt", checked)}
            />
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="flex justify-center mt-16">
        <Button 
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-16 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default FocusAreaSelection;

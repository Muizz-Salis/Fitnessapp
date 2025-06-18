"use client";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import FocusAreaOptions from "./FocusArea";
import BodyDiagram from "./BodyDiagram";
import UserInputs from "./UserInput";

const FocusAreaSelector = () => {
  const [selectedAreas, setSelectedAreas] = useState([]);

  const handleAreaToggle = (area) => {
    setSelectedAreas(prev =>
      prev.includes(area)
        ? prev.filter(a => a !== area)
        : [...prev, area]
    );
  };
  

  const handleNext = () => {
    console.log("Selected focus areas:", selectedAreas);
    
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80" />
      
      {/* Background silhouette */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNLTEwIDMwaDYwdi0yMGgtNjB6IiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] bg-repeat" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button className="text-orange-500 hover:text-orange-400 transition-colors">
            <ArrowLeft size={24} />
          </button>
          
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-white">FIT</span>
              <span className="text-orange-500 relative">
                ZONE
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              </span>
            </div>
          </div>
          
          <div className="w-6" />
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
            Please Choose your focus area
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          {/* Left Column - User Inputs */}
          <div className="lg:col-span-1">
            <UserInputs />
          </div>

          {/* Center Column - Body Diagram */}
          <div className="lg:col-span-1 flex justify-center">
          <BodyDiagram 
           selectedAreas={selectedAreas}
            onAreaToggle={handleAreaToggle}
/>
          </div>

          {/* Right Column - Focus Area Options */}
          <div className="lg:col-span-1">
            <FocusAreaOptions 
              selectedAreas={selectedAreas}
              onAreaToggle={handleAreaToggle}
            />
          </div>
        </div>

        {/* Next Button */}
        <div className="flex justify-center mt-12">
          <Button 
            onClick={handleNext}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-12 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FocusAreaSelector;

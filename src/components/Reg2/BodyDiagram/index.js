"use client";
import Image from "next/image";
import { useState } from "react";

const BodyDiagram = ({ selectedAreas, onAreaToggle }) => {
  const [hoveredArea, setHoveredArea] = useState(null);

  const focusPoints = [
    { id: "chest", x: "50%", y: "25%", label: "Chest" },
    { id: "abs", x: "50%", y: "40%", label: "Abs" },
    { id: "arms", x: "30%", y: "30%", label: "Arms" },
    { id: "legs", x: "50%", y: "70%", label: "Legs" },
  ];

  const isSelected = (area) => selectedAreas.includes(area);
  const isHovered = (area) => hoveredArea === area;

  return (
    <div className="relative">
      <div className="relative w-80 h-96 mx-auto border-2 border-orange-500 rounded-2xl overflow-hidden bg-gray-900">
        {/* Background Image */}
        <Image
          src="/image/guy.png"
         alt="Focus Body"
         fill
                   className="object-cover"
                    />

        {/* Focus Area Buttons */}
        {focusPoints.map((point) => (
          <button
            key={point.id}
            className={`absolute w-6 h-6 rounded-full border-2 transition-all duration-300 transform hover:scale-125 ${
              isSelected(point.id)
                ? "bg-orange-500 border-orange-300 shadow-lg shadow-orange-500/50"
                : "bg-orange-500/30 border-orange-500 hover:bg-orange-500/60"
            }`}
            style={{
              left: point.x,
              top: point.y,
              transform: "translate(-50%, -50%)"
            }}
            onClick={() => onAreaToggle(point.id)}
            onMouseEnter={() => setHoveredArea(point.id)}
            onMouseLeave={() => setHoveredArea(null)}
          >
            {isSelected(point.id) && (
              <div className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-30" />
            )}
            {isHovered(point.id) && (
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                {point.label}
              </div>
            )}
          </button>
        ))}
      </div>

      <p className="text-center text-gray-400 mt-4 text-sm">
        Click on body areas to select focus zones
      </p>
    </div>
  );
};

export default BodyDiagram;

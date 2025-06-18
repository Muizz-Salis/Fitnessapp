import { useState } from "react";
import { ChevronDown } from "lucide-react";

const CustomDropdown = ({ label, value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full border-2 border-orange-500 bg-transparent text-white px-6 py-4 rounded-lg flex items-center justify-between hover:bg-orange-500/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        <span className="text-lg font-medium">
          {value || label}
        </span>
        <ChevronDown 
          className={`text-orange-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
          size={20} 
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-orange-500 rounded-lg shadow-xl z-50 overflow-hidden">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className="w-full px-6 py-3 text-left text-white hover:bg-orange-500/20 transition-colors duration-200 border-b border-gray-700 last:border-b-0"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;

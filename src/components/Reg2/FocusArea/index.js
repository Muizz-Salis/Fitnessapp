const FocusAreaOptions = ({ selectedAreas, onAreaToggle }) => {
    const focusAreas = [
      { id: "fullbody", label: "Full body" },
      { id: "chest", label: "Chest" },
      { id: "abs", label: "Abs" },
      { id: "arms", label: "Arm" },
      { id: "legs", label: "Leg" },
    ];
  
    const isSelected = (area) => selectedAreas.includes(area);
  
    return (
      <div className="space-y-4">
        {focusAreas.map((area) => (
          <button
            key={area.id}
            onClick={() => onAreaToggle(area.id)}
            className={`w-full flex items-center space-x-4 p-4 rounded-lg border-2 transition-all duration-300 text-left group hover:scale-105 ${
              isSelected(area.id)
                ? "border-orange-500 bg-orange-500/10 shadow-lg shadow-orange-500/20"
                : "border-gray-600 hover:border-orange-500/50 hover:bg-orange-500/5"
            }`}
          >
           
            <div
              className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all duration-300 ${
                isSelected(area.id)
                  ? "border-orange-500 bg-orange-500"
                  : "border-gray-500 group-hover:border-orange-500"
              }`}
            >
              {isSelected(area.id) && (
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <polyline points="20,6 9,17 4,12"></polyline>
                </svg>
              )}
            </div>
  
            {/* Label */}
            <span
              className={`text-lg font-medium transition-colors duration-300 ${
                isSelected(area.id) ? "text-orange-500" : "text-white group-hover:text-orange-400"
              }`}
            >
              {area.label}
            </span>
          </button>
        ))}
      </div>
    );
  };
  
  export default FocusAreaOptions;
  
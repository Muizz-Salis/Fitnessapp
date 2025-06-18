const FocusCheckbox = ({ label, checked, onChange }) => {
    return (
      <label className="flex items-center space-x-4 cursor-pointer group">
        <div className="relative">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className="sr-only"
          />
          <div
            className={`w-6 h-6 rounded border-2 transition-all duration-300 ${
              checked
                ? "bg-orange-500 border-orange-500"
                : "bg-gray-700 border-gray-500 group-hover:border-orange-400"
            }`}
          >
            {checked && (
              <svg
                className="w-4 h-4 text-white absolute top-0.5 left-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </div>
        <span className="text-white text-lg font-medium group-hover:text-orange-400 transition-colors duration-300">
          {label}
        </span>
      </label>
    );
  };
  
  export default FocusCheckbox;
  
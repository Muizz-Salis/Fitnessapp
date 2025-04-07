"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";

const FitnessLevelForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    activityLevel: [],
    exerciseType: [],
    otherExercise: "",
    exerciseDays: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCheckboxChange = (category, value) => {
    setFormData((prev) => {
      const selected = new Set(prev[category]);
      selected.has(value) ? selected.delete(value) : selected.add(value);
      return { ...prev, [category]: Array.from(selected) };
    });
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    if (
      formData.activityLevel.length === 0 ||
      formData.exerciseType.length === 0 ||
      !formData.exerciseDays
    ) {
      setError("Please fill out all required fields.");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);
    setError("");

    try {
      await axios.post("/api/user/fitness-level", formData);
      router.push("/workout"); 
    } catch (err) {
      setError("Failed to save. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row items-center justify-center px-6 py-12 gap-12">

      <div className="w-full lg:w-1/2 space-y-8 max-w-xl">
        <h2 className="text-orange-500 text-2xl font-bold">
          FIT <span className="text-white">ZONE.</span>
        </h2>

        <h3 className="text-3xl font-bold">Current fitness level</h3>
        <div>
          <h4 className="text-lg font-semibold text-orange-500 mb-2">
            What is your current activity level?
          </h4>
          <div className="space-y-2">
            {["Beginner", "Intermediate", "Advanced"].map((level) => (
              <label key={level} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.activityLevel.includes(level)}
                  onChange={() => handleCheckboxChange("activityLevel", level)}
                  className="w-5 h-5 text-orange-500 bg-gray-800 border-gray-600 rounded"
                />
                <span>{level}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-orange-500 mb-2">
            What type of exercise do you enjoy?
          </h4>
          <div className="space-y-2">
            {["Cardio", "Strength training", "Sport"].map((type) => (
              <label key={type} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.exerciseType.includes(type)}
                  onChange={() => handleCheckboxChange("exerciseType", type)}
                  className="w-5 h-5 text-orange-500 bg-gray-800 border-gray-600 rounded"
                />
                <span>{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold">Others</h4>
          <input
            type="text"
            placeholder="e.g. Dance, Yoga..."
            value={formData.otherExercise}
            onChange={(e) => handleChange("otherExercise", e.target.value)}
            className="w-full mt-2 p-2 bg-transparent border border-orange-500 rounded-md text-white placeholder-gray-400"
          />
        </div>

        <div>
          <h4 className="text-lg font-semibold text-orange-500">
            How many days a week do you currently exercise?
          </h4>
          <input
            type="number"
            min="0"
            max="7"
            placeholder="e.g. 3"
            value={formData.exerciseDays}
            onChange={(e) => handleChange("exerciseDays", e.target.value)}
            className="w-full mt-2 p-2 bg-transparent border border-orange-500 rounded-md text-white placeholder-gray-400"
          />
        </div>

        {error && <p className="text-red-400 text-sm">{error}</p>}

        <div className="flex justify-between mt-4">
          <button
            onClick={() => router.back()}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold px-6 py-2 rounded-md transition"
          >
            Back
          </button>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-6 py-2 rounded-md transition"
          >
            {loading ? "Saving..." : "Continue"}
          </button>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="relative w-72 h-96 border-2 border-orange-500 rounded-xl overflow-hidden">
          <Image
            src="/image/stj2.png"
            alt="Focus Body"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default FitnessLevelForm;

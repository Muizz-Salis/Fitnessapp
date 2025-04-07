
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";

const OPTIONS = {
  age: { min: 18, max: 77 },
  height: { min: 140, max: 210 },
  weight: { min: 40, max: 120 },
  focusAreas: ["Flat Tummy", "Slim Waist", "Big Butt"],
};

const FocusAreaForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    age: "",
    height: "",
    weight: "",
    focusAreas: [],
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const generateOptions = (min, max) =>
    Array.from({ length: max - min + 1 }, (_, i) => min + i);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleFocus = (area) => {
    setFormData((prev) => ({
      ...prev,
      focusAreas: prev.focusAreas.includes(area)
        ? prev.focusAreas.filter((a) => a !== area)
        : [...prev.focusAreas, area],
    }));
  };

  const validate = () => {
    const newErrors = {};
    ["age", "height", "weight"].forEach((field) => {
      if (!formData[field]) newErrors[field] = `${field} is required`;
    });
    if (formData.focusAreas.length === 0)
      newErrors.focusAreas = "Select at least one focus area";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      await axios.post("/api/user/focus-area", formData);
      router.push("/fitnesslevel");
    } catch (err) {
      console.error(err);
      setErrors({ submit: "Something went wrong. Try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 relative">
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 flex items-center text-orange-400 hover:text-orange-300"
      >
        <FaArrowLeft className="mr-2" />
        Back
      </button>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        
        <div className="space-y-6">
          <Dropdown
            label="Age"
            value={formData.age}
            options={generateOptions(OPTIONS.age.min, OPTIONS.age.max)}
            onChange={(val) => handleChange("age", val)}
            error={errors.age}
          />
          <Dropdown
            label="Height (cm)"
            value={formData.height}
            options={generateOptions(OPTIONS.height.min, OPTIONS.height.max)}
            onChange={(val) => handleChange("height", val)}
            error={errors.height}
          />
          <Dropdown
            label="Weight (kg)"
            value={formData.weight}
            options={generateOptions(OPTIONS.weight.min, OPTIONS.weight.max)}
            onChange={(val) => handleChange("weight", val)}
            error={errors.weight}
          />
        </div>

        <div className="flex flex-col items-center space-y-3">
          <h2 className="text-xl font-semibold text-orange-400">
            Choose Your Focus Area
          </h2>
          <div className="relative w-72 h-96 border-2 border-orange-400 rounded-xl overflow-hidden">
            <Image
              src="/image/stj.png"
              alt="Focus Body"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-400 italic">
            Tap to select your body goal
          </p>
        </div>

        <div className="space-y-6">
          {OPTIONS.focusAreas.map((area) => (
            <button
              key={area}
              type="button"
              onClick={() => toggleFocus(area)}
              className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                formData.focusAreas.includes(area)
                  ? "bg-orange-500 text-black font-bold border-orange-600"
                  : "bg-gray-800 hover:bg-gray-700 border-transparent"
              }`}
            >
              {area}
            </button>
          ))}
          {errors.focusAreas && (
            <p className="text-red-400 text-sm">{errors.focusAreas}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded-lg transition-transform hover:scale-105 disabled:opacity-50"
          >
            {loading ? <Spinner /> : "Continue"}
          </button>

          {errors.submit && (
            <p className="text-red-500 text-sm">{errors.submit}</p>
          )}
        </div>
      </form>
    </div>
  );
};

const Dropdown = ({ label, value, options, onChange, error }) => (
  <div>
    <label className="block mb-1 text-sm font-medium">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full px-4 py-2 bg-gray-800 border rounded-lg text-white ${
        error ? "border-red-500" : "border-orange-500"
      }`}
    >
      <option value="">Select {label}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
  </div>
);

const Spinner = () => (
  <div className="animate-spin h-5 w-5 border-2 border-black border-t-transparent rounded-full mx-auto" />
);

export default FocusAreaForm;

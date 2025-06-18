"use client";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const UserInputs = () => {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  return (
    <div className="space-y-6">
      {/* Age Selector */}
      <div>
        <Select value={age} onValueChange={setAge}>
          <SelectTrigger className="w-full bg-transparent border-2 border-orange-500 text-white h-14 text-lg rounded-lg hover:border-orange-400 transition-colors">
            <SelectValue placeholder="Age" className="text-white" />
          </SelectTrigger>
          <SelectContent className="bg-gray-900 border-orange-500 text-white">
            {Array.from({ length: 50 }, (_, i) => i + 16).map((ageValue) => (
              <SelectItem key={ageValue} value={ageValue.toString()} className="hover:bg-orange-500/20 focus:bg-orange-500/20">
                {ageValue} years
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Height Selector */}
      <div>
        <Select value={height} onValueChange={setHeight}>
          <SelectTrigger className="w-full bg-transparent border-2 border-orange-500 text-white h-14 text-lg rounded-lg hover:border-orange-400 transition-colors">
            <SelectValue placeholder="Height" className="text-white" />
          </SelectTrigger>
          <SelectContent className="bg-gray-900 border-orange-500 text-white">
            {Array.from({ length: 50 }, (_, i) => i + 150).map((heightValue) => (
              <SelectItem key={heightValue} value={heightValue.toString()} className="hover:bg-orange-500/20 focus:bg-orange-500/20">
                {heightValue} cm
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Select value={weight} onValueChange={setWeight}>
          <SelectTrigger className="w-full bg-transparent border-2 border-orange-500 text-white h-14 text-lg rounded-lg hover:border-orange-400 transition-colors">
            <SelectValue placeholder="Weight" className="text-white" />
          </SelectTrigger>
          <SelectContent className="bg-gray-900 border-orange-500 text-white">
            {Array.from({ length: 100 }, (_, i) => i + 40).map((weightValue) => (
              <SelectItem key={weightValue} value={weightValue.toString()} className="hover:bg-orange-500/20 focus:bg-orange-500/20">
                {weightValue} kg
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default UserInputs;
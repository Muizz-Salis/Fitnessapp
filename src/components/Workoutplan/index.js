"use client";
import React from "react";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const weeks = ["Week 1", "Week 2", "Week 3", "Week 4"];

const workouts = {
  "Week 1": [
    "Abs Workout",
    "Chest Workout",
    "Arm Workout",
    "Leg Workout",
    "Cardio Workout",
    "Leg Workout",
    "Rest and Recover",
  ],
  "Week 2": [
    "Chest Workout",
    "Abs Workout",
    "Arm Workout",
    "Leg Workout",
    "Cardio Workout",
    "Leg Workout",
    "Rest and Recover",
  ],
  "Week 3": [
    "Chest Workout",
    "Arm Workout",
    "Abs Workout",
    "Leg Workout",
    "Cardio Workout",
    "Leg Workout",
    "Rest and Recover",
  ],
  "Week 4": [
    "Chest Workout",
    "Arm Workout",
    "Leg Workout",
    "Abs Workout",
    "Cardio Workout",
    "Leg Workout",
    "Rest and Recover",
  ],
};

export default function WorkoutPlanner() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="overflow-x-auto">
          <div className="grid grid-cols-8 gap-4 text-center">
            <div className="bg-black" />
            {days.map((day) => (
              <div
                key={day}
                className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-md shadow-md"
              >
                {day}
              </div>
            ))}

            {weeks.map((week, wIdx) => (
              <React.Fragment key={week}>
                <div className="bg-neutral-800 font-semibold py-4 px-2 rounded-md border border-orange-500">
                  {week}
                </div>
                {workouts[week].map((item, i) => (
                  <div
                    key={`${week}-${i}`}
                    className="bg-black py-4 px-2 border border-orange-500 rounded-md hover:bg-orange-600 transition-all font-semibold"
                  >
                    {item}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

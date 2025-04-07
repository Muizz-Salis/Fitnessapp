"use client";

import { useState, useRef, useEffect } from "react";

const workouts = [
  {
    id: 1,
    title: "5 min warm up",
    description: "A 5-minute warm-up before exercise is essential.",
    video: "/videos/wor1.mp4", // Ensure this is an .mp4 file
  },
  {
    id: 2,
    title: "Core Workout",
    description: "A total core workout targets all areas of your core.",
    video: "/videos/wor2.mp4", // Ensure this is an .mp4 file
  },
  {
    id: 3,
    title: "Variations for Core Engage",
    description: "Push-ups can be a fantastic addition.",
    video: "/videos/wor3.mp4", // Ensure this is an .mp4 file
  },
];

export default function HomePage() {
  const [selectedWorkout, setSelectedWorkout] = useState(workouts[0]);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((err) => console.log("Autoplay failed:", err));
    }
  }, [selectedWorkout]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Main Container */}
      <div className="flex flex-col md:flex-row gap-6"> {/* Use flex-col for small screens, flex-row for larger */}
        {/* Sidebar (Workout List) */}
        <div className="md:w-1/3 lg:w-1/5 order-2 md:order-1"> {/* Move below video on small screens */}
          <h1 className="text-2xl font-bold mb-4">{`Day 1's Workout`}</h1>
          <div className="space-y-4">
            {workouts.map((workout) => (
              <div
                key={workout.id}
                className={`flex items-center gap-4 p-3 cursor-pointer rounded-lg transition-all hover:bg-gray-800 ${
                  selectedWorkout.id === workout.id ? "bg-gray-800" : ""
                }`}
                onClick={() => setSelectedWorkout(workout)}
              >
                <div className="w-16 h-16 bg-gray-700 flex items-center justify-center rounded-lg">
                  🎥
                </div>
                <div>
                  <h3 className="text-lg font-semibold  text-orange-500">{workout.title}</h3>
                  <p className="text-sm text-gray-300">{workout.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-yellow-400">Rating 2388+ ⭐⭐⭐⭐⭐</p>
        </div>

        {/* Video Section */}
        <div className="md:flex-1 order-1 md:order-2"> {/* Move above sidebar on small screens */}
          <h1 className="text-2xl font-bold text-center mb-4">2023 Get Abs Challenge</h1>
          <div className="relative bg-black rounded-lg overflow-hidden border-2 border-orange-500">
            <video
              ref={videoRef}
              controls
              autoPlay
              muted
              className="w-full h-78 aspect-video object-cover"
            >
              <source src={selectedWorkout.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-6">
  <div className="bg-[#6f4821] text-white p-2 rounded-lg">⏳ 2 hours</div>
  <div className="bg-[#6f4821] text-white p-2 rounded-lg">🔥 500 Kcal</div>
  <div className="bg-[#6f4821] text-white p-2 rounded-lg">💪 10 Poses</div>
  <div className="bg-[#6f4821] text-white p-2 rounded-lg">🔄 3 Sets</div>
</div>

          </div>
        </div>
      </div>
    </div>
  );
}
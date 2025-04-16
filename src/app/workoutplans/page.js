"use client"

import Image from "next/image";
import { useState } from "react";


const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const workouts = [
    {
        title: "5 min warm up",
        description:
            "A 5-minute warm-up before exercise is essential to prepare your body, increase blood flow to your muscles, and reduce the risk of injury.",
        image: "/images/workoutplan4.jpg",
    },
    {
        title: "Total Core Workout",
        description:
            "A total core workout targets all areas of your core, including your abdominal muscles, obliques, lower back, and even the hips.",
        image: "/images/workoutplan3.jpg",
    },
    {
        title: "Variations for Core Engagement",
        description:
            "Push-ups can be a fantastic addition to your core workout if performed with a focus on engaging your abdominal muscles.",
        image: "/images/workoutplan2.jpg",
    },
];

export default function GetAbsChallenge() {
    const [selectedDay, setSelectedDay] = useState("Monday");

    return (
        <div className="min-h-screen bg-black text-white p-6">
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-orange-400">FitZone</h1>
                <nav className="space-x-6 text-lg">
                    <a href="#" className="hover:text-orange-400">Home</a>
                    <a href="#" className="hover:text-orange-400">About</a>
                    <span className="text-orange-400">🔔</span>
                    <span className="bg-orange-400 text-black px-2 py-1 rounded-full">👤</span>
                </nav>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-1 items-start">
                <div className="text-center md:text-left">
                    <Image
                        src="/images/workoutplan.jpg"
                        alt="Trainer"
                        width={300}
                        height={1}
                        className="rounded-2xl"
                    />
                    <h2 className="text-[32px] font-semibold mt-4">Motivation</h2>
                    <p className="text-sm text-gray-400 mt-2">
                        Every rep counts! Celebrate small <br />
                        victories, like completing a workout or <br />
                        holding that plank for an extra five <br />
                        seconds.
                    </p>
                    <button className="bg-orange-500 mt-4 hover:bg-orange-600 text-white transition-colors duration-200">
                        Watch Video
                    </button>

                </div>

                <div>
                    <h2 className="text-3xl font-bold mb-4">2023 Get Abs Challenge</h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {days.map((day) => (
                            <button
                                key={day}
                                onClick={() => setSelectedDay(day)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${selectedDay === day ? "bg-orange-500 text-white" : "bg-gray-800 hover:bg-gray-700"
                                    }`}
                            >
                                {day}
                            </button>
                        ))}
                    </div>

                    <h3 className="text-xl font-bold mb-4">Day 1 Workout</h3>
                    <div className="space-y-6">
                        {workouts.map((workout, index) => (
                            <div key={index} className="flex gap-4 items-start">
                                <Image
                                    src={workout.image}
                                    alt={workout.title}
                                    width={220}
                                    height={160}
                                    className="rounded-lg"
                                />
                                <div>
                                    <h4 className="text-lg font-semibold text-orange-400">{workout.title}</h4>
                                    <p className="text-sm text-gray-300">{workout.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
} 

'use client';

import Image from 'next/image';

export default function WorkoutPreferencesForm() {
    return (
        <div className="flex flex-col md:flex-row min-h-screen text-white bg-black">
            {/* Left Side - Form */}
            <div className="md:w-3/5 w-full p-10">
                <h2 className="text-3xl font-bold text-orange-500 mb-6">Preferences</h2>

                {/* Workout Type Section */}
                <div className="mb-6">
                    <p className="text-orange-400 mb-2">What type of workout are you interested in?</p>
                    <div className="space-y-2">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="accent-orange-500 w-5 h-5 rounded-md" /> At-home workout
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="accent-orange-500 w-5 h-5 rounded-md" /> Gym routine
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="accent-orange-500 w-5 h-5 rounded-md" /> Group classes
                        </label>
                        <input
                            type="text"
                            placeholder="Others..."
                            className="mt-2 w-full bg-transparent border border-orange-500 p-2 rounded text-white placeholder-orange-300"
                        />
                    </div>
                </div>

                {/* Workout Preference Section */}
                <div className="mb-6">
                    <p className="text-orange-400 mb-2">Which do you prefer?</p>
                    <div className="space-y-2">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="accent-orange-500 w-5 h-5 rounded-md" /> Video workouts
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="accent-orange-500 w-5 h-5 rounded-md" /> Written workout
                        </label>
                        <input
                            type="text"
                            placeholder="Others..."
                            className="mt-2 w-full bg-transparent border border-orange-500 p-2 rounded text-white placeholder-orange-300"
                        />
                    </div>
                </div>

                {/* Coaching/Nutrition Section */}
                <div className="mb-6">
                    <p className="text-orange-400 mb-2">
                        Would you be interested in personalized coaching or nutrition advice?
                    </p>
                    <div className="space-y-2">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="accent-orange-500 w-5 h-5 rounded-md" /> Yes
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="accent-orange-500 w-5 h-5 rounded-md" /> No
                        </label>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                    <button className="px-6 py-2 bg-black border border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white rounded">
                        Back
                    </button>
                    <button className="px-6 py-2 bg-orange-500 text-black hover:bg-orange-600 rounded">
                        Next
                    </button>
                </div>
            </div>

            {/* Right Side - Image */}
            <div className="md:w-2/5 w-full hidden md:block relative">
                <Image
                    src="/images/preferences.jpg"
                    alt="Workout Image"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-90"
                />
            </div>
        </div>
    );
}

'use client';

import Image from 'next/image';

export default function FocusAreaForm() {
    return (
        <div className="flex min-h-screen bg-black text-white px-6 py-10 items-center justify-between gap-8 flex-col md:flex-row">
            {/* Left - Select Inputs */}
            <div className="flex flex-col gap-6 md:w-1/4 w-full">
                <select className="bg-transparent border border-orange-500 text-white p-3 rounded">
                    <option className="text-black">Age</option>
                    <option className="text-black">18-25</option>
                    <option className="text-black">26-35</option>
                    <option className="text-black">36+</option>
                </select>

                <select className="bg-transparent border border-orange-500 text-white p-3 rounded">
                    <option className="text-black">Height</option>
                    <option className="text-black">5'0 - 5'5"</option>
                    <option className="text-black">5'6 - 6'0"</option>
                    <option className="text-black">6'1+</option>
                </select>

                <select className="bg-transparent border border-orange-500 text-white p-3 rounded">
                    <option className="text-black">Weight</option>
                    <option className="text-black">50-70 kg</option>
                    <option className="text-black">71-90 kg</option>
                    <option className="text-black">91+ kg</option>
                </select>
            </div>
            <div className="flex flex-col gap-6 items-center justify-between w-full md:w-1/3">   
                {/* Center - Image */}
                <div className="items-center border border-orange-500 rounded-lg p-4 flex flex-col justify-center h-full">
                    <Image
                        src="/images/reg2.png"
                        alt="Focus Area Model"
                        width={300}
                        height={500}
                        className="object-contain"
                    />
                </div>
                {/* Bottom - Next Button */}
                <div>
                    <button className="bg-orange-500 text-black px-8 py-3 rounded hover:bg-orange-600 transition">
                        Next
                    </button>
                </div>
            </div>
            {/* Right - Checkboxes */}
            <div className="flex flex-col gap-4 md:w-1/4 w-full">
                {['Full body', 'Chest', 'Abs', 'Arm', 'Leg'].map((label) => (
                    <label key={label} className="flex items-center gap-2">
                        <input type="checkbox" className="accent-orange-500 w-5 h-5 rounded-md" />
                        {label}
                    </label>
                ))}
            </div>
        </div>
    );
}

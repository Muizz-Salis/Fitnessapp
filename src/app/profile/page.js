'use client';

import { useState } from 'react';

export default function Profile() {
    const [isEditing, setIsEditing] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        birthDate: '',
        address: '',
    });
    const [profileImage, setProfileImage] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(URL.createObjectURL(file));
        }
    };

    return (
        <div className="min-h-screen bg-black text-white flex">
            {/* Sidebar */}
            <aside className="hidden md:block w-1/4 bg-black p-6 border-r border-orange-500">
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 border-2 border-orange-500 rounded-full overflow-hidden">
                        {profileImage ? <img src={profileImage} alt="Profile" className="w-full h-full object-cover" /> : null}
                    </div>
                    <h2 className="mt-4 text-lg font-bold">{formData.name || 'Name'}</h2>
                    <p className="text-gray-400">Advance</p>
                </div>
                <div className="mt-6 text-center">
                    <p className="text-lg font-bold">5&apos;7</p>
                    <p className="text-gray-400">Height</p>
                    <p className="text-lg font-bold mt-2">68 kg</p>
                    <p className="text-gray-400">Weight</p>
                </div>
                {/* Targets */}
                <div className="mt-6 text-center">
                    <h3 className="text-orange-500 font-bold">Targets</h3>
                    <p className="text-gray-400 mt-2">Active Time 60mins per day</p>
                    <p className="text-gray-400 mt-2">⭕⭕⭕✅✅✅✅</p>
                    <p className="text-gray-400">10000 steps per day</p>
                </div>
            </aside>
            {/* Main content */}
            <main className="flex-1 p-10">
                {isEditing ? (
                    <>
                        <h1 className="text-orange-500 flex-1 text-2xl font-bold">Update Profile</h1>
                        <div className="border-2 border-dashed border-orange-500 rounded-lg p-10 text-center mt-6">
                            <p className="font-bold">Please Upload your Profile Picture to continue</p>
                            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="fileInput" />
                            <label htmlFor="fileInput" className="text-orange-500 mt-4 cursor-pointer">Drop your file here or browse</label>
                            <p className="text-gray-400 text-sm">Maximum uploaded file size: 05 MB</p>
                        </div>
                        {/* Form Fields */}
                        <div className="grid grid-cols-2 flex-1 gap-6 mt-6">
                            {['name', 'email', 'phone', 'birthDate', 'address'].map((field) => (
                                <div key={field} className="col-span-2 sm:col-span-1">
                                    <label className="block text-gray-400 mb-1">{field.replace(/([A-Z])/g, ' $1').trim()}</label>
                                    <input
                                        type="text"
                                        name={field}
                                        value={formData[field]}
                                        onChange={handleChange}
                                        className="w-full p-2 bg-gray-900 border border-orange-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        placeholder={`Enter your ${field}`}
                                    />
                                </div>
                            ))}
                        </div>
                        {/* Buttons */}
                        <div className="mt-6 flex gap-4">
                            <button
                                onClick={() => setIsEditing(false)}
                                className="bg-orange-500 text-black px-6 py-2 rounded-lg font-bold"
                            >
                                Save
                            </button>
                            <button className="border border-orange-500 px-6 py-2 rounded-lg font-bold text-orange-500">
                                Make Payment
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <h1 className="text-orange-500 text-2xl font-bold">Profile</h1>
                        <div className="border-2 border-orange-500 rounded-lg p-6 text-center mt-6">
                            <img src={profileImage || "/default-profile.png"} alt="Profile" className="w-40 mx-auto rounded-lg" />
                        </div>
                        <div className="mt-6 space-y-4">
                            {Object.entries(formData).map(([key, value]) => (
                                <p key={key} className="text-lg">
                                    <span className="text-orange-500 font-bold capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}: </span>
                                    {value || 'Not provided'}
                                </p>
                            ))}
                        </div>
                        <div className="mt-6">
                            <button
                                onClick={() => setIsEditing(true)}
                                className="bg-orange-500 text-black px-6 py-2 rounded-lg font-bold"
                            >
                                Edit Profile
                            </button>
                        </div>
                    </>
                )}
            </main>
        </div>
    );
}

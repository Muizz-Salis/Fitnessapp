"use client";

import React from 'react';
import Image from 'next/image';

const recipes = [
    { name: "High Protein Recipes", image: "/images/highprotein.png" },
    { name: "Low Carb Recipes", image: "/images/lowcarb.png" },
    { name: "Dairy Free Recipes", image: "/images/dairyfree.jpg" },
    { name: "Vegetarian Recipes", image: "/images/vegetarian.jpg" },
    { name: "Vegan Recipes", image: "/images/vegan.jpg" },
    { name: "Gluten Free Recipes", image: "/images/glutenfree.jpg" },
    { name: "Keto Recipes", image: "/images/keto.jpg" },
    { name: "Mediterranean Recipes", image: "/images/mediterranean.jpg" },
];

const NutritionGuide = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Navbar */}
            <nav className="flex justify-between items-center p-4 border-b border-orange-500">
                <h1 className="text-xl font-bold text-orange-500">FITZONE.</h1>
                <div className="flex space-x-4">
                    <a href="#" className="text-orange-400 hover:text-orange-300">Home</a>
                    <a href="#" className="hover:text-gray-300">About</a>
                </div>
            </nav>

            {/* Nutrition Guide Section */}``
            <div className="text-center py-10">
                <h2 className="text-3xl font-bold">Nutrition Guide</h2>
                <p className="mt-2 text-gray-400 px-4 max-w-2xl mx-auto">
                    The following are high-protein nutrition guides that will help you build strength, cardio, and all the fitness fuel you need.
                </p>
            </div>

            {/* Recipe Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4 pb-10">
                {recipes.map((recipe, index) => (
                    <button
                        key={index}
                        className="flex items-center space-x-4 p-3 rounded-lg transition-transform transform hover:scale-105 hover:bg-orange-500/20">
                        <Image
                            src={recipe.image}
                            alt={recipe.name}
                            width={100}
                            height={100}
                            className="rounded-lg object-cover w-[100px] h-[100px]"
                        />
                        <h3 className="text-lg text-orange-400 font-semibold">{recipe.name}</h3>
                    </button>
                ))}
            </div>

        </div>
    );
}

export default NutritionGuide;

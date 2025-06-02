"use client"

// app/recipes/page.tsx
import Image from 'next/image'
import React from 'react'
import { Clock4, ArrowRight } from "lucide-react"

const recipes = [
    {
        id: 1,
        image: '/images/lowcarb1.png', // put this in your public folder
        time: '30-40 mins',
        title: 'Egusi Soup',
    },
    {
        id: 2,
        image: '/images/lowcarb2.png',
        time: '35-45 mins',
        title: 'Okro Soup',
    },
    {
        id: 3,
        image: '/images/lowcarb3.jpg',
        time: '30-40 mins',
        title: 'Vegetable Soup',
    },
]

export default function RecipesPage() {
    return (
        <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center justify-center">
            <div className="border border-orange-500 p-8 rounded-xl max-w-6xl w-full">
                <h2 className="text-3xl font-bold text-center mb-2">Low Carb Recipes</h2>
                <p className="text-center text-gray-300 mb-6">
                    Start your day right with these easy peasy ideas. Some can even be prepared ahead of time!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {recipes.map(({ id, image, time }) => (
                        <div key={id} className="bg-transparent rounded-lg p-4 text-black flex flex-col items-center">
                            <Image
                                src={image}
                                alt="Recipe image"
                                width={300}
                                height={200}
                                className="rounded-lg rounded-lg object-cover w-full h-full"
                            />
                            <div className="text-sm text-gray-700 my-2 flex items-center gap-2">
                                <Clock4 className="w-4 h-4" />
                                {time}
                            </div>
                            <button className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition mt-auto flex items-center justify-center">
                                View Full Recipe
                                <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

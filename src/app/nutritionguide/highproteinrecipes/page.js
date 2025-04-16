"use client"

// app/recipes/page.js
import React from 'react'
import RecipeList from "@/components/RecipeList";

const highproteinRecipes = [
    {
        id: 1,
        image: '/images/highprotein2.png',
        time: '30-40 mins',
        title: 'Egusi Soup',
    },
    {
        id: 2,
        image: '/images/highprotein3.png',
        time: '35-45 mins',
        title: 'Okro Soup',
    },
    {
        id: 3,
        image: '/images/highprotein1.png',
        time: '30-40 mins',
        title: 'Vegetable Soup',
    },
];

export default function Page() {
    return (
        <div>
            <RecipeList
                title="High Protein Recipes"
                recipes={highproteinRecipes}
            />
        </div>
    )
}

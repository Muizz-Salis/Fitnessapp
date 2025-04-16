"use client"

// app/recipes/page.js
import React from 'react'
import RecipeList from "@/components/RecipeList";

const lowcarbRecipes = [
    {
        id: 1,
        image: '/images/lowcarb1.png',
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
];

export default function Page() {
    return (
        <div>
            <RecipeList
                title="High Protein Recipes"
                recipes={lowcarbRecipes}
            />
        </div>
    )
}

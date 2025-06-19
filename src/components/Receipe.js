import React from 'react'
import Image from 'next/image'
import { IoArrowBack } from 'react-icons/io5'
import { Search, Bell, ChevronDown, ArrowLeft } from 'lucide-react'

const Recipe = () => {
  return (
    <div className="min-h-screen bg-black text-white">
    

      {/* Main Content */}
      <main className="relative">
        {/* Back Button */}
        <div className="absolute top-8 left-8 z-10">
          <button className="text-orange-500">
            <ArrowLeft className="w-8 h-8" />
          </button>
        </div>

        {/* Recipe Image */}
        <div className="relative">
          <Image
            src="/images/spag.jpg"
            alt="Peppered spaghetti"
            width={1200}
            height={800}
            className="w-full h-[calc(100vh-72px)] object-cover"
            priority
          />

          {/* Prep Time Badge */}
          <div className="absolute bottom-24 left-24">
            <div className="rounded-full border-2 border-orange-500 bg-black/50 p-4 w-36 h-36 flex flex-col items-center justify-center text-center">
              <div className="text-2xl font-bold">30 Mins</div>
              <div className="text-lg">Prep Time</div>
            </div>
          </div>
        </div>
      </main>

      <div className="bg-black min-h-screen text-white p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Two Columns */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left Column */}
          <div>
            <h1 className="text-orange-500 text-4xl font-bold mb-6">Peppered spaghetti</h1>
            <p className="text-gray-100 mb-6 leading-relaxed">
              Peppered spaghetti is a delicious and simple dish that combines the rich flavors of spaghetti with black
              pepper and other ingredients for a delightful meal. Here's a basic recipe to prepare peppered spaghetti:
            </p>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/images/friedspagpan.jpg"
                alt="Peppered spaghetti with ingredients"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Column - Ingredients */}
          <div>
            <h2 className="text-orange-500 text-4xl font-bold mb-8">Ingredients (6 servings)</h2>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-xl">Spaghetti</span>
                <span className="text-xl">200g</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xl">Olive oil</span>
                <span className="text-xl">2 tsp</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xl">Garlic</span>
                <span className="text-xl">2 clv</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xl">Black pepper</span>
                <span className="text-xl">2 tsp</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xl">Red pepper</span>
                <span className="text-xl">1 tsp</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xl">Salt</span>
                <span className="text-xl">1 tsp</span>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>


    <div className="bg-black min-h-screen text-white py-8 md:px-12 lg:px-24">
      <div className="space-y-8">
        {/* Main Title */}
        <h2 className="text-orange-500 text-4xl font-bold">How to make French Toast</h2>

        {/* Introduction */}
        <p className="text-gray-100 text-lg leading-relaxed">
          Every home cook has their own twist on basic Peppered spaghetti, but most variations contain the following
          ingredients:
        </p>

        {/* Cooking Steps */}
        <div className="space-y-8">
          {/* Step 1 */}
          <div>
            <h3 className="text-xl text-gray-100 mb-4">1. Cook the Spaghetti:</h3>
            <ul className="space-y-3 pl-6">
              <li className="text-gray-100 leading-relaxed list-disc">Bring a large pot of salted water to a boil.</li>
              <li className="text-gray-100 leading-relaxed list-disc">
                Add the spaghetti and cook according to package instructions, usually around 8-10 minutes, until al
                dente.
              </li>
              <li className="text-gray-100 leading-relaxed list-disc">
                Reserve about ½ cup of pasta cooking water, then drain the spaghetti.
              </li>
            </ul>
          </div>

          {/* Step 2 */}
          <div>
            <h3 className="text-xl text-gray-100 mb-4">2. Prepare the Sauce:</h3>
            <ul className="space-y-3 pl-6">
              <li className="text-gray-100 leading-relaxed list-disc">
                In a large skillet, heat the olive oil over medium heat.
              </li>
              <li className="text-gray-100 leading-relaxed list-disc">
                Add the minced garlic and sauté for about 30 seconds until fragrant, but not browned.
              </li>
              <li className="text-gray-100 leading-relaxed list-disc">
                Stir in the freshly ground black pepper and red pepper flakes (if using) and cook for an additional 30
                seconds to infuse the oil with flavor.
              </li>
            </ul>
          </div>

          {/* Step 3 */}
          <div>
            <h3 className="text-xl text-gray-100 mb-4">3. Combine Spaghetti and Sauce:</h3>
            <ul className="space-y-3 pl-6">
              <li className="text-gray-100 leading-relaxed list-disc">
                Add the cooked spaghetti to the skillet and toss it with the garlic-olive oil mixture.
              </li>
              <li className="text-gray-100 leading-relaxed list-disc">
                If the spaghetti seems dry, add a little of the reserved pasta water to create a light sauce.
              </li>
              <li className="text-gray-100 leading-relaxed list-disc">Season with salt to taste.</li>
            </ul>
          </div>

          {/* Step 4 */}
          <div>
            <h3 className="text-xl text-gray-100 mb-4">4. Serve:</h3>
            <ul className="space-y-3 pl-6">
              <li className="text-gray-100 leading-relaxed list-disc">Divide the peppered spaghetti among plates.</li>
              <li className="text-gray-100 leading-relaxed list-disc">
                Top with grated Parmesan cheese and garnish with fresh parsley if desired.
              </li>
              <li className="text-gray-100 leading-relaxed list-disc">Serve immediately while hot.</li>
            </ul>
          </div>
        </div>

        {/* Tips Section */}
        <div className="space-y-6">
          <h2 className="text-orange-500 text-4xl font-bold">Tips</h2>
          <ul className="space-y-4 pl-6">
            <li className="text-gray-100 leading-relaxed list-disc">
              Add protein or veggies: You can enhance the dish by adding grilled chicken, shrimp, or sautéed vegetables.
            </li>
            <li className="text-gray-100 leading-relaxed list-disc">
              Substitute spaghetti: If you prefer another type of pasta, feel free to use fettuccine, linguine, or a
              gluten-free alternative.
            </li>
            <li className="text-gray-100 leading-relaxed list-disc">
              Experiment with spices: You can add other seasonings like Italian herbs for additional flavor.
            </li>
          </ul>
        </div>

        {/* Closing */}
        <p className="text-gray-100 text-lg pt-4">Enjoy your homemade peppered spaghetti!</p>
      </div>
    </div>

    <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] h-px bg-gradient-to-r from-orange-500/20 via-orange-500 to-orange-500/20 shadow-[0_0_5px_0_rgba(255,138,0,0.3)]" />





    </div>
  )
}

export default Recipe
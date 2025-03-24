export default function Component1() {
  return (
    <div className="min-h-screen bg-black">
      <section>
        {/* First Section */}
        <div className="flex flex-col lg:flex-row gap-4 justify-center p-6 items-stretch ">
          <div className="flex flex-col gap-2  h-full lg:w-1/3  ">
            <div className="relative border-2 border-orange-500 rounded-lg p-8 pb-28 h-full bg-black">
              <h2 className="text-3xl font-bold text-[#EC7807] mb-4">
                Join for Free
              </h2>
              <p className=" mx-auto my-4 text-gray-400 ">
                Reach your fitness goals or maintain your healthy lifestyle with
                professional training and support from a positive and active
                online community.
              </p>

              <ul className="list-disc mx-2 mb-12 text-white pl-5">
                <li>600 Full-Lenght Workout Video</li>
                <li>Customizable Calendar</li>
                <li>Health Recipes</li>
                <li>Health and Fitness Articles</li>
                <li>Positive and Supportive Online Community</li>
                <li>No Credit Card Nedeed</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row h-full gap-2 lg:w-1/3 ">
            <div className="relative border-2 border-orange-500 rounded-lg p-8 h-full bg-black">
              <h2 className="text-3xl font-bold text-[#EC7807] mb-4">
                Advance
              </h2>
              <p className=" mx-auto my-4 text-gray-400 ">
                WO Plus includes everything you get with a free membership and
                adds brand new convenience features, fitness tools, and unique
                content.
              </p>
              <ul className="list-disc mx-2 mb-8 text-white pl-5">
                <li>Ads-Free Website and Videos</li>
                <li>Surprise Me Workout Selection Tool</li>
                <li>Statistics for Your Activities</li>
                <li>Enter and Track Custom Workouts</li>
                <li>FB Plus Exclusive Workouts</li>
                <li>Trackers to See Your Progress</li>
                <li>FB Plus Content and Challenges</li>
                <li>Video Tags</li>
                <li>FB Plus Routines</li>
                <li>Rest Day Complete</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-2 lg:w-1/3 h-full items-center justify-center ">
            <div className="relative border-2 border-orange-500 rounded-lg p-8 h-full bg-black">
              <h2 className="text-3xl font-bold text-[#EC7807] mb-4">
                Professional
              </h2>
              <p className=" mx-auto my-4 text-gray-400 ">
                WO Plus includes everything you get with a free membership and
                adds brand new convenience features, fitness tools, and unique
                content.
              </p>

              <ul className="list-disc mx-2 mb-8 text-white pl-5">
                <li>Ads-Free Website and Videos</li>
                <li>Surprise Me Workout Selection Tool</li>
                <li>Statistics for Your Activities</li>
                <li>Enter and Track Custom Workouts</li>
                <li>FB Plus Exclusive Workouts</li>
                <li>Trackers to See Your Progress</li>
                <li>FB Plus Content and Challenges</li>
                <li>Video Tags</li>
                <li>FB Plus Routines</li>
                <li>Rest Day Complete</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Second Section */}
        <div className="flex flex-col lg:flex-row gap-4 justify-center p-2  items-stretch ">
          <div className="flex flex-col gap-2 lg:w-1/3  ">
            <div className="relative border-2 border-orange-500 rounded-lg p-2 bg-gray-800">
              <img
                src="/vector.svg"
                alt="Beginner"
                className="absolute top-4 right-4 w-12 h-12  mx-auto shadow-lg"
              />
              <div className="mt-16">
                <p className=" text-[#EC7807] mb-2"> Beginner Plan</p>
                <div className=" text-[#EC7807] mb-4 flex">
                  <h2 className="text-4xl font-bold ">#0</h2>{" "}
                  <span className=" mt-4">/Month</span>
                </div>
              </div>

              <ul className="list-disc mx-2 mb-28 text-white pl-5">
                <li>600 Full-Lenght Workout Video</li>
                <li>Customizable Calendar</li>
                <li>Health Recipes</li>
                <li>Health and Fitness Articles</li>
                <li>Positive and Supportive Online Community</li>
                <li>No Credit Card Nedeed</li>
              </ul>
              <button className="bg-orange-500 w-full items-center justify-center flex mt-4 text-black py-5 text-lg  mx-auto rounded-lg font-semibold hover:bg-orange-800 transition duration-300">
                Join Now
              </button>
            </div>
          </div>

          <div className="flex flex-col  gap-2 lg:w-1/3 ">
            <div className="relative border-2 border-orange-500 rounded-lg p-2 bg-gray-800">
              <img
                src="/vector2.svg"
                alt="Advance"
                className="absolute top-4 right-4 w-12 h-12  mx-auto shadow-lg"
              />
              <div className="mt-16">
                <p className=" text-[#EC7807] mb-2">Advance Plan</p>
                <div className=" text-[#EC7807] mb-4 flex">
                  <h2 className="text-4xl font-bold ">#10,000</h2>{" "}
                  <span className=" mt-4">/Month</span>
                </div>
              </div>

              <ul className="list-disc mx-2 mb-8 text-white pl-5">
                <li>Ads-Free Website and Videos</li>
                <li>Surprise Me Workout Selection Tool</li>
                <li>Statistics for Your Activities</li>
                <li>Enter and Track Custom Workouts</li>
                <li>FB Plus Exclusive Workouts</li>
                <li>Trackers to See Your Progress</li>
                <li>FB Plus Content and Challenges</li>
                <li>Video Tags</li>
                <li>FB Plus Routines</li>
                <li>Rest Day Complete</li>
              </ul>
              <button className="bg-orange-500 w-full items-center justify-center flex mt-4 text-black py-5 text-lg  mx-auto rounded-lg font-semibold hover:bg-orange-800 transition duration-300">
                Join Now
              </button>
            </div>
          </div>

          <div className="flex flex-col  gap-2 lg:w-1/3 ">
            <div className="relative border-2 border-orange-500 rounded-lg p-2 bg-gray-800">
              <img
                src="/vector3.svg"
                alt="Professional"
                className="absolute top-4 right-4 w-12 h-12  mx-auto shadow-lg"
              />
              <div className="mt-16">
                <p className=" text-[#EC7807] mb-2">Professional Plan</p>
                <div className=" text-[#EC7807] mb-4 flex">
                  <h2 className="text-4xl font-bold ">#15,000</h2>{" "}
                  <span className=" mt-4">/Month</span>
                </div>
              </div>

              <ul className="list-disc mx-2 mb-8 text-white pl-5">
                <li>Ads-Free Website and Videos</li>
                <li>Surprise Me Workout Selection Tool</li>
                <li>Statistics for Your Activities</li>
                <li>Enter and Track Custom Workouts</li>
                <li>FB Plus Exclusive Workouts</li>
                <li>Trackers to See Your Progress</li>
                <li>FB Plus Content and Challenges</li>
                <li>Video Tags</li>
                <li>FB Plus Routines</li>
                <li>Rest Day Complete</li>
              </ul>
              <button className="bg-orange-500 w-full items-center justify-center flex mt-4 text-black py-5 text-lg  mx-auto rounded-lg font-semibold hover:bg-orange-800 transition duration-300">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

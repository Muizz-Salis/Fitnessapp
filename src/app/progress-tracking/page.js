"use client";

import Navbar2 from "@/components/Navbar2";

export default function ProgressTracking() {
  return (
    <div className="min-h-screen py-6 bg-black">
      <section
        className="relative items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/darkbck.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>

        <Navbar2 />

        <div className="relative z-10 py-4 container-fluid mx-auto px-8 ">
          <div className="flex flex-col lg:flex-row gap-2">
            {/* First Column - Profile Section */}
            <div
              className="lg:w-1/5 p-6 rounded-lg shadow-lg relative 
                before:absolute before:top-0 before:right-0 before:w-[2px] before:h-full 
                before:bg-gradient-to-b before:from-black before:via-orange-500 before:to-black"
            >
              <div className="text-center p-4 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-gradient-to-r before:from-black before:via-orange-500 before:to-black">
                <img
                  src="/man.png"
                  alt="Ponmile"
                  className="w-24 h-24 border-2 border-orange-500 rounded-full mx-auto mb-4"
                />
                <h2 className="text-xl text-white text-center">
                  Ibraheem Olawale
                </h2>
                <p className="text-gray-400 text-center">Advance</p>
              </div>
              <div className="text-center flex p-2 gap-2 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-gradient-to-r before:from-black before:via-orange-500 before:to-black">
                <img
                  src="/boyrun.png"
                  alt="run"
                  className="w-34 h-45  mx-auto mb-4"
                />
                <div className="py-8">
                  <h2 className="text-xl text-white text-center">5'7" </h2>
                  <p className="text-gray-400 text-center">Height</p>
                  <br />
                  <h2 className="text-xl text-white flex text-center">
                    68{" "}
                    <span className=" text-sm mt-1">
                      <p>kg</p>
                    </span>{" "}
                  </h2>
                  <p className="text-gray-400 text-center">Weight</p>
                </div>
              </div>
              <div className="text-center p-2 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-gradient-to-r before:from-black before:via-orange-500 before:to-black">
                <img
                  src="/target.svg"
                  alt="Target"
                  className="w-50 h-50  mx-auto mb-4"
                />
              </div>
            </div>

            {/* Second Column*/}
            <div className="lg:w-2/5 relative pt-2  ">
              <div className="flex px-3   mx-auto flex-col relative w-2/2 lg:flex-row gap-5">
                <div
                  className="relative w-1/2 mt-2  pt-6 bg-black  border-t-2 border-b-2 rounded-lg  border-orange-500 overflow-hidden  before:absolute before:top-0 before:right-0 before:w-[1px] before:h-full before:bg-gradient-to-b before:from-orange-500 before:via-black before:to-orange-500
  after:absolute after:top-0 after:left-0 after:w-[1px] after:h-full after:bg-gradient-to-b after:from-orange-500 after:via-black after:to-orange-500"
                >
                  <h2 className="text-xl font-bold text-white text-center">Distance</h2>
                  <img
                    src="/distance.png"
                    alt="Target"
                    className="w-50 h-50  mx-auto mb-4"
                  />
                </div>
                <div
                  className="relative w-1/2 mt-2  pt-6 bg-black  border-t-2 border-b-2 rounded-lg  border-orange-500 overflow-hidden  before:absolute before:top-0 before:right-0 before:w-[1px] before:h-full before:bg-gradient-to-b before:from-orange-500 before:via-black before:to-orange-500
  after:absolute after:top-0 after:left-0 after:w-[1px] after:h-full after:bg-gradient-to-b after:from-orange-500 after:via-black after:to-orange-500"
                >
                  <h2 className="text-xl font-bold text-white text-center">Calories</h2>
                  <img
                    src="/calories.png"
                    alt="Target"
                    className="w-50 h-50  mx-auto mb-4"
                  />
                </div>
              </div>
              <div
                className="relative mx-auto mt-2 p-2 pt-6 bg-black  border-t-2 border-b-2 rounded-lg  border-orange-500 overflow-hidden  before:absolute before:top-0 before:right-0 before:w-[1px] before:h-full before:bg-gradient-to-b before:from-orange-500 before:via-black before:to-orange-500
  after:absolute after:top-0 after:left-0 after:w-[1px] after:h-full after:bg-gradient-to-b after:from-orange-500 after:via-black after:to-orange-500"
              >
                <img src="/stepschart.svg" alt="Target" className="w-50 h-50  mx-auto mb-4" />
              </div>

              <div
                className="relative mt-2   p-4 pt-8 bg-black  border-t-2 border-b-2 border-orange-500 overflow-hidden rounded-lg   before:absolute before:top-0 before:right-0 before:w-[1px] before:h-full before:bg-gradient-to-b before:from-orange-500 before:via-black before:to-orange-500
  after:absolute after:top-0 after:left-0 after:w-[1px] after:h-full after:bg-gradient-to-b after:from-orange-500 after:via-black after:to-orange-500"
              >
                <img src="/weigh.svg" alt="Target" className="w-50 h-50  mx-auto mb-4" />
              </div>
            </div>

            {/* Third Column*/}
            <div className="lg:w-2/5  pt-2 rounded-lg shadow-lg">
              <div className="flex flex-col lg:flex-row gap-2">
                <div className="lg:w-1/2 mx-auto relative   ">
                  <div
                    className="relative mx-auto mt-2 pt-2  pl-4 pr-4 bg-black  border-t-2 border-b-2 border-orange-500 overflow-hidden rounded-lg   before:absolute before:top-0 before:right-0 before:w-[2px] before:h-full before:bg-gradient-to-b before:from-orange-500 before:via-black before:to-orange-500
  after:absolute after:top-0 after:left-0 after:w-[2px] after:h-full after:bg-gradient-to-b after:from-orange-500 after:via-black after:to-orange-500"
                  >
                    <div className="p-4 relative w-full mx-auto ">
                      <img
                        src="/temprature.svg"
                        alt="temperature"
                        className="w-50 h-50 mx-auto mb-1"
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 mx-auto relative  ">
                  <div
                    className="relative mx-auto mt-2 p-2 bg-black  border-t-2 border-b-2 border-orange-500 overflow-hidden rounded-lg   before:absolute before:top-0 before:right-0 before:w-[2px] before:h-full before:bg-gradient-to-b before:from-orange-500 before:via-black before:to-orange-500
  after:absolute after:top-0 after:left-0 after:w-[2px] after:h-full after:bg-gradient-to-b after:from-orange-500 after:via-black after:to-orange-500"
                  >
                    <div className="text-center p-2 relative ">
                      <img
                        src="/heartrate.svg"
                        alt="heartrate"
                        className="w-45 h-45 mx-auto mb-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="relative mt-2   p-2 pt-4 bg-black  border-t-2 border-b-2 border-orange-500 overflow-hidden rounded-lg   before:absolute before:top-0 before:right-0 before:w-[1px] before:h-full before:bg-gradient-to-b before:from-orange-500 before:via-black before:to-orange-500
  after:absolute after:top-0 after:left-0 after:w-[1px] after:h-full after:bg-gradient-to-b after:from-orange-500 after:via-black after:to-orange-500"
              >
                <div className=" mx-auto ">
                  

            <div className=" p-4 ">
                   <h2 className="text-xl font-bold mb-4 text-white text-center">Active time</h2>
                      <img
                        src="/activetime.svg"
                        alt="active time"
                        className="w-4/5 h-75  mx-auto"
                      />
                
                  </div>
                </div>
              </div>

              <div
                className="relative mt-2 pb-4  pt-2  bg-black  border-t-2 border-b-2 border-orange-500 overflow-hidden rounded-lg   before:absolute before:top-0 before:right-0 before:w-[1px] before:h-full before:bg-gradient-to-b before:from-orange-500 before:via-black before:to-orange-500
  after:absolute after:top-0 after:left-0 after:w-[1px] after:h-full after:bg-gradient-to-b after:from-orange-500 after:via-black after:to-orange-500"
              >
                <h2 className="text-xl font-bold mb-4 text-white text-center">Sleep</h2>
              <img
                src="/sleep.svg"
                alt="Frame"
                className="w-3/5 h-40 mt-2 mx-auto"
              />

              </div>


            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

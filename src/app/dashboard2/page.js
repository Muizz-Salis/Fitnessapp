"use client";

import Navbar2 from "@/components/Navbar2";

export default function Dashboard2() {
  return (
    <div className="min-h-screen py-6 bg-black">
      <section
        className="relative   items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/darkbck.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>

        <Navbar2 />

        <div className="relative z-10 py-4 container-fluid mx-auto px-8 ">
          {/* Responsive Grid */}
          <div className="flex flex-col lg:flex-row gap-2">
            {/* First Column - Profile Section */}
            <div
              className="lg:w-1/5 p-6 rounded-lg shadow-lg relative 
                before:absolute before:top-0 before:right-0 before:w-[2px] before:h-full 
                before:bg-gradient-to-b before:from-black before:via-orange-500 before:to-black"
            >
              <div className="text-center p-4 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-gradient-to-r before:from-black before:via-orange-500 before:to-black">
                <img
                  src="/ponmile.jpeg"
                  alt="Profile"
                  className="w-24 h-24 border-2 border-orange-500 rounded-full mx-auto mb-4"
                />
                <h2 className="text-xl text-white text-center">
                  Adefisayo Ebunlomo
                </h2>
                <p className="text-gray-400 text-center">Advance</p>
              </div>
              <div className="text-center flex p-2 gap-2 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-gradient-to-r before:from-black before:via-orange-500 before:to-black">
                <img
                  src="/imagerun.svg"
                  alt="Profile"
                  className="w-34 h-45  mx-auto mb-4"
                />
                <div className="py-8">
                  <h2 className="text-xl text-white text-center">6'0" </h2>
                  <p className="text-gray-400 text-center">Height</p>
                  <br />
                  <h2 className="text-xl text-white flex text-center">
                    55{" "}
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
                  alt="Profile"
                  className="w-50 h-50  mx-auto mb-4"
                />
              </div>
            </div>

            {/* Second Column - Some Other Segment */}
            <div className="lg:w-2/5 mx-auto relative pt-2  ">
              <div
                className="relative mx-auto mt-2  pt-6 bg-black  border-t-2 border-b-2 rounded-lg  border-orange-500 overflow-hidden  before:absolute before:top-0 before:right-0 before:w-[1px] before:h-full before:bg-gradient-to-b before:from-orange-500 before:via-black before:to-orange-500
  after:absolute after:top-0 after:left-0 after:w-[1px] after:h-full after:bg-gradient-to-b after:from-orange-500 after:via-black after:to-orange-500"
              >
                <h3 className="text-lg text-center text-white mb-2">Goal</h3>
                <p className="text-center text-white mb-10">
                  <span className="text-3xl font-extrabold">8.000</span>{" "}
                  <span className="fw-bolder">steps</span>
                </p>
                <div className="relative w-fit mx-auto">
                  <div className="text-center rounded-md mx-auto w-12 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-orange-500 bg-white z-10">
                    100%
                  </div>
                  <div className="text-center text-white rounded-md mx-auto w-12 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-5 z-100 mt-36">
                  
                  <p className="text-3xl font-extrabold">82%</p>
                  <span className="fw-bolder">steps</span>
                  

                  </div>
                  <img
                    src="/semicircle.svg"
                    alt="Profile"
                    className="mx-auto w-70 h-50"
                  />
                </div>
              </div>
              <div
                className="relative mx-auto mt-2 p-2 pt-6 bg-black  border-t-2 border-b-2 rounded-lg  border-orange-500 overflow-hidden  before:absolute before:top-0 before:right-0 before:w-[1px] before:h-full before:bg-gradient-to-b before:from-orange-500 before:via-black before:to-orange-500
  after:absolute after:top-0 after:left-0 after:w-[1px] after:h-full after:bg-gradient-to-b after:from-orange-500 after:via-black after:to-orange-500"
              >
                <div className="flex relative mb-4 justify-between w-full mx-auto ">
                  <div className="text-lg text-center text-white mb-2 w-full">
                    <p className="fw-bold">avg.time</p>
                    <p className="text-3xl font-extrabold">40 min</p>
                  </div>
                  <div className="text-lg text-center text-white mb-2 w-full">
                    <p className="fw-bold">Intensity</p>
                    <p className="text-3xl font-extrabold">Low</p>
                  </div>
                </div>
                <div className="flex  justify-between w-full mx-auto ">
                  <div className="text-lg text-center text-white mb-2 w-full">
                    <p className="fw-bold">Level</p>
                    <p className="text-3xl font-extrabold">Beginner</p>
                  </div>
                  <div className="text-lg text-center text-white mb-2 w-full">
                    <p className="fw-bold">Calories</p>
                    <p className="text-3xl font-extrabold">220</p>
                  </div>
                </div>
              </div>

              <div
                className="relative mt-2   p-4 pt-8 bg-black  border-t-2 border-b-2 border-orange-500 overflow-hidden rounded-lg   before:absolute before:top-0 before:right-0 before:w-[1px] before:h-full before:bg-gradient-to-b before:from-orange-500 before:via-black before:to-orange-500
  after:absolute after:top-0 after:left-0 after:w-[1px] after:h-full after:bg-gradient-to-b after:from-orange-500 after:via-black after:to-orange-500"
              >
                <div className="flex justify-between w-full mx-auto ">
                  <div className="text-lg text-center text-white mb-2 w-full">
                    <p className="fw-bold">Steps</p>
                    <p className="text-3xl font-extrabold">6.160</p>
                  </div>
                  <div className="text-lg text-center text-white mb-2 w-full">
                    <p className="fw-bold">Calories</p>
                    <p className="text-3xl font-extrabold">402</p>
                  </div>
                  <div className="text-lg text-center text-white mb-2 w-full">
                    <p className="fw-bold">Experiences</p>
                    <p className="text-3xl font-extrabold">57 min</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Column - Charts & Reviews */}
            <div className="lg:w-2/5  pt-2 rounded-lg shadow-lg">
              <div className="flex flex-col lg:flex-row gap-2">
                <div className="lg:w-2/3 mx-auto relative   ">
                  <div
                    className="relative mx-auto mt-2 pt-2  pl-4 pr-4 bg-black  border-t-2 border-b-2 border-orange-500 overflow-hidden rounded-lg   before:absolute before:top-0 before:right-0 before:w-[2px] before:h-full before:bg-gradient-to-b before:from-orange-500 before:via-black before:to-orange-500
  after:absolute after:top-0 after:left-0 after:w-[2px] after:h-full after:bg-gradient-to-b after:from-orange-500 after:via-black after:to-orange-500"
                  >
                    <div className="flex relative mb-6  justify-between w-full mx-auto ">
                      <img
                        src="/10mins.jpeg"
                        alt="Profile"
                        className="w-50 h-50 rounded-lg  mx-auto mb-1"
                      />
                    </div>
                    <div className="flex justify-between w-full mx-auto ">
                      <div className="text-lg text-center text-white mb-1 w-full">
                        <p className="fw-bold">The Pigeon Pose</p>
                      </div>
                      <div className=" mb-2 w-full">
                        <img
                          src="/down.svg"
                          alt="Profile"
                          className="w-6 h-6  rounded-lg  mx-auto mb-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 mx-auto relative  ">
                  <div
                    className="relative mx-auto mt-2 p-2 bg-black  border-t-2 border-b-2 border-orange-500 overflow-hidden rounded-lg   before:absolute before:top-0 before:right-0 before:w-[2px] before:h-full before:bg-gradient-to-b before:from-orange-500 before:via-black before:to-orange-500
  after:absolute after:top-0 after:left-0 after:w-[2px] after:h-full after:bg-gradient-to-b after:from-orange-500 after:via-black after:to-orange-500"
                  >
                    <div className="text-center  p-4 relative ">
                      <img
                        src="/ponmile.jpeg"
                        alt="Profile"
                        className="w-24 h-24 border-2 border-orange-500 rounded-full mx-auto mb-4"
                      />
                      <h2 className="text-xl mb-2 text-white text-center">
                        Adefisayo Ebunlomo
                      </h2>
                      <p className="text-gray-400 my-2 text-center">Advance</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="relative mt-2   p-2 pt-4 bg-black  border-t-2 border-b-2 border-orange-500 overflow-hidden rounded-lg   before:absolute before:top-0 before:right-0 before:w-[1px] before:h-full before:bg-gradient-to-b before:from-orange-500 before:via-black before:to-orange-500
  after:absolute after:top-0 after:left-0 after:w-[1px] after:h-full after:bg-gradient-to-b after:from-orange-500 after:via-black after:to-orange-500"
              >
                <div className="flex justify-between w-2/3 mx-auto ">
                  <div className="text-lg text-center text-white  w-full">
                    <p className="text-2xl font-extrabold">Let's go</p>
                  </div>

                  <div className="text-lg text-center text-white w-full">
                    <button>
                    <img
                        src="/arrow_right.svg"
                        alt="Profile"
                        className="w-8 h-8  mx-auto"
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div
                className="relative mt-2   p-2 pt-4 bg-black  border-t-2 border-b-2 border-orange-500 overflow-hidden rounded-lg   before:absolute before:top-0 before:right-0 before:w-[1px] before:h-full before:bg-gradient-to-b before:from-orange-500 before:via-black before:to-orange-500
  after:absolute after:top-0 after:left-0 after:w-[1px] after:h-full after:bg-gradient-to-b after:from-orange-500 after:via-black after:to-orange-500"
              >
                <div className="flex justify-between  mx-auto ">
                  <div className="text-lg text-center text-white  w-full">
                  <img
                        src="/yellow.png"
                        alt="Profile"
                        className="w-12 h-12 border-2 rounded-full mx-auto mb-4"
                      />
                  </div>
                  <div className="text-lg text-white  w-full">
                  <p className="text-2xl font-extrabold">Yoga with Sarah</p>
                    <p className="text-1xl">40 min</p>
                  </div>
                  <div className="text-lg text-center text-white w-full">
                    <button>
                    <img
                        src="/check.svg"
                        alt="Profile"
                        className="w-8 h-8  mx-auto"
                      />
                    </button>
                  </div>
                </div>
              </div>

              <img
                        src="/Frame.png"
                        alt="Profile"
                        className="w-full h-60 mt-2 mx-auto"
                      />

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

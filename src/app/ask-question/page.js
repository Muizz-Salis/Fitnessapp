"use client";

import Navbar2 from "@/components/Navbar2";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AskQuestion() {
  const router = useRouter();

  return (
    <div className=" py-6 bg-black">
      <section
        className="relative   items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/darkbck.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>

        <Navbar2 />

        <div className="relative text-center  max-w-5xl mx-auto">
          <h2 className="text-4xl text-white my-4 font-bold mb-4">
            {" "}
            Meet Our Trainers{" "}
          </h2>
          <p className="text-white  mb-1">
            Our trainers are here to inspire and guide you on your fitness
            journey. Whether you’re a beginner or an experienced athlete, you’ll
            find the right support and encouragement to achieve your goals. Come
            meet our trainers and start your fitness journey today!
          </p>
        </div>
          {/* Trainers section */}
        <main className="max-w-8xl mx-auto">
          {/* First trainer */}
          <div className="flex relative px-8 ms-6 before:absolute before:bottom-0 before:left-0 before:w-full before:h-[4px] before:bg-gradient-to-r before:from-black before:via-orange-500 before:to-black">
            <div className="relative flex">
              <Image
                src="/yan-yan.jpeg"
                alt="Yan Yan Trainer"
                width={130}
                height={170}
                className="rounded-lg relative border border-orange-500 my-6"
              />
            </div>
            <div className=" relative ml-6">
              <h2 className="text-4xl font-bold mb-2 my-8 text-orange-500 ">
                Yan Yan
              </h2>
              <p className="text-white my-8 mb-1">
                Functional Training, Muscle <br />
                Gain, Conditioning
              </p>

              <div className="mt-4 flex items-center space-x-2 cursor-pointer text-orange-500 hover:text-white transition">
                <img
                  src="/chat_icon.svg"
                  alt="Chat Icon"
                  className="w-12 h-12 mx-auto text-orange-500"
                />
              </div>
            </div>
          </div>
          {/* Second trainer */}
          <div className="flex relative px-8 ms-6 before:absolute before:bottom-0 before:left-0 before:w-full before:h-[4px] before:bg-gradient-to-r before:from-black before:via-orange-500 before:to-black">
            <div className="relative flex">
              <Image
                src="/ponmile.jpeg"
                alt="ponmile Trainer"
                width={130}
                height={170}
                className="rounded-lg relative border border-orange-500 my-6"
              />
            </div>
            <div className=" relative ml-6">
              <h2 className="text-4xl font-bold mb-2 my-8 text-orange-500 ">
                Ponmile
              </h2>
              <p className="text-white my-8 mb-1">
                Hatha Yoga, Vinyasa Flow, <br />
                Stress Management
              </p>

              <div className="mt-4 flex items-center space-x-2 cursor-pointer text-orange-500 hover:text-white transition">
                <img
                  src="/chat_icon.svg"
                  alt="Chat Icon"
                  className="w-12 h-12 mx-auto text-orange-500"
                />
              </div>
            </div>
          </div>
          {/* Third trainer */}
          <div className="flex relative px-8 ms-6 ">
            <div className="relative flex">
              <Image
                src="/winners.jpeg"
                alt="winners Trainer"
                width={150}
                height={300}
                className="rounded-lg relative border border-orange-500 my-6"
              />
            </div>
            <div className=" relative ml-6">
              <h2 className="text-4xl font-bold mb-2 my-8 text-orange-500 ">
                Winners
              </h2>
              <p className="text-white my-8 mb-1">
                Athletic Training, Endurance <br />
                Coaching, Youth Fitness
              </p>

              <div className="mt-4 flex items-center space-x-2 cursor-pointer text-orange-500 hover:text-white transition">
                <img
                  src="/chat_icon.svg"
                  alt="Chat Icon"
                  className="w-12 h-12 mx-auto text-orange-500"
                />
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

import Image from "next/image";


export default function ThankYou() {
    return (
        <div className="min-h-screen bg-black">
        <section 
        className="relative h-screen pt-8 items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/Thanks.jpeg')" }} >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div>
                    <p className=" mx-12 relative text-2xl text-white font-bold mb-4">FI <span className="bg-orange-500 text-white  rounded-tl-lg rounded-br-lg">
      t
    </span> ZONE.</p>
                </div>
                <div className="relative z-5 text-center px-6 max-w-2xl mx-auto">
                    <h2 className="text-4xl text-[#EC7807] font-bold mb-4">
                        Thank you !!
                    </h2>
                     <Image 
                                  src="/Ok.png" 
                                  alt="Personal Training" 
                                  width={200}
                                  height={300}
                                  className="rounded-lg my-6 mx-auto shadow-lg"
                                />

                    <p className="text-white mb-8">
                    We're thrilled to have you join our community. Whether you're just starting your fitness journey or looking to take your training to the next level, you've come to the right place. Our goal is to help you achieve your personal best and enjoy a healthier lifestyle.
                    </p>

                    </div>
                   
                    <div className=" relative  mx-auto my-8 items-center justify-center flex p-8  bg-[#181717] before:absolute before:top-0 before:left-0 before:w-full before:h-[4px] before:bg-gradient-to-r before:from-black before:via-orange-500 before:to-black ">
                        <div>

                    <p className="text-white text-center mb-4">
                    If you have any questions or need assistance, our support team is here to help. Let's make your fitness journey an enjoyable and rewarding experience! <br/> <br/>

Stay motivated and let's crush those goals together! <br/> <br/>

Warm regards, <br/>
The Yanyan Fitness Team
                    </p>
                    <button className="bg-orange-700 items-center flex my-4 text-black px-16 py-5 text-lg  mx-auto rounded-lg font-semibold hover:bg-orange-800 transition duration-300">
                        Start your journey
                    </button>
                        </div>
                    </div>

        </section>

        </div>
    );
}
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";



export default function About() {

    const programs = [
        {
            title: "Cardio Strength",
            description: "Cardio strength training not only builds endurance and burns calories but also enhances overall heart health and muscular performance.",
            image: "/weight-loss.jpg",
        },
        {
            title: "Fat Lose",
            description: "Consistent fat loss is achieved through a balanced diet, regular exercise, and a commitment to healthy lifestyle choices.",
            image: "/muscle-building.jpg",
        },
        {
            title: "Nutritions",
            description: "A comprehensive nutrition guide helps you make informed food choices to support your health, energy levels, and overall wellbeing.",
            image: "/yoga.jpg",
        },
        {
            title: "Muscle Gain",
            description: "Muscle gain results from a combination of progressive strength training, adequate protein intake, and proper recovery.",
            image: "/cardio.jpg",
        },
    ]

    return (
        <div className="min-h-screen ">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section with Background Image */}
            <section 
                className="relative h-screen flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('/banner.png')" }} // Replace with your image path
            >
                {/* Overlay to darken the background image */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Content */}
                <div className="relative z-10 text-left px-8 max-w-2xl mx-auto">
                    <h2 className="text-4xl text-white font-bold mb-4">
                        Get more out of your <br />
                        <span className="text-white">Fitness Journey</span>
                    </h2>
                    <p className="text-white text-lg mb-6">
                        Join the community to track your progress
                    </p>
                    <p className="text-white mb-8">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.
                    </p>
                    <button className="bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-800 transition duration-300">
                        Create Account
                    </button>
                </div>
            </section>

            {/* Explore our program */}
            <section className="py-12">
  <h2 className="text-3xl font-bold text-center text-white mb-8">Explore Our Program</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">

    {programs.map((program, index) => (
      <div key={index} className=" shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-[1px] border-[#EC7807] ">
        <div className="p-4">
          <h3 className="text-xl font-semibold text-white">{program.title}</h3>
          <p className="mt-2 text-gray-600 text-sm">{program.description}</p>
        </div>
      </div>
    ))}

  </div>
</section>

<Footer/>

        </div>
    );
}
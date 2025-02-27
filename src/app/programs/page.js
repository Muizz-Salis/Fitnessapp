import { FaDumbbell, FaRunning, FaHeartbeat, FaRegClock } from 'react-icons/fa';
import { GiWeightLiftingUp } from 'react-icons/gi';
import Image from "next/image";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProgramsPage = () => {
  const programs = [
    {
      id: 1,
      title: 'Strength Training',
      icon: <FaDumbbell className="w-8 h-8 text-[#EC7807]" />,
      description: 'Build muscle and increase your strength with our expert-led weight training programs',
      duration: '8 weeks'
    },
    {
      id: 2,
      title: 'Cardio Blast',
      icon: <FaRunning className="w-8 h-8 text-[#EC7807]" />,
      description: 'Improve your endurance and burn fat with high-intensity cardio workouts',
      duration: '6 weeks'
    },
    {
      id: 3,
      title: 'HIIT Program',
      icon: <FaHeartbeat className="w-8 h-8 text-[#EC7807]" />,
      description: 'Maximize results in minimal time with our High-Intensity Interval Training sessions',
      duration: '4 weeks'
    },
    {
      id: 4,
      title: 'Power Lifting',
      icon: <GiWeightLiftingUp className="w-8 h-8 text-[#EC7807]" />,
      description: 'Take your strength to the next level with our advanced power lifting regimen',
      duration: '10 weeks'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-black text-white py-20 px-4 border-b-2 border-[#EC7807]">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#EC7807]">Transform Your Body</h1>
          <p className="text-xl md:text-2xl mb-8 text-[#EFEDE8A6]">Choose from our expert-designed training programs</p>
          <button className="bg-[#EC7807] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#ec7907d5] transition-colors">
            Get Started
          </button>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program) => (
            <div key={program.id} className="bg-[#181717] rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-[#EC7807]">
              <div className="mb-4">{program.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{program.title}</h3>
              <p className="text-[#EFEDE8A6] mb-4">{program.description}</p>
              <div className="flex items-center text-[#EFEDE8A6]">
                <FaRegClock className="mr-2 text-[#EC7807]" />
                <span>{program.duration}</span>
              </div>
              <button className="mt-4 w-full bg-[#EC7807] text-black py-2 rounded-lg hover:bg-[#ec7907d5] transition-colors">
                View Program
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Program Section */}
      <div className="bg-[#111111] py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image 
              src="/images/personal-training.jpg" 
              alt="Personal Training" 
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-white">Personalized Coaching</h2>
            <p className="text-[#EFEDE8A6] mb-6">
              Get 1-on-1 guidance from our certified trainers with customized workout plans, 
              nutrition advice, and continuous support to help you reach your fitness goals.
            </p>
            <button className="bg-[#EC7807] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#ec7907d5] transition-colors">
              Book Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <section className="flex flex-wrap justify-center items-center gap-8 p-8 md:p-12 text-white border-b-2 border-[#EC7807]">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-[#181717] rounded-lg shadow-lg w-full sm:w-[45%] lg:w-[22%] border border-[#EC7807]">
          <h1 className="text-3xl font-bold text-[#EC7807] mb-2">50+</h1>
          <p className="text-sm mb-2">Training Programs</p>
          <p className="text-sm">Variety of workout plans</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center p-6 bg-[#181717] rounded-lg shadow-lg w-full sm:w-[45%] lg:w-[22%] border border-[#EC7807]">
          <h1 className="text-3xl font-bold text-[#EC7807] mb-2">24/7</h1>
          <p className="text-sm mb-2">Support</p>
          <p className="text-sm">Expert guidance anytime</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center p-6 bg-[#181717] rounded-lg shadow-lg w-full sm:w-[45%] lg:w-[22%] border border-[#EC7807]">
          <h1 className="text-3xl font-bold text-[#EC7807] mb-2">100%</h1>
          <p className="text-sm mb-2">Results Guaranteed</p>
          <p className="text-sm">Commitment to your success</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramsPage;
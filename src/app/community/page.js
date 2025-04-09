import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FaUsers, FaComments, FaMedal, FaCalendarAlt, FaStar, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Community() {
  // Sample community data
  const communityGroups = [
    { 
      id: 1, 
      name: "Morning Motivators", 
      members: 342, 
      description: "Early risers who support each other with 5-7AM workouts.",
      image: "/api/placeholder/400/250"
    },
    { 
      id: 2, 
      name: "Weekend Warriors", 
      members: 518, 
      description: "Dedicated to making the most of weekend workout time.",
      image: "/api/placeholder/400/250"
    },
    { 
      id: 3, 
      name: "Strength & Balance", 
      members: 275, 
      description: "Focus on functional fitness and building core strength.",
      image: "/api/placeholder/400/250"
    },
    { 
      id: 4, 
      name: "Marathon Training", 
      members: 193, 
      description: "Training for upcoming races and endurance events.",
      image: "/api/placeholder/400/250"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Virtual 5K Challenge",
      date: "March 15, 2025",
      participants: 84,
      description: "Join our monthly virtual run and compare your times with the community."
    },
    {
      id: 2,
      title: "Nutrition Workshop",
      date: "March 22, 2025",
      participants: 56,
      description: "Learn about macro planning and meal prep strategies for fitness goals."
    },
    {
      id: 3,
      title: "Community HIIT Session",
      date: "April 5, 2025",
      participants: 124,
      description: "Live-streamed high intensity interval training with our top coaches."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Head>
        <title>Community | FitFlex</title>
        <meta name="description" content="Join the FitFlex community and connect with fitness enthusiasts" />
      </Head>

      {/* Navbar */}
      <Navbar/>

      <main>
        {/* Hero Section */}
        <div className="bg-black text-white py-20 px-4 border-b-2 border-[#EC7807]">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#EC7807]">Join Our Community</h1>
            <p className="text-xl md:text-2xl mb-8 text-[#EFEDE8A6]">Connect with like-minded fitness enthusiasts, share your journey, and find the motivation you need.</p>
            <button className="bg-[#EC7807] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#ec7907d5] transition-colors">
              Become a Member
            </button>
          </div>
        </div>

        {/* Community Groups Section */}
        <div className="max-w-6xl mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Community Groups</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityGroups.map((group) => (
              <div key={group.id} className="bg-[#181717] rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-[#EC7807]">
                <div className="relative h-48 w-full">
                  <Image 
                    src={group.image}
                    alt={group.name}
                    className="object-cover rounded-lg"
                    layout="fill"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{group.name}</h3>
                <p className="text-[#EFEDE8A6] mb-4">{group.description}</p>
                <div className="flex items-center text-[#EFEDE8A6]">
                  <FaUsers className="mr-2 text-[#EC7807]" />
                  <span>{group.members} members</span>
                </div>
                <div className="mt-4">
                  <Link href={`/community/groups/${group.id}`} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-[#EC7807] hover:bg-[#ec7907d5]">
                    Join Group
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div className="bg-[#111111] py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-[#181717] rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-[#EC7807]">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{event.title}</h3>
                    <FaCalendarAlt className="text-[#EC7807] w-6 h-6" />
                  </div>
                  <p className="text-[#EFEDE8A6] mb-4">{event.description}</p>
                  <div className="flex items-center text-[#EFEDE8A6]">
                    <FaUsers className="mr-2 text-[#EC7807]" />
                    <span>{event.participants} participants</span>
                  </div>
                  <div className="mt-4">
                    <Link href={`/community/events/${event.id}`} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-[#EC7807] hover:bg-[#ec7907d5]">
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <section className="flex flex-wrap justify-center items-center gap-8 p-8 md:p-12 text-white border-b-2 border-[#EC7807]">
          <div className="flex flex-col items-center justify-center text-center p-6 bg-[#181717] rounded-lg shadow-lg w-full sm:w-[45%] lg:w-[22%] border border-[#EC7807]">
            <h1 className="text-3xl font-bold text-[#EC7807] mb-2">100+</h1>
            <p className="text-sm mb-2">Members Joined</p>
            <p className="text-sm">Build connections with like-minded individuals</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center p-6 bg-[#181717] rounded-lg shadow-lg w-full sm:w-[45%] lg:w-[22%] border border-[#EC7807]">
            <h1 className="text-3xl font-bold text-[#EC7807] mb-2">50+</h1>
            <p className="text-sm mb-2">Active Groups</p>
            <p className="text-sm">Explore fitness communities</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center p-6 bg-[#181717] rounded-lg shadow-lg w-full sm:w-[45%] lg:w-[22%] border border-[#EC7807]">
            <h1 className="text-3xl font-bold text-[#EC7807] mb-2">25+</h1>
            <p className="text-sm mb-2">Upcoming Events</p>
            <p className="text-sm">Get involved with regular challenges</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

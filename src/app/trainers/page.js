import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Meet Our Trainers Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet Our Trainers</h2>
        <p className="text-2xl text-center mb-12">Our trainers are here to inspire and guide you on your fitness journey. Whether you are a beginner or an experienced athlete. you will find the right support and encouragement to acheive your goals. Come meet our trainers and start your fitness journey today! </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Trainer Cards */}
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src="/trainer1.jpeg"
              alt="Trainer 1"
              width={350}
              height={400}
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src="/trainer2.jpeg"
              alt="Trainer 2"
              width={350}
              height={400}
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src="/trainer3.jpeg"
              alt="Trainer 3"
              width={350}
              height={400}
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Features Sections */}
        <div className="space-y-24">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/1">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Get more with low-cost training programs and advanced features</h3>
              <p className=" text-1xl text-gray-300 mb-6">We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free!</p>
              <Link href="/programs" className="inline-block text-white px-8 py-3 rounded-full transition-colors">
                See More
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/trainer-feature1.png"
                alt="Training Program"
                width={500}
                height={500}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="md:w-1/1">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Work out at home for free</h3>
              <p className="text-1xl text-gray-300 mb-6">We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free!</p>
              <Link href="/workouts" className="inline-block text-white px-8 py-3 rounded-full  transition-colors">
                See More 
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/trainer-feature2.png"
                alt="Home Workout"
                width={500}
                height={500}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/1">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Get more with low-cost training programs and advanced features</h3>
              <p className="text-1xl text-gray-300 mb-6">We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free!</p>
              <Link href="/pricing" className="inline-block text-white px-8 py-3 rounded-full transition-colors">
                See More
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/trainer-feature3.png"
                alt="Advanced Features"
                width={500}
                height={500}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  )
}
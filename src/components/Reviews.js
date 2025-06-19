import React from 'react'
import { Plus } from 'lucide-react'




const testimonials = [
  {
    image: "images/diamondgirl.jpg",
    text: "I've been using this app for a few months now, and I can't believe the progress I've made! The workouts are challenging but adaptable, which is great for all fitness levels. Plus, the nutrition tips have helped me make healthier choices. Highly recommend to anyone on their fitness journey!",
    name: "Antonia Jonathan",
    handle: "@antoniojth",
  },
  {
    image: "images/yellowhoodie.png",
    text: "This app has made working out so convenient! I love how I can follow along with live classes or choose on-demand workouts. The community support is fantastic, and the encouragement from other users helps me stay accountable. It's like having a personal trainer in my pocket!",
    name: "Anthony Aisha",
    handle: "@antonyaisha001",
  },
  {
    image: "images/maninsuit.jpg",
    text: "I have tried several fitness apps, but this one is by far the best! The challenges keep me on my toes, and the ability to connect with friends adds a fun competitive element. I love being able to work out anywhere, anytime. It's the perfect solution for busy lifestyles!",
    name: "Nicholas Gadafi",
    handle: "@nicks",
  },
]
const Reviews = () => {
  return (
    <div>
      <section className="bg-black py-16 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Heading */}
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-16">
        <span className="text-orange-500">Our Customer </span>
        <span className="text-white">Says!</span>
      </h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative p-8 rounded-2xl border border-orange-500 flex flex-col items-center text-center"
          >
            {/* Profile Image */}
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-orange-500 mb-6">
            <img
                src={testimonial.image || "/placeholder.svg"}
                alt={`${testimonial.name}'s profile picture`}
                width={80}
                height={80}
                className="object-cover"
              />
              
            </div>

            {/* Testimonial Text */}
            <p className="text-white mb-6 leading-relaxed">{testimonial.text}</p>

            {/* Name and Handle */}
            <div className="mt-auto">
              <h3 className="text-white font-semibold text-lg">{testimonial.name}</h3>
              <p className="text-gray-500 text-sm">{testimonial.handle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Give Review Button */}
      <div className="flex justify-end mt-12">
        <button className="bg-orange-500 text-black font-semibold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-orange-400 transition-colors">
          <Plus className="w-5 h-5" />
          Give Review
        </button>
      </div>
    </section>




      {/* {testimonials.map((testimonial, index)=> (
        <div>
          <p>{testimonial.name}</p>
        

        </div>
        

      ))} */}

        
    </div>
  )
}

export default Reviews
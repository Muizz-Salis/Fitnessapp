import React from 'react'
const challenges = [
  {
    number: 1,
    title: "Step Challenge",
    description:
      "Encourage users to reach a specific daily step goal (e.g., 10,000 steps) over the course of a week or month, promoting daily activity.",
  },
  {
    number: 2,
    title: "30-Day Fitness Challenge",
    description:
      "A month-long challenge with daily workouts focusing on different muscle groups or fitness styles (e.g., strength, cardio, yoga).",
  },
  {
    number: 3,
    title: "Nutrition Challenge",
    description:
      "Aimed at improving eating habits, users can commit to eating healthy meals, tracking water intake, or trying new recipes for a set time.",
  },
  {
    number: 4,
    title: "Weight Loss Challenge",
    description:
      "Participants can set weight loss goals, track their progress, and receive weekly check-ins from trainers for encouragement and advice.",
  },
  {
    number: 5,
    title: "Virtual Race or Challenge",
    description:
      "Users can participate in a virtual race, whether it's running, cycling, or swimming, tracking their distance over a set period and competing against others.",
  },
  {
    number: 6,
    title: "Team Challenges",
    description:
      "Users can form or join teams to compete in different fitness activities or challenges, fostering a sense of community and camaraderie.",
  },
]
const Challenges = () => {
  return (
    <div>
        <div className="bg-black min-h-screen p-6 md:p-12 lg:p-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((challenge) => (
          <div key={challenge.number} className="border border-orange-500 rounded-2xl p-8 space-y-4">
            <div className="text-orange-500">Challenges {challenge.number}</div>

            <h2 className="text-white text-3xl font-bold">{challenge.title}</h2>

            <p className="text-orange-500 leading-relaxed">{challenge.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Challenges
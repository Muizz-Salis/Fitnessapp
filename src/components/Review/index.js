"use client";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
// import axios from "axios";

export default function FeedbackModal({ onClose }) {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const emojis = [
    { icon: "😡", value: "angry" },
    { icon: "😞", value: "sad" },
    { icon: "😐", value: "neutral" },
    { icon: "🙂", value: "happy" },
    { icon: "👍", value: "thumbs_up" },
    { icon: "😁", value: "very_happy" },
    { icon: "🌟", value: "excellent" },
  ];

  const handleSubmit = async () => {
    if (!selectedEmoji) {
      alert("Please select an emoji!");
      return;
    }

    setLoading(true);

    const feedbackData = {
      feeling: selectedEmoji,
      comment: comment.trim(),
    };

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:4000/api/user/feedback",
  //       feedbackData
  //     );
  //     console.log("Feedback Submitted:", response.data);

  //     alert("Feedback submitted successfully!");
  //     setSelectedEmoji(null);
  //     setComment("");
  //     onClose(); 
  //   } catch (error) {
  //     console.error("Error submitting feedback:", error);
  //     alert("Failed to submit feedback. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
   };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70">
      <div className="bg-[#181818] border border-orange-500 rounded-xl p-6 w-[500px] relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-orange-500 hover:text-white"
        >
          <FaTimes size={18} />
        </button>

        <h2 className="text-white text-center text-2xl font-semibold mb-2">
          How Are you feeling?
        </h2>
        <p className="text-gray-400 text-center text-sm mb-4">
          Your input is valuable in helping us better understand your needs and
          tailor our services accordingly.
        </p>

        <div className="flex justify-center space-x-3 mb-4">
          {emojis.map((emoji) => (
            <button
              key={emoji.value}
              className={`text-3xl transition ${
                selectedEmoji === emoji.value
                  ? "scale-125 border-b-2 border-orange-500"
                  : ""
              }`}
              onClick={() => setSelectedEmoji(emoji.value)}
            >
              {emoji.icon}
            </button>
          ))}
        </div>

        <textarea
          className="w-full h-24 p-2 rounded-md bg-transparent border border-orange-500 text-white placeholder-gray-400 outline-none"
          placeholder="Add a comment ...."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button
          className="w-full mt-4 bg-orange-500 text-black font-bold py-2 rounded-md hover:bg-orange-600 disabled:bg-gray-500"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Now"}
        </button>
      </div>
    </div>
  );
}

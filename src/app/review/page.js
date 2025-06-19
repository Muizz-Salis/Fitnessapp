'use client';

import FeedbackModal from '@/components/Review';
import React, { useState } from 'react'

const page = () => {
 const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <button
        onClick={() => setShowModal(true)}
        className="bg-orange-400 px-4 py-2 rounded-md text-black font-bold"
      >
        Give Feedback
      </button>

      {showModal && <FeedbackModal onClose={() => setShowModal(false)} />}
    </div>
  );

}

export default page

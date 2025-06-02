"use client";

import FitnessLevelForm from "@/components/FitnessLevelForm";
import { useState } from "react";

const Page = () => {
  const [step, setStep] = useState(1);

  return (
    <div>
      {step === 1 && <FitnessLevelForm onNext={() => setStep(2)} onBack={() => alert("Go back")} />}
      {step === 2 && <p className="text-white text-center">Next Step Placeholder</p>}
    </div>
  );
};

export default Page;  

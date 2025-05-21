"use client";
import React, { useState } from "react";
import Step1 from "../components/steps/Step1";
import Step2 from "../components/steps/Step2";

const Login = () => {
  const [state, setState] = useState<{
    step: number;
  }>({
    step: 1,
  });

  const handleNext = () => setState((s) => ({ ...s, step: s.step + 1 }));
  const handlePrev = () => setState((s) => ({ ...s, step: s.step - 1 }));

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-primary-50">
      {state.step === 1 && <Step1 onNext={handleNext} />}
      {state.step === 2 && <Step2 onNext={handleNext} onPrev={handlePrev} />}
    </div>
  );
};

export default Login;

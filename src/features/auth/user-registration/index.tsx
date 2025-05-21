"use client";
import React, { useState } from "react";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import Step6 from "./steps/Step6";
import Step7 from "./steps/Step7";
import CompanyStep3 from "./steps/CompanyStep3";

const UserRegistration = () => {
  const [step, setStep] = useState(1);
  const [tab, setTab] = useState("personal");

  const handleNext = () => setStep((s) => s + 1);
  const handlePrev = () => setStep((s) => s - 1);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-primary-50">
      {step === 1 && <Step1 onNext={handleNext} />}
      {step === 2 && <Step2 onNext={handleNext} onPrev={handlePrev} />}
      {step === 3 && tab === "personal" && (
        <Step3
          tab={tab}
          setTab={setTab}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {step === 3 && tab === "company" && (
        <CompanyStep3
          tab={tab}
          setTab={setTab}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {step === 4 && <Step4 onNext={handleNext} onPrev={handlePrev} />}
      {step === 5 && <Step5 onNext={handleNext} onPrev={handlePrev} />}
      {step === 6 && (
        <Step6 onNext={handleNext} onPrev={handlePrev} goToStep={setStep} />
      )}
      {step === 7 && (
        <Step7 onPrev={handlePrev} goToStep={setStep} onNext={() => {}} />
      )}
      {/* Future: Render other steps based on step state */}
    </div>
  );
};

export default UserRegistration;

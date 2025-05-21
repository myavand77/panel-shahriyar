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
import CompanyStep4 from "./steps/CompanyStep4";

const UserRegistration = () => {
  const [state, setState] = useState<{
    step: number;
    tab: 'personal' | 'company';
  }>({
    step: 1,
    tab: "personal",
  });

  const handleNext = () => setState((s) => ({ ...s, step: s.step + 1 }));
  const handlePrev = () => setState((s) => ({ ...s, step: s.step - 1 }));
  const setTab = (tab: "personal" | "company") =>
    setState((s) => ({ ...s, tab }));

  const isCompany =
    state.tab === "company"
      ? true
      : state.tab === "personal"
      ? false
      : undefined;
  const totalSteps = state.tab ? 5 : 0;

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-primary-50">
      {state.step === 1 && <Step1 onNext={handleNext} />}
      {state.step === 2 && <Step2 onNext={handleNext} onPrev={handlePrev} />}
      {state.step === 3 &&
        state.tab &&
        (state.tab === "personal" ? (
          <Step3
            tab={state.tab}
            setTab={setTab}
            onNext={handleNext}
            onPrev={handlePrev}
            isCompany={isCompany}
            totalSteps={totalSteps}
          />
        ) : (
          <CompanyStep3
            tab={state.tab}
            setTab={setTab}
            onNext={handleNext}
            onPrev={handlePrev}
            isCompany={isCompany}
            totalSteps={totalSteps}
          />
        ))}
      {state.step === 4 &&
        (state.tab === "personal" ? (
          <Step4
            onNext={handleNext}
            onPrev={handlePrev}
            isCompany={isCompany}
            totalSteps={totalSteps}
          />
        ) : (
          <CompanyStep4
            onNext={handleNext}
            onPrev={handlePrev}
            isCompany={isCompany}
            totalSteps={totalSteps}
          />
        ))}
      {state.step === 5 && (
        <Step5
          onNext={handleNext}
          onPrev={handlePrev}
          isCompany={isCompany}
          totalSteps={totalSteps}
        />
      )}
      {state.step === 6 && (
        <Step6
          onNext={handleNext}
          onPrev={handlePrev}
          goToStep={(step) => setState((s) => ({ ...s, step }))}
          isCompany={isCompany}
          totalSteps={totalSteps}
        />
      )}
      {state.step === 7 && (
        <Step7
          onPrev={handlePrev}
          goToStep={(step) => setState((s) => ({ ...s, step }))}
          onNext={() => {}}
          isCompany={isCompany}
          totalSteps={totalSteps}
        />
      )}
      {/* Future: Render other steps based on step state */}
    </div>
  );
};

export default UserRegistration;

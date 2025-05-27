"use client";
import React, { useState } from "react";
import Step3 from "../components/steps/Step3";
import Step4 from "../components/steps/Step4";
import Step5 from "../components/steps/Step5";
import Step6 from "../components/steps/Step6";
import Step7 from "../components/steps/Step7";
import CompanyStep3 from "../components/steps/CompanyStep3";
import CompanyStep4 from "../components/steps/CompanyStep4";
import {
  StepsFormProvider,
  useStepsForm,
} from "../components/steps/StepsFormContext";

const RegistrationInner = () => {
  const { reset } = useStepsForm();
  const [state, setState] = useState<{
    step: number;
    tab: "personal" | "company";
  }>({
    step: 1,
    tab: "personal",
  });

  const handleNext = () => setState((s) => ({ ...s, step: s.step + 1 }));
  const handlePrev = () => setState((s) => ({ ...s, step: s.step - 1 }));
  const setTab = (tab: "personal" | "company") => {
    reset();
    setState((s) => ({ ...s, tab }));
  };

  const handleGoToStep = (step: number) => setState((s) => ({ ...s, step }));

  const isCompany =
    state.tab === "company"
      ? true
      : state.tab === "personal"
      ? false
      : undefined;

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-primary-50">
      {state.step === 1 &&
        state.tab &&
        (state.tab === "personal" ? (
          <Step3
            tab={state.tab}
            setTab={setTab}
            onNext={handleNext}
            onPrev={handlePrev}
            isCompany={isCompany}
          />
        ) : (
          <CompanyStep3
            tab={state.tab}
            setTab={setTab}
            onNext={handleNext}
            onPrev={handlePrev}
            isCompany={isCompany}
          />
        ))}
      {state.step === 2 &&
        (state.tab === "personal" ? (
          <Step4
            onNext={handleNext}
            onPrev={handlePrev}
            isCompany={isCompany}
          />
        ) : (
          <CompanyStep4
            onNext={handleNext}
            onPrev={handlePrev}
            isCompany={isCompany}
          />
        ))}

      {state.step === 3 &&
        (state.tab === "personal" ? (
          <Step5
            onNext={handleNext}
            onPrev={handlePrev}
            isCompany={isCompany}
          />
        ) : (
          <Step4
            onNext={handleNext}
            onPrev={handlePrev}
            isCompany={isCompany}
          />
        ))}

      {state.step === 4 &&
        (state.tab === "personal" ? (
          <Step6
            onNext={handleNext}
            onPrev={handlePrev}
            isCompany={isCompany}
            goToStep={handleGoToStep}
          />
        ) : (
          <Step5
            onNext={handleNext}
            onPrev={handlePrev}
            isCompany={isCompany}
          />
        ))}
      {state.step === 5 &&
        (state.tab === "personal" ? (
          <Step7 onPrev={handlePrev} tab={state.tab} />
        ) : (
          <Step6
            onNext={handleNext}
            onPrev={handlePrev}
            isCompany={isCompany}
            goToStep={handleGoToStep}
          />
        ))}
      {state.step === 6 && <Step7 onPrev={handlePrev} tab={state.tab} />}
    </div>
  );
};

const Registration = () => (
  <StepsFormProvider>
    <RegistrationInner />
  </StepsFormProvider>
);

export default Registration;

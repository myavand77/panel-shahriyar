"use client";
import React, { useState } from "react";
import Step1 from "../components/steps/Step1";
import Step2 from "../components/steps/Step2";
import { useAuth } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { StepsFormProvider } from "../components/steps/StepsFormContext";

const Login = () => {
  const [state, setState] = useState<{
    step: number;
    phone_number: string;
  }>({
    step: 1,
    phone_number: "",
  });

  const { access_token } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (access_token) {
      router.replace("/provider/home");
    }
  }, [access_token, router]);

  const handleNext = () => setState((s) => ({ ...s, step: s.step + 1 }));
  const handlePrev = () => setState((s) => ({ ...s, step: s.step - 1 }));
  const handleSetPhoneNumber = (phone: string) =>
    setState((s) => ({ ...s, phone_number: phone }));

  return (
    <StepsFormProvider>
      <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-primary-50">
        {state.step === 1 && (
          <Step1 onNext={handleNext} onSetPhoneNumber={handleSetPhoneNumber} />
        )}
        {state.step === 2 && (
          <Step2 onPrev={handlePrev} phone_number={state.phone_number} />
        )}
      </div>
    </StepsFormProvider>
  );
};

export default Login;

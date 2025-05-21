import React from "react";
import { Check } from "lucide-react";

export interface StepperProps {
  currentStep: number;
  steps?: string[];
}

const defaultSteps = [
  "مشخصات هویتی",
  "مشخصات فنی",
  "مشخصات نماینده",
  "تایید اطلاعات",
];

const Stepper: React.FC<StepperProps> = ({
  currentStep,
  steps = defaultSteps,
}) => {
  return (
    <div className="flex items-center justify-center w-full mb-6 mt-2">
      {steps.map((label, idx) => (
        <React.Fragment key={label + idx}>
          <div className="flex flex-col items-center">
            <div
              className={`w-7 h-7 flex items-center justify-center rounded-full border-2 text-base font-bold ${
                idx + 1 === currentStep
                  ? "bg-primary-500 border-primary-500 text-white"
                  : idx + 1 < currentStep
                  ? "bg-primary-500 border-primary-500 text-white"
                  : "bg-white border-neutral-300 text-neutral-400"
              }`}
            >
              {idx + 1 < currentStep ? <Check className="w-4 h-4" /> : idx + 1}
            </div>
            <span className="text-xs mt-1 text-center w-24 text-neutral-500">
              {label}
            </span>
          </div>
          {idx < steps.length - 1 && (
            <div className="w-8 h-0.5 bg-neutral-200 mx-2" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;

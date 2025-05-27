import React from "react";
import AuthHeader from "./AuthHeader";
import Button from "@/components/ui/Button";

interface StepLayoutProps {
  currentStep: number;
  onNext: () => void;
  onPrev: () => void;
  children: React.ReactNode;
  isCompany?: boolean;
  loading?: boolean;
}

const StepLayout: React.FC<StepLayoutProps> = ({
  currentStep,
  onNext,
  onPrev,
  children,
  isCompany = false,
  loading = false,
}) => (
  <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-8 m-3 flex flex-col gap-4 items-center border border-neutral-200">
    <AuthHeader currentStep={currentStep} isCompany={isCompany} />
    <div className="w-full flex flex-col gap-4">{children}</div>
    <div className="flex gap-4 mt-4 justify-center">
      <Button
        type="submit"
        className="w-32 rounded-[6px] h-10 text-[15px] font-medium"
        onClick={onNext}
        disabled={loading}
        loading={loading}
      >
        ادامه
      </Button>
      <Button
        variant="outlined"
        type="button"
        className="w-32 rounded-[6px] h-10 text-[15px] font-medium bg-white text-primary-500 border border-primary-500"
        onClick={onPrev}
        disabled={loading}
      >
        بازگشت
      </Button>
    </div>
  </div>
);

export default StepLayout;

import React from "react";
import Logo from "@/components/ui/Logo";
import Stepper from "@/components/ui/Stepper";

const personalSteps = [
  "مشخصات هویتی",
  "مشخصات فنی",
  "مشخصات نماینده",
  "تایید اطلاعات",
];

const companySteps = [
  "مشخصات هویتی",
  "بارگذاری مدارک",
  "مشخصات فنی",
  "مشخصات نماینده",
  "تایید اطلاعات",
];

const AuthHeader = ({
  currentStep,
  isCompany,
}: {
  currentStep: number;
  isCompany?: boolean;
}) => (
  <>
    <Logo className="h-[40px]" />
    <div className="text-[22px] font-bold text-text-500 leading-[1.5] text-center w-full">
      وایب، خدمتی ویژه به صاحبان کسب‌وکار آنلاین
    </div>
    <div className="text-[16px] font-normal text-neutral-500 leading-[1.5] text-center w-full mb-4">
      بیش از چهار میلیون مشتری بالقوه به صورت رایگان منتظر خرید از کسب و کار شما
      هستند!
    </div>
    <Stepper
      currentStep={currentStep}
      steps={isCompany ? companySteps : personalSteps}
    />
  </>
);

export default AuthHeader;

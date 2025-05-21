import React from "react";
import StepLayout from "@/features/auth/user-registration/components/StepLayout";
import Input from "@/components/ui/Input";
import InfoBanner from "@/components/ui/InfoBanner";

interface Step5Props {
  onNext: () => void;
  onPrev: () => void;
  isCompany?: boolean;
}

const Step5: React.FC<Step5Props> = ({ onNext, onPrev, isCompany }) => {
  return (
    <StepLayout
      currentStep={isCompany ? 4 : 3}
      onNext={onNext}
      onPrev={onPrev}
      isCompany={isCompany}
    >
      <InfoBanner className="w-full mb-2">
        توجه داشته باشید ورود شما به وایب تنها بوسیله "اطلاعات نماینده"
        امکان‌پذیر خواهد بود.
      </InfoBanner>
      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
        <Input label="نام نماینده" placeholder="نام نماینده را وارد کنید" />
        <Input
          label="نام خانوادگی نماینده"
          placeholder="نام خانوادگی نماینده را وارد کنید"
        />
        <Input label="کدملی نماینده" placeholder="کدملی نماینده را وارد کنید" />
        <Input
          label="تلفن همراه نماینده"
          placeholder="تلفن همراه نماینده را وارد کنید"
        />
      </div>
      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
        <Input label="تلفن ثابت" placeholder="تلفن ثابت را وارد کنید" />
        <Input label="ایمیل" placeholder="ایمیل را وارد کنید" />
        <Input label="شماره واتساپ" placeholder="شماره واتساپ را وارد کنید" />
        <Input label="آیدی تلگرام" placeholder="آیدی تلگرام را وارد کنید" />
      </div>
    </StepLayout>
  );
};

export default Step5;

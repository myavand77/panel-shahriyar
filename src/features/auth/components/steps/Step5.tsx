import React from "react";
import StepLayout from "@/features/auth/components/StepLayout";
import Input from "@/components/ui/Input";
import InfoBanner from "@/components/ui/InfoBanner";
import { useStepsForm } from "./StepsFormContext";
import { Controller } from "react-hook-form";

interface Step5Props {
  onNext: () => void;
  onPrev: () => void;
  isCompany?: boolean;
}

const Step5: React.FC<Step5Props> = ({ onNext, onPrev, isCompany }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useStepsForm();

  // Handler for form submit
  const onValid = () => {
    onNext();
  };

  return (
    <StepLayout
      currentStep={isCompany ? 4 : 3}
      onNext={handleSubmit(onValid)}
      onPrev={onPrev}
      isCompany={isCompany}
    >
      <InfoBanner className="w-full mb-2">
        توجه داشته باشید ورود شما به وایب تنها بوسیله &quot;اطلاعات
        نماینده&quot; امکان‌پذیر خواهد بود.
      </InfoBanner>
      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
        <Controller
          name="repName"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              label="نام نماینده"
              {...field}
              placeholder="نام نماینده را وارد کنید"
              required
              subtitle={errors.repName?.message}
              subtitleType={errors.repName ? "error" : "info"}
            />
          )}
        />
        <Controller
          name="repLastName"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              label="نام خانوادگی نماینده"
              {...field}
              placeholder="نام خانوادگی نماینده را وارد کنید"
              required
              subtitle={errors.repLastName?.message}
              subtitleType={errors.repLastName ? "error" : "info"}
            />
          )}
        />
        <Controller
          name="repNationalId"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              label="کدملی نماینده"
              {...field}
              placeholder="کدملی نماینده را وارد کنید"
              required
              subtitle={errors.repNationalId?.message}
              subtitleType={errors.repNationalId ? "error" : "info"}
              validationType="nationalCode"
            />
          )}
        />
        <Controller
          name="repPhone"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              label="تلفن همراه نماینده"
              {...field}
              placeholder="تلفن همراه نماینده را وارد کنید"
              required
              subtitle={errors.repPhone?.message}
              subtitleType={errors.repPhone ? "error" : "info"}
              validationType="mobile"
            />
          )}
        />
      </div>
      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
        <Controller
          name="repLandline"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              label="تلفن ثابت"
              {...field}
              placeholder="تلفن ثابت را وارد کنید"
              required
              subtitle={errors.repLandline?.message}
              subtitleType={errors.repLandline ? "error" : "info"}
              validationType="constantPhone"
            />
          )}
        />
        <Controller
          name="repEmail"
          control={control}
          render={({ field }) => (
            <Input
              label="ایمیل"
              {...field}
              placeholder="ایمیل را وارد کنید"
              subtitle={errors.repEmail?.message}
              subtitleType={errors.repEmail ? "error" : "info"}
              validationType="email"
            />
          )}
        />
        <Controller
          name="repWhatsapp"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              label="شماره واتساپ"
              {...field}
              placeholder="شماره واتساپ را وارد کنید"
              required
              subtitle={errors.repWhatsapp?.message}
              subtitleType={errors.repWhatsapp ? "error" : "info"}
              validationType="mobile"
            />
          )}
        />
        <Controller
          name="repTelegram"
          control={control}
          render={({ field }) => (
            <Input
              label="آیدی تلگرام"
              {...field}
              placeholder="آیدی تلگرام را وارد کنید"
              subtitle={errors.repTelegram?.message}
              subtitleType={errors.repTelegram ? "error" : "info"}
              validationType="telegramId"
              startLogo={
                <span className="text-neutral-500 text-sm select-none">@</span>
              }
            />
          )}
        />
      </div>
    </StepLayout>
  );
};

export default Step5;

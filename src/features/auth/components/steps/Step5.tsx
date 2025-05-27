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
  const { register, setValue, watch, control } = useStepsForm();
  const repName = watch("repName") || "";
  const repLastName = watch("repLastName") || "";
  const repNationalId = watch("repNationalId") || "";
  const repPhone = watch("repPhone") || "";
  const repLandline = watch("repLandline") || "";
  const repEmail = watch("repEmail") || "";
  const repWhatsapp = watch("repWhatsapp") || "";
  const repTelegram = watch("repTelegram") || "";

  return (
    <StepLayout
      currentStep={isCompany ? 4 : 3}
      onNext={onNext}
      onPrev={onPrev}
      isCompany={isCompany}
    >
      <InfoBanner className="w-full mb-2">
        توجه داشته باشید ورود شما به وایب تنها بوسیله &quot;اطلاعات نماینده&quot;
        امکان‌پذیر خواهد بود.
      </InfoBanner>
      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
        <Controller
          name="repName"
          control={control}
          render={({ field }) => (
            <Input
              label="نام نماینده"
              {...field}
              placeholder="نام نماینده را وارد کنید"
            />
          )}
        />
        <Input
          label="نام خانوادگی نماینده"
          {...register("repLastName")}
          value={repLastName}
          onChange={e => setValue("repLastName", e.target.value, { shouldValidate: true })}
          placeholder="نام خانوادگی نماینده را وارد کنید"
        />
        <Input
          label="کدملی نماینده"
          {...register("repNationalId")}
          value={repNationalId}
          onChange={e => setValue("repNationalId", e.target.value, { shouldValidate: true })}
          placeholder="کدملی نماینده را وارد کنید"
        />
        <Input
          label="تلفن همراه نماینده"
          {...register("repPhone")}
          value={repPhone}
          onChange={e => setValue("repPhone", e.target.value, { shouldValidate: true })}
          placeholder="تلفن همراه نماینده را وارد کنید"
        />
      </div>
      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
        <Input
          label="تلفن ثابت"
          {...register("repLandline")}
          value={repLandline}
          onChange={e => setValue("repLandline", e.target.value, { shouldValidate: true })}
          placeholder="تلفن ثابت را وارد کنید"
        />
        <Input
          label="ایمیل"
          {...register("repEmail")}
          value={repEmail}
          onChange={e => setValue("repEmail", e.target.value, { shouldValidate: true })}
          placeholder="ایمیل را وارد کنید"
        />
        <Input
          label="شماره واتساپ"
          {...register("repWhatsapp")}
          value={repWhatsapp}
          onChange={e => setValue("repWhatsapp", e.target.value, { shouldValidate: true })}
          placeholder="شماره واتساپ را وارد کنید"
        />
        <Input
          label="آیدی تلگرام"
          {...register("repTelegram")}
          value={repTelegram}
          onChange={e => setValue("repTelegram", e.target.value, { shouldValidate: true })}
          placeholder="آیدی تلگرام را وارد کنید"
        />
      </div>
    </StepLayout>
  );
};

export default Step5;

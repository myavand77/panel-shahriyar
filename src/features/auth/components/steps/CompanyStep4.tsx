import React from "react";
import FileUpload from "@/components/ui/FileUpload";
import StepLayout from "@/features/auth/components/StepLayout";
import { useStepsForm } from "./StepsFormContext";
import { Controller } from "react-hook-form";

const CompanyStep4 = ({
  onNext,
  onPrev,
  isCompany,
}: {
  onNext: () => void;
  onPrev: () => void;
  isCompany?: boolean;
}) => {
  const { control, handleSubmit, formState: { errors } } = useStepsForm();

  const onValid = () => {
    onNext();
  };

  return (
    <StepLayout
      currentStep={2}
      onNext={handleSubmit(onValid)}
      onPrev={onPrev}
      isCompany={isCompany}
    >
      <form className="w-full flex flex-col gap-4 mt-2" dir="rtl">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Controller
              name="establishmentNotice"
              control={control}
              rules={{ required: "بارگذاری آگهی تاسیس الزامی است." }}
              render={({ field }) => (
                <FileUpload
                  label="آگهی تاسیس"
                  onChange={field.onChange}
                />
              )}
            />
            {errors.establishmentNotice && (
              <span className="text-error-500 text-xs mt-1">{errors.establishmentNotice.message}</span>
            )}
          </div>
          <div>
            <Controller
              name="lastChangesNotice"
              control={control}
              rules={{ required: "بارگذاری آگهی آخرین تغییرات الزامی است." }}
              render={({ field }) => (
                <FileUpload
                  label="آگهی آخرین تغییرات"
                  onChange={field.onChange}
                />
              )}
            />
            {errors.lastChangesNotice && (
              <span className="text-error-500 text-xs mt-1">{errors.lastChangesNotice.message}</span>
            )}
          </div>
        </div>
        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Controller
              name="shareholdersNotice"
              control={control}
              rules={{ required: "بارگذاری آگهی سهامداران الزامی است." }}
              render={({ field }) => (
                <FileUpload
                  label="آگهی سهامداران"
                  onChange={field.onChange}
                />
              )}
            />
            {errors.shareholdersNotice && (
              <span className="text-error-500 text-xs mt-1">{errors.shareholdersNotice.message}</span>
            )}
          </div>
          <div>
            <Controller
              name="signatoriesNotice"
              control={control}
              rules={{ required: "بارگذاری آگهی امضاداران الزامی است." }}
              render={({ field }) => (
                <FileUpload
                  label="آگهی امضاداران"
                  onChange={field.onChange}
                />
              )}
            />
            {errors.signatoriesNotice && (
              <span className="text-error-500 text-xs mt-1">{errors.signatoriesNotice.message}</span>
            )}
          </div>
        </div>
        {/* Row 3 */}
        <div className="w-full">
          <Controller
            name="logo"
            control={control}
            rules={{ required: "بارگذاری لوگو الزامی است." }}
            render={({ field }) => (
              <FileUpload
                label="بارگذاری لوگو"
                onChange={field.onChange}
              />
            )}
          />
          {errors.logo && (
            <span className="text-error-500 text-xs mt-1">{errors.logo.message}</span>
          )}
        </div>
      </form>
    </StepLayout>
  );
};

export default CompanyStep4;

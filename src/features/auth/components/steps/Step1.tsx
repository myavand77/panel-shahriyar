import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useOtpRequest } from "@/features/auth/login/hooks/useOtpRequest";
import React from "react";
import { handleApiError, isValidIranianPhoneNumber } from "@/lib/error";
import { useStepsForm, StepsFormData } from "./StepsFormContext";
import { Controller } from "react-hook-form";

const Step1 = ({
  onNext,
  onSetPhoneNumber,
}: {
  onNext: () => void;
  onSetPhoneNumber: (phone: string) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    control,
  } = useStepsForm();
  const { requestOtpMutate, isPending, error } = useOtpRequest();

  // Show toast on error
  React.useEffect(() => {
    if (!error) return;
    handleApiError(error, "خطا در ارسال درخواست. لطفا دوباره تلاش کنید.");
  }, [error]);

  const onSubmit = (data: StepsFormData) => {
    const phone = data.phone || "";
    requestOtpMutate(
      { phone_number: phone },
      {
        onSuccess: () => {
          onSetPhoneNumber(phone);
          onNext();
        },
      }
    );
    onSetPhoneNumber(phone);
    onNext();
  };

  return (
    <div
      className="w-[424px] bg-gradient-to-b from-white to-primary-50 rounded-2xl shadow-lg p-8 flex flex-col items-center gap-6 border border-neutral-200 font-sans"
      style={{ fontFamily: "Vazir, sans-serif" }}
    >
      {/* Logo */}
      <img
        src="/assets/figma/vibe-logo.svg"
        alt="Vibe Logo"
        className="mb-6 h-[53px]"
      />
      {/* Title and Subtitle */}
      <div className="w-full flex flex-col items-center gap-2">
        <div className="text-[20px] font-bold text-text-500 leading-[1.5] text-center w-full">
          ورود به پنل فروشگاهی
        </div>
        <div className="text-[16px] font-normal text-neutral-500 leading-[1.5] text-center w-full">
          جهت ورود به وایب لطفا تلفن همراه خود را وارد کنید.
        </div>
      </div>
      {/* Input */}
      <form className="w-full flex flex-col gap-6 mt-2">
        <Controller
          name="phone"
          control={control}
          rules={{
            required: "شماره تلفن الزامی است.",
            validate: (value) =>
              typeof value === "string"
                ? isValidIranianPhoneNumber(value) || "شماره تلفن معتبر نیست."
                : "شماره تلفن معتبر نیست.",
          }}
          render={({ field }) => (
            <Input
              label="تلفن همراه"
              type="tel"
              placeholder="09123456789"
              className="text-right"
              dir="rtl"
              {...field}
              subtitle={errors.phone?.message}
              subtitleType={errors.phone ? "error" : "info"}
            />
          )}
        />
        {/* Main Button */}
        <Button
          className="w-full"
          variant="filled"
          disabled={isPending}
          onClick={handleSubmit(onSubmit)}
        >
          {isPending ? "در حال ارسال..." : "دریافت کد یکبارمصرف"}
        </Button>
      </form>
      {/* Bottom Links */}
      <div className="w-full flex flex-col gap-2 mt-2">
        <div className="flex flex-row-reverse justify-end items-center gap-3">
          <span className="text-text-500 text-[14px]"> ثبت‌نام</span>
          <span className="text-text-400 text-[14px]">حساب کاربری ندارید؟</span>
        </div>
        <div className="flex flex-row-reverse justify-end items-center gap-3">
          <span className="text-text-500 text-[14px]">ورود کاربری</span>
          <span className="text-text-400 text-[14px]">کاربر هستید؟</span>
        </div>
      </div>
    </div>
  );
};

export default Step1;

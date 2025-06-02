import React, { useState } from "react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { showToast } from "@/lib/toast";
import { useRouter } from "next/navigation";
import { useOtpVerify } from "@/features/auth/login/hooks/useOtpVerify";
import { useStepsForm } from "./StepsFormContext";
import { Controller } from "react-hook-form";
import { StepsFormData } from "./StepsFormContext";
import { convertPersianToEnglishNumbers } from "@/lib/utils";
import { getDefaultRoute } from "@/config/routes";
import { useAuth } from "@/lib/auth";
import { UserRole } from "@/types";

const Step2 = ({
  onPrev,
  phone_number,
}: {
  onPrev: () => void;
  phone_number: string;
}) => {
  const [timer, setTimer] = useState(120); // 2 minutes
  const router = useRouter();
  const { handleSubmit, watch, control, setValue } = useStepsForm();
  const otp = watch("otp") || "";
  const { verifyOtpMutate, isPending, error } = useOtpVerify();
  const { user } = useAuth();
  const handleChange = (value: string) =>
    setValue("otp", value, { shouldValidate: true });

  const onSubmit = (data: StepsFormData) => {
    verifyOtpMutate(
      {
        phone_number,
        otp_code: convertPersianToEnglishNumbers(data.otp || ""),
      },
      {
        onSuccess: () => {
          showToast({ text: "ورود شما با موفقیت انجام شد.", type: "success" });
          router.push(getDefaultRoute(user?.role as UserRole));
        },
      }
    );
  };

  const handleResend = () => {
    if (timer === 0) {
      setTimer(120);
      router.back();
      // trigger resend OTP
    }
  };
  const formatTime = (s: number) =>
    `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  React.useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  React.useEffect(() => {
    if (error) {
      showToast({ text: "کد وارد شده صحیح نیست.", type: "error" });
    }
  }, [error]);
  return (
    <div
      className="w-full md:w-[424px] bg-gradient-to-b from-white to-primary-50 rounded-2xl shadow-lg p-8 m-2 flex flex-col items-center gap-6 border border-neutral-200 font-sans"
      style={{ fontFamily: "Vazir, sans-serif" }}
    >
      {/* Logo */}
      <Logo className="mb-6 h-[53px]" />
      {/* Title and Subtitle */}
      <div className="w-full flex flex-col items-center gap-2">
        <div className="text-[20px] font-bold text-text-500 leading-[1.5] text-center w-full">
          کد تایید را وارد کنید
        </div>
        <div className="text-[16px] font-normal text-neutral-500 leading-[1.5] text-center w-full">
          کد یکبار مصرف ارسال شده به شماره موبایل خود را وارد کنید.
        </div>
      </div>
      {/* OTP Input */}
      <form
        className="w-full flex flex-col gap-6 mt-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="otp"
          control={control}
          render={({ field }) => (
            <InputOTP
              value={field.value}
              onChange={(value) => {
                field.onChange(value);
                handleChange(value);
              }}
              maxLength={5}
              containerClassName="justify-center"
              className="text-center text-lg font-bold tracking-widest ltr"
            >
              <InputOTPGroup style={{ direction: "ltr" }}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <InputOTPSlot key={i} index={i} />
                ))}
              </InputOTPGroup>
            </InputOTP>
          )}
        />
        {/* Timer and Resend */}
        <div className="w-full flex flex-row-reverse justify-between items-center mt-2">
          <button
            type="button"
            className="text-primary-500 text-[14px] font-medium disabled:opacity-50"
            onClick={handleResend}
            disabled={timer > 0}
          >
            ارسال مجدد کد
          </button>
          <span className="text-neutral-400 text-[14px]">
            {timer > 0
              ? `ارسال مجدد تا ${formatTime(timer)}`
              : "کد دریافت نکردید؟"}
          </span>
        </div>
        {/* Submit Button */}
        <Button
          className="w-full mt-6 rounded-[6px] h-9 text-[14px] font-medium"
          disabled={otp.length !== 5 || isPending}
          type="submit"
        >
          {isPending ? "در حال تایید..." : "تایید کد"}
        </Button>
      </form>
      {/* Bottom Links */}
      <div className="w-full flex flex-col gap-2 mt-2">
        <div
          className="flex flex-row-reverse justify-center items-center gap-3"
          onClick={onPrev}
        >
          <span className="text-text-500 text-[14px]"> تغییر شماره همراه</span>
        </div>
      </div>
    </div>
  );
};

export default Step2;

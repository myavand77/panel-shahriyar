import React, { useState } from "react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useStepsForm } from "./StepsFormContext";
import { Controller } from "react-hook-form";
import { useOtpVerify } from "@/features/auth/login/hooks/useOtpVerify";
import { useCreateVendor } from "@/features/auth/registration/hooks/useCreateVendor";
import { mapStepsFormDataToVendorPayload } from "@/features/auth/registration/helpers/mapStepsFormDataToVendorPayload";
import { useRouter } from "next/navigation";
import { handleApiError } from "@/lib/error";
import { showToast } from "@/lib/toast";

interface Step7Props {
  onNext: () => void;
  onPrev: () => void;
  tab: "personal" | "company";
}

const Step7: React.FC<Step7Props> = ({ onNext, onPrev, tab }) => {
  const { setValue, watch, control, getValues } = useStepsForm();
  const [timer, setTimer] = useState(120); // 2 minutes
  const otp = watch("otp") || "";
  const router = useRouter();
  // Add hooks for OTP verify
  const { verifyOtpMutate } = useOtpVerify();
  const { createVendorMutate } = useCreateVendor();

  React.useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (value: string) =>
    setValue("otp", value, { shouldValidate: true });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allData = getValues();
    const repName = allData.repName || "";
    const repLastName = allData.repLastName || "";
    const repNationalId = allData.repNationalId || "";
    const repPhone = allData.repPhone || "";
    const otp = allData.otp || "";

    // Only verify OTP and proceed
    verifyOtpMutate(
      {
        first_name: repName,
        last_name: repLastName,
        national_id: repNationalId,
        otp_code: otp,
        phone_number: repPhone,
      },
      {
        onSuccess: () => {
          // 3. Map form data and call createVendor
          const vendorType = tab === "company" ? "company" : "individual";
          const payload = mapStepsFormDataToVendorPayload(allData, vendorType);
          createVendorMutate(payload, {
            onSuccess: () => {
              showToast({
                text: "ثبت نام با موفقیت انجام شد",
                type: "success",
              });
              router.push("/provider/home");
            },
            onError: (error) => {
              handleApiError(error, "خطا در ثبت‌نام. لطفا دوباره تلاش کنید.");
            },
          });
        },
        onError: (error) => {
          handleApiError(
            error,
            "کد تایید اشتباه است یا منقضی شده. لطفا دوباره تلاش کنید."
          );
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

  return (
    <div
      className="w-[424px] bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center gap-6 border border-neutral-200 font-sans"
      style={{ fontFamily: "Vazir, sans-serif" }}
    >
      {/* Logo */}
      <Logo className="mb-6 h-[53px]" />
      {/* Title and Subtitle */}
      <div className="w-full flex flex-col items-center gap-2">
        <div className="text-[20px] font-bold text-text-500 leading-[1.5] text-center w-full">
          تایید تلفن همراه نماینده
        </div>
        <div className="text-[16px] font-normal text-neutral-500 leading-[1.5] text-center w-full">
          لطفا کد ۵ رقمی ارسال‌شده به تلفن همراه نماینده‌ را وارد کنید.
        </div>
      </div>
      {/* OTP Input */}
      <form className="w-full flex flex-col items-center gap-6 mt-2">
        <Controller
          control={control}
          name="otp"
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
          disabled={otp.length !== 5}
          onClick={handleSubmit}
        >
          ثبت‌نام و ورود به پنل
        </Button>
      </form>
      {/* Bottom Links */}
      <div className="w-full flex flex-col gap-2 mt-2">
        <div
          className="flex flex-row-reverse justify-center items-center gap-3 cursor-pointer"
          onClick={onPrev}
        >
          <span className="text-text-500 text-[14px]">بازگشت به مرحله قبل</span>
        </div>
      </div>
    </div>
  );
};

export default Step7;

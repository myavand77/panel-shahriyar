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
import { useForm } from "react-hook-form";
import { useOtpVerify } from "@/features/auth/login/hooks/useOtpVerify";

const Step2 = ({
  onNext,
  onPrev,
  phone_number,
}: {
  onNext: () => void;
  onPrev: () => void;
  phone_number: string;
}) => {
  const [timer, setTimer] = useState(120); // 2 minutes
  const router = useRouter();
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<{ otp: string }>({
    mode: "onChange",
    defaultValues: { otp: "" },
  });
  const otp = watch("otp");
  const { verifyOtpMutate, isPending, error } = useOtpVerify();

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

  const onSubmit = (data: { otp: string }) => {
    verifyOtpMutate(
      { phone_number, otp_code: data.otp },
      {
        onSuccess: () => {
          showToast({ text: "ورود شما با موفقیت انجام شد.", type: "success" });
          router.push("/provider/home");
        },
      }
    );
  };

  const handleChange = (value: string) => setValue("otp", value, { shouldValidate: true });
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
      className="w-[424px] bg-gradient-to-b from-white to-primary-50 rounded-2xl shadow-lg p-8 flex flex-col items-center gap-6 border border-neutral-200 font-sans"
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
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col items-center gap-6 mt-2"
      >
        <InputOTP
          value={otp}
          onChange={handleChange}
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

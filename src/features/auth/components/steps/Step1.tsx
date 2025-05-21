import Logo from "@/components/ui/Logo";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const Step1 = ({ onNext }: { onNext: () => void }) => {
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
      <div className="w-full flex flex-col gap-6 mt-2">
        <Input
          label="تلفن همراه"
          type="tel"
          placeholder="09123456789"
          className="text-right"
          dir="rtl"
        />
      </div>
      {/* Main Button */}
      <Button
        className="w-full mt-6 rounded-[6px] h-9 text-[14px] font-medium"
        style={{ opacity: 0.5 }}
        onClick={onNext}
      >
        دریافت کد یکبارمصرف
      </Button>
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

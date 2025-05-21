import React from "react";
import InfoBanner from "@/components/ui/InfoBanner";
import IPInput from "@/components/ui/IPInput";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { Mail, Globe, Key, Link, Check } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Stepper from "@/components/ui/Stepper";
import AuthHeader from "@/features/auth/user-registration/components/AuthHeader";
import StepLayout from "@/features/auth/user-registration/components/StepLayout";

interface Step4Props {
  onNext: () => void;
  onPrev: () => void;
}

const Step4: React.FC<Step4Props> = ({ onNext, onPrev }) => {
  return (
    <StepLayout currentStep={2} onNext={onNext} onPrev={onPrev}>
      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {/* Website Input */}
        <div className="flex flex-col">
          <Input
            label="وبسایت"
            placeholder="وبسایت را وارد کنید"
            startLogo={<Globe className="w-4 h-4" />}
          />
          <span className="text-xs text-neutral-400 mt-1 mr-1">
            آدرس وبسایت را بدون www یا https:// وارد کنید.
          </span>
        </div>
        {/* Webservice URL Input */}
        <div className="flex flex-col">
          <Input
            label="آدرس وب‌سرویس کالا یا خدمات (اختیاری)"
            placeholder="آدرس وب‌سرویس را وارد کنید"
            startLogo={<Link className="w-4 h-4" />}
          />
        </div>
        {/* Service Key Input */}
        <div className="flex flex-col">
          <Input
            label="کلید سرویس (API Key) (اختیاری)"
            placeholder="کلید سرویس (API Key) را وارد کنید"
            startLogo={<Key className="w-4 h-4" />}
          />
        </div>
      </div>
      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {/* Email Input */}
        <div className="flex flex-col">
          <Input
            label="ایمیل"
            placeholder="ایمیل را وارد کنید"
            startLogo={<Mail className="w-4 h-4" />}
          />
          <span className="text-xs text-neutral-400 mt-1 mr-1">
            اطلاعات درگاه پرداخت اعتباری و کلید سرویس به این ایمیل ارسال خواهد
            شد.
          </span>
        </div>
        {/* Callback Address Input */}
        <div className="flex flex-col">
          <Input
            label="آدرس Callback"
            placeholder="آدرس Callback را وارد کنید"
            startLogo={<Link className="w-4 h-4" />}
          />
          <span className="text-xs text-neutral-400 mt-1 mr-1">
            بعد از تکمیل پرداخت نقدی و اعتباری، کاربر به این آدرس منتقل خواهد
            شد.
          </span>
        </div>
      </div>
      {/* Row 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {/* IP Input (right) */}
        <div className="flex flex-col">
          <IPInput label="IP فروشگاه" />
        </div>
        {/* InfoBanner (left) */}
        <div className="flex flex-col">
          <InfoBanner className="h-full">
            در صورتيكه كه از هاستينگ استفاده مي‌کنيد و IP اصلي سرور شما پشت لايه
            سروري و پشتيباني قرار دارد، مي‌بايست IP اصلي سرور خود را وارد كنيد.
          </InfoBanner>
        </div>
      </div>
    </StepLayout>
  );
};

export default Step4;

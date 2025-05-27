import React from "react";
import InfoBanner from "@/components/ui/InfoBanner";
import IPInput from "@/components/ui/IPInput";
import Input from "@/components/ui/Input";
import { Mail, Globe, Key, Link } from "lucide-react";
import StepLayout from "@/features/auth/components/StepLayout";
import { useStepsForm } from "./StepsFormContext";
import { Controller } from "react-hook-form";

interface Step4Props {
  onNext: () => void;
  onPrev: () => void;
  isCompany?: boolean;
}

const Step4: React.FC<Step4Props> = ({ onNext, onPrev, isCompany }) => {
  const { register, setValue, watch, control } = useStepsForm();
  const website = watch("website") || "";
  const webservice = watch("webservice") || "";
  const apiKey = watch("apiKey") || "";
  const email = watch("email") || "";
  const callback = watch("callback") || "";
  const ips = watch("ips") || [];

  return (
    <StepLayout
      currentStep={isCompany ? 3 : 2}
      onNext={onNext}
      onPrev={onPrev}
      isCompany={isCompany}
    >
      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {/* Website Input */}
        <div className="flex flex-col">
          <Controller
            name="website"
            control={control}
            render={({ field }) => (
              <Input
                label="وبسایت"
                {...field}
                placeholder="وبسایت را وارد کنید"
                startLogo={<Globe className="w-4 h-4" />}
              />
            )}
          />
          <span className="text-xs text-neutral-400 mt-1 mr-1">
            آدرس وبسایت را بدون www یا https:// وارد کنید.
          </span>
        </div>
        {/* Webservice URL Input */}
        <div className="flex flex-col">
          <Input
            label="آدرس وب‌سرویس کالا یا خدمات (اختیاری)"
            {...register("webservice")}
            value={webservice}
            onChange={e => setValue("webservice", e.target.value, { shouldValidate: true })}
            placeholder="آدرس وب‌سرویس را وارد کنید"
            startLogo={<Link className="w-4 h-4" />}
          />
        </div>
        {/* Service Key Input */}
        <div className="flex flex-col">
          <Input
            label="کلید سرویس (API Key) (اختیاری)"
            {...register("apiKey")}
            value={apiKey}
            onChange={e => setValue("apiKey", e.target.value, { shouldValidate: true })}
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
            {...register("email")}
            value={email}
            onChange={e => setValue("email", e.target.value, { shouldValidate: true })}
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
            {...register("callback")}
            value={callback}
            onChange={e => setValue("callback", e.target.value, { shouldValidate: true })}
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
          <IPInput label="IP فروشگاه" value={ips} onChange={ipsArr => setValue("ips", ipsArr, { shouldValidate: true })} />
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

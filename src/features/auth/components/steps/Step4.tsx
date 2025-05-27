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
  const { register, setValue, watch, control, handleSubmit, formState: { errors } } = useStepsForm();
  const website = watch("website") || "";
  const webservice = watch("webservice") || "";
  const apiKey = watch("apiKey") || "";
  const email = watch("email") || "";
  const callback = watch("callback") || "";
  const ips = watch("ips") || [];

  return (
    <StepLayout
      currentStep={isCompany ? 3 : 2}
      onNext={handleSubmit(onNext)}
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
            rules={{ required: "وارد کردن وبسایت الزامی است." }}
            render={({ field }) => (
              <Input
                label="وبسایت"
                {...field}
                placeholder="وبسایت را وارد کنید"
                startLogo={<Globe className="w-4 h-4" />}
                subtitle={errors.website?.message}
                subtitleType={errors.website ? "error" : "info"}
              />
            )}
          />
          <span className="text-xs text-neutral-400 mt-1 mr-1">
            آدرس وبسایت را بدون www یا https:// وارد کنید.
          </span>
        </div>
        {/* Webservice URL Input (now required) */}
        <div className="flex flex-col">
          <Controller
            name="webservice"
            control={control}
            rules={{ required: "وارد کردن آدرس وب‌سرویس الزامی است." }}
            render={({ field }) => (
              <Input
                label="آدرس وب‌سرویس کالا یا خدمات"
                {...field}
                placeholder="آدرس وب‌سرویس را وارد کنید"
                startLogo={<Link className="w-4 h-4" />}
                subtitle={errors.webservice?.message}
                subtitleType={errors.webservice ? "error" : "info"}
              />
            )}
          />
        </div>
        {/* Service Key Input (now required) */}
        <div className="flex flex-col">
          <Controller
            name="apiKey"
            control={control}
            rules={{ required: "وارد کردن کلید سرویس (API Key) الزامی است." }}
            render={({ field }) => (
              <Input
                label="کلید سرویس (API Key)"
                {...field}
                placeholder="کلید سرویس (API Key) را وارد کنید"
                startLogo={<Key className="w-4 h-4" />}
                subtitle={errors.apiKey?.message}
                subtitleType={errors.apiKey ? "error" : "info"}
              />
            )}
          />
        </div>
      </div>
      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {/* Email Input */}
        <div className="flex flex-col">
          <Controller
            name="email"
            control={control}
            rules={{ required: "وارد کردن ایمیل الزامی است." }}
            render={({ field }) => (
              <Input
                label="ایمیل"
                {...field}
                placeholder="ایمیل را وارد کنید"
                startLogo={<Mail className="w-4 h-4" />}
                subtitle={errors.email?.message}
                subtitleType={errors.email ? "error" : "info"}
              />
            )}
          />
          <span className="text-xs text-neutral-400 mt-1 mr-1">
            اطلاعات درگاه پرداخت اعتباری و کلید سرویس به این ایمیل ارسال خواهد
            شد.
          </span>
        </div>
        {/* Callback Address Input */}
        <div className="flex flex-col">
          <Controller
            name="callback"
            control={control}
            rules={{ required: "وارد کردن آدرس Callback الزامی است." }}
            render={({ field }) => (
              <Input
                label="آدرس Callback"
                {...field}
                placeholder="آدرس Callback را وارد کنید"
                startLogo={<Link className="w-4 h-4" />}
                subtitle={errors.callback?.message}
                subtitleType={errors.callback ? "error" : "info"}
              />
            )}
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
          <Controller
            name="ips"
            control={control}
            rules={{ required: "وارد کردن حداقل یک IP الزامی است.", validate: v => v && v.length > 0 || "وارد کردن حداقل یک IP الزامی است." }}
            render={({ field }) => (
              <IPInput
                label="IP فروشگاه"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          {errors.ips && (
            <span className="text-error-500 text-xs mt-1">{errors.ips.message}</span>
          )}
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

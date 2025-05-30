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
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useStepsForm();

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
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                label="وبسایت"
                {...field}
                required
                placeholder="وبسایت را وارد کنید"
                validationType="url"
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
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                label="آدرس وب‌سرویس کالا یا خدمات"
                {...field}
                required
                placeholder="آدرس وب‌سرویس را وارد کنید"
                validationType="url"
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
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                label="کلید سرویس (API Key)"
                {...field}
                required
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
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                label="ایمیل"
                {...field}
                required
                placeholder="ایمیل را وارد کنید"
                validationType="email"
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
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                label="آدرس Callback"
                {...field}
                required
                placeholder="آدرس Callback را وارد کنید"
                validationType="url"
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
            rules={{
              required: "IP فروشگاه الزامی است",
            }}
            render={({ field }) => (
              <IPInput
                label="IP فروشگاه"
                value={field.value}
                onChange={field.onChange}
                required
                error={errors.ips?.message}
              />
            )}
          />
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

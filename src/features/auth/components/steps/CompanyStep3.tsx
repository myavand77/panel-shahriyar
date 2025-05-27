import React from "react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import StepLayout from "@/features/auth/components/StepLayout";
import Tabs from "@/components/ui/Tabs";
import { useStepsForm } from "./StepsFormContext";
import { Controller } from "react-hook-form";

const provinces = [
  { value: "", label: "استان را انتخاب کنید" },
  { value: "tehran", label: "تهران" },
  { value: "isfahan", label: "اصفهان" },
  { value: "fars", label: "فارس" },
  // ... add more provinces as needed
];
const cities = [
  { value: "", label: "شهر را انتخاب کنید" },
  { value: "tehran", label: "تهران" },
  { value: "esfahan", label: "اصفهان" },
  { value: "shiraz", label: "شیراز" },
  // ... add more cities as needed
];
const categories = [
  { value: "", label: "دسته‌بندی را انتخاب کنید" },
  { value: "shop", label: "فروشگاه" },
  { value: "service", label: "خدماتی" },
  { value: "other", label: "سایر" },
];

const CompanyStep3 = ({
  tab,
  setTab,
  onNext,
  onPrev,
  isCompany,
}: {
  tab: "personal" | "company";
  setTab: (tab: "personal" | "company") => void;
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
      currentStep={1}
      onNext={handleSubmit(onValid)}
      onPrev={onPrev}
      isCompany={isCompany}
    >
      <Tabs
        tabs={[
          { id: "personal", label: "حقیقی" },
          { id: "company", label: "حقوقی" },
        ]}
        activeTab={tab}
        onTabChange={(value) => setTab(value as "personal" | "company")}
        className="mb-4 justify-center"
      />
      <form className="w-full flex flex-col gap-4 mt-2" dir="rtl">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Controller
            name="companyName"
            control={control}
            rules={{ required: "نام شرکت الزامی است." }}
            render={({ field }) => (
              <Input
                label="نام شرکت"
                {...field}
                placeholder="نام شرکت را وارد کنید"
                className="text-right placeholder:text-xs"
                dir="rtl"
                subtitle={errors.companyName?.message}
                subtitleType={errors.companyName ? "error" : "info"}
              />
            )}
          />
          <Controller
            name="brandName"
            control={control}
            rules={{ required: "نام برند الزامی است." }}
            render={({ field }) => (
              <Input
                label="نام برند"
                {...field}
                placeholder="نام برند را وارد کنید"
                className="text-right placeholder:text-xs"
                dir="rtl"
                subtitle={errors.brandName?.message}
                subtitleType={errors.brandName ? "error" : "info"}
              />
            )}
          />
          <Controller
            name="category"
            control={control}
            rules={{ required: "دسته بندی الزامی است.", validate: v => v !== "" || "دسته بندی الزامی است." }}
            render={({ field }) => (
              <Select
                label="دسته بندی"
                {...field}
                options={categories}
                className="text-right placeholder:text-xs"
                dir="rtl"
              />
            )}
          />
          {errors.category && <span className="text-error-500 text-xs mt-1">{errors.category.message}</span>}
          <Controller
            name="nationalId"
            control={control}
            rules={{ required: "شناسه ملی الزامی است." }}
            render={({ field }) => (
              <Input
                label="شناسه ملی"
                {...field}
                placeholder="شناسه ملی را وارد کنید"
                className="text-right placeholder:text-xs"
                dir="rtl"
                subtitle={errors.nationalId?.message}
                subtitleType={errors.nationalId ? "error" : "info"}
              />
            )}
          />
        </div>
        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Controller
            name="economicCode"
            control={control}
            rules={{ required: "شماره اقتصادی الزامی است." }}
            render={({ field }) => (
              <Input
                label="شماره اقتصادی"
                {...field}
                placeholder="شماره اقتصادی را وارد کنید"
                className="text-right placeholder:text-xs"
                dir="rtl"
                subtitle={errors.economicCode?.message}
                subtitleType={errors.economicCode ? "error" : "info"}
              />
            )}
          />
          <Controller
            name="accountNumber"
            control={control}
            rules={{ required: "شماره حساب الزامی است." }}
            render={({ field }) => (
              <Input
                label="شماره حساب"
                {...field}
                placeholder="شماره حساب را وارد کنید"
                className="text-right placeholder:text-xs"
                dir="ltr"
                subtitle={errors.accountNumber?.message}
                subtitleType={errors.accountNumber ? "error" : "info"}
              />
            )}
          />
          <Controller
            name="shaba"
            control={control}
            rules={{ required: "شماره شبا الزامی است." }}
            render={({ field }) => (
              <Input
                label="شماره شبا"
                {...field}
                placeholder="شماره شبا را وارد کنید"
                className="text-right placeholder:text-xs"
                dir="ltr"
                autoComplete="off"
                startLogo={
                  <span className="text-neutral-500 text-sm select-none">
                    IR
                  </span>
                }
                subtitle={errors.shaba?.message}
                subtitleType={errors.shaba ? "error" : "info"}
              />
            )}
          />
          <Controller
            name="postalCode"
            control={control}
            rules={{ required: "کدپستی الزامی است." }}
            render={({ field }) => (
              <Input
                label="کدپستی"
                {...field}
                placeholder="کدپستی را وارد کنید"
                className="text-right placeholder:text-xs"
                dir="rtl"
                subtitle={errors.postalCode?.message}
                subtitleType={errors.postalCode ? "error" : "info"}
              />
            )}
          />
        </div>
        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Controller
            name="province"
            control={control}
            rules={{ required: "استان الزامی است.", validate: v => v !== "" || "استان الزامی است." }}
            render={({ field }) => (
              <Select
                label="استان"
                {...field}
                options={provinces}
                className="text-right placeholder:text-xs"
                dir="rtl"
              />
            )}
          />
          {errors.province && <span className="text-error-500 text-xs mt-1">{errors.province.message}</span>}
          <Controller
            name="city"
            control={control}
            rules={{ required: "شهر الزامی است.", validate: v => v !== "" || "شهر الزامی است." }}
            render={({ field }) => (
              <Select
                label="شهر"
                {...field}
                options={cities}
                className="text-right placeholder:text-xs"
                dir="rtl"
              />
            )}
          />
          {errors.city && <span className="text-error-500 text-xs mt-1">{errors.city.message}</span>}
        </div>
        {/* Row 4 */}
        <div className="w-full">
          <Controller
            name="address"
            control={control}
            rules={{ required: "آدرس الزامی است." }}
            render={({ field }) => (
              <Input
                label="آدرس"
                {...field}
                placeholder="آدرس را وارد کنید"
                className="text-right placeholder:text-xs"
                dir="rtl"
                subtitle={errors.address?.message}
                subtitleType={errors.address ? "error" : "info"}
              />
            )}
          />
        </div>
      </form>
    </StepLayout>
  );
};

export default CompanyStep3;

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
  const { register, setValue, watch, control } = useStepsForm();
  const companyName = watch("companyName") || "";
  const brandName = watch("brandName") || "";
  const category = watch("category") || "";
  const nationalId = watch("nationalId") || "";
  const economicCode = watch("economicCode") || "";
  const accountNumber = watch("accountNumber") || "";
  const shaba = watch("shaba") || "";
  const postalCode = watch("postalCode") || "";
  const province = watch("province") || "";
  const city = watch("city") || "";
  const address = watch("address") || "";

  return (
    <StepLayout
      currentStep={1}
      onNext={onNext}
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
            render={({ field }) => (
              <Input
                label="نام شرکت"
                {...field}
                value={companyName}
                onChange={e => setValue("companyName", e.target.value, { shouldValidate: true })}
                placeholder="نام شرکت را وارد کنید"
                className="text-right placeholder:text-xs"
                dir="rtl"
              />
            )}
          />
          <Controller
            name="brandName"
            control={control}
            render={({ field }) => (
              <Input
                label="نام برند"
                {...field}
                value={brandName}
                onChange={e => setValue("brandName", e.target.value, { shouldValidate: true })}
                placeholder="نام برند را وارد کنید"
                className="text-right placeholder:text-xs"
                dir="rtl"
              />
            )}
          />
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Select
                label="دسته بندی"
                {...field}
                value={category}
                onChange={e => setValue("category", e.target.value, { shouldValidate: true })}
                options={categories}
                className="text-right placeholder:text-xs"
                dir="rtl"
              />
            )}
          />
          <Controller
            name="nationalId"
            control={control}
            render={({ field }) => (
              <Input
                label="شناسه ملی"
                {...field}
                value={nationalId}
                onChange={e => setValue("nationalId", e.target.value, { shouldValidate: true })}
                placeholder="شناسه ملی را وارد کنید"
                className="text-right placeholder:text-xs"
                dir="rtl"
              />
            )}
          />
        </div>
        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Controller
            name="economicCode"
            control={control}
            render={({ field }) => (
              <Input
                label="شماره اقتصادی"
                {...field}
                value={economicCode}
                onChange={e => setValue("economicCode", e.target.value, { shouldValidate: true })}
                placeholder="شماره اقتصادی را وارد کنید"
                className="text-right placeholder:text-xs"
                dir="rtl"
              />
            )}
          />
          <Controller
            name="accountNumber"
            control={control}
            render={({ field }) => (
              <Input
                label="شماره حساب"
                {...field}
                value={accountNumber}
                onChange={e => setValue("accountNumber", e.target.value, { shouldValidate: true })}
                placeholder="شماره حساب را وارد کنید"
                className="text-right placeholder:text-xs"
                dir="ltr"
              />
            )}
          />
          <Controller
            name="shaba"
            control={control}
            render={({ field }) => (
              <Input
                label="شماره شبا"
                {...field}
                value={shaba}
                onChange={e => setValue("shaba", e.target.value, { shouldValidate: true })}
                placeholder="شماره شبا را وارد کنید"
                className="text-right placeholder:text-xs"
                dir="ltr"
                autoComplete="off"
                startLogo={
                  <span className="text-neutral-500 text-sm select-none">IR</span>
                }
              />
            )}
          />
          <Controller
            name="postalCode"
            control={control}
            render={({ field }) => (
              <Input
                label="کدپستی"
                {...field}
                value={postalCode}
                onChange={e => setValue("postalCode", e.target.value, { shouldValidate: true })}
                placeholder="کدپستی را وارد کنید"
                className="text-right placeholder:text-xs"
                dir="rtl"
              />
            )}
          />
        </div>
        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Controller
            name="province"
            control={control}
            render={({ field }) => (
              <Select
                label="استان"
                {...field}
                value={province}
                onChange={e => setValue("province", e.target.value, { shouldValidate: true })}
                options={provinces}
                className="text-right placeholder:text-xs"
                dir="rtl"
              />
            )}
          />
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <Select
                label="شهر"
                {...field}
                value={city}
                onChange={e => setValue("city", e.target.value, { shouldValidate: true })}
                options={cities}
                className="text-right placeholder:text-xs"
                dir="rtl"
              />
            )}
          />
        </div>
        {/* Row 4 */}
        <div className="w-full">
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <Input
                label="آدرس"
                {...field}
                value={address}
                onChange={e => setValue("address", e.target.value, { shouldValidate: true })}
                placeholder="آدرس را وارد کنید"
                className="text-right placeholder:text-xs"
                dir="rtl"
              />
            )}
          />
        </div>
      </form>
    </StepLayout>
  );
};

export default CompanyStep3;

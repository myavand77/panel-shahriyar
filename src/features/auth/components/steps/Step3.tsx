import React from "react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Tabs from "@/components/ui/Tabs";
import FileUpload from "@/components/ui/FileUpload";
import StepLayout from "@/features/auth/components/StepLayout";
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

const Step3 = ({
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
  const {
    register,
    setValue,
    watch,
    formState: { errors },
    control,
  } = useStepsForm();

  // Watch all fields for controlled components
  const name = watch("name");
  const lastName = watch("lastName");
  const email = watch("email");
  const brand = watch("brand");
  const nationalId = watch("nationalId");
  const phone = watch("phone");
  const province = watch("province");
  const city = watch("city");
  const category = watch("category");
  const address = watch("address");
  const postalCode = watch("postalCode");
  const accountNumber = watch("accountNumber");
  const shaba = watch("shaba");
  const logo = watch("logo");

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

      {tab === "personal" && (
        <form className="w-full flex flex-col gap-4 mt-2" dir="rtl">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input
                  label="نام"
                  {...field}
                  placeholder="نام را وارد کنید"
                  className="text-right placeholder:text-xs"
                  dir="rtl"
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <Input
                  label="نام خانوادگی"
                  {...field}
                  placeholder="نام خانوادگی را وارد کنید"
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
                  label="کدملی"
                  {...field}
                  placeholder="کدملی را وارد کنید"
                  className="text-right placeholder:text-xs"
                  dir="rtl"
                />
              )}
            />
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <Input
                  label="تلفن همراه"
                  {...field}
                  placeholder="تلفن همراه را وارد کنید"
                  className="text-right placeholder:text-xs"
                  dir="rtl"
                />
              )}
            />
          </div>
          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  label="ایمیل"
                  {...field}
                  placeholder="ایمیل را وارد کنید"
                  className="text-right placeholder:text-xs"
                  dir="rtl"
                />
              )}
            />
            <Controller
              name="province"
              control={control}
              render={({ field }) => (
                <Select
                  label="استان"
                  options={provinces}
                  {...field}
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
                  options={cities}
                  {...field}
                  className="text-right placeholder:text-xs"
                  dir="rtl"
                />
              )}
            />
            <Controller
              name="postalCode"
              control={control}
              render={({ field }) => (
                <Input
                  label="کد پستی"
                  {...field}
                  placeholder="کد پستی را وارد کنید"
                  className="text-right placeholder:text-xs"
                  dir="rtl"
                />
              )}
            />
          </div>
          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Controller
              name="brand"
              control={control}
              render={({ field }) => (
                <Input
                  label="برند"
                  {...field}
                  placeholder="برند را وارد کنید"
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
                  label="دسته‌بندی"
                  options={categories}
                  {...field}
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
          </div>
          {/* Row 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <Input
                  label="آدرس"
                  {...field}
                  placeholder="آدرس را وارد کنید"
                  className="text-right placeholder:text-xs"
                  dir="rtl"
                />
              )}
            />
            <Controller
              name="logo"
              control={control}
              render={({ field }) => (
                <FileUpload
                  label="بارگذاری لوگو"
                  value={field.value || null}
                  onChange={file => field.onChange(file)}
                />
              )}
            />
          </div>
        </form>
      )}
    </StepLayout>
  );
};

export default Step3;

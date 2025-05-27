import React, { useMemo } from "react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Tabs from "@/components/ui/Tabs";
import FileUpload from "@/components/ui/FileUpload";
import StepLayout from "@/features/auth/components/StepLayout";
import { useStepsForm } from "./StepsFormContext";
import { Controller, useWatch } from "react-hook-form";
import provincesCitiesData from "@/constants/provinces_cities.json";

// Get unique provinces
const provinces = [
  { value: "", label: "استان را انتخاب کنید" },
  ...Array.from(
    new Set(provincesCitiesData.map((item) => item.provinceName))
  ).map((province) => ({
    value: province,
    label: province,
  })),
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
    control,
    handleSubmit,
    formState: { errors },
  } = useStepsForm();

  // Watch the selected province to filter cities
  const selectedProvince = useWatch({
    control,
    name: "province",
  });

  // Filter cities based on selected province
  const cities = useMemo(() => {
    const defaultOption = { value: "", label: "شهر را انتخاب کنید" };
    if (!selectedProvince) {
      return [defaultOption];
    }
    const filteredCities = provincesCitiesData
      .filter((item) => item.provinceName === selectedProvince)
      .map((item) => ({
        value: item.cityName,
        label: item.cityName,
      }));
    return [defaultOption, ...filteredCities];
  }, [selectedProvince]);

  // Handler for form submit
  const onValid = () => {
    onNext();
  };

  return (
    <StepLayout
      currentStep={1}
      onNext={handleSubmit(onValid)}
      onPrev={onPrev}
      isCompany={isCompany}
      showPrev={false}
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
        <form
          className="w-full flex flex-col gap-4 mt-2"
          dir="rtl"
          onSubmit={handleSubmit(onValid)}
        >
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Controller
              name="name"
              control={control}
              rules={{ required: "نام الزامی است." }}
              render={({ field }) => (
                <Input
                  label="نام"
                  {...field}
                  placeholder="نام را وارد کنید"
                  className="text-right placeholder:text-xs"
                  dir="rtl"
                  subtitle={errors.name?.message}
                  subtitleType={errors.name ? "error" : "info"}
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              rules={{ required: "نام خانوادگی الزامی است." }}
              render={({ field }) => (
                <Input
                  label="نام خانوادگی"
                  {...field}
                  placeholder="نام خانوادگی را وارد کنید"
                  className="text-right placeholder:text-xs"
                  dir="rtl"
                  subtitle={errors.lastName?.message}
                  subtitleType={errors.lastName ? "error" : "info"}
                />
              )}
            />
            <Controller
              name="nationalId"
              control={control}
              rules={{ required: "کدملی الزامی است." }}
              render={({ field }) => (
                <Input
                  label="کدملی"
                  {...field}
                  placeholder="کدملی را وارد کنید"
                  className="text-right placeholder:text-xs"
                  dir="rtl"
                  subtitle={errors.nationalId?.message}
                  subtitleType={errors.nationalId ? "error" : "info"}
                />
              )}
            />
            <Controller
              name="phone"
              control={control}
              rules={{ required: "تلفن همراه الزامی است." }}
              render={({ field }) => (
                <Input
                  label="تلفن همراه"
                  {...field}
                  placeholder="تلفن همراه را وارد کنید"
                  className="text-right placeholder:text-xs"
                  dir="rtl"
                  subtitle={errors.phone?.message}
                  subtitleType={errors.phone ? "error" : "info"}
                />
              )}
            />
          </div>
          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Controller
              name="email"
              control={control}
              rules={{ required: "ایمیل الزامی است." }}
              render={({ field }) => (
                <Input
                  label="ایمیل"
                  {...field}
                  placeholder="ایمیل را وارد کنید"
                  className="text-right placeholder:text-xs"
                  dir="rtl"
                  subtitle={errors.email?.message}
                  subtitleType={errors.email ? "error" : "info"}
                />
              )}
            />
            <Controller
              name="province"
              control={control}
              rules={{
                required: "استان الزامی است.",
                validate: (v) => v !== "" || "استان الزامی است.",
              }}
              render={({ field }) => (
                <Select
                  label="استان"
                  options={provinces}
                  {...field}
                  className="text-right placeholder:text-xs"
                  dir="rtl"
                  subtitle={errors.province?.message}
                  subtitleType={errors.province ? "error" : "info"}
                />
              )}
            />
            <Controller
              name="city"
              control={control}
              rules={{
                required: "شهر الزامی است.",
                validate: (v) => v !== "" || "شهر الزامی است.",
              }}
              render={({ field }) => (
                <Select
                  label="شهر"
                  options={cities}
                  {...field}
                  className="text-right placeholder:text-xs"
                  dir="rtl"
                  subtitle={errors.city?.message}
                  subtitleType={errors.city ? "error" : "info"}
                />
              )}
            />
            <Controller
              name="postalCode"
              control={control}
              rules={{ required: "کد پستی الزامی است." }}
              render={({ field }) => (
                <Input
                  label="کد پستی"
                  {...field}
                  placeholder="کد پستی را وارد کنید"
                  className="text-right placeholder:text-xs"
                  dir="rtl"
                  subtitle={errors.postalCode?.message}
                  subtitleType={errors.postalCode ? "error" : "info"}
                />
              )}
            />
          </div>
          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Controller
              name="brand"
              control={control}
              rules={{ required: "برند الزامی است." }}
              render={({ field }) => (
                <Input
                  label="برند"
                  {...field}
                  placeholder="برند را وارد کنید"
                  className="text-right placeholder:text-xs"
                  dir="rtl"
                  subtitle={errors.brand?.message}
                  subtitleType={errors.brand ? "error" : "info"}
                />
              )}
            />
            <Controller
              name="category"
              control={control}
              rules={{
                required: "دسته‌بندی الزامی است.",
                validate: (v) => v !== "" || "دسته‌بندی الزامی است.",
              }}
              render={({ field }) => (
                <Select
                  label="دسته‌بندی"
                  options={categories}
                  {...field}
                  className="text-right placeholder:text-xs"
                  dir="rtl"
                  subtitle={errors.category?.message}
                  subtitleType={errors.category ? "error" : "info"}
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
          </div>
          {/* Row 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <Controller
              name="logo"
              control={control}
              rules={{ required: "بارگذاری لوگو الزامی است." }}
              render={({ field }) => (
                <FileUpload
                  label="بارگذاری لوگو"
                  onChange={(file) => field.onChange(file)}
                />
              )}
            />
            {errors.logo && (
              <span className="text-error-500 text-xs mt-1">
                {errors.logo.message}
              </span>
            )}
          </div>
        </form>
      )}
    </StepLayout>
  );
};

export default Step3;

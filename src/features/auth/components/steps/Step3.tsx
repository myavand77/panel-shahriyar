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
  ...Array.from(
    new Set(provincesCitiesData.map((item) => item.provinceName))
  ).map((province) => ({
    value: province,
    label: province,
  })),
];

const categories = [
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
    if (!selectedProvince) {
      return [];
    }
    const filteredCities = provincesCitiesData
      .filter((item) => item.provinceName === selectedProvince)
      .map((item) => ({
        value: item.cityName,
        label: item.cityName,
      }));
    return [...filteredCities];
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
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  label="نام"
                  {...field}
                  required
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
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  label="نام خانوادگی"
                  {...field}
                  required
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
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  label="کدملی"
                  validationType="nationalCode"
                  {...field}
                  required
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
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  label="تلفن همراه"
                  validationType="mobile"
                  {...field}
                  required
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
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  label="ایمیل"
                  validationType="email"
                  {...field}
                  required
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
                required: true,
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
                  required
                />
              )}
            />
            <Controller
              name="city"
              control={control}
              rules={{
                required: true,
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
                  required
                />
              )}
            />
            <Controller
              name="postalCode"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  label="کد پستی"
                  validationType="postalCode"
                  {...field}
                  required
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
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  label="برند"
                  {...field}
                  required
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
                required: true,
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
                  required
                />
              )}
            />
            <Controller
              name="accountNumber"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  label="شماره حساب"
                  validationType="number"
                  {...field}
                  required
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
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  label="شماره شبا"
                  validationType="shaba"
                  {...field}
                  placeholder="شماره شبا را وارد کنید"
                  className="text-right placeholder:text-xs"
                  dir="ltr"
                  autoComplete="off"
                  required
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
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  label="آدرس"
                  {...field}
                  required
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
              rules={{ required: "لطفا لوگو را بارگذاری کنید" }}
              render={({ field }) => (
                <FileUpload
                  label="بارگذاری لوگو"
                  onChange={(file) => field.onChange(file)}
                  fileUrl={
                    typeof window !== "undefined" && field.value instanceof File
                      ? URL.createObjectURL(field.value)
                      : typeof field.value === "string"
                      ? field.value
                      : undefined
                  }
                  required
                  error={errors.logo?.message}
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

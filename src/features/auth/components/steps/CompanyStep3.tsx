import React, { useState, useEffect } from "react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import StepLayout from "@/features/auth/components/StepLayout";
import Tabs from "@/components/ui/Tabs";
import { useStepsForm } from "./StepsFormContext";
import { Controller, useWatch } from "react-hook-form";
import provincesData from "@/constants/provinces.json";
import citiesData from "@/constants/provinces_cities.json";

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
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useStepsForm();
  const [cities, setCities] = useState<Array<{ value: string; label: string }>>(
    []
  );

  const selectedProvince = useWatch({
    control,
    name: "province",
  });

  const provinces = [
    { value: "", label: "استان را انتخاب کنید" },
    ...provincesData.map((province) => ({
      value: province.provinceId,
      label: province.provinceName,
    })),
  ];

  const onValid = () => {
    onNext();
  };

  useEffect(() => {
    if (selectedProvince) {
      const filteredCities = citiesData
        .filter((city) => city.provinceId === selectedProvince)
        .map((city) => ({
          value: city.cityId,
          label: city.cityName,
        }));
      setCities([
        { value: "", label: "شهر را انتخاب کنید" },
        ...filteredCities,
      ]);
    } else {
      setCities([{ value: "", label: "شهر را انتخاب کنید" }]);
    }
  }, [selectedProvince]);

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
      <form className="w-full flex flex-col gap-4 mt-2" dir="rtl">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Controller
            name="companyName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                label="نام شرکت"
                {...field}
                placeholder="نام شرکت را وارد کنید"
                className="text-right placeholder:text-xs"
                dir="rtl"
                subtitle={errors.companyName?.message}
                subtitleType={errors.companyName ? "error" : "info"}
                required
              />
            )}
          />
          <Controller
            name="brandName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                label="نام برند"
                {...field}
                placeholder="نام برند را وارد کنید"
                className="text-right placeholder:text-xs"
                dir="rtl"
                subtitle={errors.brandName?.message}
                subtitleType={errors.brandName ? "error" : "info"}
                required
              />
            )}
          />
          <Controller
            name="category"
            control={control}
            rules={{
              required: "دسته بندی الزامی است.",
              validate: (v) => v !== "" || "دسته بندی الزامی است.",
            }}
            render={({ field }) => (
              <Select
                label="دسته بندی"
                {...field}
                options={categories}
                className="text-right placeholder:text-xs"
                dir="rtl"
                subtitle={errors.category?.message}
                subtitleType={errors.category ? "error" : "info"}
                required
              />
            )}
          />
          <Controller
            name="nationalId"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                label="شناسه ملی"
                validationType="nationalCode"
                {...field}
                placeholder="شناسه ملی را وارد کنید"
                className="text-right placeholder:text-xs"
                dir="rtl"
                subtitle={errors.nationalId?.message}
                subtitleType={errors.nationalId ? "error" : "info"}
                required
              />
            )}
          />
        </div>
        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Controller
            name="economicCode"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                label="شماره اقتصادی"
                validationType="number"
                {...field}
                placeholder="شماره اقتصادی را وارد کنید"
                className="text-right placeholder:text-xs"
                dir="rtl"
                subtitle={errors.economicCode?.message}
                subtitleType={errors.economicCode ? "error" : "info"}
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
                placeholder="شماره حساب را وارد کنید"
                className="text-right placeholder:text-xs"
                dir="ltr"
                subtitle={errors.accountNumber?.message}
                subtitleType={errors.accountNumber ? "error" : "info"}
                required
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
                startLogo={
                  <span className="text-neutral-500 text-sm select-none">
                    IR
                  </span>
                }
                subtitle={errors.shaba?.message}
                subtitleType={errors.shaba ? "error" : "info"}
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
                label="کدپستی"
                validationType="postalCode"
                {...field}
                placeholder="کدپستی را وارد کنید"
                className="text-right placeholder:text-xs"
                dir="rtl"
                subtitle={errors.postalCode?.message}
                subtitleType={errors.postalCode ? "error" : "info"}
                required
              />
            )}
          />
        </div>
        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Controller
            name="province"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                label="استان"
                {...field}
                options={provinces}
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
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                label="شهر"
                {...field}
                options={cities}
                className="text-right placeholder:text-xs"
                dir="rtl"
                disabled={!selectedProvince}
                subtitle={errors.city?.message}
                subtitleType={errors.city ? "error" : "info"}
                required
              />
            )}
          />
        </div>
        {/* Row 4 */}
        <div className="w-full">
          <Controller
            name="address"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                label="آدرس"
                {...field}
                placeholder="آدرس را وارد کنید"
                className="text-right placeholder:text-xs"
                dir="rtl"
                subtitle={errors.address?.message}
                subtitleType={errors.address ? "error" : "info"}
                required
              />
            )}
          />
        </div>
      </form>
    </StepLayout>
  );
};

export default CompanyStep3;

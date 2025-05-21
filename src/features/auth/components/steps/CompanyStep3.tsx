import React, { useState } from "react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import StepLayout from "@/features/auth/components/StepLayout";
import Tabs from "@/components/ui/Tabs";

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
  totalSteps,
}: {
  tab: "personal" | "company";
  setTab: (tab: "personal" | "company") => void;
  onNext: () => void;
  onPrev: () => void;
  isCompany?: boolean;
  totalSteps?: number;
}) => {
  const [form, setForm] = useState({
    companyName: "",
    brandName: "",
    category: "",
    nationalId: "",
    economicCode: "",
    accountNumber: "",
    shaba: "",
    postalCode: "",
    province: "",
    city: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };
  const handleSelect = (name: string, value: string) => {
    setForm((f) => ({ ...f, [name]: value }));
  };

  return (
    <StepLayout
      currentStep={1}
      onNext={onNext}
      onPrev={onPrev}
      isCompany={isCompany}
    >
      <Tabs
        tabs={[
          { label: "حقیقی", value: "personal" },
          { label: "حقوقی", value: "company" },
        ]}
        value={tab}
        onChange={(value) => setTab(value as "personal" | "company")}
        className="mb-4 justify-center"
      />
      <form className="w-full flex flex-col gap-4 mt-2" dir="rtl">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Input
            label="نام شرکت"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            placeholder="نام شرکت را وارد کنید"
            className="text-right placeholder:text-xs"
            dir="rtl"
          />
          <Input
            label="نام برند"
            name="brandName"
            value={form.brandName}
            onChange={handleChange}
            placeholder="نام برند را وارد کنید"
            className="text-right placeholder:text-xs"
            dir="rtl"
          />
          <Select
            label="دسته بندی"
            name="category"
            value={form.category}
            onChange={(e) => handleSelect("category", e.target.value)}
            options={categories}
            className="text-right placeholder:text-xs"
            dir="rtl"
          />
          <Input
            label="شناسه ملی"
            name="nationalId"
            value={form.nationalId}
            onChange={handleChange}
            placeholder="شناسه ملی را وارد کنید"
            className="text-right placeholder:text-xs"
            dir="rtl"
          />
        </div>
        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Input
            label="شماره اقتصادی"
            name="economicCode"
            value={form.economicCode}
            onChange={handleChange}
            placeholder="شماره اقتصادی را وارد کنید"
            className="text-right placeholder:text-xs"
            dir="rtl"
          />
          <Input
            label="شماره حساب"
            name="accountNumber"
            value={form.accountNumber}
            onChange={handleChange}
            placeholder="شماره حساب را وارد کنید"
            className="text-right placeholder:text-xs"
            dir="ltr"
          />
          <Input
            label="شماره شبا"
            name="shaba"
            value={form.shaba}
            onChange={handleChange}
            placeholder="شماره شبا را وارد کنید"
            className="text-right placeholder:text-xs"
            dir="ltr"
            autoComplete="off"
            startLogo={
              <span className="text-neutral-500 text-sm select-none">IR</span>
            }
          />
          <Input
            label="کدپستی"
            name="postalCode"
            value={form.postalCode}
            onChange={handleChange}
            placeholder="کدپستی را وارد کنید"
            className="text-right placeholder:text-xs"
            dir="rtl"
          />
        </div>
        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select
            label="استان"
            name="province"
            value={form.province}
            onChange={(e) => handleSelect("province", e.target.value)}
            options={provinces}
            className="text-right placeholder:text-xs"
            dir="rtl"
          />
          <Select
            label="شهر"
            name="city"
            value={form.city}
            onChange={(e) => handleSelect("city", e.target.value)}
            options={cities}
            className="text-right placeholder:text-xs"
            dir="rtl"
          />
        </div>
        {/* Row 4 */}
        <div className="w-full">
          <Input
            label="آدرس"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="آدرس را وارد کنید"
            className="text-right placeholder:text-xs"
            dir="rtl"
          />
        </div>
      </form>
    </StepLayout>
  );
};

export default CompanyStep3;

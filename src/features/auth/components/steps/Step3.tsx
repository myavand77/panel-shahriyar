import React, { useState } from "react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Tabs from "@/components/ui/Tabs";
import FileUpload from "@/components/ui/FileUpload";
import StepLayout from "@/features/auth/components/StepLayout";

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
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    brand: "",
    nationalId: "",
    phone: "",
    province: "",
    city: "",
    category: "",
    address: "",
    postalCode: "",
    accountNumber: "",
    shaba: "",
    logo: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };
  const handleSelect = (name: string, value: string) => {
    setForm((f) => ({ ...f, [name]: value }));
  };
  const handleLogo = (file: File | null) => {
    setForm((f) => ({ ...f, logo: file }));
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
            <Input
              label="نام"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="نام را وارد کنید"
              className="text-right placeholder:text-xs"
              dir="rtl"
            />
            <Input
              label="نام خانوادگی"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="نام خانوادگی را وارد کنید"
              className="text-right placeholder:text-xs"
              dir="rtl"
            />
            <Input
              label="کدملی"
              name="nationalId"
              value={form.nationalId}
              onChange={handleChange}
              placeholder="کدملی را وارد کنید"
              className="text-right placeholder:text-xs"
              dir="rtl"
            />
            <Input
              label="تلفن همراه"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="تلفن همراه را وارد کنید"
              className="text-right placeholder:text-xs"
              dir="rtl"
            />
          </div>
          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input
              label="ایمیل"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="ایمیل را وارد کنید"
              className="text-right placeholder:text-xs"
              dir="rtl"
            />
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
            <Input
              label="کد پستی"
              name="postalCode"
              value={form.postalCode}
              onChange={handleChange}
              placeholder="کد پستی را وارد کنید"
              className="text-right placeholder:text-xs"
              dir="rtl"
            />
          </div>
          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input
              label="برند"
              name="brand"
              value={form.brand}
              onChange={handleChange}
              placeholder="برند را وارد کنید"
              className="text-right placeholder:text-xs"
              dir="rtl"
            />
            <Select
              label="دسته‌بندی"
              name="category"
              value={form.category}
              onChange={(e) => handleSelect("category", e.target.value)}
              options={categories}
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
          </div>
          {/* Row 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="آدرس"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="آدرس را وارد کنید"
              className="text-right placeholder:text-xs"
              dir="rtl"
            />
            <FileUpload
              label="بارگذاری لوگو"
              value={form.logo}
              onChange={handleLogo}
            />
          </div>
        </form>
      )}
    </StepLayout>
  );
};

export default Step3;

import { Modal } from "@/components/ui/Modal";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import { useForm, Controller } from "react-hook-form";
import { useVendorData } from "./VendorDataContext";
import { AuthInfoFormValues, TUpdateVendorRequest } from "../types";
import { useState, useEffect } from "react";
import provincesCitiesData from "@/constants/provinces_cities.json";

interface AuthInfoEditModalProps {
  open: boolean;
  onClose: () => void;
  defaultValues: AuthInfoFormValues;
}

const categoryOptions = [
  { value: "فروشگاه", label: "فروشگاه" },
  { value: "کالای دیجیتال", label: "کالای دیجیتال" },
];

// Get unique provinces from the data
const provinceOptions = Array.from(
  new Set(provincesCitiesData.map((item) => item.provinceName))
).map((province) => ({
  value: province,
  label: province,
}));

const AuthInfoEditModal = ({
  open,
  onClose,
  defaultValues,
}: AuthInfoEditModalProps) => {
  const { control, handleSubmit, reset, watch } = useForm<AuthInfoFormValues>({
    defaultValues,
  });
  const { updateVendor } = useVendorData();
  const [cityOptions, setCityOptions] = useState<
    { value: string; label: string }[]
  >([]);

  // Watch for province changes
  const selectedProvince = watch("استان");

  // Update city options when province changes
  useEffect(() => {
    if (selectedProvince) {
      const cities = provincesCitiesData
        .filter((item) => item.provinceName === selectedProvince)
        .map((item) => ({
          value: item.cityName,
          label: item.cityName,
        }));
      setCityOptions(cities);
    } else {
      setCityOptions([]);
    }
  }, [selectedProvince]);

  const onSubmit = async (data: AuthInfoFormValues) => {
    // Only include changed fields
    const update: TUpdateVendorRequest = {};

    // Helper to check if a field changed
    const isChanged = (key: keyof AuthInfoFormValues) =>
      data[key] !== defaultValues[key];

    // basic_info_individual
    const basicInfoIndividual: TUpdateVendorRequest["basic_info_individual"] =
      {};
    if (isChanged("نام")) basicInfoIndividual.first_name = data["نام"];
    if (isChanged("نام خانوادگی"))
      basicInfoIndividual.last_name = data["نام خانوادگی"];
    if (isChanged("کد ملی")) basicInfoIndividual.national_id = data["کد ملی"];
    if (isChanged("تلفن همراه"))
      basicInfoIndividual.mobile = data["تلفن همراه"];
    if (isChanged("ایمیل")) basicInfoIndividual.email = data["ایمیل"];
    if (Object.keys(basicInfoIndividual).length > 0)
      update.basic_info_individual = basicInfoIndividual;

    // address
    const address: TUpdateVendorRequest["address"] = {};
    if (isChanged("استان")) address.state = data["استان"];
    if (isChanged("شهر")) address.city = data["شهر"];
    if (isChanged("کدپستی")) address.postal_code = data["کدپستی"];
    if (isChanged("آدرس")) address.address = data["آدرس"];
    if (Object.keys(address).length > 0) update.address = address;

    // brand
    if (isChanged("برند")) update.brand = data["برند"];
    // category
    if (isChanged("دسته‌بندی")) update.category = data["دسته‌بندی"];

    // bank_account
    const bankAccount: TUpdateVendorRequest["bank_account"] = {};
    if (isChanged("شماره حساب"))
      bankAccount.account_number = data["شماره حساب"];
    if (isChanged("شماره شبا")) bankAccount.sheba_number = data["شماره شبا"];
    if (Object.keys(bankAccount).length > 0) update.bank_account = bankAccount;

    // Only call updateVendor if there are changes
    if (Object.keys(update).length > 0) {
      await updateVendor(update);
    }
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        onClose();
        reset(defaultValues);
      }}
      onChange={() => {
        handleSubmit(onSubmit)();
      }}
      title="ویرایش مشخصات هویتی"
      subtitle="لطفا اطلاعات مورد نظر را بررسی و در صورت نیاز، تغییرات لازم را اعمال کنید."
    >
      <form className="flex flex-col gap-6" dir="rtl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-6">
          <Controller
            name="نام"
            control={control}
            render={({ field }) => <Input label="نام" {...field} required />}
          />
          <Controller
            name="نام خانوادگی"
            control={control}
            render={({ field }) => (
              <Input label="نام خانوادگی" {...field} required />
            )}
          />
          <Controller
            name="کد ملی"
            control={control}
            render={({ field }) => (
              <Input
                label="کد ملی"
                {...field}
                validationType="nationalCode"
                required
              />
            )}
          />
          <Controller
            name="تلفن همراه"
            control={control}
            render={({ field }) => (
              <Input
                label="تلفن همراه"
                {...field}
                validationType="mobile"
                required
              />
            )}
          />
          <Controller
            name="ایمیل"
            control={control}
            render={({ field }) => (
              <Input label="ایمیل" {...field} validationType="email" required />
            )}
          />
          <Controller
            name="استان"
            control={control}
            render={({ field }) => (
              <Select
                label="استان"
                options={provinceOptions}
                {...field}
                required
              />
            )}
          />
          <Controller
            name="شهر"
            control={control}
            render={({ field }) => (
              <Select
                label="شهر"
                options={cityOptions}
                {...field}
                disabled={!selectedProvince}
                required
              />
            )}
          />
          <Controller
            name="کدپستی"
            control={control}
            render={({ field }) => (
              <Input
                label="کد پستی"
                {...field}
                validationType="postalCode"
                required
              />
            )}
          />

          <Controller
            name="برند"
            control={control}
            render={({ field }) => <Input label="برند" {...field} required />}
          />
          <Controller
            name="دسته‌بندی"
            control={control}
            render={({ field }) => (
              <Select
                label="دسته‌بندی"
                options={categoryOptions}
                {...field}
                required
              />
            )}
          />
          <Controller
            name="شماره حساب"
            control={control}
            render={({ field }) => (
              <Input
                label="شماره حساب"
                {...field}
                validationType="number"
                required
              />
            )}
          />
          <Controller
            name="شماره شبا"
            control={control}
            render={({ field }) => (
              <Input
                label="شماره شبا"
                {...field}
                validationType="shaba"
                startLogo={
                  <span className="text-neutral-500 text-sm select-none">
                    IR
                  </span>
                }
                required
              />
            )}
          />
          <Controller
            name="آدرس"
            control={control}
            render={({ field }) => (
              <Input
                label="آدرس"
                {...field}
                className="md:col-span-2"
                required
              />
            )}
          />
        </div>
      </form>
    </Modal>
  );
};

export default AuthInfoEditModal;

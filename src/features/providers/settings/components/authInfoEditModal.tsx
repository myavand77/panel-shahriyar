import { Modal } from "@/components/ui/Modal";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import { useForm, Controller } from "react-hook-form";
import { useVendorData } from "./VendorDataContext";

interface AuthInfoEditModalProps {
  open: boolean;
  onClose: () => void;
  defaultValues: any;
}

const provinceOptions = [
  { value: "تهران", label: "تهران" },
  { value: "اصفهان", label: "اصفهان" },
  { value: "مشهد", label: "مشهد" },
];
const cityOptions = [
  { value: "تهران", label: "تهران" },
  { value: "اصفهان", label: "اصفهان" },
  { value: "مشهد", label: "مشهد" },
];
const categoryOptions = [
  { value: "فروشگاه", label: "فروشگاه" },
  { value: "کالای دیجیتال", label: "کالای دیجیتال" },
];

const AuthInfoEditModal = ({
  open,
  onClose,
  defaultValues,
}: AuthInfoEditModalProps) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues,
  });
  const { updateVendor } = useVendorData();

  const onSubmit = async (data: any) => {
    // Map form data to TUpdateVendorRequest
    const update = {
      basic_info_individual: {
        first_name: data["نام"],
        last_name: data["نام خانوادگی"],
        national_id: data["کد ملی"],
        mobile: data["تلفن همراه"],
        email: data["ایمیل"],
      },
      address: {
        state: data["استان"],
        city: data["شهر"],
        postal_code: data["کدپستی"],
        address: data["آدرس"],
      },
      brand: data["برند"],
      category: data["دسته‌بندی"],
      bank_account: {
        account_number: data["شماره حساب"],
        sheba_number: data["شماره شبا"],
      },
    };
    await updateVendor(update);
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        onClose();
        reset(defaultValues);
      }}
      onChange={handleSubmit(onSubmit)}
      title="ویرایش مشخصات هویتی"
      subtitle="لطفا اطلاعات مورد نظر را بررسی و در صورت نیاز، تغییرات لازم را اعمال کنید."
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
        dir="rtl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-6">
          <Controller
            name="نام خانوادگی"
            control={control}
            render={({ field }) => <Input label="نام خانوادگی" {...field} />}
          />
          <Controller
            name="نام"
            control={control}
            render={({ field }) => <Input label="نام" {...field} />}
          />
          <Controller
            name="تلفن همراه"
            control={control}
            render={({ field }) => <Input label="تلفن همراه" {...field} />}
          />
          <Controller
            name="کد ملی"
            control={control}
            render={({ field }) => <Input label="کد ملی" {...field} />}
          />
          <Controller
            name="ایمیل"
            control={control}
            render={({ field }) => (
              <Input label="ایمیل" type="email" {...field} />
            )}
          />
          <Controller
            name="استان"
            control={control}
            render={({ field }) => (
              <Select label="استان" options={provinceOptions} {...field} />
            )}
          />
          <Controller
            name="کدپستی"
            control={control}
            render={({ field }) => <Input label="کد پستی" {...field} />}
          />
          <Controller
            name="شهر"
            control={control}
            render={({ field }) => (
              <Select label="شهر" options={cityOptions} {...field} />
            )}
          />
          <Controller
            name="برند"
            control={control}
            render={({ field }) => <Input label="برند" {...field} />}
          />
          <Controller
            name="دسته‌بندی"
            control={control}
            render={({ field }) => (
              <Select label="دسته‌بندی" options={categoryOptions} {...field} />
            )}
          />
          <Controller
            name="شماره حساب"
            control={control}
            render={({ field }) => <Input label="شماره حساب" {...field} />}
          />
          <Controller
            name="شماره شبا"
            control={control}
            render={({ field }) => (
              <Input
                label="شماره شبا"
                {...field}
                startLogo={
                  <span className="text-neutral-500 text-sm select-none">
                    IR
                  </span>
                }
              />
            )}
          />
          <Controller
            name="آدرس"
            control={control}
            render={({ field }) => (
              <Input label="آدرس" {...field} className="md:col-span-2" />
            )}
          />
        </div>
      </form>
    </Modal>
  );
};

export default AuthInfoEditModal;

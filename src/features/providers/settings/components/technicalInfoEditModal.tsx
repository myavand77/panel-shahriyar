import { Modal } from "@/components/ui/Modal";
import Input from "@/components/ui/Input";
import IPInput from "@/components/ui/IPInput";
import { useForm, Controller } from "react-hook-form";
import React from "react";

interface TechnicalInfoEditModalProps {
  open: boolean;
  onClose: () => void;
  defaultValues: {
    website?: string;
    webservice?: string;
    apiKey?: string;
    callback?: string;
    email?: string;
    ips?: string[];
  };
  onSave: (values: {
    website?: string;
    webservice?: string;
    apiKey?: string;
    callback?: string;
    email?: string;
    ips?: string[];
  }) => void;
}

const TechnicalInfoEditModal = ({
  open,
  onClose,
  defaultValues,
  onSave,
}: TechnicalInfoEditModalProps) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const onSubmit = (data: {
    website?: string;
    webservice?: string;
    apiKey?: string;
    callback?: string;
    email?: string;
    ips?: string[];
  }) => {
    onSave(data);
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
      title="ویرایش اطلاعات فنی"
      subtitle="لطفا اطلاعات مورد نظر را بررسی و در صورت نیاز، تغییرات لازم را اعمال کنید."
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
        dir="rtl"
      >
        <div className="flex flex-col gap-4">
          <Controller
            name="website"
            control={control}
            render={({ field }) => (
              <Input
                label="وبسایت"
                placeholder="وبسایت را وارد کنید"
                subtitle="آدرس وبسایت را بدون www یا https:// وارد کنید."
                {...field}
                validationType="url"
                required
              />
            )}
          />
          <Controller
            name="webservice"
            control={control}
            render={({ field }) => (
              <Input
                label="آدرس وب‌سرویس، کانال یا خدمات"
                placeholder="آدرس وب‌سرویس را وارد کنید"
                {...field}
                validationType="url"
                required
              />
            )}
          />
          <Controller
            name="apiKey"
            control={control}
            render={({ field }) => (
              <Input
                label="کلید سرویس (API Key)"
                placeholder="کلید سرویس (API Key) را وارد کنید"
                {...field}
                required
              />
            )}
          />
          <Controller
            name="callback"
            control={control}
            render={({ field }) => (
              <Input
                label="آدرس Callback"
                placeholder="آدرس Callback را وارد کنید"
                subtitle="بعد از تکمیل پرداخت نقدی و اعتباری، کاربر به این آدرس منتقل خواهد شد."
                {...field}
                validationType="url"
                required
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                label="ایمیل"
                placeholder="ایمیل را وارد کنید"
                subtitle="اطلاعات درگاه پرداخت اعتباری و کلید سرویس به این ایمیل ارسال خواهد شد."
                {...field}
                validationType="email"
                required
              />
            )}
          />
          <Controller
            name="ips"
            control={control}
            rules={{
              required: "IP فروشگاه الزامی است",
            }}
            render={({ field }) => (
              <IPInput
                label="IP فروشگاه"
                value={field.value}
                onChange={field.onChange}
                required
                error={errors.ips?.message}
              />
            )}
          />
        </div>
      </form>
    </Modal>
  );
};

export default TechnicalInfoEditModal;

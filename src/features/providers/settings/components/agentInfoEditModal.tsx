import { Modal } from "@/components/ui/Modal";
import Input from "@/components/ui/Input";
import { useForm, Controller } from "react-hook-form";
import { useVendorData } from "./VendorDataContext";
import { AgentInfoFormValues, TUpdateVendorRequest } from "../types";

interface AgentInfoEditModalProps {
  open: boolean;
  onClose: () => void;
  defaultValues: AgentInfoFormValues;
}

const AgentInfoEditModal = ({
  open,
  onClose,
  defaultValues,
}: AgentInfoEditModalProps) => {
  const { control, handleSubmit, reset } = useForm<AgentInfoFormValues>({
    defaultValues,
  });
  const { updateVendor } = useVendorData();

  const onSubmit = async (data: AgentInfoFormValues) => {
    // Map form data to TUpdateVendorRequest.agent
    const update: TUpdateVendorRequest = {
      agent: {
        first_name: data["نام نماینده"],
        last_name: data["نام خانوادگی نماینده"],
        national_id: data["کدملی نماینده"],
        mobile: data["تلفن همراه نماینده"],
        telegram_id: data["آی‌دی تلگرام"],
        whatsapp_id: data["شماره واتساپ"],
        email: data["ایمیل"],
        phone: data["تلفن ثابت"],
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
      title="ویرایش مشخصات نماینده"
      subtitle="لطفا اطلاعات نماینده را بررسی و در صورت نیاز، تغییرات لازم را اعمال کنید."
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
        dir="rtl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-6">
          <Controller
            name="نام نماینده"
            control={control}
            render={({ field }) => <Input label="نام نماینده" {...field} />}
          />
          <Controller
            name="نام خانوادگی نماینده"
            control={control}
            render={({ field }) => (
              <Input label="نام خانوادگی نماینده" {...field} />
            )}
          />
          <Controller
            name="کدملی نماینده"
            control={control}
            render={({ field }) => <Input label="کدملی نماینده" {...field} />}
          />
          <Controller
            name="تلفن همراه نماینده"
            control={control}
            render={({ field }) => (
              <Input label="تلفن همراه نماینده" {...field} />
            )}
          />
          <Controller
            name="آی‌دی تلگرام"
            control={control}
            render={({ field }) => <Input label="آی‌دی تلگرام" {...field} />}
          />
          <Controller
            name="شماره واتساپ"
            control={control}
            render={({ field }) => <Input label="شماره واتساپ" {...field} />}
          />
          <Controller
            name="ایمیل"
            control={control}
            render={({ field }) => (
              <Input label="ایمیل" type="email" {...field} />
            )}
          />
          <Controller
            name="تلفن ثابت"
            control={control}
            render={({ field }) => <Input label="تلفن ثابت" {...field} />}
          />
        </div>
      </form>
    </Modal>
  );
};

export default AgentInfoEditModal;

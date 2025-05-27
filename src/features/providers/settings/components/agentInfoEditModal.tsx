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
    // Only include changed fields
    const agentUpdate: TUpdateVendorRequest["agent"] = {};
    // Helper to check if a field changed
    const isChanged = (key: keyof AgentInfoFormValues) => data[key] !== defaultValues[key];

    if (isChanged("نام نماینده")) agentUpdate.first_name = data["نام نماینده"];
    if (isChanged("نام خانوادگی نماینده")) agentUpdate.last_name = data["نام خانوادگی نماینده"];
    if (isChanged("کدملی نماینده")) agentUpdate.national_id = data["کدملی نماینده"];
    if (isChanged("تلفن همراه نماینده")) agentUpdate.mobile = data["تلفن همراه نماینده"];
    if (isChanged("آی‌دی تلگرام")) agentUpdate.telegram_id = data["آی‌دی تلگرام"];
    if (isChanged("شماره واتساپ")) agentUpdate.whatsapp_id = data["شماره واتساپ"];
    if (isChanged("ایمیل")) agentUpdate.email = data["ایمیل"];
    if (isChanged("تلفن ثابت")) agentUpdate.phone = data["تلفن ثابت"];

    const update: TUpdateVendorRequest = {};
    if (Object.keys(agentUpdate).length > 0) {
      update.agent = agentUpdate;
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

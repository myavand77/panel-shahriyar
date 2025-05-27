import { Modal } from "@/components/ui/Modal";
import Input from "@/components/ui/Input";
import { useForm, Controller } from "react-hook-form";

interface AgentInfoEditModalProps {
  open: boolean;
  onClose: () => void;
  defaultValues: any;
}

const AgentInfoEditModal = ({
  open,
  onClose,
  defaultValues,
}: AgentInfoEditModalProps) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues,
  });

  const onSubmit = (data: any) => {
    // TODO: handle update logic
    onClose();
    // Optionally update info in parent state
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
            render={({ field }) => <Input label="نام خانوادگی نماینده" {...field} />}
          />
          <Controller
            name="کدملی نماینده"
            control={control}
            render={({ field }) => <Input label="کدملی نماینده" {...field} />}
          />
          <Controller
            name="تلفن همراه نماینده"
            control={control}
            render={({ field }) => <Input label="تلفن همراه نماینده" {...field} />}
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
            render={({ field }) => <Input label="ایمیل" type="email" {...field} />}
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
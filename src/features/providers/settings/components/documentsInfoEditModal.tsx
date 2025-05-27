import { Modal } from "@/components/ui/Modal";
import FileUpload from "@/components/ui/FileUpload";
import { useForm, Controller } from "react-hook-form";
import { DocumentsFormValues } from "../types";

interface DocumentsInfoEditModalProps {
  open: boolean;
  onClose: () => void;
  defaultValues: DocumentsFormValues;
  onSave: (values: DocumentsFormValues) => void;
}

const DocumentsInfoEditModal = ({
  open,
  onClose,
  defaultValues,
  onSave,
}: DocumentsInfoEditModalProps) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues,
  });

  const onSubmit = (data: DocumentsFormValues) => {
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
      title="ویرایش مدارک آپلود شده"
      subtitle="لطفا اطلاعات مورد نظر را بررسی و در صورت نیاز، تغییرات لازم را اعمال کنید."
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
        dir="rtl"
      >
        <div className="flex flex-col gap-4">
          <Controller
            name="tasis"
            control={control}
            render={({ field: { onChange } }) => (
              <FileUpload label="آگهی تاسیس" onChange={onChange} />
            )}
          />
          <Controller
            name="taghirat"
            control={control}
            render={({ field: { onChange } }) => (
              <FileUpload label="آگهی آخرین تغییرات" onChange={onChange} />
            )}
          />
          <Controller
            name="sahamdar"
            control={control}
            render={({ field: { onChange } }) => (
              <FileUpload label="آگهی سهامداران" onChange={onChange} />
            )}
          />
          <Controller
            name="emzadar"
            control={control}
            render={({ field: { onChange } }) => (
              <FileUpload label="آگهی امضاداران" onChange={onChange} />
            )}
          />
          <Controller
            name="logo"
            control={control}
            render={({ field: { onChange } }) => (
              <FileUpload label="بارگذاری لوگو" onChange={onChange} />
            )}
          />
        </div>
      </form>
    </Modal>
  );
};

export default DocumentsInfoEditModal;

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
            rules={{ required: "لطفا آگهی تاسیس را بارگذاری کنید" }}
            render={({ field: { onChange, value } }) => (
              <FileUpload
                label="آگهی تاسیس"
                onChange={onChange}
                fileUrl={value as string}
                required={true}
                width={48}
                height={48}
                className="w-full"
              />
            )}
          />
          <Controller
            name="taghirat"
            control={control}
            rules={{ required: "لطفا آگهی آخرین تغییرات را بارگذاری کنید" }}
            render={({ field: { onChange, value } }) => (
              <FileUpload
                label="آگهی آخرین تغییرات"
                onChange={onChange}
                fileUrl={value as string}
                required={true}
                width={48}
                height={48}
                className="w-full"
              />
            )}
          />
          <Controller
            name="sahamdar"
            control={control}
            rules={{ required: "لطفا آگهی سهامداران را بارگذاری کنید" }}
            render={({ field: { onChange, value } }) => (
              <FileUpload
                label="آگهی سهامداران"
                onChange={onChange}
                fileUrl={value as string}
                required={true}
                width={48}
                height={48}
                className="w-full"
              />
            )}
          />
          <Controller
            name="emzadar"
            control={control}
            rules={{ required: "لطفا آگهی امضاداران را بارگذاری کنید" }}
            render={({ field: { onChange, value } }) => (
              <FileUpload
                label="آگهی امضاداران"
                onChange={onChange}
                fileUrl={value as string}
                required={true}
                width={48}
                height={48}
                className="w-full"
              />
            )}
          />
          <Controller
            name="logo"
            control={control}
            rules={{ required: "بارگذاری لوگو الزامی است" }}
            render={({ field: { onChange, value } }) => (
              <FileUpload
                label="بارگذاری لوگو"
                onChange={onChange}
                fileUrl={value as string}
                required={true}
                width={48}
                height={48}
                className="w-full"
              />
            )}
          />
        </div>
      </form>
    </Modal>
  );
};

export default DocumentsInfoEditModal;

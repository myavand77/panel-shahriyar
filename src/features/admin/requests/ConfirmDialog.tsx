import { Modal } from "@/components/ui/Modal";
import Input from "@/components/ui/Input";

interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function ConfirmDialog({ isOpen, onClose, onConfirm }: ConfirmDialogProps) {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      onChange={onConfirm}
      title="تایید درخواست"
      subtitle="کاربر گرامی، لطفا دلایل رد کردن درخواست را مشخص نمایید."
      changeButtonText="تایید درخواست"
      cancelButtonText="انصراف"
    >
      <div className="flex flex-col gap-4">
        <Input
          label="Swagger Address"
          placeholder="Swagger Address را وارد کنید"
          dir="rtl"
        />
        <Input
          label="کلید سرویس (API Key)"
          placeholder="کلید سرویس (API Key) را وارد کنید"
          dir="rtl"
        />
      </div>
    </Modal>
  );
} 
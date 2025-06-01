import { Modal } from "@/components/ui/Modal";

interface IncompleteDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function IncompleteDialog({
  isOpen,
  onClose,
  onConfirm,
}: IncompleteDialogProps) {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      onChange={onConfirm}
      title="آیا از ارسال درخواست تکمیل مدارک فروشگاه برای این درخواست اطمینان دارید؟(نقصی مدارک)"
      subtitle="کاربر گرامی، توجه داشته باشید این عملیات بازگشت‌پذیر نمی‌باشد."
      changeButtonText="ارسال درخواست"
      cancelButtonText="انصراف"
    >
      <></>
    </Modal>
  );
} 
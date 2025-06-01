import { Modal } from "@/components/ui/Modal";

interface FinalConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function FinalConfirmDialog({ isOpen, onClose, onConfirm }: FinalConfirmDialogProps) {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      onChange={onConfirm}
      title="آیا از تایید این درخواست اطمینان دارید؟"
      subtitle="کاربر گرامی، توجه داشته باشید این عملیات بازگشت‌پذیر نمی‌باشد."
      changeButtonText="تایید درخواست"
      cancelButtonText="انصراف"
    >
      <></>
    </Modal>
  );
}

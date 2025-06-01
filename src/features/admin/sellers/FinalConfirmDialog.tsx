import { Modal } from "@/components/ui/Modal";

interface FinalConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
}

export function FinalConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title = "آیا از ذخیره تغییرات اطمینان دارید؟",
  message = "کاربر گرامی، توجه داشته باشید این عملیات بازگشت‌پذیر نمی‌باشد.",
  confirmText = "ذخیره تغییرات",
  cancelText = "انصراف",
}: FinalConfirmDialogProps) {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      onChange={onConfirm}
      title={title}
      subtitle={message}
      changeButtonText={confirmText}
      cancelButtonText={cancelText}
    >
      <></>
    </Modal>
  );
}

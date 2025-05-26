import React from "react";
import { Modal } from "./Modal";

interface ConfirmationModalProps {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  title?: string;
  subtitle?: string;
  confirmText?: string;
  cancelText?: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  open,
  onConfirm,
  onCancel,
  title = "آیا از ویرایش مشخصات هویتی اطمینان دارید؟",
  subtitle =
    "کاربر گرامی، توجه داشته باشید پس از ثبت تغییرات، درخواست شما می‌بایست توسط کارشناسان وایب بررسی شود.",
  confirmText = "تایید و ادامه",
  cancelText = "انصراف",
}) => {
  return (
    <Modal
      open={open}
      onClose={onCancel}
      onChange={onConfirm}
      title={title}
      subtitle={subtitle}
      changeButtonText={confirmText}
      cancelButtonText={cancelText}
    >
      <></>
    </Modal>
  );
};

export default ConfirmationModal; 
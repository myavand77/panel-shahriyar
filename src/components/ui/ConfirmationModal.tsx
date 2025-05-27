import React from "react";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

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
  title = "آیا از ویرایش اطلاعات اطمینان دارید؟",
  subtitle = "کاربر گرامی، توجه داشته باشید پس از ثبت تغییرات، درخواست شما می‌بایست توسط کارشناسان وایب بررسی شود.",
  confirmText = "تایید و ادامه",
  cancelText = "انصراف",
}) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary-900/20 backdrop-blur-sm">
      <div
        className={twMerge(
          "bg-white rounded-lg shadow-lg w-full max-w-md mx-4 animate-fade-in",
        )}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-2 border-b border-muted-100">
          <div className="flex flex-col justify-center gap-2">
            <span className="text-lg font-bold text-gray-800">{title}</span>
            {subtitle && (
              <span className="text-xs text-gray-500 mt-1">{subtitle}</span>
            )}
          </div>
        </div>
        {/* Footer */}
        <div className="flex border-t border-muted-100 px-6 py-6 gap-2">
          <Button
            onClick={onCancel}
            type="button"
            variant="outlined"
            className="w-full md:w-[50%]"
          >
            {cancelText}
          </Button>
          <Button
            onClick={onConfirm}
            type="button"
            variant="filled"
            className="w-full md:w-[50%]"
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;

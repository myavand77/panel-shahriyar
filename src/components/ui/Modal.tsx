import React from "react";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  onChange: () => void;
  title: string;
  subtitle?: string;
  badge?: React.ReactNode;
  children: React.ReactNode;
  changeButtonText?: string;
  cancelButtonText?: string;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  onChange,
  title,
  subtitle,
  badge,
  children,
  changeButtonText = "ذخیره تغییرات",
  cancelButtonText = "بازگشت",
  className,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary-900/20 backdrop-blur-sm">
      <div
        className={twMerge(
          "bg-white rounded-lg shadow-lg w-full max-w-lg mx-4 animate-fade-in",
          className
        )}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-2 border-b border-muted-100">
          <div className="flex flex-col justify-center gap-2">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-gray-800">{title}</span>
              {badge && <div>{badge}</div>}
            </div>
            {subtitle && (
              <span className="text-xs text-gray-500 mt-1">{subtitle}</span>
            )}
          </div>
        </div>
        {/* Body */}
        <div className="px-6 py-6">{children}</div>
        {/* Footer */}
        <div className="flex border-t border-muted-100 px-6 py-6 gap-2">
          <Button
            onClick={onClose}
            type="button"
            variant="outlined"
            className="w-full md:w-[50%]"
          >
            {cancelButtonText}
          </Button>
          <Button
            onClick={onChange}
            type="button"
            variant="filled"
            className="w-full md:w-[50%]"
          >
            {changeButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

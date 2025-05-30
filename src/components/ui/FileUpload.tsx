import React, { useRef, useState } from "react";
import { useFileUpload } from "@/hooks/useFileUpload";
import Button from "./Button";
import Label from "./Label";

const truncateFileName = (fileName: string, maxLength: number = 20): string => {
  return fileName.length > maxLength
    ? fileName.substring(0, maxLength) + "..."
    : fileName;
};

interface FileUploadProps {
  label?: string;
  onChange: (url: string | null) => void;
  className?: string;
  width?: number;
  height?: number;
  fileUrl?: string;
  required?: boolean;
  error?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  label,
  onChange,
  className = "",
  width = 36,
  height = 36,
  fileUrl,
  required = false,
  error: externalError,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [internalError, setInternalError] = useState<string>("");
  const {
    uploadFileMutate,
    data,
    isPending,
    error: uploadError,
  } = useFileUpload();

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const validateField = (hasFile: boolean) => {
    if (required && !hasFile) {
      setInternalError(`${label || "این فیلد"} الزامی است`);
      return false;
    }
    setInternalError("");
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const maxSizeInBytes = 500 * 1024; // 500KB in bytes

      if (file.size > maxSizeInBytes) {
        setInternalError("حداکثر حجم فایل باید ۵۰۰ کیلوبایت باشد");
        onChange(null);
        setSelectedFile(null);
        return;
      }

      setSelectedFile(file);
      uploadFileMutate(file, {
        onSuccess: (res) => {
          onChange(res.url);
          validateField(true);
        },
        onError: () => {
          onChange(null);
          validateField(false);
        },
      });
    } else {
      setSelectedFile(null);
      onChange(null);
      validateField(false);
    }
  };

  const handleBlur = () => {
    validateField(!!(fileUrl || data?.url));
  };

  const displayUrl = fileUrl || data?.url;

  const error =
    internalError ||
    (uploadError ? "خطا در بارگذاری فایل. لطفا دوباره تلاش کنید." : "") ||
    (required && !displayUrl ? externalError : "");

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <Label>
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </Label>
      )}
      <div className="flex items-center gap-4">
        <Button
          type="button"
          onClick={handleButtonClick}
          disabled={isPending}
          variant="warning"
          loading={isPending}
          className="text-xs md:text-sm"
        >
          {displayUrl ? "بارگذاری مجدد" : "بارگذاری"}
        </Button>
        {displayUrl && (
          <div
            className="relative"
            style={{ width: `${width}px`, height: `${height}px` }}
          >
            <img
              src={displayUrl}
              alt="Uploaded file"
              className="object-cover w-full h-full rounded-md"
            />
          </div>
        )}
        <span className="text-neutral-500 text-xs">
          {selectedFile
            ? truncateFileName(selectedFile.name)
            : "فایل را بارگذاری کنید"}
        </span>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={isPending}
      />
      {error && <span className="text-error-500 text-xs mt-1">{error}</span>}
    </div>
  );
};

export default FileUpload;

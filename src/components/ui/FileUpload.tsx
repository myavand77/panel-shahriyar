import React, { useRef, useState } from "react";
import { useFileUpload } from "@/hooks/useFileUpload";

interface FileUploadProps {
  label?: string;
  onChange: (url: string | null) => void;
  className?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  label,
  onChange,
  className = "",
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { uploadFileMutate, data, isPending, error } = useFileUpload();

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      uploadFileMutate(file, {
        onSuccess: (res) => {
          onChange(res.url);
        },
        onError: () => {
          onChange(null);
        },
      });
    } else {
      setSelectedFile(null);
      onChange(null);
    }
  };

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <div className="flex items-center gap-2 mb-1">
          <label className="text-sm font-medium text-gray-700">{label}</label>
          {data?.url && (
            <span className="text-green-600 text-xs break-all">
              آپلود موفق!
            </span>
          )}
        </div>
      )}
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="bg-orange-400 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-orange-500 transition-colors"
          onClick={handleButtonClick}
          disabled={isPending}
        >
          {isPending ? "در حال بارگذاری..." : "بارگذاری"}
        </button>
        <span className="text-neutral-500 text-sm">
          {selectedFile ? selectedFile.name : "فایل لوگو را بارگذاری کنید"}
        </span>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
        disabled={isPending}
      />
      {!!error && (
        <span className="text-red-500 text-xs mt-1">
          خطا در بارگذاری فایل. لطفا دوباره تلاش کنید.
        </span>
      )}
    </div>
  );
};

export default FileUpload;

import React, { useRef } from "react";

interface FileUploadProps {
  label?: string;
  onChange: (file: File | null) => void;
  value?: File | null;
  className?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ label, onChange, value, className = "" }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onChange(e.target.files[0]);
    } else {
      onChange(null);
    }
  };

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="bg-orange-400 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-orange-500 transition-colors"
          onClick={handleButtonClick}
        >
          بارگذاری
        </button>
        <span className="text-neutral-500 text-sm">
          {value ? value.name : "فایل لوگو را بارگذاری کنید"}
        </span>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />
    </div>
  );
};

export default FileUpload; 
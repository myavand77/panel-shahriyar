import React from "react";
import { EditIcon } from "@/components/Icons";

interface InfoBoxProps {
  title: string;
  info: Record<string, React.ReactNode>;
  onEdit?: () => void;
  className?: string;
  headerDisabled?: boolean;
}

const InfoBox: React.FC<InfoBoxProps> = ({
  title,
  info,
  onEdit,
  className = "",
  headerDisabled = false,
}) => {
  return (
    <div
      className={`w-full border border-muted-100 rounded-xl bg-white py-4 ${className}`}
    >
      {/* Title Row */}
      {!headerDisabled && (
        <div className="flex items-center justify-between px-6 py-4">
          <span className="font-bold text-base text-text-500">{title}</span>
          {onEdit && (
            <EditIcon
              width={20}
              height={20}
              className="text-warning-500 cursor-pointer"
              onClick={onEdit}
            />
          )}
        </div>
      )}
      {/* Info Rows */}
      <div className="">
        {Object.entries(info).map(([key, value]) => (
          <div key={key} className="flex items-start justify-between px-6 py-1">
            <span className="text-sm text-text-600">{key}</span>
            <span className="text-sm text-text-400 text-end">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoBox;

import React from "react";
import { Info } from "lucide-react";

interface InfoBannerProps {
  children?: React.ReactNode;
  className?: string;
}

const InfoBanner: React.FC<InfoBannerProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`flex items-start gap-3 p-4 rounded-lg bg-blue-50 border border-blue-200 text-blue-900 text-sm leading-6 ${className}`}
    >
      <div className="flex items-start justify-center w-5 h-5">
        <Info className="w-5 h-5 text-blue-500" />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default InfoBanner;

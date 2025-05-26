import React from "react";
import { Info, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import Button from "./Button";

interface InfoBannerProps {
  children?: React.ReactNode;
  className?: string;
  variant?: "warning" | "info" | "success" | "error";
  buttonTitle?: string;
  onButtonClick?: () => void;
}

const variantClassMap: Record<string, string> = {
  warning: "bg-warning-300 border-warning-200 text-warning-800",
  info: "bg-info-50 border-info-200 text-info-500",
  success: "bg-success-300 border-success-200 text-success-500",
  error: "bg-error-50 border-error-200 text-error-500",
};

const iconMap = {
  warning: <AlertTriangle className="w-5 h-5 text-warning-500" />,
  info: <Info className="w-5 h-5 text-info-500" />,
  success: <CheckCircle2 className="w-5 h-5 text-success-500" />,
  error: <XCircle className="w-5 h-5 text-error-500" />,
};

const InfoBanner: React.FC<InfoBannerProps> = ({
  children,
  className = "",
  variant = "info",
  buttonTitle,
  onButtonClick,
}) => {
  const variantClasses = variantClassMap[variant] || variantClassMap.info;
  return (
    <div
      className={`flex items-start gap-3 p-4 rounded-lg border text-sm leading-6 ${variantClasses} ${className}`}
    >
      <div className="flex items-start justify-center w-5 h-5">
        {iconMap[variant]}
      </div>
      <div className="flex-1">{children}</div>
      {buttonTitle && (
        <Button
          className="ml-4"
          onClick={onButtonClick}
          type="button"
          variant={variant}
        >
          {buttonTitle}
        </Button>
      )}
    </div>
  );
};

export default InfoBanner;



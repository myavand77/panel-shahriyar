import { BadgeType } from "@/types/components";
import { FC } from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  type?: BadgeType;
}

const typeClassMap: Record<string, string> = {
  warning: "bg-warning-500 text-white",
  info: "bg-info-500 text-white",
  completed: "bg-primary-500 text-white",
  outline: "bg-white border border-muted-100 text-text-500",
  returned: "bg-neutral-100 text-text-500",
  success: "bg-success-500 text-white",
  error: "bg-error-500 text-white",
};

const Badge: FC<BadgeProps> = ({ children, className = "", type }) => {
  const typeClasses = type ? typeClassMap[type] || "" : "";
  return (
    <span
      className={`rounded-full px-3 text-xs font-bold ${typeClasses} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "filled" | "outlined" | "info" | "warning" | "success" | "error";
  size?: "sm" | "md" | "lg" | "xl";
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "filled",
  size = "md",
  loading = false,
  ...props
}) => {
  const baseClasses =
    "font-medium rounded-md transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const sizeClassesMap: Record<string, string> = {
    sm: "h-8 px-3 text-xs", // 32px
    md: "h-10 px-4 text-sm", // 40px (default)
    lg: "h-12 px-6 text-base", // 48px
    xl: "h-14 px-8 text-lg", // 56px
  };
  const sizeClasses = sizeClassesMap[size] || sizeClassesMap.md;

  const filledClasses =
    "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700";
  const outlinedClasses =
    "bg-transparent border border-neutral-200 text-text-500 hover:bg-primary-50 active:bg-primary-100";
  const infoClasses = "bg-info-500 text-white active:bg-info-800";
  const warningClasses = "bg-warning-500 text-white active:bg-warning-800";
  const successClasses = "bg-success-500 text-white active:bg-success-800";
  const errorClasses = "bg-error-500 text-white active:bg-error-800";

  let variantClasses = filledClasses;
  if (variant === "outlined") variantClasses = outlinedClasses;
  else if (variant === "info") variantClasses = infoClasses;
  else if (variant === "warning") variantClasses = warningClasses;
  else if (variant === "success") variantClasses = successClasses;
  else if (variant === "error") variantClasses = errorClasses;

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      disabled={props.disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;

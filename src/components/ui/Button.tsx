import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "filled" | "outlined";
  size?: "sm" | "md" | "lg" | "xl";
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "filled",
  size = "md",
  ...props
}) => {
  const baseClasses =
    "font-medium rounded-md transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const sizeClassesMap: Record<string, string> = {
    sm: "h-8 px-3 text-xs",      // 32px
    md: "h-10 px-4 text-sm",     // 40px (default)
    lg: "h-12 px-6 text-base",   // 48px
    xl: "h-14 px-8 text-lg",     // 56px
  };
  const sizeClasses = sizeClassesMap[size] || sizeClassesMap.md;

  const filledClasses =
    "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700";
  const outlinedClasses =
    "bg-transparent border border-neutral-200 text-text-500 hover:bg-primary-50 active:bg-primary-100";

  const variantClasses =
    variant === "outlined" ? outlinedClasses : filledClasses;

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

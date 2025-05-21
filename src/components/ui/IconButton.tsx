import React from "react";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "default" | "outlined";
}

const sizeClassesMap: Record<string, string> = {
  xs: "w-5 h-5 text-xs",      // 20px
  sm: "w-7 h-7 text-xs",      // 28px
  md: "w-9 h-9 text-base",   // 36px (default)
  lg: "w-11 h-11 text-lg",   // 44px
};

const variantClassesMap: Record<string, string> = {
  default: "bg-neutral-200 hover:bg-neutral-300 text-neutral-600 cursor-pointer",
  outlined: "border border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-600",
};

const IconButton: React.FC<IconButtonProps> = ({
  children,
  className = "",
  size = "md",
  variant = "default",
  ...props
}) => {
  const sizeClasses = sizeClassesMap[size] || sizeClassesMap.md;
  const variantClasses = variantClassesMap[variant] || variantClassesMap.default;

  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-full transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton; 
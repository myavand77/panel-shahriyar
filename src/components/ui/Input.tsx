import React from "react";
import Label from "./Label";
import { convertPersianToEnglishNumbers } from "@/lib/utils";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label: string;
  className?: string;
  startLogo?: React.ReactNode;
  endLogo?: React.ReactNode;
  subtitle?: React.ReactNode;
  subtitleType?: "info" | "warning" | "success" | "error";
  size?: "sm" | "md" | "lg" | "xl";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      className = "",
      startLogo,
      endLogo,
      subtitle,
      subtitleType = "info",
      size = "md",
      onChange,
      ...props
    },
    ref
  ) => {
    // Map subtitleType to Tailwind color classes based on tailwind.config.js
    const subtitleColorMap: Record<string, string> = {
      info: "text-neutral-500",
      warning: "text-warning-500",
      success: "text-success-500",
      error: "text-error-500",
    };
    const subtitleColorClass =
      subtitleColorMap[subtitleType] || subtitleColorMap.info;

    // Size classes map (match Button)
    const sizeClassesMap: Record<string, string> = {
      sm: "h-8 px-3 text-xs", // 32px
      md: "h-10 px-4 text-sm", // 40px (default)
      lg: "h-12 px-6 text-base", // 48px
      xl: "h-14 px-8 text-lg", // 56px
    };
    const sizeClasses = sizeClassesMap[size] || sizeClassesMap.md;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        const convertedValue = convertPersianToEnglishNumbers(e.target.value);
        e.target.value = convertedValue;
        onChange(e);
      }
    };

    return (
      <div className={`flex flex-col gap-1 ${className}`}>
        {label && (
          <Label>
            {label}
          </Label>
        )}
        <div className="relative flex items-center">
          {startLogo && (
            <span className="absolute left-3 flex items-center pointer-events-none">
              {startLogo}
            </span>
          )}
          <input
            ref={ref}
            className={`border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white w-full placeholder:text-xs ${
              startLogo ? "pl-10" : ""
            } ${endLogo ? "pr-10" : ""} ${sizeClasses}`}
            onChange={handleChange}
            {...props}
          />
          {endLogo && (
            <span className="absolute right-3 flex items-center pointer-events-none">
              {endLogo}
            </span>
          )}
        </div>
        {subtitle && (
          <div className={`text-xs mt-1 ${subtitleColorClass}`}>{subtitle}</div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export default Input;

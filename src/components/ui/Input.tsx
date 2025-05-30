import React, { InputHTMLAttributes, useState } from "react";
import { ValidationType, validateField } from "@/lib/validations";
import { cn } from "@/lib/utils";
import Label from "./Label";
import { convertPersianToEnglishNumbers } from "@/lib/utils";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  validationType?: ValidationType;
  required?: boolean;
  error?: string;
  onValidationChange?: (isValid: boolean) => void;
  className?: string;
  startLogo?: React.ReactNode;
  endLogo?: React.ReactNode;
  subtitle?: React.ReactNode;
  subtitleType?: "info" | "warning" | "success" | "error";
  size?: "sm" | "md" | "lg" | "xl";
}

function Input({
  label,
  validationType = "text",
  required = false,
  error: externalError,
  className,
  onValidationChange,
  onChange,
  startLogo,
  endLogo,
  subtitle,
  subtitleType,
  size,
  ...props
}: InputProps) {
  const [internalError, setInternalError] = useState<string>("");
  const [isTouched, setIsTouched] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = convertPersianToEnglishNumbers(e.target.value);
    e.target.value = value;
    setHasValue(value.length > 0);

    if (required && value.length === 0) {
      setInternalError(`${label || 'این فیلد'} الزامی است`);
      onValidationChange?.(false);
    } else if (validationType) {
      const { isValid, message } = validateField(validationType, value);
      setInternalError(isValid ? "" : message);
      onValidationChange?.(isValid);
    }

    onChange?.(e);
  };

  const handleBlur = () => {
    setIsTouched(true);
    if (required && !hasValue) {
      setInternalError(`${label || 'این فیلد'} الزامی است`);
      onValidationChange?.(false);
    }
  };

  const error = externalError || (isTouched ? internalError : "");

  // Map subtitleType to Tailwind color classes based on tailwind.config.js
  const subtitleColorMap: Record<string, string> = {
    info: "text-neutral-500",
    warning: "text-warning-500",
    success: "text-success-500",
    error: "text-error-500",
  };
  const subtitleColorClass = subtitleColorMap[subtitleType ?? "info"];

  // Size classes map (match Button)
  const sizeClassesMap: Record<string, string> = {
    sm: "h-8 text-xs", // 32px
    md: "h-10 text-sm", // 40px (default)
    lg: "h-12 text-base", // 48px
    xl: "h-14 text-lg", // 56px
  };
  const sizeClasses = sizeClassesMap[size ?? "md"];

  const getBorderColor = () => {
    if (error) return "border-red-500";
    if (hasValue && !error) return "border-success-500";
    return "border-gray-300";
  };

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <Label>
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </Label>
      )}
      <div className="relative flex items-center">
        {startLogo && (
          <span className="absolute left-3 flex items-center pointer-events-none">
            {startLogo}
          </span>
        )}
        <input
          {...props}
          className={cn(
            "border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white w-full placeholder:text-xs placeholder:text-right",
            getBorderColor(),
            startLogo ? "pl-8" : "pl-4",
            endLogo ? "pr-8" : "pr-4",
            sizeClasses
          )}
          onChange={handleChange}
          onBlur={handleBlur}
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
      {error && <p className="mt-1 text-xs text-error-500">{error}</p>}
    </div>
  );
}
export default Input;

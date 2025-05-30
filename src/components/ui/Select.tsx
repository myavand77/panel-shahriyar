import * as React from "react";
import { useState } from "react";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  className?: string;
  options: { value: string; label: string }[];
  subtitle?: React.ReactNode;
  subtitleType?: "info" | "warning" | "success" | "error";
  variantSize?: "sm" | "md" | "lg" | "xl";
  required?: boolean;
  error?: string;
  onValidationChange?: (isValid: boolean) => void;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      className = "",
      options,
      subtitle,
      subtitleType = "info",
      variantSize = "md",
      required = false,
      error: externalError,
      onValidationChange,
      onChange,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [internalError, setInternalError] = useState<string>("");
    const [isTouched, setIsTouched] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value;
      setHasValue(value.length > 0);

      if (required && value.length === 0) {
        setInternalError(`${label || 'این فیلد'} الزامی است`);
        onValidationChange?.(false);
      } else {
        setInternalError("");
        onValidationChange?.(true);
      }

      onChange?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
      setIsTouched(true);
      if (required && !hasValue) {
        setInternalError(`${label || 'این فیلد'} الزامی است`);
        onValidationChange?.(false);
      }
      onBlur?.(e);
    };

    const error = externalError || (isTouched ? internalError : "");

    const sizeClassesMap: Record<string, string> = {
      sm: "h-8 px-3 text-xs", // 32px
      md: "h-10 px-4 text-sm", // 40px (default)
      lg: "h-12 px-6 text-base", // 48px
      xl: "h-14 px-8 text-lg", // 56px
    };

    const getBorderColor = () => {
      if (error) return "border-error-500";
      if (hasValue && !error) return "border-success-500";
      return "border-neutral-200";
    };

    return (
      <div className={`flex flex-col gap-1 ${className}`}>
        {label && (
          <label className="text-sm font-medium text-gray-700 mb-1">
            {label}
            {required && <span className="text-error-500 ml-1">*</span>}
          </label>
        )}
        <select
          ref={ref}
          className={`border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white ${sizeClassesMap[variantSize]} ${getBorderColor()}`}
          onChange={handleChange}
          onBlur={handleBlur}
          {...props}
        >
          <option value="">انتخاب کنید</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {subtitle && (
          <p
            className={`text-sm ${
              subtitleType === "error"
                ? "text-error-500"
                : subtitleType === "success"
                ? "text-success-500"
                : subtitleType === "warning"
                ? "text-warning-500"
                : "text-neutral-500"
            }`}
          >
            {subtitle}
          </p>
        )}
        {error && <p className="text-sm text-error-500">{error}</p>}
      </div>
    );
  }
);
Select.displayName = "Select";

export default Select;

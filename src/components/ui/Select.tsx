import * as React from "react";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  className?: string;
  options: { value: string; label: string }[];
  subtitle?: React.ReactNode;
  subtitleType?: "info" | "warning" | "success" | "error";
  variantSize?: "sm" | "md" | "lg" | "xl";
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
      ...props
    },
    ref
  ) => {
    const sizeClassesMap: Record<string, string> = {
      sm: "h-8 px-3 text-xs", // 32px
      md: "h-10 px-4 text-sm", // 40px (default)
      lg: "h-12 px-6 text-base", // 48px
      xl: "h-14 px-8 text-lg", // 56px
    };

    return (
      <div className={`flex flex-col gap-1 ${className}`}>
        {label && (
          <label className="text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <select
          ref={ref}
          className={`border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white ${sizeClassesMap[variantSize]}`}
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
      </div>
    );
  }
);
Select.displayName = "Select";

export default Select;

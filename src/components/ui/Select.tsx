import * as React from "react"

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  className?: string;
  options: { value: string; label: string }[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, className = "", options, ...props }, ref) => (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <select
        ref={ref}
        className="px-4 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white text-base"
        {...props}
      >
        <option value="">انتخاب کنید</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
);
Select.displayName = "Select";

export default Select; 
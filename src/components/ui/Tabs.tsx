import * as React from "react";

interface TabsProps {
  tabs: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs, value, onChange, className = "" }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    {tabs.map((tab) => (
      <button
        key={tab.value}
        type="button"
        className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors duration-150 focus:outline-none cursor-pointer ${
          value === tab.value
            ? "bg-primary-500 text-white border-primary-500"
            : "bg-white text-neutral-500 border-neutral-300"
        }`}
        onClick={() => onChange(tab.value)}
      >
        {tab.label}
      </button>
    ))}
  </div>
);

export default Tabs; 
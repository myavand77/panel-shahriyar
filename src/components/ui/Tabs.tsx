import { TabFilterProps } from "../Table/types";
import * as React from "react";

const Tabs: React.FC<TabFilterProps> = ({
  tabs,
  activeTab,
  onTabChange,
  className,
}) => (
  <div className={`flex items-center gap-2 ${className}`}>
    {tabs.map((tab) => (
      <button
        key={tab.id}
        type="button"
        className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors duration-150 focus:outline-none cursor-pointer ${
          activeTab === tab.id
            ? "bg-primary-500 text-white border-primary-500"
            : "bg-white text-neutral-500 border-neutral-300"
        }`}
        onClick={() => onTabChange(tab.id)}
      >
        {tab.label}
      </button>
    ))}
  </div>
);

export default Tabs;

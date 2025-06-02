import React from "react";
import { TableControlsProps, SortOrder } from "./types";
import TabFilter from "../ui/TabFilter";

export const TableControls: React.FC<TableControlsProps> = ({
  tabs,
  activeTab,
  onTabChange,
  searchQuery,
  onSearchChange,
  sortOrder,
  onSortOrderChange,
  onDownload,
}) => {
  const sortOptions: { value: SortOrder; label: string }[] = [
    { value: "default", label: "جدیدترین" },
    { value: "newest", label: "جدیدترین" },
    { value: "oldest", label: "قدیمی‌ترین" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-b border-muted-100">
      <div className="flex items-center gap-4">
        {tabs && tabs.length > 0 && onTabChange && (
          <TabFilter
            tabs={tabs}
            activeTab={activeTab ?? ""}
            onTabChange={onTabChange}
          />
        )}
      </div>

      <div className="flex items-center gap-4">
        {onSearchChange && (
          <input
            type="text"
            value={searchQuery ?? ""}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="جستجو"
            className="w-44 h-10 px-3 text-sm border border-muted-100 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-success-50 placeholder:text-muted-50"
          />
        )}
        {onSortOrderChange && (
          <div className="flex items-center gap-2">
            <select
              value={sortOrder ?? "default"}
              onChange={(e) => onSortOrderChange(e.target.value as SortOrder)}
              className="w-44 h-10 px-3 text-sm border border-muted-100 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-success-50"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )}
        {onDownload && (
          <button
            onClick={onDownload}
            className="h-10 px-4 text-sm text-white bg-success-50 rounded-lg hover:bg-[#15657A] focus:outline-none focus:ring-2 focus:ring-success-50 transition-colors cursor-pointer"
          >
            دانلود
          </button>
        )}
      </div>
    </div>
  );
};

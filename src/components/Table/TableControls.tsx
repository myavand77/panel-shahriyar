import React from "react";
import { TableControlsProps, SortOrder } from "./types";

export const TableControls: React.FC<TableControlsProps> = ({
  rowsPerPage,
  onRowsPerPageChange,
  searchQuery,
  onSearchChange,
  sortOrder,
  onSortOrderChange,
  onDownload,
}) => {
  const rowsPerPageOptions = [10, 25, 50, 100];
  const sortOptions: { value: SortOrder; label: string }[] = [
    { value: "default", label: "جدیدترین" },
    { value: "newest", label: "جدیدترین" },
    { value: "oldest", label: "قدیمی‌ترین" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 p-4 border-b border-muted-100">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#212121] font-normal">
            تعداد نمایش در صفحه:
          </span>
          <select
            value={rowsPerPage}
            onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
            className="w-32 h-10 px-3 text-sm border border-muted-100 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-success-50"
          >
            {rowsPerPageOptions.map((option) => (
              <option key={option} value={option}>
                {option} سطر
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="جستجو"
          className="w-44 h-10 px-3 text-sm border border-muted-100 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-success-50 placeholder:text-muted-50"
        />
        <div className="flex items-center gap-2">
          <select
            value={sortOrder}
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

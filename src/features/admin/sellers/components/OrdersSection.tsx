import { Table } from "@/components/Table/Table";
import { Column, TableData, SortOrder } from "@/components/Table/types";

interface OrdersSectionProps {
  columns: Column[];
  data: TableData[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onRowClick: (row: TableData) => void;
  sortOrder: SortOrder;
  onSortOrderChange: (order: SortOrder) => void;
}

export function OrdersSection({
  columns,
  data,
  currentPage,
  totalPages,
  onPageChange,
  onRowClick,
  sortOrder,
  onSortOrderChange,
}: OrdersSectionProps) {
  return (
    <div className="flex-1 overflow-hidden">
      <Table
        columns={columns}
        data={data}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        onRowClick={onRowClick}
        controls={{
          searchQuery: "",
          onSearchChange: () => {},
          sortOrder,
          onSortOrderChange,
          onDownload: () => {
            console.log("download");
          },
        }}
      />
    </div>
  );
} 
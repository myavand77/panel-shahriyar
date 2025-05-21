export interface Column {
  key: string;
  title: string;
  width?: string;
}

export interface TableData {
  id: string | number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export type SortOrder = "newest" | "oldest" | "default";

export interface TableControlsProps {
  rowsPerPage: number;
  onRowsPerPageChange: (value: number) => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  sortOrder: SortOrder;
  onSortOrderChange: (value: SortOrder) => void;
  onDownload?: () => void;
}

export interface TableProps {
  columns: {
    key: string;
    title: string;
    width?: string;
  }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  loading?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onRowClick?: (row: any) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  controls?: TableControlsProps;
}

export interface TabFilterProps {
  tabs: { id: string; label: string; count?: number }[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

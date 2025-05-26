"use client";

import { useState } from "react";
import { Table } from "@/components/Table/Table";
import { Column, SortOrder, TableData } from "@/components/Table/types";
import { useRouter } from "next/navigation";
import Badge from "@/components/ui/Badge";
import { EyeIcon } from "@/components/Icons";

const columns: Column[] = [
  { key: "row", title: "ردیف", width: "60px" },
  { key: "orderNumber", title: "شماره سفارش" },
  { key: "itemCount", title: "تعداد کالا در سبد" },
  { key: "purchaseDate", title: "تاریخ خرید" },
  { key: "basketAmount", title: "مبلغ سبد (ریال)" },
  { key: "settlementAmount", title: "مبلغ تسویه (ریال)" },
  { key: "settlementDate", title: "تاریخ تسویه" },
  { key: "status", title: "وضعیت" },
  { key: "actions", title: "عملیات" },
];

const mockData: TableData[] = [
  {
    id: 1,
    row: 1,
    orderNumber: "46164646",
    itemCount: 1,
    purchaseDate: "1402/09/15",
    basketAmount: "1,200,000,000",
    settlementAmount: "1,210,000,000",
    settlementDate: "1402/09/15",
    status: <Badge type="warning">در انتظار بررسی</Badge>,
    actions: <EyeIcon width={22} height={22} className="text-info-500" />,
  },
  {
    id: 2,
    row: 2,
    orderNumber: "46164646",
    itemCount: 3,
    purchaseDate: "1402/09/15",
    basketAmount: "1,200,000,000",
    settlementAmount: "1,210,000,000",
    settlementDate: "1402/09/15",
    status: <Badge type="info">ارسال شده</Badge>,
    actions: <EyeIcon width={22} height={22} className="text-info-500" />,
  },
];

const tabs = [
  { id: "all", label: "همه" },
  { id: "pending", label: "در انتظار بررسی" },
  { id: "sent", label: "ارسال شده" },
  { id: "delivered", label: "تحویل داده‌شده" },
  { id: "returned", label: "مرجوع شده" },
  { id: "canceled", label: "ابطال" },
  { id: "settled", label: "تسویه شده" },
  { id: "discrepancy", label: "مغایرت" },
];

export function OrdersView() {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<SortOrder>("default");
  const router = useRouter();
  const totalPages = 8;

  const handleRowClick = (row: TableData) => {
    router.push(`/admin/sellers/${row.id}`);
  };

  return (
    <div className="h-[calc(100vh-7rem)] flex flex-col">
      <div className="flex-1 overflow-hidden">
        <Table
          columns={columns}
          data={mockData}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          onRowClick={handleRowClick}
          controls={{
            tabs,
            activeTab,
            onTabChange: setActiveTab,
            searchQuery: "",
            onSearchChange: () => {},
            sortOrder,
            onSortOrderChange: setSortOrder,
          }}
        />
      </div>
    </div>
  );
}

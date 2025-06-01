"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Table } from "@/components/Table/Table";
import { Column, TableData, SortOrder } from "@/components/Table/types";
import Badge from "@/components/ui/Badge";

const columns: Column[] = [
  { key: "row", title: "ردیف", width: "60px" },
  { key: "name", title: "نام", width: "120px" },
  { key: "email", title: "ایمیل", width: "120px" },
  { key: "phone", title: "تلفن", width: "120px" },
  { key: "status", title: "وضعیت", width: "120px" },
  { key: "createdAt", title: "تاریخ ثبت‌نام", width: "120px" },
];

const mockData: TableData[] = [
  {
    id: 1,
    row: 1,
    name: "احسان احمدنیا",
    email: "sample.mail@gmail.com",
    phone: "09124568541",
    status: (
      <div className="flex gap-2">
        <Badge type="success">فعال</Badge>
      </div>
    ),
    createdAt: "1402/09/15",
  },
];

const tabs = [
  { id: "all", label: "همه" },
  { id: "pending", label: "در انتظار بررسی" },
  { id: "sent", label: "ارسال شده" },
  { id: "delivered", label: "تحویل داده‌شده" },
  { id: "returned", label: "مرجوع شده" },
  { id: "canceled", label: "ابطال" },
];

export default function SellersView() {
  const [activeTab, setActiveTab] = useState("all");
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<SortOrder>("default");
  const [searchQuery, setSearchQuery] = useState("");

  const handleRowClick = (row: TableData) => {
    router.push(`/admin/sellers/${row.id}`);
  };

  return (
    <Table
      columns={columns}
      data={mockData}
      onRowClick={handleRowClick}
      currentPage={currentPage}
      totalPages={8}
      onPageChange={setCurrentPage}
      controls={{
        tabs,
        activeTab,
        onTabChange: setActiveTab,
        searchQuery,
        onSearchChange: setSearchQuery,
        sortOrder,
        onSortOrderChange: setSortOrder,
      }}
    />
  );
}

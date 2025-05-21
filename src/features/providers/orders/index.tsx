"use client";

import { useState } from "react";
import { Table } from "@/components/Table/Table";
import { Column, TableData } from "@/components/Table/types";

const columns: Column[] = [
  { key: "row", title: "ردیف", width: "60px" },
  { key: "storeName", title: "نام فروشگاه" },
  { key: "product", title: "کالا" },
  { key: "purchaseDate", title: "تاریخ خرید" },
  { key: "amount", title: "مبلغ سفارش (ریال)" },
  { key: "paidAmount", title: "مبلغ نقدی (ریال)" },
  { key: "totalInstallments", title: "کل اقساط" },
  { key: "paidInstallments", title: "اقساط باقی‌مانده" },
];

const mockData: TableData[] = [
  {
    id: 1,
    row: 1,
    storeName: "سامسرویس",
    product: "تلویزیون، یخچال، ماشین...",
    purchaseDate: "1402/09/15",
    amount: "1,200,000,000",
    paidAmount: "1,200,000,000",
    totalInstallments: "12",
    paidInstallments: "8",
  },
  {
    id: 2,
    row: 2,
    storeName: "سامسرویس",
    product: "تلویزیون، یخچال، ماشین...",
    purchaseDate: "1402/09/15",
    amount: "1,200,000,000",
    paidAmount: "1,200,000,000",
    totalInstallments: "12",
    paidInstallments: "7",
  },
  {
    id: 3,
    row: 3,
    storeName: "سامسرویس",
    product: "تلویزیون، یخچال، ماشین...",
    purchaseDate: "1402/09/15",
    amount: "1,200,000,000",
    paidAmount: "1,200,000,000",
    totalInstallments: "12",
    paidInstallments: "12",
  },
  {
    id: 4,
    row: 4,
    storeName: "سامسرویس",
    product: "تلویزیون، یخچال، ماشین...",
    purchaseDate: "1402/09/15",
    amount: "1,200,000,000",
    paidAmount: "1,200,000,000",
    totalInstallments: "12",
    paidInstallments: "10",
  },
];

export function OrdersView() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  return (
    <div className="h-[calc(100vh-7rem)] flex flex-col">
      <div className="flex-1 overflow-hidden">
        <Table
          columns={columns}
          data={mockData}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

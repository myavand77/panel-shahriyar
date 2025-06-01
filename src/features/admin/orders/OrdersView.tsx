"use client";

import { useState } from "react";
import { Table } from "@/components/Table/Table";
import { Column, TableData } from "@/components/Table/types";
import Badge from "@/components/ui/Badge";
import { EyeIcon } from "@/components/Icons";
import { Modal } from "@/components/ui/Modal";

const columns: Column[] = [
  { key: "row", title: "ردیف", width: "60px" },
  { key: "orderNumber", title: "شماره سفارش" },
  { key: "buyer", title: "خریدار", width: "60px" },
  { key: "store", title: "فروشگاه", width: "60px" },
  { key: "purchaseDate", title: "تاریخ خرید", width: "60px" },
  { key: "amount", title: "مبلغ سبد (ریال)" },
  { key: "status", title: "وضعیت", width: "200px" },
  { key: "actions", title: "عملیات", width: "100px" },
];

const mockData: TableData[] = [
  {
    id: 1,
    row: 1,
    orderNumber: "234850431132",
    buyer: "جواد بالی نکو",
    store: "سامسونگ",
    purchaseDate: "1402/09/15",
    amount: "1,200,000,000",
    status: (
      <div className="flex gap-2">
        <Badge type="success">ارسال شده</Badge>
        <Badge type="warning">تحویل داده شده</Badge>
      </div>
    ),
    actions: <EyeIcon width={20} height={20} className="cursor-pointer" />,
  },
  {
    id: 2,
    row: 2,
    orderNumber: "234850431132",
    buyer: "جواد بالی نکو",
    store: "سامسونگ",
    purchaseDate: "1402/09/15",
    amount: "1,200,000,000",
    status: (
      <div className="flex gap-2">
        <Badge type="success">تحویل داده شده</Badge>
      </div>
    ),
    actions: <EyeIcon width={20} height={20} className="cursor-pointer" />,
  },
  {
    id: 3,
    row: 3,
    orderNumber: "234850431133",
    buyer: "محمد رضایی",
    store: "اپل",
    purchaseDate: "1402/09/16",
    amount: "2,500,000,000",
    status: (
      <div className="flex gap-2">
        <Badge type="warning">در انتظار پرداخت</Badge>
      </div>
    ),
    actions: <EyeIcon width={20} height={20} className="cursor-pointer" />,
  },
  {
    id: 4,
    row: 4,
    orderNumber: "234850431134",
    buyer: "علی محمدی",
    store: "شیائومی",
    purchaseDate: "1402/09/17",
    amount: "800,000,000",
    status: (
      <div className="flex gap-2">
        <Badge type="error">رد شده</Badge>
      </div>
    ),
    actions: <EyeIcon width={20} height={20} className="cursor-pointer" />,
  },
  {
    id: 5,
    row: 5,
    orderNumber: "234850431135",
    buyer: "سارا احمدی",
    store: "هوآوی",
    purchaseDate: "1402/09/18",
    amount: "1,500,000,000",
    status: (
      <div className="flex gap-2">
        <Badge type="info">در حال پردازش</Badge>
      </div>
    ),
    actions: <EyeIcon width={20} height={20} className="cursor-pointer" />,
  },
  {
    id: 6,
    row: 6,
    orderNumber: "234850431136",
    buyer: "رضا حسینی",
    store: "نوکیا",
    purchaseDate: "1402/09/19",
    amount: "900,000,000",
    status: (
      <div className="flex gap-2">
        <Badge type="success">تایید شده</Badge>
      </div>
    ),
    actions: <EyeIcon width={20} height={20} className="cursor-pointer" />,
  },
  {
    id: 7,
    row: 7,
    orderNumber: "234850431137",
    buyer: "فاطمه محمدی",
    store: "سونی",
    purchaseDate: "1402/09/20",
    amount: "3,200,000,000",
    status: (
      <div className="flex gap-2">
        <Badge type="warning">نقص مدارک</Badge>
      </div>
    ),
    actions: <EyeIcon width={20} height={20} className="cursor-pointer" />,
  },
  {
    id: 8,
    row: 8,
    orderNumber: "234850431138",
    buyer: "امیر علیزاده",
    store: "ال جی",
    purchaseDate: "1402/09/21",
    amount: "1,800,000,000",
    status: (
      <div className="flex gap-2">
        <Badge type="success">ارسال شده</Badge>
        <Badge type="warning">در حال ارسال</Badge>
      </div>
    ),
    actions: <EyeIcon width={20} height={20} className="cursor-pointer" />,
  },
  {
    id: 9,
    row: 9,
    orderNumber: "234850431139",
    buyer: "نازنین رضایی",
    store: "ایسوس",
    purchaseDate: "1402/09/22",
    amount: "2,100,000,000",
    status: (
      <div className="flex gap-2">
        <Badge type="success">تایید شده</Badge>
        <Badge type="info">در حال پردازش</Badge>
      </div>
    ),
    actions: <EyeIcon width={20} height={20} className="cursor-pointer" />,
  },
  {
    id: 10,
    row: 10,
    orderNumber: "234850431140",
    buyer: "حسین کریمی",
    store: "مایکروسافت",
    purchaseDate: "1402/09/23",
    amount: "4,500,000,000",
    status: (
      <div className="flex gap-2">
        <Badge type="error">رد شده</Badge>
      </div>
    ),
    actions: <EyeIcon width={20} height={20} className="cursor-pointer" />,
  },
  {
    id: 11,
    row: 11,
    orderNumber: "234850431141",
    buyer: "زهرا احمدی",
    store: "دل",
    purchaseDate: "1402/09/24",
    amount: "1,600,000,000",
    status: (
      <div className="flex gap-2">
        <Badge type="success">تحویل داده شده</Badge>
      </div>
    ),
    actions: <EyeIcon width={20} height={20} className="cursor-pointer" />,
  },
  {
    id: 12,
    row: 12,
    orderNumber: "234850431142",
    buyer: "محمد حسینی",
    store: "ایسر",
    purchaseDate: "1402/09/25",
    amount: "2,300,000,000",
    status: (
      <div className="flex gap-2">
        <Badge type="warning">در انتظار پرداخت</Badge>
      </div>
    ),
    actions: <EyeIcon width={20} height={20} className="cursor-pointer" />,
  },
  {
    id: 13,
    row: 13,
    orderNumber: "234850431143",
    buyer: "سپیده محمدی",
    store: "لنوو",
    purchaseDate: "1402/09/26",
    amount: "1,900,000,000",
    status: (
      <div className="flex gap-2">
        <Badge type="success">ارسال شده</Badge>
      </div>
    ),
    actions: <EyeIcon width={20} height={20} className="cursor-pointer" />,
  },
  {
    id: 14,
    row: 14,
    orderNumber: "234850431144",
    buyer: "علی رضایی",
    store: "اچ پی",
    purchaseDate: "1402/09/27",
    amount: "2,800,000,000",
    status: (
      <div className="flex gap-2">
        <Badge type="warning">نقص مدارک</Badge>
      </div>
    ),
    actions: <EyeIcon width={20} height={20} className="cursor-pointer" />,
  },
  {
    id: 15,
    row: 15,
    orderNumber: "234850431145",
    buyer: "مریم کریمی",
    store: "سامسونگ",
    purchaseDate: "1402/09/28",
    amount: "3,500,000,000",
    status: (
      <div className="flex gap-2">
        <Badge type="success">تایید شده</Badge>
        <Badge type="info">در حال پردازش</Badge>
      </div>
    ),
    actions: <EyeIcon width={20} height={20} className="cursor-pointer" />,
  },
];

export function OrdersView() {
  const [selectedOrder, setSelectedOrder] = useState<TableData | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 1;

  const handleRowClick = (row: TableData) => {
    setSelectedOrder(row);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedOrder(null);
  };

  const handleChange = () => {
    // Handle any changes here
    handleCloseDialog();
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">سفارشات</h1>
      </div>
      <Table
        columns={columns}
        data={mockData}
        onRowClick={handleRowClick}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      {isDialogOpen && selectedOrder && (
        <Modal
          open={isDialogOpen}
          onClose={handleCloseDialog}
          onChange={handleChange}
          title="جزئیات سفارش"
        >
          <div className="p-4">
            <p>شماره سفارش: {selectedOrder.orderNumber}</p>
            <p>خریدار: {selectedOrder.buyer}</p>
            <p>فروشگاه: {selectedOrder.store}</p>
            <p>تاریخ خرید: {selectedOrder.purchaseDate}</p>
            <p>مبلغ: {selectedOrder.amount}</p>
          </div>
        </Modal>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import { Table } from "@/components/Table/Table";
import { Column, TableData } from "@/components/Table/types";
import Badge from "@/components/ui/Badge";
import { EyeIcon } from "@/components/Icons";
import { Modal } from "@/components/ui/Modal";

const columns: Column[] = [
  { key: "row", title: "ردیف", width: "60px" },
  { key: "name", title: "نام و نام خانوادگی" },
  { key: "phone", title: "تلفن همراه" },
  { key: "email", title: "ایمیل" },
  { key: "brand", title: "برند" },
  { key: "category", title: "دسته‌بندی" },
  { key: "website", title: "وبسایت" },
  { key: "status", title: "وضعیت" },
  { key: "actions", title: "عملیات", width: "100px" },
];

const mockData: TableData[] = [
  {
    id: 1,
    row: 1,
    name: "احمد محمدنیا",
    phone: "09123456985",
    email: "sample.mail@gmail.com",
    brand: "سام‌سرویس",
    category: "کالای دیجیتال",
    website: "www.sample.com",
    status: <Badge type="warning">در انتظار بررسی</Badge>,
    actions: <EyeIcon width={20} height={20} className="cursor-pointer" />,
  },
  {
    id: 2,
    row: 2,
    name: "احمد محمدنیا",
    phone: "09123456985",
    email: "sample.mail@gmail.com",
    brand: "سام‌سرویس",
    category: "کالای دیجیتال",
    website: "www.sample.com",
    status: <Badge type="success">تایید شده</Badge>,
    actions: <EyeIcon width={20} height={20} className="cursor-pointer" />,
  },
  {
    id: 3,
    row: 3,
    name: "احمد محمدنیا",
    phone: "09123456985",
    email: "sample.mail@gmail.com",
    brand: "سام‌سرویس",
    category: "کالای دیجیتال",
    website: "www.sample.com",
    status: <Badge type="error">رد شده</Badge>,
    actions: <EyeIcon width={20} height={20} className="cursor-pointer" />,
  },
  {
    id: 4,
    row: 4,
    name: "احمد محمدنیا",
    phone: "09123456985",
    email: "sample.mail@gmail.com",
    brand: "سام‌سرویس",
    category: "کالای دیجیتال",
    website: "www.sample.com",
    status: <Badge type="info">نقصی مدارک</Badge>,
    actions: <EyeIcon width={20} height={20} className="cursor-pointer" />,
  },
  {
    id: 5,
    row: 5,
    name: "سارا رضایی",
    phone: "09124567890",
    email: "sara.rezaei@example.com",
    brand: "دیجی‌کالا",
    category: "فروشگاه آنلاین",
    website: "www.digikala.com",
    status: <Badge type="warning">در انتظار بررسی</Badge>,
    actions: <EyeIcon width={20} height={20} className="cursor-pointer" />,
  },
  {
    id: 6,
    row: 6,
    name: "محمد حسینی",
    phone: "09125678901",
    email: "m.hosseini@example.com",
    brand: "اسنپ",
    category: "خدمات حمل و نقل",
    website: "www.snapp.ir",
    status: <Badge type="success">تایید شده</Badge>,
    actions: <EyeIcon width={20} height={20} className="cursor-pointer" />,
  },
  {
    id: 7,
    row: 7,
    name: "نازنین کریمی",
    phone: "09126789012",
    email: "n.karimi@example.com",
    brand: "آپارات",
    category: "پلتفرم ویدیو",
    website: "www.aparat.com",
    status: <Badge type="error">رد شده</Badge>,
    actions: <EyeIcon width={20} height={20} className="cursor-pointer" />,
  },
  {
    id: 8,
    row: 8,
    name: "علی احمدی",
    phone: "09127890123",
    email: "a.ahmadi@example.com",
    brand: "تپسی",
    category: "خدمات حمل و نقل",
    website: "www.tapsi.ir",
    status: <Badge type="info">نقصی مدارک</Badge>,
    actions: <EyeIcon width={20} height={20} className="cursor-pointer" />,
  },
  {
    id: 9,
    row: 9,
    name: "فاطمه محمدی",
    phone: "09128901234",
    email: "f.mohammadi@example.com",
    brand: "بازار",
    category: "فروشگاه اپلیکیشن",
    website: "www.cafebazaar.ir",
    status: <Badge type="warning">در انتظار بررسی</Badge>,
    actions: <EyeIcon width={20} height={20} className="cursor-pointer" />,
  },
  {
    id: 10,
    row: 10,
    name: "رضا نوروزی",
    phone: "09129012345",
    email: "r.norouzi@example.com",
    brand: "دیوار",
    category: "آگهی و تبلیغات",
    website: "www.divar.ir",
    status: <Badge type="success">تایید شده</Badge>,
    actions: <EyeIcon width={20} height={20} className="cursor-pointer" />,
  },
  {
    id: 11,
    row: 11,
    name: "احمد محمدنیا",
    phone: "09123456985",
    email: "sample.mail@gmail.com",
    brand: "سام‌سرویس",
    category: "کالای دیجیتال",
    website: "www.sample.com",
    status: <Badge type="warning">در انتظار بررسی</Badge>,
    actions: <EyeIcon width={20} height={20} className="cursor-pointer" />,
  },
  {
    id: 12,
    row: 12,
    name: "احمد محمدنیا",
    phone: "09123456985",
    email: "sample.mail@gmail.com",
    brand: "سام‌سرویس",
    category: "کالای دیجیتال",
    website: "www.sample.com",
    status: <Badge type="success">تایید شده</Badge>,
    actions: <EyeIcon width={20} height={20} className="cursor-pointer" />,
  },
  {
    id: 13,
    row: 13,
    name: "احمد محمدنیا",
    phone: "09123456985",
    email: "sample.mail@gmail.com",
    brand: "سام‌سرویس",
    category: "کالای دیجیتال",
    website: "www.sample.com",
    status: <Badge type="error">رد شده</Badge>,
    actions: <EyeIcon width={20} height={20} className="cursor-pointer" />,
  },
  {
    id: 14,
    row: 14,
    name: "احمد محمدنیا",
    phone: "09123456985",
    email: "sample.mail@gmail.com",
    brand: "سام‌سرویس",
    category: "کالای دیجیتال",
    website: "www.sample.com",
    status: <Badge type="info">نقصی مدارک</Badge>,
    actions: <EyeIcon width={20} height={20} className="cursor-pointer" />,
  },
  {
    id: 15,
    row: 15,
    name: "سارا رضایی",
    phone: "09124567890",
    email: "sara.rezaei@example.com",
    brand: "دیجی‌کالا",
    category: "فروشگاه آنلاین",
    website: "www.digikala.com",
    status: <Badge type="warning">در انتظار بررسی</Badge>,
    actions: <EyeIcon width={20} height={20} className="cursor-pointer" />,
  },
  {
    id: 16,
    row: 16,
    name: "محمد حسینی",
    phone: "09125678901",
    email: "m.hosseini@example.com",
    brand: "اسنپ",
    category: "خدمات حمل و نقل",
    website: "www.snapp.ir",
    status: <Badge type="success">تایید شده</Badge>,
    actions: <EyeIcon width={20} height={20} className="cursor-pointer" />,
  },
  {
    id: 17,
    row: 17,
    name: "نازنین کریمی",
    phone: "09126789012",
    email: "n.karimi@example.com",
    brand: "آپارات",
    category: "پلتفرم ویدیو",
    website: "www.aparat.com",
    status: <Badge type="error">رد شده</Badge>,
    actions: <EyeIcon width={20} height={20} className="cursor-pointer" />,
  },
  {
    id: 18,
    row: 18,
    name: "علی احمدی",
    phone: "09127890123",
    email: "a.ahmadi@example.com",
    brand: "تپسی",
    category: "خدمات حمل و نقل",
    website: "www.tapsi.ir",
    status: <Badge type="info">نقصی مدارک</Badge>,
    actions: <EyeIcon width={20} height={20} className="cursor-pointer" />,
  },
  {
    id: 19,
    row: 19,
    name: "فاطمه محمدی",
    phone: "09128901234",
    email: "f.mohammadi@example.com",
    brand: "بازار",
    category: "فروشگاه اپلیکیشن",
    website: "www.cafebazaar.ir",
    status: <Badge type="warning">در انتظار بررسی</Badge>,
    actions: <EyeIcon width={20} height={20} className="cursor-pointer" />,
  },
  {
    id: 20,
    row: 20,
    name: "رضا نوروزی",
    phone: "09129012345",
    email: "r.norouzi@example.com",
    brand: "دیوار",
    category: "آگهی و تبلیغات",
    website: "www.divar.ir",
    status: <Badge type="success">تایید شده</Badge>,
    actions: <EyeIcon width={20} height={20} className="cursor-pointer" />,
  },
];

export function RequestsView() {
  const [selectedRequest, setSelectedRequest] = useState<TableData | null>(
    null
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 1;

  const handleRowClick = (row: TableData) => {
    setSelectedRequest(row);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedRequest(null);
  };

  const handleChange = () => {
    // Handle any changes here
    handleCloseDialog();
  };

  return (
    <div className="p-6 h-full">
      <Table
        columns={columns}
        data={mockData}
        onRowClick={handleRowClick}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      {isDialogOpen && selectedRequest && (
        <Modal
          open={isDialogOpen}
          onClose={handleCloseDialog}
          onChange={handleChange}
          title="جزئیات درخواست"
        >
          <div className="p-4">
            <p>نام و نام خانوادگی: {selectedRequest.name}</p>
            <p>تلفن همراه: {selectedRequest.phone}</p>
            <p>ایمیل: {selectedRequest.email}</p>
            <p>برند: {selectedRequest.brand}</p>
            <p>دسته‌بندی: {selectedRequest.category}</p>
            <p>وبسایت: {selectedRequest.website}</p>
          </div>
        </Modal>
      )}
    </div>
  );
}

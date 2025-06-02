"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Table } from "@/components/Table/Table";
import { Column, TableData, SortOrder } from "@/components/Table/types";
import Badge from "@/components/ui/Badge";
import { Switch } from "@/components/ui/Switch";
import { InfoIcon } from "@/components/Icons";

const columns: Column[] = [
  { key: "row", title: "ردیف", width: "60px" },
  { key: "brand", title: "برند", width: "100px" },
  { key: "representative", title: "نماینده", width: "140px" },
  { key: "salesAmount", title: "میزان فروش (ریال)", width: "140px" },
  { key: "settled", title: "تسویه شده (ریال)", width: "140px" },
  { key: "remaining", title: "مانده طلب (ریال)", width: "140px" },
  { key: "disputeStatus", title: "وضعیت متاسرچ", width: "120px" },
  { key: "gatewayStatus", title: "وضعیت درگاه", width: "120px" },
  { key: "gatewayType", title: "نوع درگاه", width: "120px" },
  { key: "details", title: "جزئیات", width: "80px" },
];

export default function SellersView() {
  const [activeTab, setActiveTab] = useState("all");
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<SortOrder>("default");
  const [searchQuery, setSearchQuery] = useState("");
  const [metaStatus, setMetaStatus] = useState<{ [id: number]: boolean }>({
    1: true,
  });
  const [gatewayStatus, setGatewayStatus] = useState<{ [id: number]: boolean }>(
    { 1: false }
  );

  const handleMetaSwitch = (id: number, value: boolean) => {
    setMetaStatus((prev) => ({ ...prev, [id]: value }));
  };
  const handleGatewaySwitch = (id: number, value: boolean) => {
    setGatewayStatus((prev) => ({ ...prev, [id]: value }));
  };

  // Update mockData to include Switches
  const data: TableData[] = [
    {
      id: 1,
      row: 1,
      brand: "سامسونگ",
      representative: "احمد محمدنیا",
      salesAmount: "۱,۲۰۰,۰۰۰,۰۰۰",
      settled: "۱,۲۰۰,۰۰۰,۰۰۰",
      remaining: "۱,۲۰۰,۰۰۰,۰۰۰",
      disputeStatus: (
        <Switch
          checked={metaStatus[1] ?? false}
          onCheckedChange={(checked) => handleMetaSwitch(1, checked)}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            e.preventDefault();
          }}
        />
      ),
      gatewayStatus: (
        <Switch
          checked={gatewayStatus[1] ?? false}
          onCheckedChange={(checked) => handleGatewaySwitch(1, checked)}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            e.preventDefault();
          }}
        />
      ),
      gatewayType: <Badge type="info">زودهنگام</Badge>,
      details: <InfoIcon width={20} height={20} />,
    },
    {
      id: 2,
      row: 2,
      brand: "سامسونگ",
      representative: "احمد محمدنیا",
      salesAmount: "۱,۲۰۰,۰۰۰,۰۰۰",
      settled: "۱,۲۰۰,۰۰۰,۰۰۰",
      remaining: "۱,۲۰۰,۰۰۰,۰۰۰",
      disputeStatus: (
        <Switch
          checked={metaStatus[2] ?? false}
          onCheckedChange={(checked) => handleMetaSwitch(2, checked)}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            e.preventDefault();
          }}
        />
      ),
      gatewayStatus: (
        <Switch
          checked={gatewayStatus[2] ?? false}
          onCheckedChange={(checked) => handleGatewaySwitch(2, checked)}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            e.preventDefault();
          }}
        />
      ),
      gatewayType: <Badge type="warning">به‌هنگام</Badge>,
      details: <InfoIcon width={20} height={20} />,
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

  const handleRowClick = (row: TableData) => {
    router.push(`/admin/sellers/${row.id}`);
  };

  return (
    <>
      <Table
        columns={columns}
        data={data}
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
      <Switch
        checked={metaStatus[1] ?? false}
        onCheckedChange={(checked) => handleMetaSwitch(1, checked)}
      />
    </>
  );
}

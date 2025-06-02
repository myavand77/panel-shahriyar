"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Table } from "@/components/Table/Table";
import { Column, TableData, SortOrder } from "@/components/Table/types";
import { Switch } from "@/components/ui/Switch";
import { InfoIcon } from "@/components/Icons";
import { useVendors } from "./hooks/useVendors";
import { useUpdateVendorShopStatus } from "./hooks/useUpdateVendorShopStatus";
import { useUpdateVendorInstallmentStatus } from "./hooks/useUpdateVendorInstallmentStatus";
import { Vendor } from "./types";

const columns: Column[] = [
  { key: "row", title: "ردیف", width: "60px" },
  { key: "brand", title: "برند", width: "100px" },
  { key: "url", title: "آدرس سایت", width: "200px" },
  { key: "disputeStatus", title: "وضعیت متاسرچ", width: "120px" },
  { key: "gatewayStatus", title: "وضعیت درگاه", width: "120px" },
  { key: "details", title: "جزئیات", width: "80px" },
];

export default function SellersView() {
  const [activeTab, setActiveTab] = useState("all");
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<SortOrder>("default");
  const [searchQuery, setSearchQuery] = useState("");

  const { data: vendors, isLoading } = useVendors();
  const { mutate: updateShopStatus } = useUpdateVendorShopStatus();
  const { mutate: updateInstallmentStatus } =
    useUpdateVendorInstallmentStatus();

  // Local state for optimistic UI
  const [shopStatusMap, setShopStatusMap] = useState<{ [id: string]: string }>({});
  const [installmentStatusMap, setInstallmentStatusMap] = useState<{ [id: string]: string }>({});
  const [pendingShop, setPendingShop] = useState<Set<string>>(new Set());
  const [pendingInstallment, setPendingInstallment] = useState<Set<string>>(new Set());

  // Sync local state with vendor list, but only for non-pending vendors
  useEffect(() => {
    if (vendors) {
      setShopStatusMap((prev) => {
        const next = { ...prev };
        vendors.forEach((vendor: Vendor) => {
          if (!pendingShop.has(vendor.id)) {
            next[vendor.id] = vendor.shop_status;
          }
        });
        return next;
      });
      setInstallmentStatusMap((prev) => {
        const next = { ...prev };
        vendors.forEach((vendor: Vendor) => {
          if (!pendingInstallment.has(vendor.id)) {
            next[vendor.id] = vendor.installment.status;
          }
        });
        return next;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vendors]);

  const handleShopStatusChange = (vendorId: string, currentStatus: string) => {
    const newStatus = currentStatus === "ENABLE" ? "DISABLE" : "ENABLE";
    setShopStatusMap((prev) => ({ ...prev, [vendorId]: newStatus })); // Optimistic update
    setPendingShop((prev) => new Set(prev).add(vendorId));
    updateShopStatus(
      { vendorId, shopStatus: newStatus },
      {
        onSettled: () => {
          setPendingShop((prev) => {
            const next = new Set(prev);
            next.delete(vendorId);
            return next;
          });
        },
      }
    );
  };

  const handleInstallmentStatusChange = (vendorId: string, currentStatus: string) => {
    const newStatus = currentStatus === "ACTIVE_INSTALLMENT" ? "ACTIVE_CASH" : "ACTIVE_INSTALLMENT";
    setInstallmentStatusMap((prev) => ({ ...prev, [vendorId]: newStatus })); // Optimistic update
    setPendingInstallment((prev) => new Set(prev).add(vendorId));
    updateInstallmentStatus(
      { vendorId, installmentStatus: newStatus },
      {
        onSettled: () => {
          setPendingInstallment((prev) => {
            const next = new Set(prev);
            next.delete(vendorId);
            return next;
          });
        },
      }
    );
  };

  const data: TableData[] =
    vendors?.map((vendor: Vendor, index: number) => ({
      id: vendor.id,
      row: index + 1,
      brand: vendor.brand,
      url: vendor.technical_info.url,
      disputeStatus: (
        <Switch
          checked={shopStatusMap[vendor.id] === "ENABLE"}
          onCheckedChange={() =>
            handleShopStatusChange(vendor.id, shopStatusMap[vendor.id])
          }
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
          }}
          disabled={pendingShop.has(vendor.id)}
        />
      ),
      gatewayStatus: (
        <Switch
          checked={installmentStatusMap[vendor.id] === "ACTIVE_INSTALLMENT"}
          onCheckedChange={() =>
            handleInstallmentStatusChange(vendor.id, installmentStatusMap[vendor.id])
          }
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
          }}
          disabled={pendingInstallment.has(vendor.id)}
        />
      ),
      details: <InfoIcon width={20} height={20} />,
    })) || [];

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
      loading={isLoading}
    />
  );
}

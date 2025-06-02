"use client";
import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
import { Table } from "@/components/Table/Table";
import { Column, TableData } from "@/components/Table/types";
import { Switch } from "@/components/ui/Switch";
// import { InfoIcon } from "@/components/Icons";
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
  // { key: "details", title: "جزئیات", width: "80px" },
];

export default function SellersView() {
  // const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20); // Number of items to show per page
  const [searchQuery, setSearchQuery] = useState("");

  const { data: vendors, isLoading } = useVendors();
  const { mutate: updateShopStatus } = useUpdateVendorShopStatus();
  const { mutate: updateInstallmentStatus } =
    useUpdateVendorInstallmentStatus();

  // Local state for optimistic UI
  const [shopStatusMap, setShopStatusMap] = useState<{ [id: string]: string }>(
    {}
  );
  const [installmentStatusMap, setInstallmentStatusMap] = useState<{
    [id: string]: string;
  }>({});
  const [pendingShop, setPendingShop] = useState<Set<string>>(new Set());
  const [pendingInstallment, setPendingInstallment] = useState<Set<string>>(
    new Set()
  );

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

  const handleInstallmentStatusChange = (
    vendorId: string,
    currentStatus: string
  ) => {
    const newStatus =
      currentStatus === "ACTIVE_INSTALLMENT"
        ? "ACTIVE_CASH"
        : "ACTIVE_INSTALLMENT";
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

  // Calculate pagination
  const filteredData =
    vendors?.filter((vendor: Vendor) =>
      vendor.brand.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  const data: TableData[] = paginatedData.map(
    (vendor: Vendor, index: number) => ({
      id: vendor.id,
      row: startIndex + index + 1,
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
            handleInstallmentStatusChange(
              vendor.id,
              installmentStatusMap[vendor.id]
            )
          }
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
          }}
          disabled={pendingInstallment.has(vendor.id)}
        />
      ),
      // details: <InfoIcon width={20} height={20} />,
    })
  );

  const handleRowClick = (row: TableData) => {
    console.log("row", row);
    // router.push(`/admin/sellers/${row.id}`);
  };

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

  return (
    <Table
      columns={columns}
      data={data}
      onRowClick={handleRowClick}
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
      controls={{
        searchQuery,
        onSearchChange: setSearchQuery,
      }}
      loading={isLoading}
    />
  );
}

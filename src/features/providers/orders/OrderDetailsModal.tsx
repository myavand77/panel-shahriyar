import { Modal } from "@/components/ui/Modal";
import { TableData } from "@/components/Table/types";
import Select from "@/components/ui/Select";
import { useState } from "react";

interface OrderDetailsModalProps {
  open: boolean;
  onClose: () => void;
  onChange: () => void;
  selectedRow: TableData | null;
}

export function OrderDetailsModal({
  open,
  onClose,
  onChange,
  selectedRow,
}: OrderDetailsModalProps) {
  const [status, setStatus] = useState("");

  const statusOptions = [
    { value: "pending", label: "در انتظار بررسی" },
    { value: "sent", label: "ارسال شده" },
    { value: "delivered", label: "تحویل داده‌شده" },
    { value: "returned", label: "مرجوع شده" },
    { value: "canceled", label: "ابطال" },
    { value: "settled", label: "تسویه شده" },
    { value: "discrepancy", label: "مغایرت" },
  ];

  return (
    <Modal
      open={open}
      onClose={onClose}
      onChange={onChange}
      title={selectedRow ? `تغییر وضعیت سفارش` : ""}
      subtitle={
        selectedRow
          ? "جهت تغییر وضعیت سفارش، گزینه‌ی مورد نظر را انتخاب کنید"
          : undefined
      }
      badge={selectedRow ? selectedRow.status : undefined}
    >
      {selectedRow && (
        <div className="flex flex-col gap-6">
          <div>
            <Select
              label={"تغییر وضعیت سفارش"}
              options={statusOptions}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full"
            />
            <div className="text-xs text-muted-50 mt-2 pr-1">
              جهت تغییر وضعیت سفارش، گزینه‌ی مورد نظر را انتخاب کنید
            </div>
          </div>
          <div className="rounded-2xl border border-muted-100 bg-white shadow-md p-6 flex flex-col gap-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-900 font-medium">شماره سفارش:</span>
              <span className="text-muted-700">{selectedRow.orderNumber}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-900 font-medium">خریدار:</span>
              <span className="text-muted-700">
                {selectedRow.buyerName || "-"}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-900 font-medium">کالا:</span>
              <span className="text-muted-700">
                {selectedRow.productName || "-"}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-900 font-medium">تاریخ خرید:</span>
              <span className="text-muted-700">{selectedRow.purchaseDate}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-900 font-medium">مبلغ سبد:</span>
              <span className="text-muted-700">
                {selectedRow.basketAmount} ریال
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-900 font-medium">مبلغ تسویه:</span>
              <span className="text-muted-700">
                {selectedRow.settlementAmount} ریال
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-900 font-medium">تاریخ تسویه:</span>
              <span className="text-muted-700">
                {selectedRow.settlementDate}
              </span>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}

"use client";

import { Modal } from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import { TableData } from "@/components/Table/types";

interface OrderDialogProps {
  isOpen: boolean;
  onClose: () => void;
  order: TableData;
  onApprove: () => void;
  onReject: () => void;
  onIncomplete: () => void;
}

export function OrderDialog({
  isOpen,
  onClose,
  order,
  onApprove,
  onReject,
  onIncomplete,
}: OrderDialogProps) {
  return (
    <Modal 
      open={isOpen} 
      onClose={onClose} 
      onChange={onApprove}
      title="جزئیات سفارش"
      changeButtonText="تایید سفارش"
      cancelButtonText="بازگشت"
    >
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">شماره سفارش</p>
            <p className="font-medium">{order.orderNumber}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">خریدار</p>
            <p className="font-medium">{order.buyer}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">فروشگاه</p>
            <p className="font-medium">{order.store}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">تاریخ خرید</p>
            <p className="font-medium">{order.purchaseDate}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">مبلغ سبد</p>
            <p className="font-medium">{order.amount} ریال</p>
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <Button variant="error" onClick={onReject}>
            رد سفارش
          </Button>
          <Button variant="outlined" onClick={onIncomplete}>
            نقص مدارک
          </Button>
        </div>
      </div>
    </Modal>
  );
} 
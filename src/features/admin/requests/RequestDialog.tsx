import { Modal } from "@/components/ui/Modal";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TableData } from "@/components/Table/types";
import { RejectDialog } from "./RejectDialog";
import { ConfirmDialog } from "./ConfirmDialog";
import { FinalConfirmDialog } from "./FinalConfirmDialog";
import { IncompleteDialog } from "./IncompleteDialog";

interface RequestData {
  name: string;
  lastName: string;
  phone: string;
  email: string;
  brand: string;
  category: string;
  website: string;
  webserviceUrl: string;
  apiKey: string;
  nationalId: string;
  callbackUrl: string;
  storeIp: string;
  province: string;
  city: string;
  address: string;
}

interface RequestDialogProps {
  isOpen: boolean;
  onClose: () => void;
  data: TableData | null;
  onApprove: () => void;
  onReject: () => void;
  onIncomplete: () => void;
}

export function RequestDialog({
  isOpen,
  onClose,
  data,
  onApprove,
  onReject,
  onIncomplete,
}: RequestDialogProps) {
  const router = useRouter();
  const [isRejectDialogOpen, setIsRejectDialogOpen] = useState(false);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [isFinalConfirmDialogOpen, setIsFinalConfirmDialogOpen] = useState(false);
  const [isIncompleteDialogOpen, setIsIncompleteDialogOpen] = useState(false);

  // Update URL when dialog opens/closes
  useEffect(() => {
    if (isOpen && data) {
      router.push(`?requestId=${data.id}`);
    } else {
      router.push(window.location.pathname);
    }
  }, [data, router, isOpen]);

  if (!data) return null;

  const transformedData: RequestData = {
    name: data.name.split(" ")[0],
    lastName: data.name.split(" ")[1],
    phone: data.phone,
    email: data.email,
    brand: data.brand,
    category: data.category,
    website: data.website,
    webserviceUrl: "8.8.8.8",
    apiKey: "656161613151619",
    nationalId: "198696406964",
    callbackUrl: "125.50.49",
    storeIp: "125.50.49.1",
    province: "تهران",
    city: "تهران",
    address: "تهران، خیابان گاندی جنوبی، کوچه پالیزوانی، پلاک 27، واحد 15",
  };

  const handleReject = (reasons: string[]) => {
    onReject();
    // Here you can handle the rejection reasons
    console.log("Rejection reasons:", reasons);
  };

  const handleApprove = () => {
    setIsConfirmDialogOpen(true);
  };

  const handleConfirm = () => {
    setIsConfirmDialogOpen(false);
    setIsFinalConfirmDialogOpen(true);
  };

  const handleFinalConfirm = () => {
    setIsFinalConfirmDialogOpen(false);
    onApprove();
  };

  const handleIncomplete = () => {
    setIsIncompleteDialogOpen(true);
  };

  const handleIncompleteConfirm = () => {
    setIsIncompleteDialogOpen(false);
    onIncomplete();
  };

  return (
    <>
      <Modal
        open={isOpen}
        onClose={onClose}
        onChange={handleApprove}
        title="درخواست"
        subtitle="لطفا اطلاعات وارد شده را بررسی نموده و وضعیت درخواست را مشخص کنید."
        changeButtonText="تایید"
        cancelButtonText="بازگشت"
      >
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <button
              onClick={handleIncomplete}
              className="flex-1 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              نقص مدارک
            </button>
            <button
              onClick={() => setIsRejectDialogOpen(true)}
              className="flex-1 rounded-md border border-red-300 bg-white px-4 py-2 text-sm text-red-700 hover:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              رد
            </button>
          </div>
          {/* Basic Info */}
          <div className="mb-6 rounded-lg bg-gray-50 p-4">
            <h3 className="mb-3 text-sm font-medium">اطلاعات پایه</h3>
            <div className="grid grid-cols-1 gap-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">نام:</span>
                <span>{transformedData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">نام خانوادگی:</span>
                <span>{transformedData.lastName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">تلفن همراه:</span>
                <span>{transformedData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">ایمیل:</span>
                <span>{transformedData.email}</span>
              </div>
            </div>
          </div>

          {/* Store Info */}
          <div className="mb-6 rounded-lg bg-gray-50 p-4">
            <h3 className="mb-3 text-sm font-medium">اطلاعات فروشگاه</h3>
            <div className="grid grid-cols-1 gap-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">برند:</span>
                <span>{transformedData.brand}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">دسته‌بندی:</span>
                <span>{transformedData.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">وب‌سایت:</span>
                <span>{transformedData.website}</span>
              </div>
            </div>
          </div>

          {/* Technical Info */}
          <div className="mb-6 rounded-lg bg-gray-50 p-4">
            <h3 className="mb-3 text-sm font-medium">اطلاعات فنی</h3>
            <div className="grid grid-cols-1 gap-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">آدرس وب‌سرویس:</span>
                <span>{transformedData.webserviceUrl}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">کلید سرویس:</span>
                <span>{transformedData.apiKey}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">کد ملی:</span>
                <span>{transformedData.nationalId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">آدرس callback:</span>
                <span>{transformedData.callbackUrl}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">IP فروشگاه:</span>
                <span>{transformedData.storeIp}</span>
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div className="rounded-lg bg-gray-50 p-4">
            <h3 className="mb-3 text-sm font-medium">اطلاعات موقعیت</h3>
            <div className="grid grid-cols-1 gap-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">استان:</span>
                <span>{transformedData.province}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">شهر:</span>
                <span>{transformedData.city}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">آدرس:</span>
                <span>{transformedData.address}</span>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <RejectDialog
        isOpen={isRejectDialogOpen}
        onClose={() => setIsRejectDialogOpen(false)}
        onReject={handleReject}
      />

      <ConfirmDialog
        isOpen={isConfirmDialogOpen}
        onClose={() => setIsConfirmDialogOpen(false)}
        onConfirm={handleConfirm}
      />

      <FinalConfirmDialog
        isOpen={isFinalConfirmDialogOpen}
        onClose={() => setIsFinalConfirmDialogOpen(false)}
        onConfirm={handleFinalConfirm}
      />

      <IncompleteDialog
        isOpen={isIncompleteDialogOpen}
        onClose={() => setIsIncompleteDialogOpen(false)}
        onConfirm={handleIncompleteConfirm}
      />
    </>
  );
}

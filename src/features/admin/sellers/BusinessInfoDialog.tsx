import { Modal } from "@/components/ui/Modal";
import Input from "@/components/ui/Input";
import { FinalConfirmDialog } from "./FinalConfirmDialog";
import { useState } from "react";

interface BusinessInfo {
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
  postalCode: string;
}

interface BusinessInfoDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  businessInfo: BusinessInfo;
  onBusinessInfoChange: (info: BusinessInfo) => void;
}

export function BusinessInfoDialog({
  isOpen,
  onClose,
  onSave,
  businessInfo,
  onBusinessInfoChange,
}: BusinessInfoDialogProps) {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const handleChange = (field: keyof BusinessInfo, value: string) => {
    onBusinessInfoChange({
      ...businessInfo,
      [field]: value,
    });
  };

  const handleSave = () => {
    setShowConfirmDialog(true);
  };

  const handleConfirm = () => {
    setShowConfirmDialog(false);
    onSave();
  };

  return (
    <>
      <Modal
        open={isOpen}
        onClose={onClose}
        onChange={handleSave}
        title="ویرایش اطلاعات کسب و کار"
        changeButtonText="ذخیره"
        cancelButtonText="انصراف"
      >
        <div className="space-y-4 p-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              برند
            </label>
            <Input
              value={businessInfo.brand}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange("brand", e.target.value)
              }
              placeholder="نام برند را وارد کنید"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              دسته‌بندی
            </label>
            <Input
              value={businessInfo.category}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange("category", e.target.value)
              }
              placeholder="دسته‌بندی را وارد کنید"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              وبسایت
            </label>
            <Input
              value={businessInfo.website}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange("website", e.target.value)
              }
              placeholder="آدرس وبسایت را وارد کنید"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              آدرس وب‌سرویس
            </label>
            <Input
              value={businessInfo.webserviceUrl}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange("webserviceUrl", e.target.value)
              }
              placeholder="آدرس وب‌سرویس را وارد کنید"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              کلید سرویس
            </label>
            <Input
              value={businessInfo.apiKey}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange("apiKey", e.target.value)
              }
              placeholder="کلید سرویس را وارد کنید"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              شناسه ملی
            </label>
            <Input
              value={businessInfo.nationalId}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange("nationalId", e.target.value)
              }
              placeholder="شناسه ملی را وارد کنید"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              آدرس Callback
            </label>
            <Input
              value={businessInfo.callbackUrl}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange("callbackUrl", e.target.value)
              }
              placeholder="آدرس Callback را وارد کنید"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              IP فروشگاه
            </label>
            <Input
              value={businessInfo.storeIp}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange("storeIp", e.target.value)
              }
              placeholder="IP فروشگاه را وارد کنید"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              استان
            </label>
            <Input
              value={businessInfo.province}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange("province", e.target.value)
              }
              placeholder="استان را وارد کنید"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              شهر
            </label>
            <Input
              value={businessInfo.city}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange("city", e.target.value)
              }
              placeholder="شهر را وارد کنید"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              آدرس
            </label>
            <Input
              value={businessInfo.address}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange("address", e.target.value)
              }
              placeholder="آدرس را وارد کنید"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              کد پستی
            </label>
            <Input
              value={businessInfo.postalCode}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange("postalCode", e.target.value)
              }
              placeholder="کد پستی را وارد کنید"
            />
          </div>
        </div>
      </Modal>

      <FinalConfirmDialog
        isOpen={showConfirmDialog}
        onClose={() => setShowConfirmDialog(false)}
        onConfirm={handleConfirm}
      />
    </>
  );
}

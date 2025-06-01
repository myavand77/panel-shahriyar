import { PenIcon } from "@/components/Icons";
import { BasicInfoDialog } from "./BasicInfoDialog";
import { BusinessInfoDialog } from "./BusinessInfoDialog";

interface BasicInfo {
  name: string;
  lastName: string;
  phone: string;
  email: string;
}

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

interface GeneralInfoSectionProps {
  sellerData: {
    basicInfo: BasicInfo;
    businessInfo: BusinessInfo;
  };
  isEditBasicInfoOpen: boolean;
  isEditBusinessInfoOpen: boolean;
  onEditBasicInfo: () => void;
  onEditBusinessInfo: () => void;
  onCloseBasicInfo: () => void;
  onCloseBusinessInfo: () => void;
  onSaveBasicInfo: () => void;
  onSaveBusinessInfo: () => void;
  editBasicInfo: BasicInfo;
  editBusinessInfo: BusinessInfo;
  onBasicInfoChange: (info: BasicInfo) => void;
  onBusinessInfoChange: (info: BusinessInfo) => void;
}

export function GeneralInfoSection({
  sellerData,
  isEditBasicInfoOpen,
  isEditBusinessInfoOpen,
  onEditBasicInfo,
  onEditBusinessInfo,
  onCloseBasicInfo,
  onCloseBusinessInfo,
  onSaveBasicInfo,
  onSaveBusinessInfo,
  editBasicInfo,
  editBusinessInfo,
  onBasicInfoChange,
  onBusinessInfoChange,
}: GeneralInfoSectionProps) {
  return (
    <div className="space-y-6">
      {/* Basic Info */}
      <div className="flex items-center justify-start gap-2 mb-3">
        <h2 className="text-md font-medium">اطلاعات پایه</h2>
        <button
          onClick={onEditBasicInfo}
          className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer"
        >
          <PenIcon width={16} height={16} className="text-warning-50" />
        </button>
      </div>
      <div className="rounded-lg bg-gray-50 p-4">
        <div className="grid grid-cols-1 gap-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">نام:</span>
            <span>{sellerData.basicInfo.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">نام خانوادگی:</span>
            <span>{sellerData.basicInfo.lastName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">تلفن همراه:</span>
            <span>{sellerData.basicInfo.phone}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">ایمیل:</span>
            <span>{sellerData.basicInfo.email}</span>
          </div>
        </div>
      </div>

      {/* Business Info */}
      <div className="flex items-center justify-start gap-2 mb-3 mt-12">
        <h2 className="text-md font-medium">اطلاعات کسب و کار</h2>
        <button
          onClick={onEditBusinessInfo}
          className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer"
        >
          <PenIcon width={16} height={16} className="text-warning-50" />
        </button>
      </div>
      <div className="rounded-lg bg-gray-50 p-4">
        <div className="grid grid-cols-1 gap-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">برند:</span>
            <span>{sellerData.businessInfo.brand}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">دسته‌بندی:</span>
            <span>{sellerData.businessInfo.category}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">وبسایت:</span>
            <span>{sellerData.businessInfo.website}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">آدرس وب‌سرویس:</span>
            <span>{sellerData.businessInfo.webserviceUrl}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">کلید سرویس:</span>
            <span>{sellerData.businessInfo.apiKey}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">شناسه ملی:</span>
            <span>{sellerData.businessInfo.nationalId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">آدرس Callback:</span>
            <span>{sellerData.businessInfo.callbackUrl}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">IP فروشگاه:</span>
            <span>{sellerData.businessInfo.storeIp}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">استان:</span>
            <span>{sellerData.businessInfo.province}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">شهر:</span>
            <span>{sellerData.businessInfo.city}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">آدرس:</span>
            <span>{sellerData.businessInfo.address}</span>
          </div>
        </div>
      </div>

      {/* Edit Basic Info Dialog */}
      <BasicInfoDialog
        isOpen={isEditBasicInfoOpen}
        onClose={onCloseBasicInfo}
        onSave={onSaveBasicInfo}
        basicInfo={editBasicInfo}
        onBasicInfoChange={onBasicInfoChange}
      />

      {/* Edit Business Info Dialog */}
      <BusinessInfoDialog
        isOpen={isEditBusinessInfoOpen}
        onClose={onCloseBusinessInfo}
        onSave={onSaveBusinessInfo}
        businessInfo={editBusinessInfo}
        onBusinessInfoChange={onBusinessInfoChange}
      />
    </div>
  );
} 
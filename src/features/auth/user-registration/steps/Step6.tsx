import React from "react";
import StepLayout from "@/features/auth/user-registration/components/StepLayout";
import { Edit } from "lucide-react";
import IconButton from "@/components/ui/IconButton";

interface Step6Props {
  onPrev: () => void;
  onNext: () => void;
  // Add navigation to specific steps
  goToStep?: (step: number) => void;
  isCompany?: boolean;
}

const Step6: React.FC<Step6Props> = ({
  onPrev,
  onNext,
  goToStep,
  isCompany,
}) => {
  // Placeholder data, replace with real data from context/store
  const step5Data = {
    name: "امید",
    lastName: "معتمدی",
    nationalId: "006145851268",
    phone: "09123456789",
    telegram: "09123456789",
    whatsapp: "09123456789",
    email: "09123456789",
    landline: "09123456789",
  };
  const step4Data = {
    website: "www.samplewebsite.com",
    webservice: "wsaexample",
    apiKey: "656161612315619",
    callback: "https://sampleurl.ir",
    email: "omid.rezaei@gmail.com",
    ips: ["192.255.255.132", "192.168.255.132", "192.168.255.132"],
  };
  const step3Data = {
    name: "امید",
    lastName: "امید",
    nationalId: "Omigital",
    phone: "00154865219",
    email: "رضایی",
    province: "تهران",
    city: "تهران",
    postalCode: "1516478521",
    brand: "1516478521",
    category: "1516478521",
    accountNumber: "09123456789",
    shaba: "omid.rezaei@gmail.com",
    address: "تهران، خیابان گاندی جنوبی، کوچه پالیزوانی، پلاک 27، واحد 15",
    logo: "omigital logo.jpg",
  };

  return (
    <StepLayout
      currentStep={isCompany ? 5 : 4}
      onNext={onNext}
      onPrev={onPrev}
      isCompany={isCompany}
    >
      {/* First row: Step 5 info, full width */}
      <div className="w-full mb-6">
        <div className="relative bg-white rounded-2xl border border-neutral-200 shadow p-6">
          <IconButton
            className="absolute top-4 left-4 text-secondary-500 hover:bg-secondary-50 bg-secondary-50 rounded-full p-1"
            onClick={() => goToStep && goToStep(5)}
            aria-label="ویرایش مشخصات نماینده"
          >
            <Edit size={22} strokeWidth={2} color="#F4901E" />
          </IconButton>
          <div className="font-bold text-text-500 text-sm mb-4 text-right">
            مشخصات نماینده
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-right">
            <div>
              <div className="text-text-500 text-sm">نام نماینده:</div>
              <div className="text-sm text-text-400">{step5Data.name}</div>
            </div>
            <div>
              <div className="text-text-500 text-sm">نام خانوادگی نماینده:</div>
              <div className="text-sm text-text-400">{step5Data.lastName}</div>
            </div>
            <div>
              <div className="text-text-500 text-sm">کدملی نماینده:</div>
              <div className="text-sm text-text-400">
                {step5Data.nationalId}
              </div>
            </div>
            <div>
              <div className="text-text-500 text-sm">تلفن همراه نماینده:</div>
              <div className="text-sm text-text-400">{step5Data.phone}</div>
            </div>
            <div>
              <div className="text-text-500 text-sm">آی‌دی تلگرام:</div>
              <div className="text-sm text-text-400">{step5Data.telegram}</div>
            </div>
            <div>
              <div className="text-text-500 text-sm">شماره واتساپ:</div>
              <div className="text-sm text-text-400">{step5Data.whatsapp}</div>
            </div>
            <div>
              <div className="text-text-500 text-sm">ایمیل:</div>
              <div className="text-sm text-text-400">{step5Data.email}</div>
            </div>
            <div>
              <div className="text-text-500 text-sm">تلفن ثابت:</div>
              <div className="text-sm text-text-400">{step5Data.landline}</div>
            </div>
          </div>
        </div>
      </div>
      {/* Second row: 2 columns, Step 4 and Step 3 info */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Step 4 info */}
        <div className="relative bg-white rounded-2xl border border-neutral-200 shadow p-6 flex-1">
          <IconButton
            className="absolute top-4 left-4 text-secondary-500 hover:bg-secondary-50 bg-secondary-50 rounded-full p-1"
            onClick={() => goToStep && goToStep(4)}
            aria-label="ویرایش مشخصات فنی"
          >
            <Edit size={22} strokeWidth={2} color="#F4901E" />
          </IconButton>
          <div className="font-bold text-text-500 text-sm mb-4 text-right">
            مشخصات فنی
          </div>
          <div className="space-y-2 text-right">
            <div className="flex justify-between">
              <span className="text-text-500 text-sm">وبسایت:</span>
              <span className="text-sm text-text-400">{step4Data.website}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-500 text-sm">
                آدرس وب‌سرویس کالا یا خدمات:
              </span>
              <span className="text-sm text-text-400">
                {step4Data.webservice}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-500 text-sm">
                کلید سرویس (API Key):
              </span>
              <span className="text-sm text-text-400">{step4Data.apiKey}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-500 text-sm">آدرس Callback:</span>
              <span className="text-sm text-text-400">
                {step4Data.callback}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-500 text-sm">ایمیل:</span>
              <span className="text-sm text-text-400">{step4Data.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-500 text-sm">IP فروشگاه:</span>
              <span className="text-sm text-text-400">
                {step4Data.ips.join(", ")}
              </span>
            </div>
          </div>
        </div>
        {/* Step 3 info */}
        <div className="relative bg-white rounded-2xl border border-neutral-200 shadow p-6 flex-1">
          <IconButton
            className="absolute top-4 left-4 text-secondary-500 hover:bg-secondary-50 bg-secondary-50 rounded-full p-1"
            onClick={() => goToStep && goToStep(3)}
            aria-label="ویرایش مشخصات هویتی"
          >
            <Edit size={22} strokeWidth={2} color="#F4901E" />
          </IconButton>
          <div className="font-bold text-text-500 text-sm mb-4 text-right">
            مشخصات هویتی
          </div>
          <div className="space-y-2 text-right">
            <div className="flex justify-between">
              <span className="text-text-500 text-sm">نام:</span>
              <span className="text-sm text-text-400">{step3Data.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-500 text-sm">نام خانوادگی:</span>
              <span className="text-sm text-text-400">
                {step3Data.lastName}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-500 text-sm">کد ملی:</span>
              <span className="text-sm text-text-400">
                {step3Data.nationalId}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-500 text-sm">تلفن همراه:</span>
              <span className="text-sm text-text-400">{step3Data.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-500 text-sm">ایمیل:</span>
              <span className="text-sm text-text-400">{step3Data.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-500 text-sm">استان:</span>
              <span className="text-sm text-text-400">
                {step3Data.province}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-500 text-sm">شهر:</span>
              <span className="text-sm text-text-400">{step3Data.city}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-500 text-sm">کدپستی:</span>
              <span className="text-sm text-text-400">
                {step3Data.postalCode}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-500 text-sm">برند:</span>
              <span className="text-sm text-text-400">{step3Data.brand}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-500 text-sm">دسته‌بندی:</span>
              <span className="text-sm text-text-400">
                {step3Data.category}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-500 text-sm">شماره حساب:</span>
              <span className="text-sm text-text-400">
                {step3Data.accountNumber}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-500 text-sm">شماره شبا:</span>
              <span className="text-sm text-text-400">{step3Data.shaba}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-500 text-sm">آدرس:</span>
              <span className="text-sm text-text-400">{step3Data.address}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-500 text-sm">تصویر لوگو:</span>
              <span className="text-sm text-text-400">{step3Data.logo}</span>
            </div>
          </div>
        </div>
      </div>
    </StepLayout>
  );
};

export default Step6;

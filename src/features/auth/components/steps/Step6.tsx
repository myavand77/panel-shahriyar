import React from "react";
import StepLayout from "@/features/auth/components/StepLayout";
import { Edit } from "lucide-react";
import IconButton from "@/components/ui/IconButton";
import { useStepsForm } from "./StepsFormContext";
import { Controller } from "react-hook-form";
import { useOtpRequest } from "@/features/auth/login/hooks/useOtpRequest";
import { handleApiError } from "@/lib/error";

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
  const { watch, control } = useStepsForm();
  const { requestOtpMutate, isPending } = useOtpRequest();
  // Step 5 (نماینده)
  const repName = watch("repName") || "";
  const repLastName = watch("repLastName") || "";
  const repNationalId = watch("repNationalId") || "";
  const repPhone = watch("repPhone") || "";
  const repLandline = watch("repLandline") || "";
  const repEmail = watch("repEmail") || "";
  const repWhatsapp = watch("repWhatsapp") || "";
  const repTelegram = watch("repTelegram") || "";
  // Step 4 (فنی)
  const website = watch("website") || "";
  const webservice = watch("webservice") || "";
  const apiKey = watch("apiKey") || "";
  const callback = watch("callback") || "";
  const email = watch("email") || "";
  const ips = watch("ips") || [];
  // Step 3 (هویتی)
  const name = watch("name") || "";
  const lastName = watch("lastName") || "";
  const nationalId = watch("nationalId") || "";
  const phone = watch("phone") || "";
  const email3 = watch("email") || "";
  const province = watch("province") || "";
  const city = watch("city") || "";
  const postalCode = watch("postalCode") || "";
  const brand = watch("brand") || "";
  const category = watch("category") || "";
  const accountNumber = watch("accountNumber") || "";
  const shaba = watch("shaba") || "";
  const address = watch("address") || "";
  const logo = watch("logo") || "";

  // Handler for OTP request
  const handleRequestOtp = () => {
    if (!repPhone) return;
    requestOtpMutate(
      { phone_number: repPhone },
      {
        onSuccess: () => {
          onNext();
        },
        onError: (error) => {
          handleApiError(
            error,
            "خطا در ارسال درخواست کد تایید. لطفا دوباره تلاش کنید."
          );
        },
      }
    );
  };

  return (
    <StepLayout
      currentStep={isCompany ? 5 : 4}
      onNext={handleRequestOtp}
      onPrev={onPrev}
      isCompany={isCompany}
      loading={!repPhone || isPending}
    >
      {/* First row: Step 5 info, full width */}
      <div className="w-full mb-6">
        <div className="relative bg-white rounded-2xl border border-neutral-200 shadow p-6">
          <IconButton
            className="absolute top-4 left-4 text-secondary-500 hover:bg-secondary-50 bg-secondary-50 rounded-full p-1"
            onClick={() => goToStep && goToStep(isCompany ? 4 : 3)}
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
              <div className="text-sm text-text-400">{repName}</div>
            </div>
            <div>
              <div className="text-text-500 text-sm">نام خانوادگی نماینده:</div>
              <div className="text-sm text-text-400">{repLastName}</div>
            </div>
            <div>
              <div className="text-text-500 text-sm">کدملی نماینده:</div>
              <div className="text-sm text-text-400">{repNationalId}</div>
            </div>
            <div>
              <div className="text-text-500 text-sm">تلفن همراه نماینده:</div>
              <div className="text-sm text-text-400">{repPhone}</div>
            </div>
            <div>
              <div className="text-text-500 text-sm">آی‌دی تلگرام:</div>
              <div className="text-sm text-text-400">{repTelegram}</div>
            </div>
            <div>
              <div className="text-text-500 text-sm">شماره واتساپ:</div>
              <div className="text-sm text-text-400">{repWhatsapp}</div>
            </div>
            <div>
              <div className="text-text-500 text-sm">ایمیل:</div>
              <div className="text-sm text-text-400">{repEmail}</div>
            </div>
            <div>
              <div className="text-text-500 text-sm">تلفن ثابت:</div>
              <div className="text-sm text-text-400">{repLandline}</div>
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
            onClick={() => goToStep && goToStep(isCompany ? 3 : 2)}
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
              <span className="text-sm text-text-400">{website}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-500 text-sm">
                آدرس وب‌سرویس کالا یا خدمات:
              </span>
              <span className="text-sm text-text-400">{webservice}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-500 text-sm">
                کلید سرویس (API Key):
              </span>
              <span className="text-sm text-text-400">{apiKey}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-500 text-sm">آدرس Callback:</span>
              <span className="text-sm text-text-400">{callback}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-500 text-sm">ایمیل:</span>
              <span className="text-sm text-text-400">{email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-500 text-sm">IP فروشگاه:</span>
              <span className="text-sm text-text-400">{ips.join(", ")}</span>
            </div>
          </div>
        </div>
        {/* Step 3 info */}
        <div className="relative bg-white rounded-2xl border border-neutral-200 shadow p-6 flex-1">
          <IconButton
            className="absolute top-4 left-4 text-secondary-500 hover:bg-secondary-50 bg-secondary-50 rounded-full p-1"
            onClick={() => goToStep && goToStep(1)}
            aria-label="ویرایش مشخصات هویتی"
          >
            <Edit size={22} strokeWidth={2} color="#F4901E" />
          </IconButton>
          <div className="font-bold text-text-500 text-sm mb-4 text-right">
            مشخصات هویتی
          </div>
          <div className="space-y-2 text-right">
            {isCompany ? (
              <>
                <div className="flex justify-between">
                  <span className="text-text-500 text-sm">نام شرکت:</span>
                  <span className="text-sm text-text-400">
                    {watch("companyName") || ""}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-500 text-sm">نام برند:</span>
                  <span className="text-sm text-text-400">
                    {watch("brandName") || ""}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-500 text-sm">دسته بندی:</span>
                  <span className="text-sm text-text-400">
                    {watch("category") || ""}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-500 text-sm">شناسه ملی:</span>
                  <span className="text-sm text-text-400">
                    {watch("nationalId") || ""}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-500 text-sm">شماره اقتصادی:</span>
                  <span className="text-sm text-text-400">
                    {watch("economicCode") || ""}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-500 text-sm">شماره حساب:</span>
                  <span className="text-sm text-text-400">
                    {watch("accountNumber") || ""}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-500 text-sm">شماره شبا:</span>
                  <span className="text-sm text-text-400">
                    {watch("shaba") || ""}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-500 text-sm">کدپستی:</span>
                  <span className="text-sm text-text-400">
                    {watch("postalCode") || ""}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-500 text-sm">استان:</span>
                  <span className="text-sm text-text-400">
                    {watch("province") || ""}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-500 text-sm">شهر:</span>
                  <span className="text-sm text-text-400">
                    {watch("city") || ""}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-500 text-sm">آدرس:</span>
                  <span className="text-sm text-text-400">
                    {watch("address") || ""}
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-between">
                  <span className="text-text-500 text-sm">نام:</span>
                  <span className="text-sm text-text-400">{name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-500 text-sm">نام خانوادگی:</span>
                  <span className="text-sm text-text-400">{lastName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-500 text-sm">کد ملی:</span>
                  <span className="text-sm text-text-400">{nationalId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-500 text-sm">تلفن همراه:</span>
                  <span className="text-sm text-text-400">{phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-500 text-sm">ایمیل:</span>
                  <span className="text-sm text-text-400">{email3}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-500 text-sm">استان:</span>
                  <span className="text-sm text-text-400">{province}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-500 text-sm">شهر:</span>
                  <span className="text-sm text-text-400">{city}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-500 text-sm">کدپستی:</span>
                  <span className="text-sm text-text-400">{postalCode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-500 text-sm">برند:</span>
                  <span className="text-sm text-text-400">{brand}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-500 text-sm">دسته‌بندی:</span>
                  <span className="text-sm text-text-400">{category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-500 text-sm">شماره حساب:</span>
                  <span className="text-sm text-text-400">{accountNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-500 text-sm">شماره شبا:</span>
                  <span className="text-sm text-text-400">{shaba}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-500 text-sm">آدرس:</span>
                  <span className="text-sm text-text-400">{address}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-500 text-sm">تصویر لوگو:</span>
                  <span className="text-sm text-text-400">
                    {logo && (typeof logo === "string" ? logo : logo?.name)}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </StepLayout>
  );
};

export default Step6;

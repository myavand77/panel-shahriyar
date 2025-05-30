import React from "react";
import StepLayout from "@/features/auth/components/StepLayout";
import { useStepsForm } from "./StepsFormContext";
import { useOtpRequest } from "@/features/auth/login/hooks/useOtpRequest";
import { handleApiError } from "@/lib/error";
import InfoBox from "@/components/ui/InfoBox";

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
  const { watch } = useStepsForm();
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

  // Prepare data for InfoBox components
  const agentInfo = {
    "نام نماینده": repName,
    "نام خانوادگی نماینده": repLastName,
    "کدملی نماینده": repNationalId,
    "تلفن همراه نماینده": repPhone,
    "آی‌دی تلگرام": repTelegram,
    "شماره واتساپ": repWhatsapp,
    "ایمیل": repEmail,
    "تلفن ثابت": repLandline,
  };

  const technicalInfo = {
    "وبسایت": website,
    "آدرس وب‌سرویس کالا یا خدمات": webservice,
    "کلید سرویس (API Key)": apiKey,
    "آدرس Callback": callback,
    "ایمیل": email,
    "IP فروشگاه": ips.join(", "),
  };

  const identityInfo = isCompany
    ? {
        "نام شرکت": watch("companyName") || "",
        "نام برند": watch("brandName") || "",
        "دسته بندی": watch("category") || "",
        "شناسه ملی": watch("nationalId") || "",
        "شماره اقتصادی": watch("economicCode") || "",
        "شماره حساب": watch("accountNumber") || "",
        "شماره شبا": watch("shaba") || "",
        "کدپستی": watch("postalCode") || "",
        "استان": watch("province") || "",
        "شهر": watch("city") || "",
        "آدرس": watch("address") || "",
      }
    : {
        "نام": name,
        "نام خانوادگی": lastName,
        "کد ملی": nationalId,
        "تلفن همراه": phone,
        "ایمیل": email3,
        "استان": province,
        "شهر": city,
        "کدپستی": postalCode,
        "برند": brand,
        "دسته‌بندی": category,
        "شماره حساب": accountNumber,
        "شماره شبا": shaba,
        "آدرس": address,
        "تصویر لوگو": logo && (typeof logo === "string" ? logo : logo?.name),
      };

  return (
    <StepLayout
      currentStep={isCompany ? 5 : 4}
      onNext={handleRequestOtp}
      onPrev={onPrev}
      isCompany={isCompany}
      loading={!repPhone || isPending}
    >
      <div className="w-full space-y-6">
        <InfoBox
          title="مشخصات نماینده"
          info={agentInfo}
          onEdit={() => goToStep && goToStep(isCompany ? 4 : 3)}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoBox
            title="مشخصات فنی"
            info={technicalInfo}
            onEdit={() => goToStep && goToStep(isCompany ? 3 : 2)}
          />
          <InfoBox
            title="مشخصات هویتی"
            info={identityInfo}
            onEdit={() => goToStep && goToStep(1)}
          />
        </div>
      </div>
    </StepLayout>
  );
};

export default Step6;

import InfoBox from "@/components/ui/InfoBox";
import { useState } from "react";
import TechnicalInfoEditModal from "./technicalInfoEditModal";
import { useVendorData } from "./VendorDataContext";
import { TechnicalInfoFormValues } from "../types";

export default function TechnicalInfoTab() {
  const [modalOpen, setModalOpen] = useState(false);
  const { vendor, isLoading, updateVendor } = useVendorData();

  if (isLoading) return <div>Loading...</div>;
  if (!vendor) return <div>No data</div>;

  const technicalInfo = vendor.technical_info || {};

  // Prepare info for InfoBox display
  const infoForBox = {
    "وبسایت:": technicalInfo.url || "",
    "آدرس وب‌سرویس، کانال یا خدمات:": technicalInfo.web_service_url || "",
    "کلید سرویس (API Key):": technicalInfo.api_key || "",
    "آدرس Callback:": technicalInfo.callback_url || "",
    "ایمیل:": technicalInfo.email || "",
    "IP فروشگاه:": (
      <div>
        {(technicalInfo.allowed_ips || []).map((ip: string) => (
          <div key={ip}>{ip}</div>
        ))}
      </div>
    ),
  };

  // Prepare default values for modal
  const defaultValues = {
    website: technicalInfo.url || "",
    webservice: technicalInfo.web_service_url || "",
    apiKey: technicalInfo.api_key || "",
    callback: technicalInfo.callback_url || "",
    email: technicalInfo.email || "",
    ips: technicalInfo.allowed_ips || [],
  };

  const handleSave = async (values: TechnicalInfoFormValues) => {
    await updateVendor({
      technical_info: {
        url: values.website || "",
        web_service_url: values.webservice || "",
        api_key: values.apiKey || "",
        callback_url: values.callback || "",
        email: values.email || "",
        allowed_ips: values.ips || [],
      },
    });
    setModalOpen(false);
  };

  return (
    <>
      <InfoBox
        title="اطلاعات فنی"
        info={infoForBox}
        onEdit={() => setModalOpen(true)}
      />
      <TechnicalInfoEditModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultValues={defaultValues}
        onSave={handleSave}
      />
    </>
  );
}

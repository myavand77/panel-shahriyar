import InfoBox from "@/components/ui/InfoBox";
import { useState } from "react";
import TechnicalInfoEditModal from "./technicalInfoEditModal";
import { useVendorData } from "./VendorDataContext";
import { TechnicalInfoFormValues } from "../types";
import Skeleton from "react-loading-skeleton";

export default function TechnicalInfoTab() {
  const [modalOpen, setModalOpen] = useState(false);
  const { vendor, isLoading, updateVendor } = useVendorData();

  if (isLoading) return <Skeleton height={32} />;
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
    // Helper to check if a field changed
    const isChanged = (key: keyof TechnicalInfoFormValues) => {
      if (key === "ips") {
        const a = values.ips || [];
        const b = defaultValues.ips || [];
        return a.length !== b.length || a.some((ip, i) => ip !== b[i]);
      }
      return values[key] !== defaultValues[key];
    };

    const changedFields: NonNullable<import("../types").TUpdateVendorRequest["technical_info"]> = {};
    if (isChanged("website")) changedFields.url = values.website || "";
    if (isChanged("webservice")) changedFields.web_service_url = values.webservice || "";
    if (isChanged("apiKey")) changedFields.api_key = values.apiKey || "";
    if (isChanged("callback")) changedFields.callback_url = values.callback || "";
    if (isChanged("email")) changedFields.email = values.email || "";
    if (isChanged("ips")) changedFields.allowed_ips = values.ips || [];

    if (Object.keys(changedFields).length > 0) {
      await updateVendor({
        technical_info: changedFields,
      });
    }
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

import InfoBox from "@/components/ui/InfoBox";
import { useState } from "react";
import AgentInfoEditModal from "./agentInfoEditModal";
import { useVendorData } from "./VendorDataContext";
import Skeleton from "react-loading-skeleton";

const AgentInfoTab = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { vendor, isLoading } = useVendorData();

  if (isLoading) return <Skeleton height={32} />;
  if (!vendor) return <div>No data</div>;

  // Map vendor.agent fields to the InfoBox format
  const agentInfo = {
    "نام نماینده": vendor.agent?.first_name || "",
    "نام خانوادگی نماینده": vendor.agent?.last_name || "",
    "کدملی نماینده": vendor.agent?.national_id || "",
    "تلفن همراه نماینده": vendor.agent?.mobile || "",
    "آی‌دی تلگرام": vendor.agent?.telegram_id || "",
    "شماره واتساپ": vendor.agent?.whatsapp_id || "",
    ایمیل: vendor.agent?.email || "",
    "تلفن ثابت": vendor.agent?.phone || "",
  };

  return (
    <>
      <InfoBox
        title="مشخصات نماینده"
        info={agentInfo}
        onEdit={() => setModalOpen(true)}
      />
      <AgentInfoEditModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultValues={agentInfo}
      />
    </>
  );
};

export default AgentInfoTab;

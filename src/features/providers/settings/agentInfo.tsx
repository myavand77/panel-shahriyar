import InfoBox from "@/components/ui/InfoBox";
import { useState } from "react";

const agentInfo = {
  "نام نماینده": "امید",
  "نام خانوادگی نماینده": "معتمدی",
  "کدملی نماینده": "۰۰۶۱۴۵۸۵۱۲۶۸",
  "تلفن همراه نماینده": "۰۹۱۲۳۴۵۶۷۲۸۹",
  "آی‌دی تلگرام": "۰۹۱۲۳۴۵۶۷۲۸۹",
  "شماره واتساپ": "۰۹۱۲۳۴۵۶۷۲۸۹",
  "ایمیل": "۰۹۱۲۳۴۵۶۷۲۸۹",
  "تلفن ثابت": "۰۹۱۲۳۴۵۶۷۲۸۹",
};

type AgentInfoTabProps = {};

const AgentInfoTab = ({}: AgentInfoTabProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <InfoBox
      title="مشخصات نماینده"
      info={agentInfo}
      onEdit={() => setModalOpen(true)}
    />
  );
};

export default AgentInfoTab; 
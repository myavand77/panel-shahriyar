import InfoBox from "@/components/ui/InfoBox";
import { useState } from "react";
import AgentInfoEditModal from "./agentInfoEditModal";

const initialAgentInfo = {
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
  const [agentInfo, setAgentInfo] = useState(initialAgentInfo);

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
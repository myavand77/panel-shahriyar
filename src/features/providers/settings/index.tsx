"use client";

import { useState } from "react";
import TabFilter from "@/components/ui/TabFilter";
import AuthInfoTab from "./authInfo";
import DocumentsInfoTab from "./documentsInfo";
import TechnicalInfoTab from "./technicalInfo";
import AgentInfoTab from "./agentInfo";
import ContractInfoTab from "./contractInfo";

const tabs = [
  { id: "identity", label: "مشخصات هویتی" },
  { id: "documents", label: "مدارک" },
  { id: "technical", label: "مشخصات فنی" },
  { id: "agent", label: "مشخصات نماینده" },
  { id: "contract", label: "وضعیت قرارداد" },
];

export function SettingsView() {
  const [activeTab, setActiveTab] = useState("identity");

  return (
    <div className="p-8">
      <div className="mb-8">
        <TabFilter
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>
      <div className="">
        {activeTab === "identity" && <AuthInfoTab />}
        {activeTab === "documents" && <DocumentsInfoTab />}
        {activeTab === "technical" && <TechnicalInfoTab />}
        {activeTab === "agent" && <AgentInfoTab />}
        {activeTab === "contract" && <ContractInfoTab />}
        {/* Other tabs content can be added here */}
      </div>
      {/* Modal logic can be added here, e.g. <Modal open={modalOpen} ... /> */}
    </div>
  );
}

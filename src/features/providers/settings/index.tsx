"use client";

import { useState } from "react";
import TabFilter from "@/components/ui/TabFilter";
import AuthInfoTab from "./components/authInfo";
import DocumentsInfoTab from "./components/documentsInfo";
import TechnicalInfoTab from "./components/technicalInfo";
import AgentInfoTab from "./components/agentInfo";
import ContractInfoTab from "./components/contractInfo";
import { VendorDataProvider } from "./components/VendorDataContext";

const tabs = [
  { id: "identity", label: "مشخصات هویتی" },
  { id: "documents", label: "مدارک" },
  { id: "technical", label: "مشخصات فنی" },
  { id: "agent", label: "مشخصات نماینده" },
  { id: "contract", label: "وضعیت قرارداد" },
];

export function SettingsView() {
  return (
    <VendorDataProvider>
      <SettingsViewContent />
    </VendorDataProvider>
  );
}

function SettingsViewContent() {
  const [activeTab, setActiveTab] = useState("identity");

  return (
    <div className="py-5">
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

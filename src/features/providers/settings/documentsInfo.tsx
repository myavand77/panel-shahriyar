import InfoBox from "@/components/ui/InfoBox";
import { useState } from "react";

// Example documents info (replace with real data as needed)
const documentsInfo = {
  "تصویر لوگو": (
    <a
      href="/uploads/omigital_logo.jpg"
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary-500 underline"
    >
      omigital logo.jpg
    </a>
  ),
  // Add more files as needed
};

type DocumentsInfoTabProps = {};

const DocumentsInfoTab = ({}: DocumentsInfoTabProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <InfoBox
      title="مدارک آپلود شده"
      info={documentsInfo}
      onEdit={() => setModalOpen(true)}
    />
  );
};

export default DocumentsInfoTab; 
import InfoBox from "@/components/ui/InfoBox";
import { useState } from "react";
import DocumentsInfoEditModal from "./documentsInfoEditModal";

const initialDocuments = {
  tasis: null as File | null,
  taghirat: null as File | null,
  sahamdar: null as File | null,
  emzadar: null as File | null,
  logo: null as File | null,
};

type DocumentsInfoTabProps = {};

const DocumentsInfoTab = ({}: DocumentsInfoTabProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [documents, setDocuments] = useState(initialDocuments);

  const documentsInfo = {
    "آگهی تاسیس": documents.tasis ? (
      <a
        href={URL.createObjectURL(documents.tasis)}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-500 underline"
      >
        {documents.tasis.name}
      </a>
    ) : (
      <span className="text-neutral-400">فایلی آپلود نشده است</span>
    ),
    "آگهی آخرین تغییرات": documents.taghirat ? (
      <a
        href={URL.createObjectURL(documents.taghirat)}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-500 underline"
      >
        {documents.taghirat.name}
      </a>
    ) : (
      <span className="text-neutral-400">فایلی آپلود نشده است</span>
    ),
    "آگهی سهامداران": documents.sahamdar ? (
      <a
        href={URL.createObjectURL(documents.sahamdar)}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-500 underline"
      >
        {documents.sahamdar.name}
      </a>
    ) : (
      <span className="text-neutral-400">فایلی آپلود نشده است</span>
    ),
    "آگهی امضاداران": documents.emzadar ? (
      <a
        href={URL.createObjectURL(documents.emzadar)}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-500 underline"
      >
        {documents.emzadar.name}
      </a>
    ) : (
      <span className="text-neutral-400">فایلی آپلود نشده است</span>
    ),
    "بارگذاری لوگو": documents.logo ? (
      <a
        href={URL.createObjectURL(documents.logo)}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-500 underline"
      >
        {documents.logo.name}
      </a>
    ) : (
      <span className="text-neutral-400">فایلی آپلود نشده است</span>
    ),
  };

  return (
    <>
      <InfoBox
        title="مدارک آپلود شده"
        info={documentsInfo}
        onEdit={() => setModalOpen(true)}
      />
      <DocumentsInfoEditModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultValues={documents}
        onSave={({ tasis, taghirat, sahamdar, emzadar, logo }) =>
          setDocuments({
            tasis: tasis ?? null,
            taghirat: taghirat ?? null,
            sahamdar: sahamdar ?? null,
            emzadar: emzadar ?? null,
            logo: logo ?? null,
          })
        }
      />
    </>
  );
};

export default DocumentsInfoTab; 
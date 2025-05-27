import InfoBox from "@/components/ui/InfoBox";
import { useState } from "react";
import DocumentsInfoEditModal from "./documentsInfoEditModal";
import { useVendorData } from "./VendorDataContext";
import { TVendorMeResponse } from "../types";
import Skeleton from "react-loading-skeleton";

const mapVendorDocsToState = (vendor: TVendorMeResponse | null) => {
  return {
    tasis: vendor?.documents?.[0] || null,
    taghirat: vendor?.documents?.[1] || null,
    sahamdar: vendor?.documents?.[2] || null,
    emzadar: vendor?.documents?.[3] || null,
    logo: vendor?.logo || null,
  };
};

interface DocumentsFormValues {
  tasis?: File | string | null;
  taghirat?: File | string | null;
  sahamdar?: File | string | null;
  emzadar?: File | string | null;
  logo?: File | string | null;
}

const isFile = (file: unknown): file is File => file instanceof File;

const DocumentsInfoTab = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { vendor, isLoading, updateVendor } = useVendorData();

  if (isLoading) return <Skeleton height={32} />;
  if (!vendor) return <div>No data</div>;

  const documents = mapVendorDocsToState(vendor);

  const documentsInfo = {
    "آگهی تاسیس": isFile(documents.tasis) ? (
      <a
        href={URL.createObjectURL(documents.tasis)}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-500 underline"
      >
        {documents.tasis.name}
      </a>
    ) : documents.tasis && typeof documents.tasis === "string" ? (
      <a
        href={documents.tasis}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-500 underline"
      >
        مشاهده فایل
      </a>
    ) : (
      <span className="text-neutral-400">فایلی آپلود نشده است</span>
    ),
    "آگهی آخرین تغییرات": isFile(documents.taghirat) ? (
      <a
        href={URL.createObjectURL(documents.taghirat)}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-500 underline"
      >
        {documents.taghirat.name}
      </a>
    ) : documents.taghirat && typeof documents.taghirat === "string" ? (
      <a
        href={documents.taghirat}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-500 underline"
      >
        مشاهده فایل
      </a>
    ) : (
      <span className="text-neutral-400">فایلی آپلود نشده است</span>
    ),
    "آگهی سهامداران": isFile(documents.sahamdar) ? (
      <a
        href={URL.createObjectURL(documents.sahamdar)}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-500 underline"
      >
        {documents.sahamdar.name}
      </a>
    ) : documents.sahamdar && typeof documents.sahamdar === "string" ? (
      <a
        href={documents.sahamdar}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-500 underline"
      >
        مشاهده فایل
      </a>
    ) : (
      <span className="text-neutral-400">فایلی آپلود نشده است</span>
    ),
    "آگهی امضاداران": isFile(documents.emzadar) ? (
      <a
        href={URL.createObjectURL(documents.emzadar)}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-500 underline"
      >
        {documents.emzadar.name}
      </a>
    ) : documents.emzadar && typeof documents.emzadar === "string" ? (
      <a
        href={documents.emzadar}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-500 underline"
      >
        مشاهده فایل
      </a>
    ) : (
      <span className="text-neutral-400">فایلی آپلود نشده است</span>
    ),
    "بارگذاری لوگو": isFile(documents.logo) ? (
      <a
        href={URL.createObjectURL(documents.logo)}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-500 underline"
      >
        {documents.logo.name}
      </a>
    ) : documents.logo && typeof documents.logo === "string" ? (
      <a
        href={documents.logo}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-500 underline"
      >
        مشاهده فایل
      </a>
    ) : (
      <span className="text-neutral-400">فایلی آپلود نشده است</span>
    ),
  };

  const handleSave = async (values: DocumentsFormValues) => {
    // Start from the current vendor documents array, fallback to empty strings
    const currentDocs = vendor?.documents || ["", "", "", ""];
    const documentsArr = [
      values.tasis !== undefined && values.tasis !== null
        ? (typeof values.tasis === "string" ? values.tasis : isFile(values.tasis) ? URL.createObjectURL(values.tasis) : "")
        : currentDocs[0] || "",
      values.taghirat !== undefined && values.taghirat !== null
        ? (typeof values.taghirat === "string" ? values.taghirat : isFile(values.taghirat) ? URL.createObjectURL(values.taghirat) : "")
        : currentDocs[1] || "",
      values.sahamdar !== undefined && values.sahamdar !== null
        ? (typeof values.sahamdar === "string" ? values.sahamdar : isFile(values.sahamdar) ? URL.createObjectURL(values.sahamdar) : "")
        : currentDocs[2] || "",
      values.emzadar !== undefined && values.emzadar !== null
        ? (typeof values.emzadar === "string" ? values.emzadar : isFile(values.emzadar) ? URL.createObjectURL(values.emzadar) : "")
        : currentDocs[3] || "",
    ];
    const logoUrl =
      typeof values.logo === "string"
        ? values.logo
        : isFile(values.logo)
        ? URL.createObjectURL(values.logo)
        : vendor?.logo || "";
    await updateVendor({
      documents: documentsArr,
      logo: logoUrl,
    });
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
        defaultValues={{
          tasis: documents.tasis,
          taghirat: documents.taghirat,
          sahamdar: documents.sahamdar,
          emzadar: documents.emzadar,
          logo: documents.logo,
        }}
        onSave={async (values) => {
          await handleSave(values);
          setModalOpen(false);
        }}
      />
    </>
  );
};

export default DocumentsInfoTab;

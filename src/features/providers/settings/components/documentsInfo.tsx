import InfoBox from "@/components/ui/InfoBox";
import { useState } from "react";
import DocumentsInfoEditModal from "./documentsInfoEditModal";
import { useVendorData } from "./VendorDataContext";
import { TVendorMeResponse } from "../types";

const mapVendorDocsToState = (vendor: TVendorMeResponse | null) => {
  // This function can be expanded if you have more detailed doc fields
  return {
    tasis: vendor?.documents?.find((doc: string) => doc.includes("tasis")) || null,
    taghirat: vendor?.documents?.find((doc: string) => doc.includes("taghirat")) || null,
    sahamdar: vendor?.documents?.find((doc: string) => doc.includes("sahamdar")) || null,
    emzadar: vendor?.documents?.find((doc: string) => doc.includes("emzadar")) || null,
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

  if (isLoading) return <div>Loading...</div>;
  if (!vendor) return <div>No data</div>;

  const documents = mapVendorDocsToState(vendor);

  const documentsInfo = {
    "آگهی تاسیس": isFile(documents.tasis) ? (
      <a href={URL.createObjectURL(documents.tasis)} target="_blank" rel="noopener noreferrer" className="text-primary-500 underline">{documents.tasis.name}</a>
    ) : documents.tasis && typeof documents.tasis === "string" ? (
      <a href={documents.tasis} target="_blank" rel="noopener noreferrer" className="text-primary-500 underline">مشاهده فایل</a>
    ) : (
      <span className="text-neutral-400">فایلی آپلود نشده است</span>
    ),
    "آگهی آخرین تغییرات": isFile(documents.taghirat) ? (
      <a href={URL.createObjectURL(documents.taghirat)} target="_blank" rel="noopener noreferrer" className="text-primary-500 underline">{documents.taghirat.name}</a>
    ) : documents.taghirat && typeof documents.taghirat === "string" ? (
      <a href={documents.taghirat} target="_blank" rel="noopener noreferrer" className="text-primary-500 underline">مشاهده فایل</a>
    ) : (
      <span className="text-neutral-400">فایلی آپلود نشده است</span>
    ),
    "آگهی سهامداران": isFile(documents.sahamdar) ? (
      <a href={URL.createObjectURL(documents.sahamdar)} target="_blank" rel="noopener noreferrer" className="text-primary-500 underline">{documents.sahamdar.name}</a>
    ) : documents.sahamdar && typeof documents.sahamdar === "string" ? (
      <a href={documents.sahamdar} target="_blank" rel="noopener noreferrer" className="text-primary-500 underline">مشاهده فایل</a>
    ) : (
      <span className="text-neutral-400">فایلی آپلود نشده است</span>
    ),
    "آگهی امضاداران": isFile(documents.emzadar) ? (
      <a href={URL.createObjectURL(documents.emzadar)} target="_blank" rel="noopener noreferrer" className="text-primary-500 underline">{documents.emzadar.name}</a>
    ) : documents.emzadar && typeof documents.emzadar === "string" ? (
      <a href={documents.emzadar} target="_blank" rel="noopener noreferrer" className="text-primary-500 underline">مشاهده فایل</a>
    ) : (
      <span className="text-neutral-400">فایلی آپلود نشده است</span>
    ),
    "بارگذاری لوگو": isFile(documents.logo) ? (
      <a href={URL.createObjectURL(documents.logo)} target="_blank" rel="noopener noreferrer" className="text-primary-500 underline">{documents.logo.name}</a>
    ) : documents.logo && typeof documents.logo === "string" ? (
      <a href={documents.logo} target="_blank" rel="noopener noreferrer" className="text-primary-500 underline">مشاهده فایل</a>
    ) : (
      <span className="text-neutral-400">فایلی آپلود نشده است</span>
    ),
  };

  const handleSave = async (values: DocumentsFormValues) => {
    const documentsArr = [values.tasis, values.taghirat, values.sahamdar, values.emzadar]
      .filter((fileOrUrl): fileOrUrl is File | string => !!fileOrUrl)
      .map((fileOrUrl) =>
        typeof fileOrUrl === "string"
          ? fileOrUrl
          : isFile(fileOrUrl)
          ? URL.createObjectURL(fileOrUrl)
          : ""
      )
      .filter(Boolean);
    const logoUrl = typeof values.logo === "string"
      ? values.logo
      : isFile(values.logo)
      ? URL.createObjectURL(values.logo)
      : "";
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
          tasis: typeof documents.tasis !== "string" ? documents.tasis : null,
          taghirat: typeof documents.taghirat !== "string" ? documents.taghirat : null,
          sahamdar: typeof documents.sahamdar !== "string" ? documents.sahamdar : null,
          emzadar: typeof documents.emzadar !== "string" ? documents.emzadar : null,
          logo: typeof documents.logo !== "string" ? documents.logo : null,
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
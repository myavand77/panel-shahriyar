import React, { useState } from "react";
import FileUpload from "@/components/ui/FileUpload";
import StepLayout from "@/features/auth/user-registration/components/StepLayout";

const CompanyStep4 = ({
  onNext,
  onPrev,
  isCompany,
}: {
  onNext: () => void;
  onPrev: () => void;
  isCompany?: boolean;
}) => {
  const [form, setForm] = useState({
    establishmentNotice: null as File | null,
    lastChangesNotice: null as File | null,
    shareholdersNotice: null as File | null,
    signatoriesNotice: null as File | null,
    logo: null as File | null,
  });

  const handleFileChange = (name: keyof typeof form, file: File | null) => {
    setForm((f) => ({ ...f, [name]: file }));
  };

  return (
    <StepLayout
      currentStep={2}
      onNext={onNext}
      onPrev={onPrev}
      isCompany={isCompany}
    >
      <form className="w-full flex flex-col gap-4 mt-2" dir="rtl">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FileUpload
            label="آگهی تاسیس"
            value={form.establishmentNotice}
            onChange={(file) => handleFileChange("establishmentNotice", file)}
          />
          <FileUpload
            label="آگهی آخرین تغییرات"
            value={form.lastChangesNotice}
            onChange={(file) => handleFileChange("lastChangesNotice", file)}
          />
        </div>
        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FileUpload
            label="آگهی سهامداران"
            value={form.shareholdersNotice}
            onChange={(file) => handleFileChange("shareholdersNotice", file)}
          />
          <FileUpload
            label="آگهی امضاداران"
            value={form.signatoriesNotice}
            onChange={(file) => handleFileChange("signatoriesNotice", file)}
          />
        </div>
        {/* Row 3 */}
        <div className="w-full">
          <FileUpload
            label="بارگذاری لوگو"
            value={form.logo}
            onChange={(file) => handleFileChange("logo", file)}
          />
        </div>
      </form>
    </StepLayout>
  );
};

export default CompanyStep4;

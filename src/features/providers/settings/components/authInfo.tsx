import InfoBox from "@/components/ui/InfoBox";
import { useState } from "react";
import AuthInfoEditModal from "./authInfoEditModal";
import { useVendorData } from "./VendorDataContext";

const AuthInfoTab = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { vendor, isLoading } = useVendorData();

  if (isLoading) return <div>Loading...</div>;
  if (!vendor) return <div>No data</div>;

  // Map vendor fields to the InfoBox format
  const authInfo = {
    نام: vendor.basic_info_individual?.first_name || "",
    "نام خانوادگی": vendor.basic_info_individual?.last_name || "",
    "کد ملی": vendor.basic_info_individual?.national_id || "",
    "تلفن همراه": vendor.basic_info_individual?.mobile || "",
    ایمیل: vendor.basic_info_individual?.email || "",
    استان: vendor.address?.state || "",
    شهر: vendor.address?.city || "",
    کدپستی: vendor.address?.postal_code || "",
    برند: vendor.brand || "",
    "دسته‌بندی": vendor.category || "",
    "شماره حساب": vendor.bank_account?.account_number || "",
    "شماره شبا": vendor.bank_account?.sheba_number || "",
    آدرس: vendor.address?.address || "",
  };

  return (
    <>
      <InfoBox
        title="مشخصات هویتی"
        info={authInfo}
        onEdit={() => setModalOpen(true)}
      />
      <AuthInfoEditModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultValues={authInfo}
      />
    </>
  );
};

export default AuthInfoTab;

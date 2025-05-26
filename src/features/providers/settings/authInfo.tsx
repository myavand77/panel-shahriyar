import InfoBox from "@/components/ui/InfoBox";
import { useState } from "react";
import AuthInfoEditModal from "./authInfoEditModal";


// Example authentication info (replace with real data as needed)
const authInfo = {
  نام: "علی",
  "نام خانوادگی": "رضایی",
  "کد ملی": "1234567890",
  "تلفن همراه": "09121234567",
  ایمیل: "ali.rezaei@email.com",
  استان: "تهران",
  شهر: "تهران",
  کدپستی: "1234567890",
  برند: "نمونه برند",
  دسته‌بندی: "فروشگاه",
  "شماره حساب": "1234567890123456",
  "شماره شبا": "IR123456789012345678901234",
  آدرس: "تهران، خیابان آزادی، پلاک ۱۲۳",
};

type AuthInfoTabProps = {};

const AuthInfoTab = ({}: AuthInfoTabProps) => {
  const [modalOpen, setModalOpen] = useState(false);

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

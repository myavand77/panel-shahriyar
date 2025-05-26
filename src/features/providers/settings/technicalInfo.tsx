import InfoBox from "@/components/ui/InfoBox";
import { useState } from "react";

const technicalInfo = {
  "وبسایت:": "www.samplewebsite.com",
  "آدرس وب‌سرویس، کانال یا خدمات:": "wsaexample",
  "کلید سرویس (API Key):": "۶۵۶۱۶۱۳۱۳۱۵۱۹",
  "آدرس Callback:": "https://sampleurl.ir",
  "ایمیل:": "omid.rezaei@gmail.com",
  "IP فروشگاه:": (
    <div>
      <div>۱۹۲.۱۶۸.۲۵۵.۱۳۲</div>
      <div>۱۹۲.۱۶۸.۲۵۵.۱۳۳</div>
      <div>۱۹۲.۱۶۸.۲۵۵.۱۳۴</div>
    </div>
  ),
};

export default function TechnicalInfoTab() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <InfoBox
      title="اطلاعات فنی"
      info={technicalInfo}
      onEdit={() => setModalOpen(true)}
    />
  );
} 
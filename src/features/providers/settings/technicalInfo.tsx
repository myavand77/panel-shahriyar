import InfoBox from "@/components/ui/InfoBox";
import { useState } from "react";
import TechnicalInfoEditModal from "./technicalInfoEditModal";

const initialTechnicalInfo = {
  website: "www.samplewebsite.com",
  webservice: "wsaexample",
  apiKey: "۶۵۶۱۶۱۳۱۳۱۵۱۹",
  callback: "https://sampleurl.ir",
  email: "omid.rezaei@gmail.com",
  ips: ["۱۹۲.۱۶۸.۲۵۵.۱۳۲", "۱۹۲.۱۶۸.۲۵۵.۱۳۳", "۱۹۲.۱۶۸.۲۵۵.۱۳۴"],
};

export default function TechnicalInfoTab() {
  const [modalOpen, setModalOpen] = useState(false);
  const [technicalInfo, setTechnicalInfo] = useState(initialTechnicalInfo);

  // Prepare info for InfoBox display
  const infoForBox = {
    "وبسایت:": technicalInfo.website,
    "آدرس وب‌سرویس، کانال یا خدمات:": technicalInfo.webservice,
    "کلید سرویس (API Key):": technicalInfo.apiKey,
    "آدرس Callback:": technicalInfo.callback,
    "ایمیل:": technicalInfo.email,
    "IP فروشگاه:": (
      <div>
        {technicalInfo.ips.map((ip) => (
          <div key={ip}>{ip}</div>
        ))}
      </div>
    ),
  };

  return (
    <>
      <InfoBox
        title="اطلاعات فنی"
        info={infoForBox}
        onEdit={() => setModalOpen(true)}
      />
      <TechnicalInfoEditModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultValues={technicalInfo}
        onSave={(values) =>
          setTechnicalInfo({
            website: values.website ?? "",
            webservice: values.webservice ?? "",
            apiKey: values.apiKey ?? "",
            callback: values.callback ?? "",
            email: values.email ?? "",
            ips: values.ips ?? [],
          })
        }
      />
    </>
  );
}

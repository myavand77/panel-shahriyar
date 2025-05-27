import InfoBanner from "@/components/ui/InfoBanner";
import InfoBox from "@/components/ui/InfoBox";
import moment from "moment-jalaali";
import { useVendorData } from "./VendorDataContext";

const contractCommissionInfo = {
  "کمیسیون درگاه بهنگام:": "%۲",
  "تعداد اقساط درگاه بهنگام:": "۶",
  "کمیسیون درگاه زودهنگام:": "%۳",
  "تعداد اقساط درگاه زودهنگام:": "۹",
  "درصد کارمزد کاربر:": "%۱.۵",
};

const contractSettlementInfo = {
  "دوره تسویه:": "۴۵ روزه",
};

const ContractInfoTab = () => {
  const { vendor } = useVendorData();

  // Helper to convert to Jalali and Persian digits
  const toJalaliPersian = (dateStr: string) => {
    if (!dateStr) return "-";
    return moment(dateStr)
      .format("jYYYY/jMM/jDD")
      .replace(/\d/g, (d: string) => "۰۱۲۳۴۵۶۷۸۹"[+d]);
  };

  // Calculate contract dates
  const startDate = vendor?.created_at || "";
  const endDate = startDate
    ? moment(startDate).add(1, "year").toISOString()
    : "";

  const contractDateInfo = {
    "تاریخ شروع قرارداد:": toJalaliPersian(startDate),
    "تاریخ پایان قرارداد:": toJalaliPersian(endDate),
  };

  return (
    <div className="flex flex-col gap-6">
      <InfoBanner
        variant="success"
        // buttonTitle="تایید"
        // onButtonClick={() => {}}
      >
        قرارداد شما فعال می‌باشد.
      </InfoBanner>
      <InfoBox title="" info={contractCommissionInfo} headerDisabled={true} />
      <InfoBox title="" info={contractDateInfo} headerDisabled={true} />
      <InfoBox title="" info={contractSettlementInfo} headerDisabled={true} />
    </div>
  );
};

export default ContractInfoTab;

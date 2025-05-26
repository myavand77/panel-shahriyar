import InfoBox from "@/components/ui/InfoBox";

const contractCommissionInfo = {
  "کمیسیون درگاه بهنگام:": "%۲",
  "تعداد اقساط درگاه بهنگام:": "۶",
  "کمیسیون درگاه زودهنگام:": "%۳",
  "تعداد اقساط درگاه زودهنگام:": "۹",
  "درصد کارمزد کاربر:": "%۱.۵",
};

const contractDateInfo = {
  "تاریخ شروع قرارداد:": "۱۴۰۴/۰۵/۰۵",
  "تاریخ پایان قرارداد:": "۱۴۰۴/۰۶/۰۵",
};

const contractSettlementInfo = {
  "دوره تسویه:": "۴۵ روزه",
};

const ContractInfoTab = () => {
  return (
    <div className="flex flex-col gap-6">
      <InfoBox title="" info={contractCommissionInfo} headerDisabled={true} />
      <InfoBox title="" info={contractDateInfo} headerDisabled={true} />
      <InfoBox title="" info={contractSettlementInfo} headerDisabled={true} />
    </div>
  );
};

export default ContractInfoTab; 
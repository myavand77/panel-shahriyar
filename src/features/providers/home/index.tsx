import { FC } from "react";
import { FinancialSection } from "./components/FinancialSection";
import { GatewayInfo } from "./components/GatewayInfo";
import BoStatusRow from "./components/BoStatusRow";
import Label from "@/components/ui/Label";

const HomeView: FC = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <BoStatusRow
        left={{
          type: "success",
          icon: "shop",
          badge: "متصل",
          title: "وضعیت اتصال درگاه:",
          value: "0",
          valueUnit: "ریال",
          description: "تعداد کالای قابل نمایش در موتور جستجو:",
        }}
        right={{
          type: "warning",
          icon: "money",
          badge: "در انتظار",
          title: "وضعیت اتصال فروشگاه:",
          value: "0",
          valueUnit: "کالا",
          description: "میزان فروش از ابتدای فعالیت:",
        }}
      />
      <Label className="text-lg font-bold">گزارشات</Label>
      <FinancialSection />
      <Label className="text-lg font-bold">اطلاعات درگاه اعتباری</Label>
      <GatewayInfo />
    </div>
  );
};

export default HomeView;

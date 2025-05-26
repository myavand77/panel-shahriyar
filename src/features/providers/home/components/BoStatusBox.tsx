import { FC } from "react";
import { MoneyV2Icon, ShopIcon } from "@/components/Icons";
import Badge from "@/components/ui/Badge";

interface BoStatusBoxProps {
  type: "success" | "warning";
  icon: "money" | "shop";
  badge: string;
  title: string;
  value: string;
  valueUnit: string;
  description: string;
}

const statusStyles = {
  success: {
    box: "bg-[#E9F7EF] border border-[#4CAF50]",
    badge: "bg-[#4CAF50] text-[#F7F9FA] border border-[#4CAF50]",
    iconBox: "bg-[#4CAF50]",
    iconColor: "#fff",
    badgeText: "متصل",
  },
  warning: {
    box: "bg-[#FFF9E6] border border-[#FF9800]",
    badge: "bg-[#FF9800] text-[#F7F9FA] border border-[#FF9800]",
    iconBox: "bg-[#FFE299]",
    iconColor: "#FF9800",
    badgeText: "در انتظار",
  },
};

const iconMap = {
  money: MoneyV2Icon,
  shop: ShopIcon,
};

export const BoStatusBox: FC<BoStatusBoxProps> = ({
  type,
  icon,
  badge,
  title,
  value,
  valueUnit,
  description,
}) => {
  const Icon = iconMap[icon];
  const styles = statusStyles[type];

  return (
    <div
      className={`rounded-2xl p-3 flex items-center gap-3 w-full ${styles.box}`}
    >
      <div
        className={`rounded-md flex items-center justify-center w-13 h-13 ${styles.iconBox}`}
      >
        <Icon width={22} height={22} color={styles.iconColor} />
      </div>
      <div className="flex flex-col gap-3 items-end">
        <div className="flex flex-row items-center w-full gap-2">
          <span className="text-xs font-normal text-[#212121]">{title}</span>
          <Badge type={type}>{badge}</Badge>
        </div>
        <div className="flex flex-row gap-2 items-center w-full justify-end">
          <span className="text-xs font-bold text-[#212121]">
            {description}
          </span>
          <span className="text-base font-bold text-[#212121]">{value}</span>
          <span className="text-base font-bold text-[#212121]">
            {valueUnit}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BoStatusBox;

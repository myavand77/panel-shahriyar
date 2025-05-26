import { FC } from "react";
import BoStatusBox from "./BoStatusBox";
import { BadgeType } from "@/types/components";

interface BoStatusRowBoxProps {
  type: "success" | "warning";
  icon: "money" | "shop";
  badge: string;
  title: string;
  value: string;
  valueUnit: string;
  description: string;
}

interface BoStatusRowProps {
  left: BoStatusRowBoxProps;
  right: BoStatusRowBoxProps;
}

const BoStatusRow: FC<BoStatusRowProps> = ({ left, right }) => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-3">
      <div className="w-full md:w-1/2 flex">
        <BoStatusBox {...left} />
      </div>
      <div className="w-full md:w-1/2 flex">
        <BoStatusBox {...right} />
      </div>
    </div>
  );
};

export default BoStatusRow;

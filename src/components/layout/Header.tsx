import { FC } from "react";
import { ArrowDownIcon, NotificationIcon, UserIcon } from "@/components/Icons";

interface HeaderProps {
  title?: string;
}

const Header: FC<HeaderProps> = ({ title = "پنل ادمین" }) => {
  return (
    <div className="flex justify-between items-center px-6 py-6 mb-8 bg-white">
      {/* Title */}
      <h1 className="text-[18px] font-bold text-text-500">{title}</h1>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Notification Bell */}
        <button className="flex items-center">
          <NotificationIcon width={24} height={24} />
        </button>
        {/* User Profile */}
        <div className="flex items-center gap-2">
          <UserIcon width={24} height={24} />
          <div className="flex items-center gap-1">
            <span className="text-xs text-text-500">مرتضی احمدی</span>
            <ArrowDownIcon width={18} height={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

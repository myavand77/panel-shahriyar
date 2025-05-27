import { FC, useRef, useState, useEffect } from "react";
import { ArrowDownIcon, NotificationIcon, UserIcon } from "@/components/Icons";
import { useAuth } from "@/lib/auth";
import ConfirmationModal from "@/components/ui/ConfirmationModal";

interface HeaderProps {
  title?: string;
}

const Header: FC<HeaderProps> = ({ title = "پنل ادمین" }) => {
  const { user, loading, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  // Try to get first_name + last_name, fallback to name, fallback to empty string
  let userName = "";
  if (user) {
    if (user.family_name || user.given_name) {
      userName = `${user.family_name || ""} ${user.given_name || ""}`.trim();
    } else if (user.name) {
      userName = user.name;
    }
  }

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

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
        <div className="relative flex items-center gap-2" ref={profileRef}>
          <button
            className="flex items-center gap-2 focus:outline-none"
            onClick={() => setDropdownOpen((v) => !v)}
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
          >
            <UserIcon width={24} height={24} />
            <div className="flex items-center gap-1">
              <span className="text-xs text-text-500">
                {loading ? "..." : userName || "-"}
              </span>
              <ArrowDownIcon width={18} height={18} />
            </div>
          </button>
          {/* Dropdown */}
          {dropdownOpen && (
            <div
              className="absolute left-0 top-12 min-w-[140px] bg-white rounded-xl shadow-lg border border-muted-100 z-50 animate-fade-in"
              style={{ boxShadow: "0 4px 16px 0 rgba(0,0,0,0.08)" }}
            >
              <div className="flex flex-col py-2 px-4">
                <button
                  className="text-right text-base text-text-500 py-2 cursor-not-allowed bg-transparent border-0 outline-none"
                  disabled
                >
                  حساب کاربری
                </button>
                <button
                  className="text-right text-base py-2 text-error-500 hover:bg-error-50 transition rounded-md bg-transparent border-0 outline-none"
                  onClick={() => {
                    setDropdownOpen(false);
                    setShowLogoutModal(true);
                  }}
                >
                  خروج
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Logout Confirmation Modal */}
      <ConfirmationModal
        open={showLogoutModal}
        onConfirm={() => {
          setShowLogoutModal(false);
          logout();
        }}
        onCancel={() => setShowLogoutModal(false)}
        title="خروج از حساب کاربری"
        subtitle="آیا مطمئن هستید که می‌خواهید خارج شوید؟"
        confirmText="خروج"
        cancelText="انصراف"
      />
    </div>
  );
};

export default Header;

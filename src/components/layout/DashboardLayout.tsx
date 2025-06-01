"use client";
import { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { type UserRole } from "@/lib/ability";
import { useAuth } from "@/lib/auth";
import { useRouter } from "next/navigation";
import React from "react";
import { TokenRefreshProvider } from "@/app/provider/token-refresh-provider";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { access_token, loading, user } = useAuth();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  React.useEffect(() => {
    if (!loading && !access_token) {
      router.replace("/auth/login");
    }
  }, [loading, access_token, router]);

  const getTitleByRole = (role: UserRole): string => {
    switch (role) {
      case "Admin":
        return "پنل ادمین";
      case "Provider":
        return "پنل فروشگاه";
      case "User":
        return "پنل کاربری";
      default:
        return "پنل ادمین";
    }
  };

  // Get user role from user object, default to Provider if not available
  const userRole = user?.role || "Provider";

  return (
    <div className="h-screen overflow-hidden bg-gray-100 flex flex-row">
      <TokenRefreshProvider />
      {/* Right Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} userRole={userRole} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          title={getTitleByRole(userRole)}
          onMenuClick={() => setIsSidebarOpen((prev) => !prev)}
        />
        <div className="px-6 flex-1 overflow-y-auto pt-[88px] mb-5">
          {/* Content Area */}
          {children}
        </div>
      </div>
    </div>
  );
}

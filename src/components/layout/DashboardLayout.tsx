"use client";
import { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { UserRole } from "@/types";
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

  const getTitleByRole = (role: UserRole): string => {
    switch (role) {
      case "commercial":
        return "پنل ادمین";
      case "provider":
        return "پنل فروشگاه";
      case "user":
        return "پنل کاربری";
      default:
        return "پنل ادمین";
    }
  };

  const userRole = user?.role as UserRole;

  React.useEffect(() => {
    if (!loading && !access_token) {
      router.replace("/auth/login");
    }
  }, [loading, access_token, router]);

  return (
    <div className="h-screen overflow-hidden bg-gray-100 flex flex-row">
      <TokenRefreshProvider />
      {/* Right Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        userRole={userRole}
      />

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

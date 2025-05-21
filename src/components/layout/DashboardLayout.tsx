"use client";
import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { type UserRole } from "@/lib/ability";
import { useAuth } from "@/lib/auth";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user } = useAuth();
  const userRole = user?.role || "User";

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

  return (
    <div className="h-screen overflow-hidden bg-gray-100 flex flex-row">
      {/* Right Sidebar */}
      <div className="w-64 bg-white shadow-lg overflow-y-auto">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={getTitleByRole(userRole)} />
        <div className="px-6">
          {/* Content Area */}
          {children}
        </div>
      </div>
    </div>
  );
}

"use client";
import "../styles/globals.css";
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { usePathname } from "next/navigation";
import { AuthProvider } from "@/lib/auth";
// Toast support is available globally via showToast from src/lib/toast

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAuthRoute = pathname.startsWith("/auth");

  if (isAuthRoute) {
    return (
      <html lang="fa">
        <body>{children}</body>
      </html>
    );
  }

  return (
    <html lang="fa">
      <body>
        <AuthProvider>
          <DashboardLayout>{children}</DashboardLayout>
        </AuthProvider>
      </body>
    </html>
  );
}

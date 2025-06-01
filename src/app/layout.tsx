"use client";
import "../styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { usePathname } from "next/navigation";
import { AuthProvider } from "@/lib/auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainView from "@/features/main";
// Toast support is available globally via showToast from src/lib/toast

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAuthRoute = pathname.startsWith("/auth");
  const isHomePage = pathname === "/";

  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <html lang="fa">
      <body>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            {isAuthRoute ? (
              children
            ) : isHomePage ? (
              <MainView />
            ) : (
              <DashboardLayout>{children}</DashboardLayout>
            )}
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}

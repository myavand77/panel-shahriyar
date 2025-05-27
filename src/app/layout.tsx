"use client";
import "../styles/globals.css";
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { usePathname } from "next/navigation";
import { AuthProvider } from "@/lib/auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Toast support is available globally via showToast from src/lib/toast

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAuthRoute = pathname.startsWith("/auth");

  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <html lang="fa">
      <body>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            {isAuthRoute ? (
              children
            ) : (
              <DashboardLayout>{children}</DashboardLayout>
            )}
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}

import React from "react";
import "@/styles/globals.css";
// Toast support is available globally via showToast from src/lib/toast

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background-500 flex items-center justify-center">
      {children}
    </div>
  );
}

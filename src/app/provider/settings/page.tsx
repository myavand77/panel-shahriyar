"use client";
import { SettingsView } from "@/features/providers/settings";
import PageLayout from "@/components/layout/pageLayout";

export default function SettingsPage() {
  return (
    <PageLayout title="تنظیمات">
      <SettingsView />
    </PageLayout>
  );
}

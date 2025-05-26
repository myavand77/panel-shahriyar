export type BadgeType =
  | "warning"
  | "info"
  | "completed"
  | "outline"
  | "returned"
  | "success"
  | "error";

export interface TabProps {
  tabs: { id: string; label: string; count?: number }[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

import { FileText } from "lucide-react";
import { type UserRole } from "@/lib/ability";
import {
  RequestsIcon,
  OrdersIcon,
  SellersIcon,
  HomeIcon,
  SettingIcon,
} from "@/components/Icons";
import { FC } from "react";

interface NavItem {
  title: string;
  href: string;
  icon: FC<any>;
  subject: string;
}

export const getNavigationItems = (role: UserRole): NavItem[] => {
  const adminItems: NavItem[] = [
    {
      title: "درخواست ها",
      href: "/admin/requests",
      icon: RequestsIcon,
      subject: "Requests",
    },
    {
      title: "سفارشات",
      href: "/admin/orders",
      icon: OrdersIcon,
      subject: "Orders",
    },
    {
      title: "پذیرندگان",
      href: "/admin/sellers",
      icon: SellersIcon,
      subject: "Sellers",
    },
  ];

  const providerItems: NavItem[] = [
    {
      title: "نمای کلی",
      href: "/provider/home",
      icon: HomeIcon,
      subject: "Home",
    },
    {
      title: "سفارشات",
      href: "/provider/orders",
      icon: OrdersIcon,
      subject: "Orders",
    },
    {
      title: "تنظیمات",
      href: "/provider/settings",
      icon: SettingIcon,
      subject: "Settings",
    },
  ];

  const userItems: NavItem[] = [
    {
      title: "اعتبار",
      href: "/user/credit",
      icon: FileText,
      subject: "Credit",
    },
    {
      title: "خرید",
      href: "/user/purchase",
      icon: FileText,
      subject: "Purchase",
    },
    {
      title: "تنظیمات",
      href: "/user/settings",
      icon: FileText,
      subject: "Settings",
    },
  ];

  switch (role) {
    case "Admin":
      return adminItems;
    case "Provider":
      return providerItems;
    case "User":
      return userItems;
    default:
      return [];
  }
};

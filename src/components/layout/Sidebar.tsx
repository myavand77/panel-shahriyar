"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Can } from "@casl/react";
import { defineAbilityFor } from "@/lib/ability";
import { cn } from "@/lib/utils";
import { LogoIcon } from "@/components/Icons";
import { getNavigationItems } from "@/config/navigation";
import { useAuth } from "@/lib/auth";

export default function Sidebar() {
  const { user } = useAuth();
  const ability = defineAbilityFor(user?.role || "User");
  const pathname = usePathname();
  const navItems = getNavigationItems(user?.role || "User");

  return (
    <div className="h-full p-4 flex flex-col border-l border-gray-100">
      {/* Logo */}
      <div className="mt-8 mb-10 flex justify-center">
        <LogoIcon className="text-primary-500" width={118} height={37} />
      </div>

      {/* Navigation */}
      <nav className="space-y-1">
        {navItems.map((item) => (
          <Can key={item.href} I="read" this={item.subject} ability={ability}>
            <Link
              href={item.href}
              className={cn(
                "flex items-center justify-start gap-3 rounded-lg px-3 py-2.5 text-gray-600 transition-all duration-200",
                "hover:bg-gray-50 hover:text-gray-900",
                "active:bg-gray-100 active:text-gray-900",
                pathname.startsWith(item.href)
                  ? "bg-primary-50 text-primary-600 hover:bg-primary-50 hover:text-primary-600"
                  : ""
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.title}</span>
            </Link>
          </Can>
        ))}
      </nav>
    </div>
  );
}

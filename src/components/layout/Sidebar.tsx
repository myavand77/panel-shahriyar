"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Can } from "@casl/react";
import { defineAbilityFor } from "@/lib/ability";
import { cn } from "@/lib/utils";
import { getNavigationItems } from "@/config/navigation";

export default function Sidebar() {
  const ability = defineAbilityFor("Provider");
  const pathname = usePathname();
  const navItems = getNavigationItems("Provider");

  return (
    <div className="h-full p-4 flex flex-col border-l border-gray-100">
      {/* Logo */}
      <div className="mt-8 mb-10 flex justify-center">
        <img
          src="/assets/figma/vibe-logo.svg"
          alt="Vibe Logo"
          className="h-[53px]"
        />
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

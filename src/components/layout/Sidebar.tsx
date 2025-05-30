"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Can } from "@casl/react";
import { defineAbilityFor } from "@/lib/ability";
import { cn } from "@/lib/utils";
import { getNavigationItems } from "@/config/navigation";
import { useEffect } from "react";
import { X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const ability = defineAbilityFor("Provider");
  const pathname = usePathname();
  const navItems = getNavigationItems("Provider");

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById("sidebar");
      if (sidebar && !sidebar.contains(event.target as Node) && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed z-40 lg:hidden transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        id="sidebar"
        className={cn(
          "fixed lg:static top-0 right-0 h-full w-full md:w-[280px] bg-white z-55 transition-transform duration-300 ease-in-out",
          "border-l border-gray-100",
          isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        )}
      >
        <div className="h-full p-4 flex flex-col">
          {/* Close Button - Only visible on mobile */}
          <button
            onClick={onClose}
            className="lg:hidden absolute top-4 left-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

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
              <Can
                key={item.href}
                I="read"
                this={item.subject}
                ability={ability}
              >
                <Link
                  href={item.href}
                  onClick={() => {
                    if (window.innerWidth < 1024) {
                      onClose();
                    }
                  }}
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
      </div>
    </>
  );
}

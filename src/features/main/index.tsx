"use client";
import { Spinner } from "@/components/ui/spinner";
import { useProfile } from "@/hooks/useProfile";
import { useAuth } from "@/lib/auth";
import { handleApiError } from "@/lib/error";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getDefaultRoute } from "@/config/routes";

export default function MainView() {
  const router = useRouter();
  const { access_token, user } = useAuth();
  const { profile } = useProfile(access_token);
  
  useEffect(() => {
    if (profile && user?.role) {
      router.push(getDefaultRoute(user.role));
    }
  }, [profile, router, user]);

  useEffect(() => {
    if (!access_token) {
      handleApiError(
        new Error("Unauthorized"),
        "لطفا برای دسترسی به این صفحه وارد حساب کاربری خود شوید"
      );
    }
  }, [access_token]);

  if (!profile) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <img
          src="/assets/figma/vibe-logo.svg"
          alt="Logo"
          className="w-32 h-32"
        />
        <Spinner className="w-8 h-8" />
      </div>
    </div>
  );
}

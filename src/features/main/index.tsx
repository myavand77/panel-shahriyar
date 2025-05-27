"use client";
import { useProfile } from "@/hooks/useProfile";
import { useAuth } from "@/lib/auth";
import { handleApiError } from "@/lib/error";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function MainView() {
  const router = useRouter();
  const { access_token } = useAuth();
  const { profile, loading } = useProfile(access_token);

  useEffect(() => {
    if (profile) {
      router.push("/provider/home");
    }
  }, [profile, router]);

  useEffect(() => {
    if (!access_token && !loading) {
      handleApiError(new Error("Unauthorized"), "لطفا برای دسترسی به این صفحه وارد حساب کاربری خود شوید");
    }
  }, [access_token, loading]);

  if (loading) {
    return (
      <div className="p-4">
        <div className="animate-pulse">
          {/* Table Header Skeleton */}
          <div className="flex items-center space-x-4 mb-4">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          </div>

          {/* Table Rows Skeleton */}
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex items-center space-x-4 mb-4">
              <div className="h-10 bg-gray-200 rounded w-1/4"></div>
              <div className="h-10 bg-gray-200 rounded w-1/4"></div>
              <div className="h-10 bg-gray-200 rounded w-1/4"></div>
              <div className="h-10 bg-gray-200 rounded w-1/4"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!profile) {
    return null;
  }

  return <div className="p-4">{/* Your main content here */}</div>;
}

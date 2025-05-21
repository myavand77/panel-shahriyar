"use client";

import { useState } from "react";
import { TabFilter } from "@/components/Table/TabFilter";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const tabs = [
  { id: "user-info", label: "اطلاعات کاربری" },
  { id: "security", label: "اطلاعات امنیتی" },
];

export function SettingsView() {
  const [activeTab, setActiveTab] = useState("user-info");
  const [userInfo, setUserInfo] = useState({
    nationalId: "001321946135",
    fullName: "احسان اجمدنیا",
    phone: "09124568541",
    birthDate: "۱۳۴۸/۱۰/۱۸",
    cardNumber: "5022243578940254",
  });
  const [securityInfo, setSecurityInfo] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleUserInfoChange = (field: string, value: string) => {
    setUserInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleSecurityInfoChange = (field: string, value: string) => {
    setSecurityInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveUserInfo = () => {
    // TODO: Implement save logic
    console.log("Saving user info:", userInfo);
  };

  const handleSaveSecurityInfo = () => {
    // TODO: Implement save logic
    console.log("Saving security info:", securityInfo);
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <TabFilter
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>

      <div className="bg-white rounded-lg p-8">
        {activeTab === "user-info" ? (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Input
                label="کد ملی"
                value={userInfo.nationalId}
                onChange={(e) =>
                  handleUserInfoChange("nationalId", e.target.value)
                }
              />
              <Input
                label="نام و نام خانوادگی"
                value={userInfo.fullName}
                onChange={(e) =>
                  handleUserInfoChange("fullName", e.target.value)
                }
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Input
                label="تلفن همراه"
                value={userInfo.phone}
                onChange={(e) => handleUserInfoChange("phone", e.target.value)}
              />
              <Input
                label="تاریخ تولد"
                value={userInfo.birthDate}
                onChange={(e) =>
                  handleUserInfoChange("birthDate", e.target.value)
                }
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Input
                label="شماره کارت"
                value={userInfo.cardNumber}
                onChange={(e) =>
                  handleUserInfoChange("cardNumber", e.target.value)
                }
              />
            </div>
            <div className="flex justify-end">
              <Button variant="filled" onClick={handleSaveUserInfo}>
                ذخیره تغییرات
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Input
                label="رمز عبور فعلی"
                type="password"
                value={securityInfo.currentPassword}
                onChange={(e) =>
                  handleSecurityInfoChange("currentPassword", e.target.value)
                }
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Input
                label="رمز عبور جدید"
                type="password"
                value={securityInfo.newPassword}
                onChange={(e) =>
                  handleSecurityInfoChange("newPassword", e.target.value)
                }
              />
              <Input
                label="تکرار رمز عبور جدید"
                type="password"
                value={securityInfo.confirmPassword}
                onChange={(e) =>
                  handleSecurityInfoChange("confirmPassword", e.target.value)
                }
              />
            </div>
            <div className="flex justify-end">
              <Button variant="filled" onClick={handleSaveSecurityInfo}>
                ذخیره تغییرات
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import { Modal } from "@/components/ui/Modal";
import Input from "@/components/ui/Input";
import { FinalConfirmDialog } from "./FinalConfirmDialog";
import { useState } from "react";

interface BasicInfo {
  name: string;
  lastName: string;
  phone: string;
  email: string;
}

interface BasicInfoDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  basicInfo: BasicInfo;
  onBasicInfoChange: (info: BasicInfo) => void;
}

export function BasicInfoDialog({
  isOpen,
  onClose,
  onSave,
  basicInfo,
  onBasicInfoChange,
}: BasicInfoDialogProps) {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const handleChange = (field: keyof BasicInfo, value: string) => {
    onBasicInfoChange({
      ...basicInfo,
      [field]: value,
    });
  };

  const handleSave = () => {
    setShowConfirmDialog(true);
  };

  const handleConfirm = () => {
    setShowConfirmDialog(false);
    onSave();
  };

  return (
    <>
      <Modal
        open={isOpen}
        onClose={onClose}
        onChange={handleSave}
        title="ویرایش اطلاعات پایه"
      >
        <div className="space-y-4 p-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              نام
            </label>
            <Input
              value={basicInfo.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange("name", e.target.value)
              }
              placeholder="نام را وارد کنید"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              نام خانوادگی
            </label>
            <Input
              value={basicInfo.lastName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange("lastName", e.target.value)
              }
              placeholder="نام خانوادگی را وارد کنید"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              تلفن همراه
            </label>
            <Input
              value={basicInfo.phone}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange("phone", e.target.value)
              }
              placeholder="شماره تلفن را وارد کنید"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ایمیل
            </label>
            <Input
              value={basicInfo.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange("email", e.target.value)
              }
              placeholder="ایمیل را وارد کنید"
            />
          </div>
        </div>
      </Modal>

      <FinalConfirmDialog
        isOpen={showConfirmDialog}
        onClose={() => setShowConfirmDialog(false)}
        onConfirm={handleConfirm}
      />
    </>
  );
}

import { Modal } from "@/components/ui/Modal";
import { useState } from "react";
import { Checkbox } from "@/components/ui/Checkbox";
import Badge from "@/components/ui/Badge";
import { X, ChevronDown } from "lucide-react";

interface RejectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onReject: (selectedReasons: string[]) => void;
}

const REJECTION_REASONS = [
  "اطلاعات ناقص",
  "مدارک ناقص",
  "اطلاعات نادرست",
  "عدم تطابق با شرایط",
  "سایر موارد"
];

export function RejectDialog({ isOpen, onClose, onReject }: RejectDialogProps) {
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCheckboxChange = (reason: string, checked: boolean) => {
    if (checked) {
      setSelectedReasons([...selectedReasons, reason]);
    } else {
      setSelectedReasons(selectedReasons.filter(r => r !== reason));
    }
  };

  const handleRemoveReason = (reason: string) => {
    setSelectedReasons(selectedReasons.filter(r => r !== reason));
  };

  const handleConfirm = () => {
    onReject(selectedReasons);
    onClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      onChange={handleConfirm}
      title="رد درخواست"
      subtitle="کاربر گرامی، لطفا دلایل رد کردن درخواست را مشخص نمایید."
      changeButtonText="رد درخواست"
      cancelButtonText="انصراف"
    >
      <div className="space-y-4">
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <span>انتخاب دلایل</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isDropdownOpen && (
            <div className="absolute mt-1 w-full rounded-md border border-gray-300 bg-white shadow-lg">
              <div className="max-h-60 overflow-auto p-2">
                {REJECTION_REASONS.map((reason) => (
                  <div key={reason} className="flex items-center space-x-2 p-2 hover:bg-gray-50">
                    <Checkbox
                      id={reason}
                      checked={selectedReasons.includes(reason)}
                      onCheckedChange={(checked) => handleCheckboxChange(reason, checked as boolean)}
                    />
                    <label htmlFor={reason} className="text-sm text-gray-700">
                      {reason}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {selectedReasons.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {selectedReasons.map((reason) => (
              <Badge
                key={reason}
                type="error"
                className="flex items-center gap-1"
              >
                {reason}
                <button
                  onClick={() => handleRemoveReason(reason)}
                  className="flex h-4 w-4 items-center justify-center rounded-full hover:bg-red-600"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        )}
      </div>
    </Modal>
  );
} 
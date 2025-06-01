import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CheckboxProps {
  id: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  className?: string;
}

export function Checkbox({
  id,
  checked,
  onCheckedChange,
  className,
}: CheckboxProps) {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onCheckedChange(e.target.checked)}
        className="hidden"
      />
      <label
        htmlFor={id}
        className={cn(
          "flex h-5 w-5 cursor-pointer items-center justify-center rounded border border-gray-300 transition-colors",
          checked && "border-primary bg-primary",
          className
        )}
      >
        {checked && <Check className="h-4 w-4 text-white" />}
      </label>
    </div>
  );
} 
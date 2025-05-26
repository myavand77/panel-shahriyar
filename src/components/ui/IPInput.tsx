import React, { useState, KeyboardEvent } from "react";
import { Plus, X } from "lucide-react";
import { isValidIP } from "../../utils/ip";
import Input from "./Input";
import Button from "./Button";
import IconButton from "./IconButton";
import Label from "./Label";

interface IPInputProps {
  label?: string;
  value?: string[];
  onChange?: (ips: string[]) => void;
}

const IPInput: React.FC<IPInputProps> = ({ label, value = [], onChange }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const addIP = () => {
    if (!input.trim()) return;
    if (!isValidIP(input.trim())) {
      setError("آی پی معتبر نیست");
      return;
    }
    if (value.includes(input.trim())) {
      setError("این آی پی قبلاً اضافه شده است");
      return;
    }
    const newIps = [...value, input.trim()];
    onChange?.(newIps);
    setInput("");
    setError("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addIP();
    }
  };

  const removeIP = (ip: string) => {
    const newIps = value.filter((item) => item !== ip);
    onChange?.(newIps);
  };

  return (
    <div>
      {label && <Label>{label}</Label>}
      <div className="flex gap-2">
        <Input
          label=""
          className="flex-1"
          placeholder="آی پی را وارد کنید و Enter یا افزودن را بزنید"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button
          type="button"
          className="flex items-center justify-center bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700"
          onClick={addIP}
        >
          <Plus className="w-4 h-4" />
          <span className="ml-1 text-xs">افزودن</span>
        </Button>
      </div>
      {error && <div className="text-red-500 text-xs mt-1">{error}</div>}
      <div className="flex flex-wrap gap-2 mt-3">
        {value.map((ip) => (
          <span
            key={ip}
            className="flex items-center gap-1 bg-neutral-100 text-neutral-500 px-3 py-1 rounded-full text-xs font-bold"
          >
            <IconButton
              size="xs"
              aria-label="حذف آی پی"
              className="ml-1 text-blue-500 hover:text-red-500"
              onClick={() => removeIP(ip)}
            >
              <X className="w-3 h-3" />
            </IconButton>
            {ip}
          </span>
        ))}
      </div>
    </div>
  );
};

export default IPInput;

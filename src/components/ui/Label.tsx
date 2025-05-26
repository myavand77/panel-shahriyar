import React from "react";

interface LabelProps {
  children: React.ReactNode;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ children, className = "" }) => (
  <label
    className={`w-full text-sm text-right font-medium text-gray-700 mb-1 ${className}`}
  >
    {children}
  </label>
);

export default Label;

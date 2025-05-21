import React from "react";

const Logo = ({ className = "" }: { className?: string }) => (
  <img src="/images/icons/logo.svg" alt="Vibe Logo" className={className} />
);

export default Logo;

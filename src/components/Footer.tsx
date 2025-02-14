"use client";
import React from "react";
import Logo from "./Logo";

const Footer: React.FC = () => {
  return (
    <div className="w-full p-4 flex flex-row items-center justify-between rounded-2xl bg-main my-4">
      <Logo size={48} className="text-onMain" />
      <p className="text-onMain">
        © 2025 by Sebastijan Zindl. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;

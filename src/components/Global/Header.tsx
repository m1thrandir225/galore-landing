"use client";
import React from "react";
import Logo from "@/components/Global/Logo";
import DarkModeToggle from "./DarkModeToggle";

const Header: React.FC = () => {
  return (
    <div className={"w-full py-4 flex items-center justify-center relative"}>
      <Logo size={48} />
      <div className="absolute right-0">
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Header;

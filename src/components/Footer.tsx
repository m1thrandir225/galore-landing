"use client";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { GithubIcon } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <div className="w-full p-4 flex flex-row items-center justify-between rounded-2xl bg-main my-4">
      <Logo size={36} className="text-onMain" />
      <div className="flex flex-row gap-4 items-center">
        <p className="text-onMain">
          © 2025 by Sebastijan Zindl. All rights reserved.
        </p>
        <Link
          href={"https://github.com/m1thrandir225/galore-ios"}
          target="_blank"
          className="hover:opacity-75 ease-in-out transition-opacity duration-200 text-onMain flex flex-row items-center gap-1"
        >
          <GithubIcon className="w-6 h-6" />
          <span>Github</span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;

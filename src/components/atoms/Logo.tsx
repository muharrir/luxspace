import { merriweather } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href={"/"}>
      <div className={merriweather.className}>
        <div className="w-fit relative select-none cursor-pointer">
          <h1 className="text-[28px] font-bold">LuxSpace</h1>
          <div className="absolute bg-[#F9CADA] w-[34px] h-[34px] rounded-full top-1 left-11 -z-10"></div>
        </div>
      </div>
    </Link>
  );
}

export default Logo;

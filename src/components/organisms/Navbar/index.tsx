import Logo from "@/components/atoms/Logo";
import Image from "next/image";
import React from "react";
import MenuItem from "./MenuItem";
import Cart from "./Cart";
import HamburgerItem from "./HamburgerItem";

function Navbar() {
  return (
    <nav className="mx-5 mt-[30px] lg:mx-[100px] lg:my-[40px]">
      <div className="flex items-center gap-x-5 lg:gap-x-[33px]">
        <div className="flex items-center justify-between w-full">
          <Logo />
          <MenuItem />
          <HamburgerItem />
        </div>
        <Cart />
      </div>
    </nav>
  );
}

export default Navbar;

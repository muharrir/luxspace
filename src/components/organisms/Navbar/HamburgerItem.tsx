import Image from "next/image";
import React from "react";
import MenuItem from "./MenuItem";

function HamburgerItem() {
  return (
    <div className="lg:hidden">
      <Image
        src={"/icon/ic-hamburger.svg"}
        alt="ic-hamburger"
        width={17}
        height={16}
      />
    </div>
  );
}

export default HamburgerItem;

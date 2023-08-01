import Image from "next/image";
import React from "react";

function BrandPartner() {
  return (
    <div className="my-[100px] flex items-center justify-center">
      <div className="flex gap-x-[71px]">
        <Image src={"/image/logo1.png"} alt="logo1" width={166} height={40} />
        <Image src={"/image/logo2.png"} alt="logo2" width={112} height={40} />
        <Image src={"/image/logo3.png"} alt="logo3" width={327} height={40} />
        <Image src={"/image/logo4.png"} alt="logo4" width={162} height={40} />
      </div>
    </div>
  );
}

export default BrandPartner;

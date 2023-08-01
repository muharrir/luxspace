import Image from "next/image";
import React from "react";

function SuccessCheckout() {
  return (
    <div className="mt-[50px] mb-[100px] flex flex-col justify-center items-center text-center">
      <Image
        src={"/image/success.png"}
        alt="success"
        width={500}
        height={500}
      />
      <h2 className="text-[32px] font-semibold">Ah yes it’s success!</h2>
      <p className="mt-4 text-lg">
        Furniture yang anda beli akan kami kirimkan saat ini juga <br /> so now
        please sit tight and be ready for it
      </p>
      <button className="mt-[50px] text-lg font-semibold w-[220px] h-[45px] rounded-full bg-[#F9CADA]">
        Back to Shop
      </button>
    </div>
  );
}

export default SuccessCheckout;

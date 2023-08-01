import Logo from "@/components/atoms/Logo";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <>
      <div className="border-t border-b border-t-[#F1F1F1] border-b-[#F1F1F1] py-[70px] flex flex-col items-center justify-center">
        <div>
          <Logo />
        </div>
        <div className="pt-[70px] grid grid-cols-5 gap-x-[120px]">
          <div className="text-lg space-y-[10px]">
            <h3 className="text-xl font-semibold">Overview</h3>
            <h4 className="pt-[6px]">Shipping</h4>
            <h4>Refund</h4>
            <h4>Promotion</h4>
          </div>
          <div className="text-lg space-y-[10px]">
            <h3 className="text-xl font-semibold">Company</h3>
            <h4 className="pt-[6px]">About</h4>
            <h4>Career</h4>
            <h4>Contact Us</h4>
          </div>
          <div className="text-lg space-y-[10px]">
            <h3 className="text-xl font-semibold">Explore</h3>
            <h4 className="pt-[6px]">Terms & Conds</h4>
            <h4>Privacy Policy</h4>
            <h4>For Developer</h4>
          </div>
          <div className="text-lg space-y-[10px] col-span-2">
            <h3 className="text-xl font-semibold">Special Letter</h3>

            <div className="w-full relative">
              <input
                type="text"
                className="bg-[#F9F9F9] w-full rounded-[10px] h-[45px] pl-[13px] pr-[58px]"
                placeholder="Your email address"
              />
              <div className="absolute h-[45px] w-[45px] bg-[#F9CADA] rounded-[10px] top-0 right-0 flex justify-center items-center">
                <Image
                  src={"/icon/ic-send.svg"}
                  alt="ic-send"
                  width={24}
                  height={23}
                  className="w-6 h-[23px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-8 text-center">
        <h4 className="text-sm">
          Copyright 2023 • All Rights Reserved by LuxSpace
        </h4>
      </div>
    </>
  );
}

export default Footer;

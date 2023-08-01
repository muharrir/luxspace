import RecommenCard from "@/components/molecules/RecommenCard";
import Image from "next/image";
import React from "react";

function Recommend() {
  return (
    <div className="p-[100px] bg-[#F9F9F9]">
      <h2 className="text-[28px] font-semibold leading-[42px]">
        Complete Your Room <br /> With What We Designed
      </h2>
      <RecommenCard />
    </div>
  );
}

export default Recommend;

import NewItem from "@/components/molecules/NewItem";
import Image from "next/image";
import React from "react";

function New() {
  return (
    <div className="my-[100px] select-none">
      <h2 className="text-center font-semibold text-[28px]">
        Just Arrived <br /> This Summer For You
      </h2>
      <div className="py-[70px] flex overflow-x-auto px-[100px] gap-x-[30px] hide-scrollbar">
        <NewItem />
      </div>
    </div>
  );
}

export default New;

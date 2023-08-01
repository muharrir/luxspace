"use client";
import Image from "next/image";
import React, { useState } from "react";

function Banner() {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="lg:flex h-[550px] relative">
      <div className="pt-[70px] lg:pt-0 lg:w-1/2 text-center items-center justify-center flex flex-col">
        <h1 className="text-4xl lg:text-5xl font-semibold">
          The Room <br /> You’ve Dreaming
        </h1>
        <p className="mt-5 lg:text-lg leading-[30px]">
          Kami menyediakan furniture berkelas yang <br /> membuat ruangan terasa
          homey
        </p>
        <button className="mt-[30px] py-[10px] px-[35px] bg-[#F9CADA] rounded-full font-semibold text-lg hover:text-[#F9CADA] hover:bg-black">
          Explore Now
        </button>
      </div>

      <div className="w-full h-full lg:w-1/2 lg:relative absolute top-0">
        <div>
          <Image
            src={"/image/hero.png"}
            alt="banner"
            width={705}
            height={580}
            className="w-full bg-fill lg:object-cover object-center object-none h-[470px] lg:h-[680px] absolute right-0 -top-[72px] lg:-top-[122px] -z-20"
          />
        </div>

        <div
          className="w-[70px] h-[70px] bg-[#BCE7F0] rounded-full lg:top-[30%] lg:left-[45%] absolute flex items-center justify-center cursor-pointer z-10 right-5 bottom-36"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <Image
            src={"/icon/ic-play.svg"}
            alt="ic-play"
            width={23}
            height={26}
            className="ml-1"
          />
        </div>

        <div className="hidden lg:block w-full h-[680px] -top-[122px] absolute -z-10">
          <div
            className={`h-full w-full bg-black/30 -z-10 ${
              isHover ? "opacity-100" : "opacity-0"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

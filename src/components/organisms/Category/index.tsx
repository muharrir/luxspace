import Image from "next/image";
import React from "react";

function Category() {
  return (
    <section className="p-[100px] ">
      <div>
        <h2 className="text-[28px] font-semibold leading-[42px]">
          Browse The Room <br /> That We Designed For You
        </h2>
        <div className="mt-[30px] grid grid-cols-12 gap-x-[30px]">
          <div className="col-span-5 w-full justify-between flex flex-col">
            <div className="relative">
              <Image
                src={"/image/category1.png"}
                alt="category-1"
                width={500}
                height={180}
                className="rounded-[25px] w-full"
              />
              <div className="absolute top-[40%] left-[68%]">
                <h3 className="text-xl font-semibold">Living Room</h3>
                <p className="mt-1 text-sm">18,309 items</p>
              </div>
            </div>
            <div className="relative">
              <Image
                src={"/image/category2.png"}
                alt="category-1"
                width={500}
                height={180}
                className="rounded-[25px] w-full"
              />
              <div className="absolute top-[40%] left-[68%]">
                <h3 className="text-xl font-semibold">Children Room</h3>
                <p className="mt-1 text-sm">837 items</p>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="relative">
              <Image
                src={"/image/category3.png"}
                alt="category-3"
                width={287}
                height={386}
                className="rounded-[25px] w-full"
              />
              <div className="absolute top-10 left-[33%] text-center">
                <h3 className="text-xl font-semibold">Decoration</h3>
                <p className="mt-1 text-sm">77,392 items</p>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="relative">
              <Image
                src={"/image/category4.png"}
                alt="category-4"
                width={393}
                height={386}
                className="rounded-[25px] h-full w-full"
              />
              <div className="absolute top-10 left-[40%] text-center">
                <h3 className="text-xl font-semibold">Bed Room</h3>
                <p className="mt-1 text-sm">22,094 items</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;

import Image from "next/image";
import React from "react";

function ProductDetail() {
  return (
    <section className="py-[70px] px-[100px] flex  w-full items-center">
      <div className="space-y-5 flex-none">
        <Image
          src={"/image/details1.png"}
          alt="img-details"
          width={106}
          height={106}
          className="w-[106px] h-[106px] object-none object-top rounded-2xl"
        />
        <Image
          src={"/image/details2.png"}
          alt="img-details"
          width={106}
          height={106}
          className="w-[106px] h-[106px] object-none object-top rounded-2xl"
        />
        <Image
          src={"/image/details3.png"}
          alt="img-details"
          width={106}
          height={106}
          className="w-[106px] h-[106px] object-none object-top rounded-2xl"
        />
        <Image
          src={"/image/details4.png"}
          alt="img-details"
          width={106}
          height={106}
          className="w-[106px] h-[106px] object-none object-top rounded-2xl"
        />
        <Image
          src={"/image/details5.png"}
          alt="img-details"
          width={106}
          height={106}
          className="w-[106px] h-[106px] object-none object-top rounded-2xl"
        />
      </div>

      <div className="flex-none ml-5">
        <Image
          src={"/image/details1.png"}
          alt="img-details"
          width={560}
          height={609}
        />
      </div>

      <div className=" ml-[50px] ">
        <h1 className="text-[42px] font-semibold">Chair Thatty</h1>
        <p className="mt-[10px] text-xl">IDR 12.000.000</p>
        <button className="mt-[30px] w-[230px] h-[45px] flex bg-[#F9CADA] rounded-full items-center justify-center gap-x-[10px]">
          <Image
            src={"/icon/ic-cart.svg"}
            alt="ic-cart"
            width={26}
            height={24}
          />
          <h2 className="text-lg font-semibold">Add to Cart</h2>
        </button>
        <hr className="my-10" />
        <div className="text-lg ">
          <h3 className="font-semibold">About the product:</h3>
          <p className="mt-4 leading-8">
            Tailored to a level of perfection synonymous with that of a Savile
            Row suit and with understated quality in the detail, Jetty has been
            influenced by timeless 1950s style. <br /> <br />
            Providing a subtle nod to the past, Jetty also provides a perfect
            solution for the way we work today. A comprehensive product family,
            Jetty features a variety of elegant chairs and sofas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;

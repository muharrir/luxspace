import Image from "next/image";
import React from "react";

function RecommenCard() {
  const item = [
    { id: 1, img: "recommen1", text: "Cangkir Mauttie", price: "89.300.000" },
    { id: 2, img: "recommen2", text: "Saman Kakka", price: "14.500.000" },
    { id: 3, img: "recommen3", text: "Lino Dino", price: "22.000.000" },
    { id: 4, img: "recommen4", text: "Syail Ammeno", price: "12.000.000" },
  ];

  return (
    <div className="mt-[30px] grid grid-cols-4 gap-x-[30px]">
      {item.map((v, i) => (
        <div className="py-[30px] px-5 rounded-[25px] bg-white">
          <div className="flex justify-center items-center">
            <Image
              src={`/image/${v.img}.png`}
              alt={v.img}
              width={247}
              height={180}
            />
          </div>
          <h2 className="mt-[30px] font-semibold text-xl">{v.text}</h2>
          <p className="mt-[6px] text-lg">IDR {v.price}</p>
        </div>
      ))}
    </div>
  );
}

export default RecommenCard;

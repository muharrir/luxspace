import Image from "next/image";
import React from "react";

function NewItem() {
  const item = [
    { id: 1, img: "new1", text: "Cangkir Mauttie", price: "89.300.000" },
    { id: 2, img: "new2", text: "Bangkyu Minimax", price: "67.000.000" },
    { id: 3, img: "new3", text: "Buku Sidu Edition", price: "12.000.000" },
    { id: 4, img: "new4", text: "Watch Notes X", price: "73.000.000" },
    { id: 5, img: "new5", text: "Racking Plants", price: "2.400.000" },
  ];

  return (
    <>
      {item.map((v, i) => (
        <div className="flex flex-none flex-col snap-start" key={i}>
          <Image
            src={`/image/${v.img}.png`}
            alt="new-1"
            width={287}
            height={386}
            className="rounded-[25px]"
          />
          <h3 className="mt-6 text-xl font-semibold">{v.text}</h3>
          <h3 className="mt-[6px] text-xl">IDR {v.price}</h3>
        </div>
      ))}
    </>
  );
}

export default NewItem;

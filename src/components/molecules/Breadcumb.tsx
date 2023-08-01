import React from "react";

interface BreadcumbProps {
  span?: "/";
  href1: string;
  href2?: string;
}

function Breadcumb(props: Partial<BreadcumbProps>) {
  const { href1, span, href2 } = props;
  return (
    <div className="py-10 px-[100px] bg-[#F9F9F9] flex gap-x-5 text-lg font-light">
      <h3>Home</h3>
      <span>/</span>
      <h3>{href1}</h3>
      <span>{span}</span>
      <h3 className="font-semibold">{href2}</h3>
    </div>
  );
}

export default Breadcumb;

import React from "react";

function MenuItem() {
  const itemNav = [
    { id: 1, text: "Showcase" },
    { id: 2, text: "Catalog" },
    { id: 3, text: "Delivery" },
    { id: 4, text: "Rewards" },
  ];

  return (
    <div>
      <ul className="flex flex-col lg:flex-row gap-x-12 text-lg">
        {itemNav.map((v, i) => (
          <li
            key={i}
            className="cursor-pointer hover:text-white hover:underline decoration-1"
          >
            {v.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuItem;

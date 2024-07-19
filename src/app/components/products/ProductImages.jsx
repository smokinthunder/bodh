"use client";

import Image from "next/image";
import { useState } from "react";

const items = [
  {
    id: 1,
    url: "/assets/HomePage/trophie.png",
  },
  {
    id: 2,
    url: "/assets/HomePage/trophie.png",
  },
  {
    id: 3,
    url: "/assets/HomePage/trophie.png",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-mountain-reflection-in-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="h-[400px] w-[300px] ml-48 relative">
        <Image
          src={items[index]?.url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4  mt-8">
        {items.map((item) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer opacity-50 hover:opacity-100"
            key={item.id}
            onClick={() => setIndex(item.id - 1)}
          >
            <Image
              src={item?.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;

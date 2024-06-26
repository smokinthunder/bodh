import Image from "next/image";
import React from "react";
export default function ProductComponents({product}) {
  return (
    <div className="flex flex-wrap flex-col w-max rounded-lg bg-slate-500 p-5 pb-0 m-5 ">
      <Image
        src={"/assets/HomePage/trophie.png"}
        width={330}
        height={360}
        className="rounded-md"
      />
      <div className="bg-slate-500 h-5 flex justify-center ">
        <div className="w-max bg-black text-white px-6 h-10 rounded-lg flex items-center font-bold ">{product}</div>
      </div>
    </div>
  );
}

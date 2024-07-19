import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductRate from "./ProductRate";
import AddToCart from "./AddToCart";
export default function ProductComponents({ product }) {
  return (
    <div className="flex flex-wrap flex-col w-max rounded-lg bg-slate-500 p-5 pb-0 m-5 ">
      <Link href={`/product/${product.id}`}>
        <Image
          src={"/assets/HomePage/trophie.png"}
          width={330}
          height={360}
          className="rounded-md"
        />
        <div className="bg-slate-500 h-5 flex justify-center ">
          <div className="w-max bg-black text-white px-6 h-10 rounded-lg flex items-center font-bold ">
            {product.name}
          </div>
        </div>
      </Link>
      <div className="flex flex-col items-center justify-center pt-6 pb-2">
        <AddToCart
          product={product}
          showQty={false}
          redirect={false}
          increasePerClick={true}
        />
      </div>
    </div>
  );
}

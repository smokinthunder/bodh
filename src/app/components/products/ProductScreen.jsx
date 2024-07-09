import React from "react";
import ProductComponents from "./ProductComponents";
import products from "../../../../public/static/data/product_list.json";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function ProductScreen() {
  return (
    <div className="flex flex-col  ">
      <div className="h-32 bg-red-500 flex justify-center items-center w-screen sticky top-24 mt-28">
        <p className=" opacity-80   text-6xl bg-[#E12828] border-8 border-red-800 px-6 py-2 rounded-2xl text-white  font-serif">
          Our Products
        </p>
      </div>
      <div className="grid grid-cols-3 justify-items-center my-32   ">
        {products["products"].map((product) => (
          <ProductComponents key={product.id} product={product} />
        ))}
      </div>
      <Link href="/product " className=" w-max mx-auto   h-max">
        <Button className="mb-32 w-max mx-auto py-5 px-10 bg-red-600 hover:bg-red-700  ">
          View More..
        </Button>
      </Link>
    </div>
  );
}

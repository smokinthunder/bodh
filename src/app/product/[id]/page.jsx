"use client";
import AddToCart from "@/app/components/products/AddToCart";
import ProductRate from "@/app/components/products/ProductRate";
import products from "../../../../public/static/data/product_list.json";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ProductImages from "@/app/components/products/ProductImages";
import CustomizeProducts from "@/app/components/products/CustomizeProducts";

export default function ProductDetailPage({ params: { id } }) {
  const productId = parseInt(id, 10);
  const product = products["products"].find((x) => x.id === productId);
  if (!product) {
    return <div>Product Not Found</div>;
  }

  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (type) => {
    if (type === "i") {
      setQuantity((prev) => prev + 1);
    } else {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <div className="relative  md:px-8 lg:px-12 xl:px-12 2xl:px-12  flex flex-col lg:flex-row gap-16 pt-6">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <div className="h-[2px] bg-gray-100" />
        {product.price === product.price ? (
          <h2 className="font-medium text-2xl">${product.price}</h2>
        ) : (
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
              ${product.price}
            </h3>
            <h2 className="font-medium text-2xl">${product.price}</h2>
          </div>
        )}
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        {/* {product.variants && product.productOptions ? (
          <CustomizeProducts
            productId={product._id!}
            variants={product.variants}
            productOptions={product.productOptions}
          />
        ) : (
          <Add
            productId={product._id!}
            variantId="00000000-0000-0000-0000-000000000000"
            stockNumber={product.stock?.quantity || 0}
          />
        )} */}
        <div className="flex flex-col gap-4">
          <h4 className="font-medium">Choose a Quantity</h4>
          <div className="flex justify-between">
            {/* <div className="flex items-center gap-4">
              <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
                <button
                  className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
                  onClick={() => handleQuantity("d")}
                  disabled={quantity === 1}
                >
                  -
                </button>
                {quantity}
                <button
                  className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
                  onClick={() => handleQuantity("i")}
                >
                  +
                </button>
              </div>
              {product.countInStock < 1 ? (
                <div className="text-xs">Product is out of stock</div>
              ) : (
                <div className="text-xs">
                  Only{" "}
                  <span className="text-orange-500">
                    {product.countInStock} items
                  </span>{" "}
                  left!
                  <br /> {"Don't"} miss it
                </div>
              )}
            </div> */}
            <AddToCart
              product={product}
              showQty={false}
              increasePerClick={false}
            />
          </div>
        </div>

        <div className="h-[2px] bg-gray-100" />
        {/* {product.additionalInfoSections?.map((section) => (
          <div className="text-sm" key={section.title}>
            <h4 className="font-medium mb-4">{section.title}</h4>
            <p>{section.description}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
}

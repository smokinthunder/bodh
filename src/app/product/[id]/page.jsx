"use client";
import AddToCart from "@/app/components/products/AddToCart";
import ProductRate from "@/app/components/products/ProductRate";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import ProductImages from "@/app/components/products/ProductImages";
import CustomizeProducts from "@/app/components/products/CustomizeProducts";
import { ApiUrl } from "@/Constants/Api";

export default function ProductDetailPage({ params: { id } }) {
  const productId = parseInt(id, 10);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log(ApiUrl + "api/products/"+id);   
        const response = await fetch(ApiUrl + "api/products/"+id);
        if (!response.ok) {
          throw new Error("Failed to fetch the product");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleQuantity = (type) => {
    if (type === "i") {
      setQuantity((prev) => prev + 1);
    } else {
      setQuantity((prev) => prev - 1);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product Not Found</div>;
  }

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
          <h2 className="font-medium text-2xl">₹{product.price}</h2>
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
        <div className="flex flex-col gap-4">
          <h4 className="font-medium">Choose a Quantity</h4>
          <div className="flex justify-between">
            <AddToCart
              product={product}
              showQty={false}
              increasePerClick={false}
            />
          </div>
        </div>
        <div className="h-[2px] bg-gray-100" />
      </div>
    </div>
  );
}

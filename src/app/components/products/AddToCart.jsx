"use client";
import { Button } from "@/components/ui/button";
import { addToCart } from "@/redux/slices/cartSlice";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const AddToCart = ({
  product,
  showQty = true,
  redirect = false,
  increasePerClick = false,
}) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const router = useRouter();
  const [qty, setQty] = React.useState(1);
  const [quantity, setQuantity] = useState(1); // Initialize quantity state

  const handleQuantity = (type) => {
    if (type === "d" && qty > 1) {
      setQty(qty - 1);
    } else if (type === "i" && qty < product.countInStock) {
      setQty(qty + 1);
    }
  };

  const addToCartHandler = () => {
    let newQty = qty;
    if (increasePerClick) {
      const existItem = cartItems.find((x) => x.id === product.id);
      if (existItem) {
        if (existItem.qty + 1 <= product.countInStock) {
          newQty = existItem.qty + 1;
        } else {
          return alert("Product out of stock");
        }
      }
    }

    dispatch(addToCart({ ...product, qty: newQty }));
    if (redirect) {
      router.push("/cart");
    }
  };
  const pathname = usePathname();
  const showQuantity = !(pathname === "/");

  return (
    <>
      {showQuantity && product.countInStock > 0 && (
        <div className="mb-2 flex justify-between">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={() => handleQuantity("d")}
              disabled={qty === 1}
            >
              -
            </button>
            {qty}
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={() => handleQuantity("i")}
              disabled={qty === product.countInStock}
            >
              +
            </button>
          </div>
        </div>
      )}

      <div>
        <Button className="w-full" onClick={addToCartHandler}>
          Add To Cart
        </Button>
      </div>
    </>
  );
};

export default AddToCart;

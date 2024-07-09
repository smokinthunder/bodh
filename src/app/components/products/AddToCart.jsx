"use client";
import { Button } from "@/components/ui/button";
import { addToCart } from "@/redux/slices/cartSlice";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

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
          <div>Qty</div>
          <div>
            <select value={qty} onChange={(e) => setQty(e.target.value)}>
              {[...Array(product.countInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      <div>
        <Button className="w-full" onClick={addToCartHandler}>
          +
        </Button>
      </div>
    </>
  );
};

export default AddToCart;

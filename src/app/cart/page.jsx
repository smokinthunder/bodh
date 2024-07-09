"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/redux/slices/cartSlice";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

export default function CartPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, cartItems, itemsPrice } = useSelector((state) => state.cart);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  const addToCartHandler = async (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  return (
    <div>
      {/* {loading ? (
        <div>Loading...</div>
      ) : cartItems.length === 0 ? (
        <div>
          Cart is Empty.<Link href="/">Add items</Link>
        </div>
      ) : ( */}
      <div>
        <h1 className="text-4xl p-8">Your Cart</h1>
        <div className="flex">
          <div className="w-1/2 mx-5">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="py-5 w-1/3 border-b border-gray-600 text-start">
                    Product
                  </th>
                  <th className="py-5 w-1/3 border-b border-gray-600 text-center">
                    Quantity
                  </th>
                  <th className="py-5 w-1/3 border-b border-gray-600 text-center">
                    Price
                  </th>
                  <th className="py-5 w-1/3 border-b border-gray-600 text-center">
                    Remove
                  </th>
                </tr>
              </thead>
            </table>
            <div className="overflow-y-auto h-96">
              {" "}
              {/* Adjust height as needed */}
              <table className="w-full border-collapse">
                <tbody>
                  {cartItems.map((item) => (
                    <tr
                      className="h-16 border-b border-gray-300 text-center"
                      key={item.id}
                    >
                      <td className="flex items-center">
                        <Image
                          src="/assets/HomePage/trophie.png"
                          alt={item.name}
                          height={100}
                          width={100}
                        />
                        <p>{item.name}</p>
                      </td>
                      <td className="text-center">
                        <div className="border w-max p-1 inline-block">
                          <select
                            value={item.qty}
                            onChange={(e) =>
                              addToCartHandler(item, Number(e.target.value))
                            }
                          >
                            {[...Array(item.countInStock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </select>
                        </div>
                      </td>
                      <td>₹{item.price}</td>
                      <td className="p-5 text-center">
                        <button
                          className="default-button"
                          onClick={() => removeFromCartHandler(item.id)}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="border-4 rounded-xl h-max border-black p-4 w-1/3 mx-32 flex flex-col gap-3">
            <p>Cart Summary</p>
            <div className="border-2 rounded-xl w-full flex justify-between p-4">
              <p>Discount</p>
              <p>₹0</p>
            </div>
            <div className="border-2 rounded-xl w-full flex justify-between p-4">
              <p>Tax</p>
              <p>₹0</p>
            </div>
            <div className="border-2 rounded-xl w-full flex justify-between p-4">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <div className="border-b-2 w-full flex justify-between p-4">
              <p>Subtotal</p>
              <p>
                ({cartItems.reduce((a, c) => a + c.qty, 0)}): ₹{itemsPrice}
              </p>
            </div>
            <Button
              onClick={() => router.push("/shipping")}
              className="text-white bg-black rounded-lg w-full p-6"
            >
              Checkout
            </Button>
          </div>
        </div>
        <Footer></Footer>
      </div>
      {/* )} */}
    </div>
  );
}

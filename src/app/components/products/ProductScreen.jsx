import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductComponents from "./ProductComponents";
import { ApiUrl } from "@/Constants/Api";

export default function ProductScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(ApiUrl + "api/products") // Replace with your API endpoint
      .then((response) => {
        setProducts(response.data); // Adjust to match your API's response structure
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col">
        <div className="h-32 hover:bg-red-500 flex justify-center items-center w-screen sticky top-24 mt-28">
          <p className="opacity-80 text-6xl bg-[#E12828] border-8 border-red-800 px-6 py-2 rounded-2xl text-white font-serif">
            Our Products
          </p>
        </div>
        Loading ....
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col">
        <div className="h-32 hover:bg-red-500 flex justify-center items-center w-screen sticky top-24 mt-28">
          <p className="opacity-80 text-6xl bg-[#E12828] border-8 border-red-800 px-6 py-2 rounded-2xl text-white font-serif">
            Our Products
          </p>
        </div>
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="h-32 hover:bg-red-500 flex justify-center items-center w-screen sticky top-24 mt-28">
        <p className="opacity-80 text-6xl bg-[#E12828] border-8 border-red-800 px-6 py-2 rounded-2xl text-white font-serif">
          Our Products
        </p>
      </div>
      <div className="grid grid-cols-3 justify-items-center my-32">
        {products.map((product) => (
          <ProductComponents key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

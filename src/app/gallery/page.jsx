'use client';

import React from "react";
import{useEffect,useState} from "react";
import axios from "axios";

import GalleryItem from "./components/gallery_item";
import { ApiUrl } from "@/Constants/Api";

const Gallery = () => {


  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    console.log(ApiUrl + "api/gallery");
    axios
    .get(ApiUrl + "api/gallery") // Replace with your API endpoint
    .then((response) => {
      setProducts(response.data); // Adjust to match your API's response structure
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

if(loading){
  return (
    <div className="relative flex items-center justify-center h-[calc(100vh-96px)] bg-gradient-to-r from-[#AA205E] to-[#FF5F5F] ">
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-50"
        style={{ backgroundImage: "url('/assets/gallery/image 26.png')" }}
      ></div>

      <div className="  overflow-y-scroll no-scrollbar h-[calc(100vh-96px)]   z-10 grid gap-72 py-28 pl-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:pl-4 pr-48  2xl:grid-cols-4 ">
      Loading ....
      </div>
    </div>
  );
}

if(error){
  return (
    <div className="relative flex items-center justify-center h-[calc(100vh-96px)] bg-gradient-to-r from-[#AA205E] to-[#FF5F5F] ">
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-50"
        style={{ backgroundImage: "url('/assets/gallery/image 26.png')" }}
      ></div>

      <div className="  overflow-y-scroll no-scrollbar h-[calc(100vh-96px)]   z-10 grid gap-72 py-28 pl-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:pl-4 pr-48  2xl:grid-cols-4 ">
Error: {error.message}
      </div>
    </div>
  );
}



  return (
    <div className="relative flex items-center justify-center h-[calc(100vh-96px)] bg-gradient-to-r from-[#AA205E] to-[#FF5F5F] ">
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-50"
        style={{ backgroundImage: "url('/assets/gallery/image 26.png')" }}
      ></div>

      <div className="  overflow-y-scroll no-scrollbar h-[calc(100vh-96px)]   z-10 grid gap-72 py-28 pl-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:pl-4 pr-48  2xl:grid-cols-4 ">
        {products.map((item) => (
          <GalleryItem key={item.productId} Item={item} />
        ))}
        {/* Add more <GalleryItem /> components as needed */}
      </div>
    </div>
  );
};

export default Gallery;


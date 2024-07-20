import React from "react";
import GalleryItem from "./components/gallery_item";
import products from "../../../public/static/data/product_list.json";

const Gallery = () => {
  return (
    <div className="relative flex items-center justify-center h-[calc(100vh-96px)] bg-gradient-to-r from-[#AA205E] to-[#FF5F5F] ">
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-50"
        style={{ backgroundImage: "url('/assets/gallery/image 26.png')" }}
      ></div>

      <div className="  overflow-y-scroll no-scrollbar h-[calc(100vh-96px)]   z-10 grid gap-72 py-28 pl-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:pl-4 pr-48  2xl:grid-cols-4 ">
        {products["products"].map((item) => (
          <GalleryItem key={item.id} Item={item} />
        ))}
        {/* Add more <GalleryItem /> components as needed */}
      </div>
    </div>
  );
};

export default Gallery;

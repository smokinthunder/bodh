import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Heading = () => {
  return (
    <div className="relative">
      <div className="relative">
        <img
          loading="lazy"
          src="/assets/winner-concept-with-all-places-prizes 1.png"
          className="w-screen aspect-[2.15] "
        />
        <div className="absolute inset-0 flex flex-col justify-center pb-36 p-8">
          <h2 className="font-bold text-6xl max-w-[45rem] font-Rokkitt text-black mb-12 mt-5 ">
            Affordable Prices for High-Quality Awards
          </h2>
          <p className="max-w-[36rem] text-xl text-black">
            Get the best value for your money with our competitively priced
            Trophies and Medals
          </p>
          <Button className="w-fit px-12 py-6 ml-4 mt-12">
            <Link href="/product">Shop Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Heading;

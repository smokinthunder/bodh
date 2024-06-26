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
          className="w-full aspect-[2.15] max-w-[1500px] max-md:max-w-full"
        />
        <div className="absolute inset-0 flex flex-col justify-center pb-36 p-8">
          <h2 className="font-bold text-4xl max-w-md text-black mb-4">
            Affordable Prices for High-Quality Awards
          </h2>
          <p className="max-w-md text-black">
            Get the best value for your money with our competitively priced
            Trophies and Medals
          </p>
          <Button className="w-fit m-4">
            <Link href="/product">Shop Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Heading;

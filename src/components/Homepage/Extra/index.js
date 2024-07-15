import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Extra = () => {
  return (
    <div className="relative">
      <div className="relative">
        <img
          loading="lazy"
          src="/assets/image 4.png"
          className="w-screen aspect-[2.15] "
        />
        <div className="absolute inset-0 flex flex-col justify-center pb-36 p-8  ">
          <h2 className="font-bold text-6xl max-w-[45rem] font-Rokkitt text-white mb-12">
            We have everything that you need
          </h2>
          <p className="max-w-[36rem] text-xl text-white ">
            Turning moments of victory into timeless memories. Awards that
            inspire,motivate and celebrate.
          </p>
          <Button className="w-fit m-4 px-8 py-6 mt-20 ">
            <Link href="/about">Read More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Extra;

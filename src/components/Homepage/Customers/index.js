import React from "react";

const Customer = () => {
  return (
    <div className="flex flex-col items-start px-20 mt-32 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="ml-4 text-4xl font-medium text-black leading-[54.72px] max-md:ml-2.5">
        Our Valued Customers
      </div>
      <div className="shrink-0 mt-3.5 ml-4 max-w-full h-px bg-black border border-black border-solid w-[413px] max-md:ml-2.5" />
      <div className="self-stretch mt-14 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-5xl font-medium text-black whitespace-nowrap max-md:mt-10">
              <div className="shrink-0 bg-red-800 aspect-square h-[233px]" />
              <div className="self-center mt-7">image</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-5xl font-medium text-black whitespace-nowrap max-md:mt-10">
              <div className="shrink-0 bg-indigo-800 aspect-square h-[233px]" />
              <div className="self-center mt-7">image</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-5xl font-medium text-black whitespace-nowrap max-md:mt-10">
              <div className="shrink-0 bg-green-600 aspect-square h-[233px]" />
              <div className="self-center mt-7">image</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-5xl font-medium text-black whitespace-nowrap max-md:mt-10">
              <div className="shrink-0 bg-pink-700 aspect-square h-[233px]" />
              <div className="self-center mt-7">image</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;

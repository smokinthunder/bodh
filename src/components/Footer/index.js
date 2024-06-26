import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center mt-10 px-16 pt-10 pb-8 bg-neutral-900 max-md:px-5">
      <div className="flex flex-col w-full max-w-[1120px] max-md:max-w-full">
        <div className="flex justify-between items-center px-16 pb-2.5 text-sm leading-5 text-white max-md:px-5 max-md:max-w-full">
          <div className="flex justify-start ">
            <Image
              src="/assets/Bodhi Creations 3.png"
              alt="Bodhi Creations"
              width={115}
              height={64}
            />
          </div>
          <div className="flex gap-5 justify-between max-md:flex-wrap">
            <div>About us</div>
            <div>Products</div>
            <div>Gallery</div>
            <div>Blog</div>
            <div>Contact Us</div>
          </div>
        </div>
        <div className="flex gap-5 justify-between px-px py-4 mt-12 w-full border-t border-solid border-zinc-500 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 justify-between self-start text-xs font-semibold leading-5 text-white max-md:flex-wrap">
            <div className="text-gray-200">
              Copyright © 2024 Bodhi Creations. All rights reserved
            </div>
            <div>Privacy Policy</div>
            <div>Terms of Use</div>
          </div>
          <div className="flex gap-5 justify-between">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/542b8ab12e96ddbd2032ad5b8ee15f958cdeb1edb9a9f5534c05e5c42de20985?"
              className="shrink-0 w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff840f9d1805db28c0b930701a2c7ea37a67f46ff4e43fd0251294fbaae8b048?"
              className="shrink-0 w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab371772d26092588a9e0466276a51356cae76e306c72727f1f1b41869f7c384?"
              className="shrink-0 w-6 aspect-square"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

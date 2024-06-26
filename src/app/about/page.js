import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div className="relative flex flex-col items-start w-full min-h-[751px] capitalize px-16 max-w-full max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="/assets/image 16.png"
          className="object-cover absolute inset-0 w-full h-full"
          style={{ zIndex: -1 }}
        />
        <div className="relative px-3 pb-6 mt-16 text-5xl font-semibold text-white max-md:mt-10 max-md:text-4xl">
          What is Bodhi Creations
        </div>
        <div className="relative px-3 pb-12 text-5xl font-semibold text-white max-md:mt-10 max-md:text-4xl">
          Why choose Us?
        </div>
        <div className="relative mt-8 mb-32 ml-7 text-base leading-8 text-stone-300 max-md:my-10 max-md:max-w-full max-w-md">
          <p className="max-w-md">
            Celebrate achievements with our exquisite collection of trophies and
            awards, perfect for any occasion. From corporate awards to sports
            trophies, we have the perfect piece to honor every achievement. Make
            every victory memorable with our high-quality, customizable trophies
            and awards.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center px-16 rounded-lg max-md:px-5">
        <div className="w-full max-w-[1030px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="/assets/image 17.png"
                className="grow w-full aspect-[0.69] max-md:mt-3 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-center self-stretch my-auto text-base font-medium text-stone-900 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-3 text-lg capitalize max-md:flex-wrap">
                  <div className="shrink-0 p-1.5 w-9 h-9 rounded-lg bg-pink-700 bg-opacity-30" />
                  <div className="my-auto max-md:max-w-full">About us</div>
                </div>
                <div className="mt-3 text-4xl font-semibold capitalize max-md:max-w-full">
                  Our Company Overview
                </div>
                <div className="mt-3 leading-6 text-slate-500 max-md:max-w-full">
                  Our mission is simple: to provide exceptional products that
                  honor and inspire. Whether it's for sports, academics,
                  corporate events, or personal milestones, we believe that
                  every achievement deserves to be acknowledged in a memorable
                  way. Our commitment to quality and craftsmanship ensures that
                  each trophy and award we create is a lasting tribute to hard
                  work and success.
                </div>

                <div className="mt-8 leading-6 text-slate-500 max-md:max-w-full">
                  We believe that great customer service is just as important as
                  the quality of our products. Our dedicated team is here to
                  assist you every step of the way, from selecting the perfect
                  award to customizing it to your exact specifications. We
                  strive to make the entire process easy and enjoyable, ensuring
                  that you receive the perfect trophy or award for your event.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex overflow-hidden relative flex-col gap-5 justify-between items-start px-12 py-20 mt-20 w-full shadow-sm min-h-[466px] max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src="assets/Rectangle 1084.png"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex">
          <div className="relative mt-20 text-4xl font-semibold text-white capitalize max-md:mt-10">
            The feature of Bodhi Creation that you will benefit from
          </div>
          <div className="relative mt-2 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col grow self-stretch px-6 py-12 text-2xl font-medium leading-9 text-center text-white rounded-xl border border-white border-solid max-md:px-5 max-md:mt-7">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7b7a9b66590904ac39db8ce427f2e39c4634262a658115363a9b58e8dbcf98a?"
                    className="self-center aspect-square w-[70px]"
                  />
                  <div className="mt-4">
                    High Quality
                    <br />
                    Product
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col grow self-stretch px-6 py-12 text-2xl font-medium leading-9 text-center text-white rounded-xl border border-white border-solid max-md:px-5 max-md:mt-7">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2b2f45038fb356a4a0526983f63c5073481e97d16ef507c563fba04f3e82a14?"
                    className="self-center aspect-square w-[70px]"
                  />
                  <div className="mt-4">Customized Designs</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col grow self-stretch px-6 py-12 text-2xl font-medium leading-9 text-center text-white rounded-xl border border-white border-solid max-md:px-5 max-md:mt-7">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bbc6104d953be62ae6629f9a2244d240fdb26e795c79d2880a6054d549d3224?"
                    className="self-center aspect-square w-[70px]"
                  />
                  <div className="mt-4">Damage protection</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="justify-center ml-28 mt-40 px-16 rounded-xl max-md:px-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="relative flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="/assets/Large Photo.png"
              className="absolute top-0 left-0 w-3/4 h-auto rounded-xl transform -translate-x-1/4 -translate-y-1/4 z-10"
            />
            <img
              loading="lazy"
              src="/assets/Small Photo.png"
              className="absolute top-10 left-10 w-1/2 h-auto rounded-xl transform translate-x-1/4 translate-y-1/4 z-10"
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full -mt-28 max-md:-mt-0">
            <div className="flex flex-col justify-center text-base font-medium leading-6 text-white max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col items-start py-16 pr-20 pl-7 bg-sky-950 max-md:px-5 max-md:max-w-full rounded-xl">
                <div className="text-4xl font-semibold capitalize max-md:max-w-full">
                  Who needs trophies and awards In bulk?
                </div>
                <div className="mt-10 max-md:max-w-full">
                  We believe that personalization makes each award special.
                </div>
                <div className="flex gap-3.5 mt-12 max-md:mt-10">
                  <img
                    loading="lazy"
                    src="/assets/Checkmark.png"
                    className="shrink-0 w-5 aspect-square"
                  />
                  <div className="flex-auto">3D crystal trophies</div>
                </div>
                <div className="flex gap-3.5 mt-7 whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="/assets/Checkmark.png"
                    className="shrink-0 w-5 aspect-square"
                  />
                  <div>Medals</div>
                </div>
                <div className="flex gap-3.5 mt-7 whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="/assets/Checkmark.png"
                    className="shrink-0 w-5 aspect-square"
                  />
                  <div className="my-auto">Momentos</div>
                </div>
                <div className="flex gap-3.5 mt-7 whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="/assets/Checkmark.png"
                    className="shrink-0 w-5 aspect-square"
                  />
                  <div className="my-auto">Awards</div>
                </div>
                <div className="flex gap-3.5 mt-7 mb-9 whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="/assets/Checkmark.png"
                    className="shrink-0 w-5 aspect-square"
                  />
                  <div className="my-auto">Certificates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start px-20 mt-32 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="ml-20 text-4xl font-medium text-black leading-[54.72px] max-md:ml-2.5">
          Our Valued Customers
        </div>
        <div className="shrink-0 mt-3.5 ml-20 max-w-full h-px bg-black border border-black border-solid w-[413px] max-md:ml-2.5" />
        <div className="self-stretch mt-36 max-md:mt-10 max-md:max-w-full">
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
    </>
  );
};

export default About;

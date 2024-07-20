import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function GalleryItem({Item}) {
  return (
    <div className="flex flex-row  ">
      <div className="flex flex-col items-center ">
        <HoverCard openDelay={0} closeDelay={0}>
          <HoverCardTrigger>
            <img
              className="rounded-[24px] h-[326px] w-[208px] "
              src="/assets/gallery/mementoimage.png"
            />
          </HoverCardTrigger>
          <HoverCardContent className=" rounded-[24px]  rounded-l-none h-[280px] w-[190px] opacity-75 bg-white border-none shadow-none  flex flex-col">
            <div
              className="h-[50px] w-[150px] bg-no-repeat bg-center bg-cover flex items-center justify-center mt-3 "
              style={{
                width: '175px', 
                height: '75px',
                backgroundImage: "url('/assets/gallery/mementohovertextbox.png')",
                backgroundSize: '140%',
                backgroundPosition: 'center',
              }}
            
            >
              <p className="text-black text-sm text-center ">{Item.name}</p>
            </div>
            <p className="text-xs mt-2">
              {Item.description}
            </p>
          </HoverCardContent>
        </HoverCard>
        <div
          className="h-[76px] w-[208px] bg-no-repeat bg-center bg-cover flex items-center justify-center mt-3 "
          style={{
            backgroundImage: "url('/assets/gallery/mementotextbox.png')",
          }}
        >
          <p className="text-white text-xs text-center">{Item.name}</p>
        </div>
      </div>
    </div>
  );
}

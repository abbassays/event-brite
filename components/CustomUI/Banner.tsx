import Image from "next/image";
import React from "react";

const Banner = ({ link, alt }: { link: string; alt?: string }) => {
  return (
    <div className="w-full mx-auto relative overflow-hidden aspect-[12/4] md:aspect-[16/4]">
      <Image
        src={link}
        alt={alt || "Picture here"}
        fill
        className="object-cover border"
        priority
      />
      <div className="w-full absolute z-10 text-3xl sm:text-5xl xl:text-7xl font-medium left-1/2 -translate-x-1/2 text-center bottom-6">
        <p className="text-white z-20 absolute left-1/2 -translate-x-1/2 w-full">
          YOU'VE GOT PLANS
        </p>
        <p className="text-black translate-y-1 translate-x-1">
          YOU'VE GOT PLANS
        </p>
      </div>
    </div>
  );
};

export default Banner;

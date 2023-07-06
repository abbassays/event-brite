import Image from "next/image";
import React from "react";

const ImageContainer = ({ link, alt }: { link: string; alt?: string }) => {
  return (
    <div className="w-full xl:max-w-7xl md:max-w-5xl sm:max-w-xl max-w-md mx-auto relative overflow-hidden aspect-square md:aspect-[16/9] xl:aspect-[16/7]">
      <Image
        src={link}
        alt={alt || "Picture here"}
        fill
        className="object-cover border blur-md"
      />
      <Image
        src={link}
        alt={alt || "Picture here"}
        fill
        className="object-contain z-10"
      />
    </div>
  );
};

export default ImageContainer;

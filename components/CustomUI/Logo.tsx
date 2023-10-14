import { cn } from "@/utils";
import Image from "next/image";
import React from "react";

type Props = {
  className?: string;
};

const Logo = ({ className }: Props) => {
  return (
    <div className={cn("relative w-32 aspect-[4/2]", className)}>
      <Image src="/images/logo.png" alt="Logo" fill />
    </div>
  );
};

export default Logo;

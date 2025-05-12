import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2 text-black font-semibold text-lg">
      <Image
        src="/images/site/TheME.webp" 
        alt="Pooja's Blog Logo"
        width={40}
        height={40}
        className="rounded-full"
      />
      {/* <span>Pooja's Blog</span> */}
    </div>
  );
};

export default Logo;

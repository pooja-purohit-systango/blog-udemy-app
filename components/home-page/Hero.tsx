import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16 px-6 bg-gray-900">
      <Image
        src="/images/site/TheME.webp"
        alt="The ME"
        width={200}
        height={200}
        className="shadow-xl rounded-full"
      />
      <h1 className="text-4xl font-semibold mt-6 text-white">Hello, I'm Pooja</h1>
      <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
        I'm a passionate web developer who writes about modern web technologies,
        especially front-end frameworks like React, Next.js, and more.
      </p>
    </section>
  );
};

export default Hero;

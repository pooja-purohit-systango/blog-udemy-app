import Image from "next/image";
import React from "react";
import FeaturedPosts from "./FeaturedPosts";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-12 px-4 bg-black-100">
      <Image
        src="/images/site/TheME.jpeg"
        alt="The ME"
        width={200}
        height={200}
        className="shadow-lg"
      />
      <h1 className="text-4xl font-bold mt-6 text-white">Hello, I'm Pooja</h1>
      <p className="text-lg text-gray-700 mt-4 max-w-xl">
        I'm a passionate web developer who writes about modern web technologies,
        especially front-end frameworks like React, Next.js, and more.
      </p>

    </section>
  );
};

export default Hero;

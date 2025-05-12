import Image from "next/image";
import React from "react";

const PostHeader = (props: any) => {
  const { title, image } = props;

  return (
    <header className="text-center p-8 bg-gray-100 rounded-xl shadow-md mb-8">
      <h1 className="text-4xl font-semibold text-gray-800 mb-4">{title}</h1>
      <Image
        src={`/images/posts/${image}`}
        height={200}
        width={300}
        alt="The post"
        className="rounded-lg object-cover mx-auto"
      />
    </header>
  );
};

export default PostHeader;

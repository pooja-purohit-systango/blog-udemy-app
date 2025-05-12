import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostItem = (props: any) => {
  const post = props.post;

  return (
    <li className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link href={`/posts/${post.slug}`} className="block hover:bg-gray-50 transition-colors">
        <div className="w-full">
          <Image
            src={`/images/posts/${post.image}`}
            alt={post.title}
            width={600}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-800 mb-1">{post.title}</h3>
          <time className="text-sm text-gray-500">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <p className="mt-3 text-gray-600">{post.excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;

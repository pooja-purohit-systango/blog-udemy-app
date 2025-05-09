import React from "react";
import PostItem from "./PostItem";

const PostsList = (props: any) => {
  const posts = props.posts;

  return (
    <section className="py-10 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800"></h2>
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((item: any) => (
          <PostItem key={item.slug} post={item} />
        ))}
      </ul>
    </section>
  );
};

export default PostsList;

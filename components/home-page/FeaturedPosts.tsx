import React from 'react';
import PostsList from '../posts/PostsList';
import { Post } from '@/types/post-type';

interface FeaturedPostsProps {
  posts: Post[];
}

const FeaturedPosts = (props: FeaturedPostsProps) => {
  const posts = props.posts;

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Featured Posts
        </h2> */}
        <PostsList posts={posts} />
      </div>
    </section>
  );
};

export default FeaturedPosts;

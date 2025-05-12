import AllPosts from '@/components/posts/AllPosts'
import PostsList from '@/components/posts/PostsList'
import { getAllPost } from '@/lib/post-util';
import { Post } from '@/types/post-type';
import React from 'react'

const AllPostspPage = () => {
  const posts = getAllPost();

  return (
      <div className="w-full max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          All Posts
        </h1> */}

        <AllPosts posts={posts} />
      </div>
  )
}

export default AllPostspPage

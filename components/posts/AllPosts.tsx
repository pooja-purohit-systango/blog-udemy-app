import React from 'react'
import PostsList from './PostsList'
import { Post } from '@/types/post-type'

interface AllPostProps {
  posts: Post[]
}

const AllPosts = (props: AllPostProps) => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        All Posts
      </h1>
      <PostsList posts={props.posts} />
    </section>
  )
}

export default AllPosts

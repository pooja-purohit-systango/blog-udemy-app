import AllPosts from '@/components/posts/AllPosts'
import PostsList from '@/components/posts/PostsList'
import { getAllPost } from '@/lib/post-util';
import { Post } from '@/types/post-type';
import React from 'react'

const AllPostspPage = () => {
   const posts = getAllPost();

  //  console.log("posts in get all post page", posts)
  return (
    <>
     <AllPosts posts =  {posts}/>
    </>
  )
}

export default AllPostspPage
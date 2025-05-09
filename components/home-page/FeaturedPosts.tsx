import React from 'react'
import PostsList from '../posts/PostsList'
import { Post } from '@/types/post-type';


interface FeaturedPostsProps {
    posts: Post[];
  }

const FeaturedPosts = (props : FeaturedPostsProps) => {
    const posts =  props.posts; 
  return (
    <>
    <section>
        <h1>Featured Posts</h1>
        <PostsList posts ={posts} />
    </section>
    </>
   
  )
}

export default FeaturedPosts
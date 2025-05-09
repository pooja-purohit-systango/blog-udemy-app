import React from 'react'
import PostsList from './PostsList'
import { Post } from '@/types/post-type'

interface allPostProps {
    posts : Post[]
}

const AllPosts = (props : allPostProps) => {
  return (
    <section>
        <h1>All Posts</h1>
        <PostsList posts = {props.posts}/>
    </section>
  )
}

export default AllPosts
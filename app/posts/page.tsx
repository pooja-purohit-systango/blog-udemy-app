import AllPosts from '@/components/posts/AllPosts'
import PostsList from '@/components/posts/PostsList'
import { Post } from '@/types/post-type';
import React from 'react'

const AllPostspPage = () => {
    const DUMMY_POSTS: Post[] = [
        {
          id: 'p1',
          title: 'Getting Started with Next.js',
          date: '2025-05-01',
          image: '/images/posts/nextjs.jpg',
          excerpt: 'Learn the basics of Next.js in this introductory post.',
          slug: 'getting-started-nextjs',
          content:''
        },
      ];
  return (
    <>
     <AllPosts posts =  {DUMMY_POSTS}/>
    </>
  )
}

export default AllPostspPage
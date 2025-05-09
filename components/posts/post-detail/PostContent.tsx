import React from 'react';
import PostHeader from './PostHeader';
import { Post } from '@/types/post-type';
import ReactMarkdown from 'react-markdown'
const DUMMY_POSTS: Post[] = [
  {
    id: 'p1',
    title: 'Getting Started with Next.js',
    date: '2025-05-01',
    image: '/images/posts/getting-started-nextjs.png',
    excerpt: 'Learn the basics of Next.js in this introductory post.',
    slug: 'getting-started-nextjs',
     content: '# This is a first post' // ✅ Correct

  },
];

const PostContent = () => {
  return (
    <article className="max-w-2xl mx-auto my-8 p-4 bg-white shadow rounded-lg">
      <PostHeader
        title={DUMMY_POSTS[0].title}
        image={DUMMY_POSTS[0].image}
      />
      <div className="mt-6 text-gray-700 leading-relaxed">
        <ReactMarkdown>{DUMMY_POSTS[0].content}</ReactMarkdown>
      </div>
    </article>
  );
};

export default PostContent;

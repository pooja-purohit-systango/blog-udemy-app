import React from 'react';
import PostHeader from './PostHeader';
import { PostData } from '@/lib/post-util';
import ReactMarkdown from 'react-markdown';

const PostContent = ({ postDetail }: { postDetail: PostData }) => {
  console.log("post content page", postDetail);

  return (
    <article className="max-w-2xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
      <PostHeader
        title={postDetail.title}
        image={postDetail.image}
      />
      <div className="mt-6 text-gray-700 leading-relaxed space-y-4">
        <ReactMarkdown>{postDetail.content}</ReactMarkdown>
      </div>
    </article>
  );
};

export default PostContent;

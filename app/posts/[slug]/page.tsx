import PostContent from '@/components/posts/post-detail/PostContent';
import { getPostData } from '@/lib/post-util';
import React from 'react';

const PostsDetailPage = ({ params }: any) => {
  const { slug } = params;
  const postDetail = getPostData(slug);

  console.log("post detail page", postDetail);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-6">
          Post Details
        </h1>
        <PostContent postDetail={postDetail} />
      </div>
    </div>
  );
}

export default PostsDetailPage;

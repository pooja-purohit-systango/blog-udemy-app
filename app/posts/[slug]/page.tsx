import PostContent from '@/components/posts/post-detail/PostContent';
import { getPostData } from '@/lib/post-util';
import React from 'react';

const PostsDetailPage = ({ params }: any) => {
  const { slug } = params; 
  const postDetail = getPostData(slug);

  console.log("post detail page", postDetail)

  return (
    <>
      <div>PostsDetailPage</div>
      <PostContent postDetail={postDetail} />
    </>
  );
}

export default PostsDetailPage;

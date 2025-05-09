import FeaturedPosts from "@/components/home-page/FeaturedPosts";
import Hero from "@/components/home-page/Hero";
import { Post } from "@/types/post-type";


export default function Home() {
  const DUMMY_POSTS: Post[] = [
    {
      id: 'p1',
      title: 'Getting Started with Next.js',
      date: '2025-05-01',
      image: '/images/posts/nextjs.jpg',
      excerpt: 'Learn the basics of Next.js in this introductory post.',
      slug: 'getting-started-nextjs',
      content: ''
    },
  ];

  return (
    <div>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </div>
  );
}

// app/page.tsx
import { getAllPost, getFeaturedPosts } from "@/lib/post-util";
import Hero from "@/components/home-page/Hero";
import FeaturedPosts from "@/components/home-page/FeaturedPosts";

export const revalidate = 60; // ISR every 60 seconds

export default async function Home() {
  const posts = getFeaturedPosts();

  return (
    <div>
      <Hero />
      <FeaturedPosts posts={posts} />
    </div>
  );
}

// app/page.tsx
import { getAllPost, getFeaturedPosts } from "@/lib/post-util";
import Hero from "@/components/home-page/Hero";
import FeaturedPosts from "@/components/home-page/FeaturedPosts";

export const revalidate = 60; // ISR every 60 seconds

export default async function Home() {
  const posts = getFeaturedPosts();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Posts Section */}
      <section className="py-12 bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Featured Posts
          </h2>
          <FeaturedPosts posts={posts} />
        </div>
      </section>

      
    </div>
  );
}

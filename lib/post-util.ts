import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postPath = path.join(process.cwd(), 'content', 'posts');

export interface PostData {
    id: string;
    title: string;
    date: string;
    image: string;
    excerpt: string;
    slug: string;
    content: string;
    isFeatured: boolean
}

export function getPostData(slug: string): PostData {
    const filePath = path.join(postPath, `${slug}`); 
    const fileData = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileData);

    // console.log("data in getPostData" , data) ; 

    if (!data) {
        throw new Error(`No front matter found in file: ${slug}.md`);
      }
  
    const postData: PostData = {
      id: slug,
      slug: slug,
      title: data.title || "untitled",
      date: data.date,
      image: data.image,
      excerpt: data.excerpt,
      content: content,
      isFeatured: data.isFeatured
    };
  
    return postData;
  }
  

export function getAllPost(): PostData[] {
  const postsFiles = fs.readdirSync(postPath);

  const allPosts = postsFiles.map(postFile => getPostData(postFile));

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}


export function getFeaturedPosts() {
    const allPosts = getAllPost();

    const featuredPosts = allPosts.filter((post) => post.isFeatured === true)

    return featuredPosts;
}

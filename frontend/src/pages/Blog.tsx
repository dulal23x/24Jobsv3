import React from 'react';
import { Link } from 'wouter';
import { blogPosts, BlogPost, ContentItem } from '../blogData';

// Helper function to find the first image URL in the content array
const getFirstImage = (content: ContentItem[]): string | undefined => {
  const imageItem = content.find(item => item.type === 'image');
  return imageItem?.value;
};

// Helper function to get the first paragraph for summary
const getFirstParagraph = (content: ContentItem[]): string => {
  const paragraphItem = content.find(item => item.type === 'paragraph');
  return paragraphItem?.value || ''; // Return empty string if no paragraph found
};

export default function Blog() {
  // Take only the first 5 posts
  const postsToShow = blogPosts.slice(0, 5);

  return (
    <div className="container mx-auto max-w-[1180px] px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {postsToShow.map((post: BlogPost) => {
          const firstImage = getFirstImage(post.content);
          const summaryText = getFirstParagraph(post.content).substring(0, 100); // Approx 50 words might be ~100-150 chars

          return (
            <div key={post.id} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col">
              {firstImage && (
                <img src={firstImage} alt={post.title} className="w-full h-48 object-cover" />
              )}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-700 mb-4 flex-grow">{summaryText}...</p>
                <Link href={`/blog/${post.id}`} className="mt-auto inline-block bg-[#0D6EF7] text-white text-center font-semibold py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200">
                  Read Article
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

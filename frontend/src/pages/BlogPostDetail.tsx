import React from 'react';
import { useParams, Link } from 'wouter';
import { blogPosts, BlogPost, ContentItem } from '../blogData';

export default function BlogPostDetail() {
  const { id } = useParams();
  const post: BlogPost | undefined = blogPosts.find(post => post.id === id);

  if (!post) {
    return <div className="container mx-auto py-8 text-center">Post not found.</div>;
  }

  const renderContentItem = (item: ContentItem, index: number) => {
    switch (item.type) {
      case 'heading':
        return <h2 key={index} className="text-2xl font-semibold mt-6 mb-3">{item.value.substring(3)}</h2>;
      case 'paragraph':
        return (
          <p 
            key={index} 
            className="text-gray-700 mb-4" 
            dangerouslySetInnerHTML={{ __html: item.value }}
          />
        );
      case 'image':
        return <img key={index} src={item.value} alt={`${post.title} image ${index}`} className="w-full h-auto rounded-lg my-6" />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto max-w-[800px] px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
      {post.content.map(renderContentItem)}
      <div className="mt-8">
        <Link href={post.backlink.url} className="text-[#0D6EF7] hover:underline text-lg font-medium">
          &larr; {post.backlink.text}
        </Link>
      </div>
    </div>
  );
} 
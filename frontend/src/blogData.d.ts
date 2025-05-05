export interface ContentItem {
  type: 'heading' | 'paragraph' | 'image';
  value: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: ContentItem[];
  backlink: { text: string; url: string };
}

export const blogPosts: BlogPost[]; 
import { useState, useEffect } from 'react';
import { Instagram } from 'lucide-react';
import { fetchInstagramPosts } from '@/utils/instagram';

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string | null;
}

export const InstagramFeed = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  
  useEffect(() => {
    fetchInstagramPosts().then(posts => setPosts(posts.slice(0, 3)));
  }, []);

  if (!posts.length) return null;

  return (
    <div className="container px-4 py-8 mx-auto">
      <a href="https://instagram.com/hd.tradeservices" 
         className="flex items-center justify-center gap-2 mb-6"
         target="_blank"
         rel="noopener noreferrer">
        <Instagram className="h-5 w-5 text-teal-600" />
        <span className="font-semibold hover:text-teal-600">@hd.tradeservices</span>
      </a>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map(post => (
          <a key={post.id} 
             href={post.permalink}
             target="_blank"
             rel="noopener noreferrer"
             className="aspect-square rounded-lg overflow-hidden hover:opacity-90">
            <img src={post.media_url} 
                 alt={post.caption || ''} 
                 className="object-cover w-full h-full" 
                 loading="lazy" />
          </a>
        ))}
      </div>
    </div>
  );
};
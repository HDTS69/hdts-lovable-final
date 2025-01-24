import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { PostGrid } from './instagram/PostGrid';
import { Instagram } from 'lucide-react';
import { LoadingPlaceholder } from "./instagram/LoadingPlaceholder";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string | null;
  timestamp: string;
}

export const InstagramFeed = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase
          .from('bookings')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(6);

        if (error) throw error;
        const formattedData = (data || []).map(post => ({
          id: post.id,
          media_url: post.files?.[0] || '',
          permalink: post.address,
          caption: post.message,
          timestamp: post.created_at,
        }));
        setPosts(formattedData);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch Instagram posts'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (error) return null;
  if (isLoading) return null;
  if (posts.length === 0) return null;

  return (
    <section className="w-full py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-6 md:mb-8">
          <Instagram className="h-5 w-5 md:h-6 md:w-6 text-teal-600" />
          <a 
            href="https://instagram.com/hd.tradeservices" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-base md:text-lg font-semibold text-gray-900 hover:text-teal-600 transition-colors"
          >
            @hd.tradeservices
          </a>
        </div>
        <div className="grid grid-cols-3 gap-2 md:gap-4">
          {isLoading ? (
            <LoadingPlaceholder />
          ) : error ? (
            <div className="col-span-3">
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  {error}. Please visit our <a 
                    href="https://instagram.com/hd.tradeservices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline underline-offset-4"
                  >
                    Instagram page
                  </a> directly.
                </AlertDescription>
              </Alert>
            </div>
          ) : posts.length > 0 ? (
            <PostGrid posts={posts} />
          ) : (
            <div className="col-span-3 text-center py-8">
              <p className="text-gray-500 mb-2">No posts available at the moment.</p>
              <a 
                href="https://instagram.com/hd.tradeservices"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700 underline"
              >
                Visit our Instagram page
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
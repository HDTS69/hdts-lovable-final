import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";

export interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
}

export const useInstagramFeed = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        console.log('Fetching Instagram token...');
        const { data: tokenData, error: tokenError } = await supabase.functions.invoke('get-instagram-token');
        
        if (tokenError) {
          console.error("Error fetching Instagram token:", tokenError);
          setError("Unable to fetch Instagram feed at this time");
          toast({
            title: "Error",
            description: "Unable to load Instagram feed",
            variant: "destructive",
          });
          setIsLoading(false);
          return;
        }

        if (!tokenData?.accessToken) {
          console.error("No access token received from edge function");
          setError("Instagram configuration is incomplete");
          setIsLoading(false);
          return;
        }

        console.log('Successfully retrieved Instagram token, fetching posts...');
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=${tokenData.accessToken}`
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Instagram API response:', data);
        
        if (data.data && Array.isArray(data.data)) {
          setPosts(data.data);
        } else {
          console.error("Unexpected Instagram API response format:", data);
          setError("Invalid response from Instagram");
        }
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
        setError("Failed to load Instagram posts");
        toast({
          title: "Error",
          description: "Failed to load Instagram feed",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  return { posts, isLoading, error };
};
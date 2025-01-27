import { supabase } from '@/integrations/supabase/client';

export async function fetchInstagramPosts() {
  const { data } = await supabase.functions.invoke('get-instagram-token');
  const posts = await fetch(
    `https://graph.instagram.com/me/media?fields=id,media_url,permalink,caption&access_token=${data?.accessToken}`
  ).then(r => r.json());
  return posts?.data?.slice(0, 6) || [];
} 
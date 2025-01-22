import type { InstagramPost } from "@/hooks/useInstagramFeed";

interface PostGridProps {
  posts: InstagramPost[];
}

export const PostGrid = ({ posts }: PostGridProps) => (
  posts.slice(0, 3).map((post) => (
    <a
      key={post.id}
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className="relative aspect-square overflow-hidden rounded-lg group"
    >
      <img
        src={post.media_url}
        alt={`Instagram post - ${post.caption?.slice(0, 100) || 'HD Trade Services update'}`}
        loading="lazy"
        decoding="async"
        width={400}
        height={400}
        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
    </a>
  ))
);
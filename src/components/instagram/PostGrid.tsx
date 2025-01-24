import type { InstagramPost } from "../InstagramFeed";

interface PostGridProps {
  posts: InstagramPost[];
}

export const PostGrid = ({ posts }: PostGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {posts.map((post) => (
        <a
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative aspect-square overflow-hidden rounded-lg hover:opacity-90 transition-opacity"
        >
          <img
            src={post.media_url}
            alt={post.caption || 'Instagram post'}
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </a>
      ))}
    </div>
  );
};
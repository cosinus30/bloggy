import PostItem from "./post-item";

export default function PostsGrid({ posts }) {
  return (
    <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3 my-8">
      {posts.map((post) => {
        return <PostItem post={post} key={post.slug} />;
      })}
    </div>
  );
}

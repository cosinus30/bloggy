import PostsGrid from "../posts/posts-grid";

export default function FeaturedPosts({ posts }) {
    console.log(posts)

  return (
    <section>
      <h2 className="text-4xl text-center mt-8">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}

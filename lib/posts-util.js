import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content", "posts");

export const getAllPosts = async () => {
  const files = await fs.promises.readdir(postsDirectory);
  const posts = await Promise.all(
    files.map(async (file) => {
      const post = await getPostData(file);
      return post;
    })
  );
  return posts;
};

export const getPostData = async (fileName) => {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = await fs.promises.readFile(filePath, "utf8");
  const { data: metadata, content: post } = matter(fileContent);
  const postSlug = fileName.replace(/\.md$/, "");
  const image = {...metadata.image};

  return {
    slug: postSlug,
    ...metadata,
    ...image,
    post,
  };
};

export const getFeaturedPosts = async () => {
  const posts = await getAllPosts();
  return posts.filter((post) => post.isFeatured);
};

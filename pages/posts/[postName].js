import Head from "next/head";
import PostContent from "../../components/posts/post-detail/post-content";
import { getAllPostNames, getPostData } from "../../lib/posts-util";

export default function PostDetail({ image, title, date, post }) {
  return (
    <div className="max-w-[800px] mx-auto py-8">
      <Head>
        <title>All Articles</title>
        <meta name="description" content="You can see all my articles here." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostContent image={image} title={title} date={date} content={post} />
    </div>
  );
}

export async function getStaticProps(context) {
  const postName = context.params.postName;
  const { title, date, image, post } = await getPostData(postName);
  return {
    props: {
      title,
      date,
      image,
      post,
    },
  };
}

export async function getStaticPaths(context) {
  const allFiles = await getAllPostNames();
  const paths = allFiles.map((file) => ({
    params: {
      postName: file,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

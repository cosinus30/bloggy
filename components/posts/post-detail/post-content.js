import PostHeader from "./post-header";

export default function PostContent({ image, title, date, summary }) {
  return (
    <article className="flex flex-col gap-y-12">
      <PostHeader image={DUMMY_POST.image} title={DUMMY_POST.title} />
      <div>{DUMMY_POST.content}</div>
    </article>
  );
}

const DUMMY_POST = {
  title: "Post 4",
  slug: "post-4",
  date: "2020-01-01",
  summary: "This is a post",
  content: "# This is a first post I wrote here!",
  image: {
    src: "/me.jpeg",
    alt: "Image showing Yunus Kerem Turk",
  },
};

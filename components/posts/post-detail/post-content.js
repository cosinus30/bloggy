import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";

export default function PostContent({ image, title, date, content }) {
  return (
    <article className="flex flex-col gap-y-12">
      <PostHeader image={image} title={title} />
      <ReactMarkdown className="prose prose-invert">{content}</ReactMarkdown>
    </article>
  );
}
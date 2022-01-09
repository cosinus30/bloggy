import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

export default function PostContent({ image, title, date, content }) {
  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div>
            <Image
              src={`${image.properties.src}`}
              alt={image.alt}
              width={800}
              height={500}
              layout="responsive"
              className="object-cover rounded-lg"
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
    
  };

  return (
    <article className="flex flex-col gap-y-12">
      <PostHeader image={image} title={title} />
      <ReactMarkdown components={customRenderers} className="prose prose-invert mx-auto">{content}</ReactMarkdown>
    </article>
  );
}

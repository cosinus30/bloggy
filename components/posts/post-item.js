import Image from "next/image";
import Link from "next/link";

export default function PostItem({ post }) {
  const { title, image, summary, date, slug } = post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link href={`/posts/${slug}`}>
      <a className="hover:shadow-lg hover:shadow-black">
        <div>
          <Image
            src={image.src}
            alt={image.alt}
            width={600}
            height={400}
            className="rounded-t-lg object-cover h-full w-full"
          />
        </div>
        <div className="mx-3 my-4 flex flex-col rounded-b-lg">
          <div className="flex flex-row justify-between align-middle">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <time className="self-end text-xs text-zinc-500 italic my-auto">{formattedDate}</time>
          </div>
          <p className="mt-2 text-lg">{summary}</p>
        </div>
      </a>
    </Link>
  );
}

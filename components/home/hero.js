import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="flex flex-col lg:flex-row lg:items-center gap-y-4 text-zinc-200 border-zinc-200 my-4">
        <div className="mx-auto my-8 lg:mx-0 w-[480px] flex-shrink">
          <Image
            src={"/me.jpeg"}
            width={600}
            height={600}
            alt="Image showing Yunus Kerem Turk"
            className="rounded-full object-cover h-full w-full"
          />
        </div>
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start mx-8 gap-y-8">
          <h1 className="text-4xl lg:text-6xl font-bold">Hi, I'm Kerem</h1>
          <p className="text-lg font-light">
            This blog is my first project with Next.js. So I am really excited to see what I can do with it.
          </p>
        </div>
      </section>
      <hr className="border-zinc-200 mb-4" />
    </>
  );
}

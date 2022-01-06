import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t-[1px] border-zinc-800 shadow-lg shadow-zinc-800/10 p-8">
      <div className="flex flex-row justify-between">
        <p>
          Made with Next.js by <Link href="/">Yunus Kerem Turk</Link>
        </p>
        <a href="https://www.github.com/cosinus30" target="_blank">
          Catch me on Github
        </a>
      </div>
    </footer>
  );
}

import Link from "next/link";


export default function Header() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:px-10">
      <Link className="text-lg font-black tracking-tight" href="/">
        Brianna Thomas
      </Link>
      <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
        <Link className="transition-colors hover:text-violet-700" href="/Projects">
          Projects
        </Link>
        <Link className="transition-colors hover:text-violet-700" href="/AboutMe">
          About
        </Link>
        <Link className="transition-colors hover:text-violet-700" href="/Contact">
          Contact
        </Link>
      </nav>
      <Link
        className="rounded-full bg-violet-500 px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
        href="/Contact"
      >
        Let&apos;s Build
      </Link>
    </header>
  );
}

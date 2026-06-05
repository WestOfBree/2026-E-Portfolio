import Link from "next/link";
import type { ToolkitColumn } from "./homeData";

type ToolkitAndCtaProps = {
  columns: ToolkitColumn[];
};

const ToolkitAndCta = ({ columns }: ToolkitAndCtaProps) => {
  return (
    <section className="pb-10 pt-6">
      <div className="stagger-fade rounded-3xl border border-violet-100 bg-white/90 p-8 shadow-xl shadow-violet-200/35 [--stagger:6]">
        <h2 className="text-3xl font-black md:text-4xl">The toolkit I&apos;ve built</h2>
        <p className="mt-3 max-w-3xl text-indigo-800/85">
          A blend of frontend craft and the people-and-precision skills that years of careful work taught me.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-black uppercase tracking-[0.16em] text-violet-700">{column.title}</h3>
              <ul className="mt-3 space-y-2.5">
                {column.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-indigo-800/85">
                    <span className={`h-2 w-2 rounded-full ${column.dot}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="stagger-fade mt-8 overflow-hidden rounded-3xl bg-linear-to-r from-violet-600 via-fuchsia-500 to-pink-500 px-6 py-10 text-center shadow-2xl shadow-violet-300/40 [--stagger:7] md:px-10 md:py-14">
        <h2 className="text-3xl font-black text-white md:text-5xl">Let&apos;s create something unforgettable.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/90">
          I&apos;m always excited to connect with fellow creatives and builders, and I&apos;m open to pro bono projects for
          small businesses.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/Contact"
            className="rounded-full bg-white px-6 py-3 text-sm font-bold text-violet-700 transition-transform hover:-translate-y-1"
          >
            Say Hello
          </Link>
          <a
            href="https://github.com/WestOfBree"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/60 bg-white/15 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/25"
          >
            View GitHub
          </a>
          <Link
            href="/AboutMe"
            className="rounded-full border border-white/60 bg-white/15 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/25"
          >
            About Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ToolkitAndCta;

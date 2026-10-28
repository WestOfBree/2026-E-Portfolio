import Link from "next/link";

export type ProjectEntry = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  tag: string;
  accent: string;
  year: string;
  role: string;
  stack: string[];
  challenge: string;
  solution: string;
  impact: string;
  liveUrl?: string;
  githubUrl?: string;
};

type ProjectShellProps = {
  project: ProjectEntry;
};

export default function ProjectShell({ project }: ProjectShellProps) {
  return (
    <article className="rounded-3xl border border-violet-100 bg-white/90 p-6 shadow-xl shadow-violet-200/40 md:p-8">
      <Link
        href="/Projects"
        className="inline-flex items-center text-sm font-bold text-violet-600 transition-colors hover:text-pink-500"
      >
        &larr; Back to all projects
      </Link>

      <div
        className={`mt-5 h-2 w-28 rounded-full bg-gradient-to-r ${project.accent}`}
      />

      <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.14em] text-violet-500">
        {project.tag}
      </p>
      <h1 className="mt-2 text-3xl font-black leading-tight md:text-5xl">
        {project.title}
      </h1>
      <p className="mt-3 max-w-3xl text-lg text-indigo-800/85">{project.tagline}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-pink-100 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-violet-700">
            Year
          </p>
          <p className="mt-1 text-lg font-black text-indigo-900">{project.year}</p>
        </div>
        <div className="rounded-2xl bg-blue-100 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-violet-700">
            Role
          </p>
          <p className="mt-1 text-lg font-black text-indigo-900">{project.role}</p>
        </div>
        <div className="rounded-2xl bg-violet-100 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-violet-700">
            Stack
          </p>
          <p className="mt-1 text-sm font-bold text-indigo-900">
            {project.stack.join(" · ")}
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <section className="rounded-2xl border border-violet-100 bg-white p-5">
          <h2 className="text-lg font-black text-indigo-900">Challenge</h2>
          <p className="mt-2 text-sm text-indigo-800/90">{project.challenge}</p>
        </section>
        <section className="rounded-2xl border border-violet-100 bg-white p-5">
          <h2 className="text-lg font-black text-indigo-900">Solution</h2>
          <p className="mt-2 text-sm text-indigo-800/90">{project.solution}</p>
        </section>
        <section className="rounded-2xl border border-violet-100 bg-white p-5">
          <h2 className="text-lg font-black text-indigo-900">Impact</h2>
          <p className="mt-2 text-sm text-indigo-800/90">{project.impact}</p>
        </section>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            className="rounded-full bg-pink-400 px-5 py-2.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
            target="_blank"
            rel="noreferrer"
          >
            View Live
          </a>
        ) : null}
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            className="rounded-full border border-blue-200 bg-white px-5 py-2.5 text-sm font-bold text-indigo-800 transition-colors hover:border-violet-400"
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>
        ) : null}
      </div>

      <p className="mt-8 text-sm text-indigo-700/90">{project.summary}</p>
    </article>
  );
}

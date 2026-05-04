import Link from "next/link";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { projects } from "./projectData";

export default function ProjectsPage() {
	return (
		<div className="relative isolate overflow-hidden bg-gradient-to-b from-pink-50 via-blue-50 to-violet-50 text-indigo-950">
			<div className="pointer-events-none absolute inset-0 -z-10 opacity-20 bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_10px,rgba(67,56,202,0.08)_11px)]" />
			<div className="pointer-events-none absolute inset-0 -z-10">
				<div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-pink-300/40 blur-3xl floating-blob" />
				<div className="absolute right-0 top-28 h-80 w-80 rounded-full bg-sky-300/40 blur-3xl floating-blob [animation-delay:1.8s]" />
				<div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-violet-300/35 blur-3xl floating-blob [animation-delay:0.8s]" />
				<div className="absolute -left-10 top-16 h-72 w-72 rounded-[3rem] border border-rose-200/70 bg-white/40" />
				<div className="absolute right-10 top-24 h-44 w-44 rotate-12 rounded-3xl border border-sky-200/80 bg-sky-100/50" />
				<div className="absolute bottom-16 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full border border-cyan-200/80 bg-cyan-100/40" />
			</div>

			<Header />

			<main className="mx-auto w-full max-w-6xl px-6 pb-12 md:px-10">
				<section className="py-10 md:py-16">
					<p className="inline-flex rounded-full border border-violet-200 bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-violet-700 backdrop-blur">
						Project Library
					</p>
					<h1 className="mt-4 text-balance text-4xl font-black md:text-6xl">
						Explore Each Build In Detail
					</h1>
					<p className="mt-4 max-w-2xl text-lg text-indigo-800/85">
						Every project page follows a consistent shell so case studies feel
						cohesive while still highlighting each product&apos;s unique goals.
					</p>
				</section>

				<section className="grid gap-5 pb-8 md:grid-cols-2">
					{projects.map((project, index) => (
						<article
							key={project.slug}
							className="stagger-fade group rounded-3xl border border-violet-100 bg-white/90 p-6 shadow-lg shadow-violet-200/40"
							style={{ ["--stagger" as string]: String(index + 1) }}
						>
							<div
								className={`mb-4 h-2 w-24 rounded-full bg-gradient-to-r ${project.accent}`}
							/>
							<p className="text-xs font-extrabold uppercase tracking-[0.14em] text-violet-500">
								{project.tag}
							</p>
							<h2 className="mt-2 text-2xl font-black">{project.title}</h2>
							<p className="mt-3 text-indigo-800/85">{project.tagline}</p>
							<Link
								href={`/Projects/${project.slug}`}
								className="mt-5 inline-flex items-center text-sm font-bold text-pink-500 transition-colors group-hover:text-violet-600"
							>
								Open project <span className="ml-1">-&gt;</span>
							</Link>
						</article>
					))}
				</section>
			</main>

			<Footer />
		</div>
	);
}

import Link from "next/link";
import Image from "next/image";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Headshot from "../../public/photos/Headshot.jpg";

const strengths = [
	{
		title: "Curious Builder",
		description:
			"I ask lots of questions up front and use feedback to shape features that are simple and useful.",
	},
	{
		title: "Frontend Foundations",
		description:
			"I focus on readable components, responsive layouts, and clear hierarchy while improving my craft each project.",
	},
	{
		title: "Growth Mindset",
		description:
			"I treat every build as a learning opportunity and document what worked so I can level up quickly.",
	},
];

const nowList = [
	"Building small projects weekly to strengthen TypeScript and component architecture skills.",
	"Practicing accessibility basics like labels, keyboard navigation, and color contrast.",
	"Learning to turn design ideas into production-ready UI with cleaner code structure.",
];

const characterLevel = (() => {
	const birthDate = new Date(1996, 12, 27);
	const today = new Date();
	let age = today.getFullYear() - birthDate.getFullYear();
	const monthDiff = today.getMonth() - birthDate.getMonth();
	if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}
	return age;
})();

const toolbox = [
	"Next.js",
	"TypeScript",
	"Tailwind",
	"Firebase",
	"React",
	"Procreate",
    "JavaScript",
    "HTML/CSS",
];

const characterStats = [
	{ label: "UI Craft", value: 68, widthClass: "w-[68%]" },
	{ label: "Motion", value: 54, widthClass: "w-[54%]" },
	{ label: "Accessibility", value: 61, widthClass: "w-[61%]" },
	{ label: "Frontend Systems", value: 65, widthClass: "w-[65%]" },
];

const milestones = [
	{
		period: "2026",
		title: "First production-style portfolio",
		detail:
			"Built and refined portfolio case studies to better explain goals, process, and technical decisions.",
	},
	{
		period: "2025",
		title: "Started building with FES Institute",
		detail:
			"Learned APIs, Firebase, Next.js, React, and junior frontend development skills through class and personal projects focused on data fetching, UI state, and responsive design.",
	},
	{
		period: "Always",
		title: "Learning in public",
		detail:
			"I continue practicing through hands-on projects, code reviews, and consistent iteration.",
	},
];

const AboutMePage = () => {
	return (
		<div className="relative isolate overflow-hidden bg-linear-to-br from-rose-50 via-sky-50 to-cyan-100 text-indigo-950">
			<div className="pointer-events-none absolute inset-0 -z-10 opacity-20 bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_10px,rgba(67,56,202,0.08)_11px)]" />
			<div className="pointer-events-none absolute inset-0 -z-10">
				<div className="absolute -left-10 top-16 h-72 w-72 rounded-[3rem] border border-rose-200/70 bg-white/40" />
				<div className="absolute right-10 top-24 h-44 w-44 rotate-12 rounded-3xl border border-sky-200/80 bg-sky-100/50" />
				<div className="absolute bottom-16 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full border border-cyan-200/80 bg-cyan-100/40" />
			</div>

			<Header />

			<main id="about" className="mx-auto w-full max-w-6xl px-6 pb-12 md:px-10">
				<section className="py-10 md:py-14">
					<p className="stagger-fade inline-flex rounded-full border border-indigo-200 bg-white/85 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-indigo-700 backdrop-blur [--stagger:1]">
						Behind The Builder
					</p>
					<h1 className="stagger-fade mt-4 max-w-4xl text-balance text-4xl font-black leading-tight md:text-6xl [--stagger:2]">
						About Me
					</h1>
					<div className="stagger-fade mt-5 flex flex-wrap gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-indigo-700 [--stagger:3]">
						<span className="rounded-full border border-indigo-200 bg-white/85 px-3 py-1">
							Class: Junior Frontend Adventurer
						</span>
						<span className="rounded-full border border-emerald-200 bg-emerald-50/90 px-3 py-1 text-emerald-700">
							Status: Learning Active
						</span>
						<span className="rounded-full border border-rose-200 bg-rose-50/90 px-3 py-1 text-rose-700">
							Region: Portfolio Realm
						</span>
					</div>
				</section>

				<section className="grid items-start gap-6 pb-10 md:grid-cols-[0.75fr_1.25fr]">
					<aside className="stagger-fade relative rounded-3xl border border-indigo-100 bg-white/90 p-5 shadow-lg shadow-indigo-300/45 [--stagger:2]">
						<div className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-indigo-300" />
						<div className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-indigo-300" />
						<div className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-indigo-300" />
						<div className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-indigo-300" />
						<div className="mb-3 flex items-center justify-between rounded-xl border border-indigo-100 bg-indigo-50/60 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-indigo-700">
							<p>Character Profile</p>
							<p>Level {characterLevel}</p>
						</div>
						<div className="rounded-2xl border-2 border-dashed border-indigo-200 bg-linear-to-b from-white to-sky-50 p-4">
							<div
								role="img"
								aria-label="Headshot placeholder"
								className="flex aspect-4/5 items-center justify-center rounded-xl border border-indigo-100 bg-white text-center"
							>
								<div className="w-full h-full flex items-center justify-center overflow-hidden">
									<Image src="/photos/Headshot2.webp" alt="Headshot of Brianna Thomas" className="rounded-lg object-cover h-full w-full" width={350} height={320} />
								</div>
							</div>
						</div>
						<div className="mt-4 rounded-2xl bg-indigo-600 p-4 text-white">
							<p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-100">
								Quick Intro
							</p>
							<p className="mt-2 text-sm font-semibold">
								Entry-level frontend developer building confidence through real
								projects, mentorship, and steady iteration.
							</p>
						</div>
						<div className="mt-4 rounded-2xl border border-indigo-100 bg-white p-4">
							<p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-700">
								Attribute Bars
							</p>
							<div className="mt-3 space-y-3">
								{characterStats.map((stat) => (
									<div key={stat.label}>
										<div className="mb-1 flex items-center justify-between text-xs font-semibold text-indigo-800">
											<span>{stat.label}</span>
											<span>{stat.value}</span>
										</div>
										<div className="h-2 rounded-full bg-indigo-100">
											<div
												className={`h-full rounded-full bg-linear-to-r from-rose-300 via-indigo-400 to-sky-400 ${stat.widthClass}`}
											/>
										</div>
									</div>
								))}
							</div>
						</div>
					</aside>

					<div className="space-y-6">
						<article className="stagger-fade relative rounded-3xl border border-indigo-100 bg-white/90 p-6 shadow-lg shadow-indigo-300/45 [--stagger:3]">
							<div className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-indigo-300" />
							<div className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-indigo-300" />
							<div className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-indigo-300" />
							<div className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-indigo-300" />
							<p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-indigo-600">
								Lore Entry 01
							</p>
							<h2 className="text-2xl font-black md:text-3xl">
							About Me
							</h2>
							<p className="mt-4 text-indigo-800/85">
							I am an early-career frontend developer who enjoys turning
							ideas into clean, interactive web experiences. I focus on
							fundamentals first while building confidence in real project work.
							</p>
							<p className="mt-4 text-indigo-800/85">
								I am currently growing in component architecture, accessibility,
								and animation basics, and I value mentorship, feedback, and
								consistent practice.
							</p>
							<div className="mt-6 flex flex-wrap gap-3">
								<Link
									className="rounded-full bg-rose-400 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-rose-200/80 transition-transform hover:-translate-y-1"
									href="/Projects"
								>
									Browse Projects
								</Link>
								<Link
									className="rounded-full border border-indigo-200 bg-white px-6 py-3 text-sm font-bold text-indigo-800 transition-colors hover:border-rose-300"
									href="/Pets"
								>
									Meet My Pets
								</Link>
							</div>
						</article>

						<article className="stagger-fade relative rounded-3xl border border-cyan-200 bg-cyan-100/80 p-6 shadow-lg shadow-cyan-300/45 [--stagger:4]">
							<div className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-cyan-300" />
							<div className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-cyan-300" />
							<div className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-cyan-300" />
							<div className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-cyan-300" />
							<p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">
								Skill Tree
							</p>
							<h2 className="text-2xl font-black md:text-3xl">What I Bring</h2>
							<div className="mt-5 grid gap-4 sm:grid-cols-3">
								{strengths.map((strength) => (
									<div
										key={strength.title}
										className="rounded-2xl border border-cyan-200 bg-cyan-50/80 p-4"
									>
										<h3 className="text-base font-black text-indigo-950">
											{strength.title}
										</h3>
										<p className="mt-2 text-sm text-indigo-800/85">
											{strength.description}
										</p>
									</div>
								))}
							</div>
						</article>

						<article className="stagger-fade relative rounded-3xl border border-rose-100 bg-white/90 p-6 shadow-lg shadow-rose-300/45 [--stagger:5]">
							<div className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-rose-300" />
							<div className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-rose-300" />
							<div className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-rose-300" />
							<div className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-rose-300" />
							<p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-rose-700">
								Active Quests
							</p>
							<h2 className="text-2xl font-black md:text-3xl">Now</h2>
							<ul className="mt-5 space-y-3">
								{nowList.map((item) => (
									<li
										key={item}
										className="rounded-2xl border border-rose-100 bg-rose-50/50 p-4 text-indigo-900"
									>
										{item}
									</li>
								))}
							</ul>
						</article>
					</div>
				</section>

				<section className="grid items-start gap-6 pb-10 md:grid-cols-[1.15fr_0.85fr]">
					<article className="stagger-fade relative rounded-3xl border border-indigo-100 bg-white/90 p-6 shadow-lg shadow-indigo-300/45 [--stagger:6]">
						<div className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-indigo-300" />
						<div className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-indigo-300" />
						<div className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-indigo-300" />
						<div className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-indigo-300" />
						<h2 className="text-2xl font-black md:text-3xl">Journey</h2>
						<ol className="mt-5 space-y-3">
							{milestones.map((milestone) => (
								<li
									key={milestone.title}
									className="rounded-2xl border border-indigo-100 bg-indigo-50/40 p-4"
								>
									<p className="text-xs font-extrabold uppercase tracking-[0.16em] text-indigo-700">
										{milestone.period}
									</p>
									<h3 className="mt-1 text-lg font-black text-indigo-950">
										{milestone.title}
									</h3>
									<p className="mt-2 text-indigo-800/85">{milestone.detail}</p>
								</li>
							))}
						</ol>
					</article>

					<article className="stagger-fade relative self-start rounded-3xl border border-sky-200 bg-sky-100/80 p-6 shadow-lg shadow-sky-300/45 [--stagger:7]">
						<div className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-sky-300" />
						<div className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-sky-300" />
						<div className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-sky-300" />
						<div className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-sky-300" />
						<h2 className="text-2xl font-black md:text-3xl">Toolbox</h2>
						<p className="mt-2 text-sm text-indigo-800/80">
							Current loadout with room for one new skill.
						</p>
						<ul className="mt-4 grid grid-cols-2 gap-3">
							{toolbox.map((tool) => (
								<li
									key={tool}
									className="rounded-xl border border-sky-300 bg-white/95 px-3 py-3 text-sm font-semibold text-indigo-900"
								>
									{tool}
								</li>
							))}
							<li className="rounded-xl border border-dashed border-sky-400 bg-sky-50/80 px-3 py-3 text-sm font-semibold text-sky-700">
								+ New Skill Slot
							</li>
						</ul>
					</article>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default AboutMePage;

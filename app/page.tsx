import Link from "next/link";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ExperienceTimeline from "./Components/home/ExperienceTimeline";
import ToolkitAndCta from "./Components/home/ToolkitAndCta";
import { timelineItems, toolkitColumns } from "./Components/home/homeData";

const Home = () => {
  return (
    <div className="relative isolate overflow-hidden bg-linear-to-b from-pink-50 via-blue-50 to-violet-50 text-indigo-950">
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

      <main id="home" className="mx-auto w-full max-w-6xl px-6 pb-12 md:px-10">
        <section className="py-10 md:py-14">
          <p className="stagger-fade inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-100/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-violet-700 [--stagger:1]">
            <span className="h-2 w-2 rounded-full bg-violet-600" /> My Journey
          </p>
          <h1 className="stagger-fade mt-6 max-w-3xl text-balance text-4xl font-black leading-[0.98] md:text-7xl [--stagger:2]">
            From patient care to pixels.
          </h1>
          <p className="stagger-fade mt-6 max-w-3xl text-lg leading-relaxed text-indigo-800/85 [--stagger:3]">
            Every role has centered on solving real problems for real people. Precision diagnostics, meticulous records,
            and front-desk empathy became the foundation for building thoughtful and reliable interfaces.
          </p>
          <div className="stagger-fade mt-8 flex flex-wrap gap-3 [--stagger:4]">
            <Link
              href="#timeline"
              className="rounded-full bg-violet-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-violet-300/50 transition-transform hover:-translate-y-1"
            >
              Explore Experience
            </Link>
            <Link
              href="/Projects"
              className="rounded-full bg-pink-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-pink-300/50 transition-transform hover:-translate-y-1"
            >
              View Projects
            </Link>
            <Link
              href="/Contact"
              className="rounded-full border border-indigo-200 bg-white px-6 py-3 text-sm font-bold text-indigo-800 transition-colors hover:border-violet-400"
            >
              Say Hello
            </Link>
          </div>
          <div className="stagger-fade mt-10 grid gap-4 sm:grid-cols-3 [--stagger:5]">
            <div>
              <p className="bg-linear-to-r from-violet-600 to-pink-500 bg-clip-text text-3xl font-black text-transparent">10+</p>
              <p className="text-sm text-indigo-800/80">years of detail-driven work</p>
            </div>
            <div>
              <p className="text-3xl font-black text-indigo-950">3</p>
              <p className="text-sm text-indigo-800/80">industries, one throughline</p>
            </div>
            <div>
              <p className="text-3xl font-black text-indigo-950">2</p>
              <p className="text-sm text-indigo-800/80">frontend internships shipped</p>
            </div>
          </div>
        </section>

        <ExperienceTimeline items={timelineItems} />
        <ToolkitAndCta columns={toolkitColumns} />
      </main>

      <Footer />
    </div>
  );
};

export default Home;

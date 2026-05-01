import Link from "next/link";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { projects } from "./Projects/projectData";

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-pink-50 via-blue-50 to-violet-50 text-indigo-950">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-pink-300/40 blur-3xl floating-blob" />
        <div className="absolute right-0 top-28 h-80 w-80 rounded-full bg-sky-300/40 blur-3xl floating-blob [animation-delay:1.8s]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-violet-300/35 blur-3xl floating-blob [animation-delay:0.8s]" />
      </div>

      <Header />

      <main id="home" className="mx-auto w-full max-w-6xl px-6 pb-12 md:px-10">
        <section className="grid items-center gap-10 py-10 md:grid-cols-2 md:py-16">
          <div className="stagger-fade [--stagger:1]">
            <p className="mb-4 inline-flex rounded-full border border-violet-200 bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-violet-700 backdrop-blur">
              Creative Frontend Developer
            </p>
            <h1 className="text-balance text-4xl font-black leading-tight md:text-6xl">
              Building joyful web experiences that feel alive.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-indigo-800/85">
              I design and build playful digital products with expressive
              visuals, polished interactions, and clean, reliable code.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="rounded-full bg-pink-400 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-pink-200/80 transition-transform hover:-translate-y-1"
                href="#projects"
              >
                Explore Projects
              </a>
              <a
                className="rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-bold text-indigo-800 transition-colors hover:border-violet-400"
                href="#contact"
              >
                Say Hello
              </a>
            </div>
          </div>

          <div className="stagger-fade [--stagger:2]">
            <div className="rounded-3xl border border-violet-100/80 bg-white/80 p-6 shadow-xl shadow-violet-200/50 backdrop-blur">
              <p className="mb-4 text-sm font-semibold text-violet-600">
                Snapshot
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-violet-500 p-4 text-white">
                  <p className="text-lg font-black">Early Career</p>
                  <p className="text-xs text-violet-100">
                    Building strong frontend foundations.
                  </p>
                </div>
                <div className="rounded-2xl bg-sky-300 p-4 text-indigo-950">
                  <p className="text-lg font-black">Always Learning</p>
                  <p className="text-xs font-semibold">
                    Growing through hands-on projects and feedback.
                  </p>
                </div>
                <div className="rounded-2xl bg-pink-200 p-4 text-indigo-900 sm:col-span-2">
                  <p className="text-base font-black">Favorite Stack</p>
                  <p className="mt-1 text-sm font-semibold">
                    Next.js, TypeScript, Tailwind, Motion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12">
          <div className="mb-7 flex items-end justify-between gap-4">
            <h2 className="text-3xl font-black md:text-4xl">
              Featured Projects
            </h2>
            <Link
              className="text-sm font-bold text-violet-600 hover:text-violet-800"
              href="/Projects"
            >
              View all
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="stagger-fade group relative overflow-hidden rounded-3xl border border-violet-100 bg-white/90 p-6 shadow-lg shadow-violet-200/40 transition-transform hover:-translate-y-1"
                style={{ ["--stagger" as string]: String(index + 2) }}
              >
                <div
                  className={`mb-5 h-2 w-24 rounded-full bg-gradient-to-r ${project.accent}`}
                />
                <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.14em] text-violet-500">
                  {project.tag}
                </p>
                <h3 className="text-2xl font-black">{project.title}</h3>
                <p className="mt-3 text-indigo-800/85">{project.tagline}</p>
                <Link
                  className="mt-6 inline-flex items-center text-sm font-bold text-pink-500 group-hover:text-violet-600"
                  href={`/Projects/${project.slug}`}
                >
                  Read case study <span className="ml-1">-&gt;</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="pb-10 pt-4">
          <div className="rounded-3xl border border-violet-100 bg-white/80 p-6 shadow-lg shadow-violet-200/30">
            <Link href="/AboutMe"><h2 className="text-2xl font-black md:text-3xl  hover:text-violet-800">About Me</h2></Link>
            <p className="mt-3 max-w-3xl text-indigo-800/85">
              I love turning ambitious ideas into crisp, memorable interfaces
              that include a bit of whimsy to delight users. I also utilize
              ProCreate for fun pixel graphics and custom icons sprinkled
              throughout my projects. When I&apos;m not coding, you can find me enjoying a good cozy game, smothering my 
              <span className="relative inline-block cursor-pointer group">
                <Link href="/Pets" className="group-hover:text-pink-500 transition-colors hover:text-pink-500 pet-gallery--text">&nbsp;pets&nbsp;</Link>
                <span className="pet-gallery--link absolute -top-2 left-1/2 -translate-x-1/2 text-xs font-bold text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none animate-pulse invisible group-hover:visible">:o wanna see my babies?</span>
              </span> with love,
              or working on my language studies! 日本語を話しますか？ I&apos;m always excited to
              connect with fellow creatives and builders, so feel free to reach
              out!
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

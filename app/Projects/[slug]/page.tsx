import { notFound } from "next/navigation";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import ProjectShell from "../../Components/ProjectShell";
import { getProjectBySlug, projects } from "../projectData";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

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

      <main className="mx-auto w-full max-w-6xl px-6 pb-12 pt-10 md:px-10 md:pt-14">
        <ProjectShell project={project} />
      </main>

      <Footer />
    </div>
  );
}

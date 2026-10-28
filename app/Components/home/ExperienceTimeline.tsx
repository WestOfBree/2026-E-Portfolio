import type { TimelineItem } from "./homeData";

type ExperienceTimelineProps = {
  items: TimelineItem[];
};

const ExperienceTimeline = ({ items }: ExperienceTimelineProps) => {
  return (
    <section id="timeline" className="pb-8 pt-6">
      <div className="stagger-fade mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <h2 className="text-3xl font-black md:text-5xl">Where I&apos;ve grown</h2>
        <p className="max-w-xl text-sm text-indigo-800/80">
          Open each role to see the transferable strengths that shape how I build on the frontend today.
        </p>
      </div>

      <div className="relative">
        <div className="absolute bottom-4 left-5 top-2 w-1 rounded-full bg-linear-to-b from-violet-500 via-pink-500 to-sky-400 md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-6">
          {items.map((item, index) => {
            const isLeft = item.side === "left";

            const markerClass =
              item.color === "pink"
                ? "border-pink-500"
                : item.color === "cyan"
                  ? "border-sky-500"
                  : "border-violet-500";

            const chipClass =
              item.color === "pink"
                ? "bg-pink-100 text-pink-700"
                : item.color === "cyan"
                  ? "bg-sky-100 text-sky-700"
                  : "bg-violet-100 text-violet-700";

            const topBarClass =
              item.color === "pink"
                ? "from-pink-500 to-pink-300"
                : item.color === "cyan"
                  ? "from-sky-500 to-sky-300"
                  : "from-violet-500 to-violet-300";

            return (
              <article
                key={item.title}
                className={`stagger-fade relative pl-14 md:w-1/2 md:pl-14 [--stagger:${index + 6}] ${
                  isLeft ? "md:pr-14 md:pl-0 md:text-right" : "md:ml-auto"
                }`}
              >
                <span
                  className={`absolute left-2 top-7 h-5 w-5 rounded-full border-4 border-white bg-white shadow-sm md:top-8 ${markerClass} ${
                    isLeft ? "md:left-auto md:-right-2.5" : "md:-left-2.5"
                  }`}
                />

                <div className="relative overflow-hidden rounded-3xl border border-violet-100 bg-white/90 p-6 text-left shadow-xl shadow-violet-200/35">
                  <span className={`absolute left-0 right-0 top-0 h-1.5 bg-linear-to-r ${topBarClass}`} />

                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] ${chipClass} ${
                      item.period.startsWith("Now") ? "bg-indigo-950 text-white" : ""
                    }`}
                  >
                    {item.period}
                  </span>
                  <h3 className="mt-4 text-2xl font-black text-indigo-950">{item.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-violet-700">
                    {item.company} <span className="text-indigo-600/70">· {item.meta}</span>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-indigo-800/85">{item.description}</p>

                  <details className="group mt-4">
                    <summary className="cursor-pointer list-none text-sm font-bold text-pink-600 marker:hidden">
                      {item.panelLabel} <span className="ml-1 inline-block transition-transform group-open:rotate-180">▾</span>
                    </summary>
                    <div className="mt-4">
                      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-indigo-600/80">{item.skillsLabel}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold text-indigo-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </details>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;

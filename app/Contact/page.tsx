"use client";

import { useForm, ValidationError } from "@formspree/react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const socialLinks = [
  {
    label: "Email",
    href: "mailto:b.thomas1996@yahoo.com",
    icon: "✉️",
    color: "text-rose-600",
    border: "border-rose-200",
    bg: "bg-rose-50/80",
  },
  {
    label: "GitHub",
    href: "https://github.com/WestOfBree",
    icon: "🐙",
    color: "text-indigo-700",
    border: "border-indigo-200",
    bg: "bg-indigo-50/80",
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: "💼",
    color: "text-sky-700",
    border: "border-sky-200",
    bg: "bg-sky-50/80",
  },
];

export default function ContactPage() {
  // useForm handles submission, loading state, and server-side validation errors.
  const [state, handleSubmit] = useForm("xpqbdagr");

  return (
    <div className="relative isolate overflow-hidden bg-linear-to-br from-rose-50 via-sky-50 to-cyan-100 text-indigo-950">
      {/* Decorative grid overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_10px,rgba(67,56,202,0.08)_11px)]" />

      {/* Floating shapes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-10 top-16 h-72 w-72 rounded-[3rem] border border-rose-200/70 bg-white/40" />
        <div className="absolute right-10 top-24 h-44 w-44 rotate-12 rounded-3xl border border-sky-200/80 bg-sky-100/50" />
        <div className="absolute bottom-16 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full border border-cyan-200/80 bg-cyan-100/40" />
      </div>

      <Header />

      <main className="mx-auto w-full max-w-6xl px-6 pb-16 md:px-10">
        {/* Hero */}
        <section className="py-10 md:py-14">
          <p className="inline-flex rounded-full border border-indigo-200 bg-white/85 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-indigo-700 backdrop-blur">
            Send A Message
          </p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-black leading-tight md:text-6xl">
            Let&apos;s Build Something Together
          </h1>
          <div className="mt-5 flex flex-wrap gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-indigo-700">
            <span className="rounded-full border border-indigo-200 bg-white/85 px-3 py-1">
              Quest: Open to Opportunities
            </span>
            <span className="rounded-full border border-emerald-200 bg-emerald-50/90 px-3 py-1 text-emerald-700">
              Status: Ready to Connect
            </span>
            <span className="rounded-full border border-rose-200 bg-rose-50/90 px-3 py-1 text-rose-700">
              Response Time: Fast
            </span>
          </div>
        </section>

        <div className="grid gap-8 md:grid-cols-[1fr_0.65fr]">
          {/* Contact form */}
          <div className="relative rounded-3xl border border-indigo-100 bg-white/90 p-7 shadow-lg shadow-indigo-300/40">
            {/* Corner brackets */}
            <div className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-indigo-300" />
            <div className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-indigo-300" />
            <div className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-indigo-300" />
            <div className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-indigo-300" />

            <div className="mb-5 flex items-center justify-between rounded-xl border border-indigo-100 bg-indigo-50/60 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-indigo-700">
              <p>Compose Message</p>
              <p>Quest Log</p>
            </div>

            {state.succeeded ? (
              <div className="flex flex-col items-center gap-4 py-10 text-center">
                <span className="text-4xl">🎉</span>
                <p className="text-lg font-black text-indigo-900">
                  Message sent!
                </p>
                <p className="text-sm text-indigo-600">
                  Thanks for reaching out — I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-bold uppercase tracking-widest text-indigo-700"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Adventurer Name"
                    className="rounded-xl border border-indigo-100 bg-indigo-50/50 px-4 py-3 text-sm text-indigo-950 placeholder-indigo-300 outline-none ring-0 transition focus:border-violet-400 focus:bg-white focus:ring-2 focus:ring-violet-200"
                  />
                  <ValidationError
                    field="name"
                    errors={state.errors}
                    className="text-xs font-semibold text-rose-600"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-bold uppercase tracking-widest text-indigo-700"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="rounded-xl border border-indigo-100 bg-indigo-50/50 px-4 py-3 text-sm text-indigo-950 placeholder-indigo-300 outline-none ring-0 transition focus:border-violet-400 focus:bg-white focus:ring-2 focus:ring-violet-200"
                  />
                  <ValidationError
                    field="email"
                    errors={state.errors}
                    className="text-xs font-semibold text-rose-600"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-bold uppercase tracking-widest text-indigo-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your quest..."
                    className="resize-none rounded-xl border border-indigo-100 bg-indigo-50/50 px-4 py-3 text-sm text-indigo-950 placeholder-indigo-300 outline-none ring-0 transition focus:border-violet-400 focus:bg-white focus:ring-2 focus:ring-violet-200"
                  />
                  <ValidationError
                    field="message"
                    errors={state.errors}
                    className="text-xs font-semibold text-rose-600"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="mt-1 rounded-full bg-violet-500 px-6 py-3 text-sm font-bold text-white shadow-md shadow-violet-300/50 transition-transform hover:-translate-y-0.5 hover:bg-violet-600 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {state.submitting ? "Sending…" : "Send Message →"}
                  </button>

                  {/* Plain-text fallback for users who prefer direct email */}
                  <a
                    href="mailto:b.thomas1996@yahoo.com"
                    className="mt-1 text-xs font-semibold text-indigo-500 underline-offset-2 hover:underline"
                  >
                    or email me directly
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Sidebar: links + note */}
          <div className="flex flex-col gap-6">
            {/* Social links */}
            <div className="relative rounded-3xl border border-indigo-100 bg-white/90 p-6 shadow-lg shadow-indigo-300/40">
              <div className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-indigo-300" />
              <div className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-indigo-300" />
              <div className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-indigo-300" />
              <div className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-indigo-300" />

              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-500">
                Find Me Online
              </p>

              <ul className="flex flex-col gap-3">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 rounded-xl border ${link.border} ${link.bg} px-4 py-3 text-sm font-semibold ${link.color} transition-transform hover:-translate-y-0.5`}
                    >
                      <span aria-hidden="true">{link.icon}</span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Availability note */}
            <div className="relative rounded-3xl border border-emerald-200 bg-emerald-50/80 p-6 shadow-lg shadow-emerald-200/40">
              <div className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-emerald-300" />
              <div className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-emerald-300" />
              <div className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-emerald-300" />
              <div className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-emerald-300" />

              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-600">
                Current Status
              </p>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
                <p className="text-sm font-bold text-emerald-800">
                  Open to new opportunities
                </p>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-emerald-700">
                I&apos;m actively looking for junior frontend roles and freelance
                projects. If you have a quest that needs a builder, let&apos;s
                talk!
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      id="contact"
      className="mt-8 border-t border-violet-100 bg-white/70 backdrop-blur"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="text-sm text-indigo-700/90">
          Let&apos;s create something unforgettable.
        </p>
        <div className="flex items-center gap-4 text-sm font-bold text-indigo-800">
          <a className="hover:text-pink-500" href="mailto:b.thomas1996@yahoo.com">
            Email
          </a>
          <a
            className="hover:text-pink-500"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/brianna-thomas-78b310b9/"
          >
            LinkedIn
          </a>
          <a
            className="hover:text-pink-500"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/WestOfBree"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

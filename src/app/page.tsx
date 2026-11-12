export default function Home() {
  return (
    <main className="grid min-h-dvh place-items-center px-6 py-16">
      <div className="flex w-full max-w-sm flex-col items-center text-center">
        <svg
          aria-hidden="true"
          viewBox="0 0 32 32"
          className="size-14 rounded-xl ring-1 ring-white/10"
        >
          <rect width="32" height="32" rx="5" ry="5" fill="#0d1f18" />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="17"
            fontWeight="800"
            letterSpacing="-1"
            fill="#ff6848"
          >
            ID
          </text>
        </svg>

        <h1 className="mt-8 text-lg font-medium tracking-tight text-(--text)">
          Ilya Dolotov
        </h1>
        <p className="mt-2 font-mono text-xs tracking-[0.2em] text-(--muted) uppercase">
          Coming soon
        </p>

        <a
          href="mailto:dolotov@hey.com"
          className="mt-10 text-sm text-(--muted) underline decoration-white/20 underline-offset-4 transition-colors hover:text-(--text) hover:decoration-(--orange)"
        >
          dolotov@hey.com
        </a>
      </div>
    </main>
  );
}

function Mark({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className={className}>
      <rect width="32" height="32" rx="7" ry="7" fill="#202329" />
      <rect x="0.5" y="0.5" width="31" height="31" rx="6.5" ry="6.5" fill="none" stroke="#343840" />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="15"
        fontWeight="800"
        letterSpacing="-1"
        fill="#ff806b"
      >
        ID
      </text>
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col px-6 sm:px-10">
      <header className="flex items-center gap-3 py-6">
        <Mark className="size-8" />
        <span className="text-[17px] font-bold tracking-tight">Ilya Dolotov</span>
        <span className="text-sm text-(--muted-foreground)">/ snacksncode</span>
      </header>

      <main className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center pb-24">
        <Mark className="size-12" />
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-[44px]">Coming soon.</h1>
        <p className="mt-3 text-[15px] text-(--muted-foreground)">
          A new site is on the way. Until then, say hi by email.
        </p>
        <a
          href="mailto:dolotov@hey.com"
          className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-(--primary) px-5 text-[15px] font-semibold text-(--primary-foreground) transition-[filter,transform] duration-150 ease-out hover:brightness-105 active:scale-[0.98]"
        >
          dolotov@hey.com
          <span aria-hidden="true">→</span>
        </a>
      </main>
    </div>
  );
}

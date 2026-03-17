import { type ReactNode } from 'react';

function Prompt({ children }: { children: ReactNode }) {
  return (
    <p className="mb-1 text-muted">
      <span className="select-none">$ </span>
      {children}
    </p>
  );
}

export function Terminal() {
  return (
    <main className="flex min-h-[100svh] items-center justify-center px-6 font-mono">
      <div className="w-full max-w-lg">
        <section className="mb-8">
          <Prompt>whoami</Prompt>
          <p className="text-3xl font-bold text-accent">snacksncode</p>
        </section>

        <section className="mb-8">
          <Prompt>cat about.txt</Prompt>
          <p className="text-foreground">developer. maker of things.</p>
        </section>

        <section className="mb-8">
          <Prompt>ls projects/</Prompt>
          <div className="mt-2 border-l-2 border-accent/20 pl-4">
            <p className="text-lg font-bold text-accent">fenne</p>
            <p className="mt-1 text-sm text-foreground">
              Plan your week. Stop asking what&apos;s for dinner.
            </p>
            <p className="mt-1 text-xs text-muted">Expo · React Native · TypeScript</p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              <a
                href="https://apps.apple.com/app/fenne-meal-planner-groceries/id6759224212"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline-offset-4 hover:underline"
              >
                App Store
              </a>
              <a
                href="https://github.com/snacksncode/fenne"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline-offset-4 hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://fenneplanner.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline-offset-4 hover:underline"
              >
                Website
              </a>
            </div>
          </div>
        </section>

        <p className="text-muted">
          <span className="select-none">$ </span>
          <span className="cursor-blink">█</span>
        </p>
      </div>
    </main>
  );
}

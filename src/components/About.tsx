import { timeline } from "@/content";

export function About() {
  return (
    <section
      id="about"
      className="relative z-10 border-t border-border/80 bg-surface px-5 py-24 sm:px-8 sm:py-32 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-mono-custom text-xs uppercase tracking-[.2em] text-accent">About me</p>

        <div className="relative mt-16">
          <div
            className="absolute left-0 right-0 top-[.4rem] hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block"
            aria-hidden="true"
          />
          <ol className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            {timeline.map((item) => (
              <li key={item.stage} className="relative flex">
                <span
                  className="mb-6 hidden size-3.5 rounded-full border-2 border-primary bg-background lg:block"
                  aria-hidden="true"
                />
                <div className="flex h-full w-full flex-col rounded-2xl border border-border bg-card/70 p-7 transition-colors hover:border-primary/50">
                  <p className="font-mono-custom text-xs uppercase tracking-[.18em] text-subtle">
                    {item.stage}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-.02em] text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-foreground">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

import { ArrowDown, Download, FileText } from "lucide-react";
import { identity, profile } from "@/content";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Hero({ onViewResume }: { onViewResume: () => void }) {
  return (
    <section
      id="home"
      className="relative z-10 mx-auto grid min-h-[100dvh] max-w-6xl items-center px-5 pb-28 pt-32 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:gap-14 lg:px-10"
    >
      <div className="max-w-3xl">
        <h1 className="animate-rise-in font-display text-[clamp(2.6rem,6.4vw,5rem)] font-semibold leading-[1.02] tracking-[-.045em]">
          <span className="block text-subtle">Hello! My name is</span>
          <span className="mt-2 block text-primary">{profile.name}</span>
        </h1>

        <p className="animate-rise-in delay-2 mt-8 max-w-xl text-base leading-8 text-foreground sm:text-lg">
          {profile.intro}
        </p>

        <div className="animate-rise-in delay-3 mt-10 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={onViewResume}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <FileText size={17} /> View resume
          </button>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-primary/60 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
             Download resume
          </a>
        </div>
      </div>

      <div className="relative mt-16 min-h-[16rem] lg:mt-0 lg:min-h-[24rem]" aria-label="Profile summary">
        <div className="animate-drift absolute right-[8%] top-[4%] h-32 w-32 rounded-full border border-primary/25 bg-primary/[.04] sm:h-44 sm:w-44" />
        <div className="absolute bottom-[6%] left-[7%] h-40 w-40 rounded-full border border-dashed border-border sm:h-56 sm:w-56" />

        <div className="absolute right-0 top-1/2 w-[86%] -translate-y-1/2 rounded-2xl border border-border bg-card/90 p-7 shadow-2xl shadow-black/25 sm:p-9">
          <ul className="space-y-4">
            {identity.map((item, index) => (
              <li key={item} className="flex items-baseline gap-4">
                <span className="font-mono-custom text-xs text-subtle">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-2xl font-semibold tracking-[-.02em] text-primary sm:text-3xl">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollToId("about")}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-primary/50 bg-primary/[.08] px-5 py-2.5 text-xs font-semibold uppercase tracking-[.18em] text-primary transition-colors hover:bg-primary/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Scroll to explore
        <ArrowDown size={15} className="animate-nudge-down" />
      </button>
    </section>
  );
}

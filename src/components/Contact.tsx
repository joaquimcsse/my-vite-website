import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/content";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const LINKS = [
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail, external: false },
  { label: "GitHub", href: profile.github, Icon: Github, external: true },
  { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin, external: true },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 border-t border-border/80 bg-background px-5 py-24 sm:px-8 sm:py-32 lg:px-10"
    >
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-border bg-card px-6 py-12 text-center sm:px-12 sm:py-16">
          <p className="font-mono-custom text-xs uppercase tracking-[.2em] text-primary">Contact</p>
          <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-.045em] sm:text-5xl">
            Have an opportunity? Want to connect or build together? 
            <br />
            <span className="text-subtle">Feel free to contact me.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-muted-foreground">
            I'm always happy to talk about a project, a role, or sharing thoughts about technology and the world.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {LINKS.map(({ label, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
              >
                <Icon size={17} /> {label}
              </a>
            ))}
          </div>
        </div>

        <footer className="flex flex-col gap-4 py-8 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with curiosity.
          </p>
          <button
            type="button"
            onClick={() => scrollToId("home")}
            className="flex items-center gap-2 self-start font-mono-custom uppercase tracking-[.14em] text-foreground transition-colors hover:text-primary sm:self-auto"
          >
            Back to top <ArrowUpRight size={14} />
          </button>
        </footer>
      </div>
    </section>
  );
}

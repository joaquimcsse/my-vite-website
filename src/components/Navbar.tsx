import { useEffect, useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";
import { profile } from "@/content";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const SECTION_IDS = ["home", "about", "contact"];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Highlights the nav link for whichever section is currently in view.
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );

    const handleScroll = () => {
      const marker = window.innerHeight * 0.35;
      let current = "home";
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= marker) current = section.id;
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <button
          type="button"
          onClick={() => scrollToId("home")}
          aria-label="Scroll to home"
          className="font-display text-xl font-semibold tracking-tight text-foreground transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-2xl"
        >
          {profile.name}
        </button>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => scrollToId(item.id)}
              className={`py-2 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                activeSection === item.id
                  ? "font-semibold text-foreground"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-muted-foreground hover:bg-secondary md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-border px-5 py-4 md:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-6xl gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => {
                  scrollToId(item.id);
                  setMenuOpen(false);
                }}
                className={`flex items-center justify-between rounded-lg px-3 py-3 text-left text-sm transition-colors hover:bg-secondary ${
                  activeSection === item.id
                    ? "font-semibold text-foreground"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
                <ChevronRight size={16} />
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

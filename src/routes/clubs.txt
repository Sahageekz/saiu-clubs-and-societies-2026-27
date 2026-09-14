import { createFileRoute } from "@tanstack/react-router";
import { ClubDirectory } from "@/components/ClubDirectory";

export const Route = createFileRoute("/clubs")({
  head: () => ({
    meta: [
      { title: "Clubs & Societies · Sai University" },
      {
        name: "description",
        content:
          "Explore all student-run clubs and societies at Sai University for 2026–27.",
      },
    ],
  }),
  component: ClubsPage,
});

function ClubsPage() {
  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <header className="border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary grid place-items-center -skew-x-12">
              <span className="skew-x-12 font-display text-primary-foreground text-lg leading-none">
                S
              </span>
            </div>
            <span className="font-display tracking-wide text-lg">
              SAIU CLUBS
            </span>
          </a>

          <nav className="flex items-center gap-6 text-sm font-medium">
            <a href="/" className="hover:text-primary transition">
              Home
            </a>
            <a href="/clubs" className="text-primary">
              Clubs
            </a>
            <a href="/how-to-join" className="hover:text-primary transition">
              How to Join
            </a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-primary" />
            <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
              Sai University · 2026–27
            </span>
          </div>

          <h1 className="font-display text-6xl md:text-8xl uppercase leading-[0.85]">
            Our <span className="text-primary">Clubs</span>
          </h1>

          <p className="mt-6 max-w-2xl text-foreground/60 text-lg">
            Find a community that matches your interests, explore what each
            club offers, and connect with its student leadership.
          </p>
        </section>

        <ClubDirectory />
      </main>

      <footer className="py-10 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display tracking-wide">
            SAIU CLUBS · 2026–27
          </span>

          <p className="text-xs text-foreground/40">
            Sai University Student Clubs & Societies
          </p>
        </div>
      </footer>
    </div>
  );
}

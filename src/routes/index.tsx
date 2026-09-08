import { createFileRoute } from "@tanstack/react-router";
import { ClubDirectory } from "@/components/ClubDirectory";
import { clubs } from "@/data/clubs";
import clubSports from "@/assets/club-sports.jpg";
import clubTech from "@/assets/club-tech.jpg";
import clubArts from "@/assets/club-arts.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SaiU Clubs & Societies 2026–27" },
      {
        name: "description",
        content:
          "Explore all 21 student-run clubs and societies at Sai University for 2026–27. Find your people, meet the leads, and join a club.",
      },
      { property: "og:title", content: "SaiU Clubs & Societies 2026–27" },
      {
        property: "og:description",
        content:
          "Explore all 21 student-run clubs and societies at Sai University for 2026–27.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const categoryCount = new Set(clubs.map((c) => c.category)).size;

const featured = [
  {
    img: clubSports,
    category: "Sports, Physical Activities & Games",
    title: "Sports & Games",
    body: "Chess, basketball, martial arts and more — compete, train, and represent SaiU.",
  },
  {
    img: clubTech,
    category: "Technology & Computing",
    title: "Tech & Computing",
    body: "FOSS, competitive coding and builder communities shipping real projects.",
  },
  {
    img: clubArts,
    category: "Arts, Culture & Performing Arts",
    title: "Arts & Culture",
    body: "Music, dance, theatre, photography, fashion and fine art on one campus.",
  },
];

function Index() {
  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/90 border-b border-border backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary grid place-items-center -skew-x-12">
              <span className="skew-x-12 font-display text-primary-foreground text-lg leading-none">
                S
              </span>
            </div>
            <span className="font-display tracking-wide text-lg">SAIU CLUBS</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/70">
            <a className="hover:text-primary transition" href="#clubs">
              Clubs
            </a>
            <a className="hover:text-primary transition" href="#featured">
              Featured
            </a>
            <a className="hover:text-primary transition" href="#join">
              How to join
            </a>
          </nav>
          <a
            href="#join"
            className="bg-primary text-primary-foreground font-display tracking-wide px-5 py-2 -skew-x-12 text-sm"
          >
            <span className="inline-block skew-x-12">JOIN NOW</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div
          className="absolute inset-y-0 left-[-10%] w-[45%] bg-primary/10 -skew-x-12"
          aria-hidden="true"
        />
        <div
          className="absolute top-10 right-[-6%] w-72 h-72 border-2 border-border rotate-12 rounded-full"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-primary" />
            <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
              Sai University Student Activity · 2026–27
            </span>
          </div>
          <h1 className="font-display leading-[0.82] text-[clamp(3.5rem,11vw,10rem)] uppercase">
            <span className="block">Find your</span>
            <span className="block text-primary -skew-x-6 inline-block bg-background px-2">
              Tribe
            </span>
            <span className="block">2026–27</span>
          </h1>
          <div className="mt-10 grid md:grid-cols-2 gap-8 items-end">
            <p className="text-foreground/70 text-lg max-w-md">
              {clubs.length} student-run clubs and societies, one campus. Pick a lane,
              meet the leads, and be part of something the whole university remembers.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#clubs"
                className="bg-primary text-primary-foreground font-display tracking-wide px-7 py-4 -skew-x-12 text-base"
              >
                <span className="inline-block skew-x-12">
                  Browse {clubs.length} clubs
                </span>
              </a>
              <a
                href="#join"
                className="border border-border px-7 py-4 font-semibold text-base hover:border-primary hover:text-primary transition"
              >
                Apply for 2026–27
              </a>
            </div>
          </div>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
            <div className="bg-background p-5">
              <div className="font-display text-4xl text-primary">{clubs.length}</div>
              <div className="text-xs text-foreground/60 mt-1 tracking-wide uppercase">
                Active Clubs
              </div>
            </div>
            <div className="bg-background p-5">
              <div className="font-display text-4xl">{categoryCount}</div>
              <div className="text-xs text-foreground/60 mt-1 tracking-wide uppercase">
                Categories
              </div>
            </div>
            <div className="bg-background p-5">
              <div className="font-display text-4xl text-primary">Open</div>
              <div className="text-xs text-foreground/60 mt-1 tracking-wide uppercase">
                To All Students
              </div>
            </div>
            <div className="bg-background p-5">
              <div className="font-display text-4xl">26–27</div>
              <div className="text-xs text-foreground/60 mt-1 tracking-wide uppercase">
                Academic Year
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured categories */}
      <section id="featured" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-5xl uppercase leading-none mb-10">
            Featured <span className="text-primary">Lanes</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((f) => (
              <article
                key={f.title}
                className="group bg-background border border-border hover:border-primary transition overflow-hidden"
              >
                <img
                  src={f.img}
                  alt={f.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-6">
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
                    {f.category}
                  </span>
                  <h3 className="font-display text-2xl uppercase mt-2">{f.title}</h3>
                  <p className="text-foreground/60 text-sm mt-2">{f.body}</p>
                  <div className="mt-5 flex justify-end">
                    <a
                      href="#clubs"
                      className="text-primary font-semibold text-sm group-hover:translate-x-1 transition"
                    >
                      Explore →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ClubDirectory />

      {/* How to join */}
      <section id="join" className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          aria-hidden="true"
          style={{
            background:
              "repeating-linear-gradient(45deg,#0a0a0a 0 2px,transparent 2px 22px)",
          }}
        />
        <div className="max-w-5xl mx-auto px-6 relative">
          <h2 className="font-display text-5xl md:text-6xl uppercase leading-[0.85]">
            Three moves to{" "}
            <span className="bg-background text-primary px-2 -skew-x-6 inline-block">
              your club
            </span>
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-background text-foreground p-7 -skew-x-3">
              <div className="font-display text-5xl text-primary">01</div>
              <h3 className="font-display text-2xl uppercase mt-3">Pick a club</h3>
              <p className="text-foreground/60 text-sm mt-2">
                Search all {clubs.length} clubs by interest above. Most are open to
                every student — mix and match as many as you want.
              </p>
            </div>
            <div className="bg-background text-foreground p-7 -skew-x-3 translate-y-6">
              <div className="font-display text-5xl text-primary">02</div>
              <h3 className="font-display text-2xl uppercase mt-3">Reach out</h3>
              <p className="text-foreground/60 text-sm mt-2">
                Open a club's page for the president's email and social links. Some
                clubs run a quick selection — details are listed on each card.
              </p>
            </div>
            <div className="bg-background text-foreground p-7 -skew-x-3">
              <div className="font-display text-5xl text-primary">03</div>
              <h3 className="font-display text-2xl uppercase mt-3">Show up</h3>
              <p className="text-foreground/60 text-sm mt-2">
                Attend the first session and your spot is confirmed for 2026–27.
                Beginners are welcome almost everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-primary grid place-items-center -skew-x-12">
              <span className="skew-x-12 font-display text-primary-foreground text-sm leading-none">
                S
              </span>
            </div>
            <span className="font-display tracking-wide">SAIU CLUBS · 2026–27</span>
          </div>
          <p className="text-xs text-foreground/40">
            Built for {clubs.length} clubs and one loud campus — Sai University.
          </p>
        </div>
      </footer>
    </div>
  );
}

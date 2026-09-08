import { useMemo, useState } from "react";
import { clubs, type Club } from "@/data/clubs";
import { ClubDetail } from "@/components/ClubDetail";

const ALL = "All";

export function ClubDirectory() {
  const [category, setCategory] = useState(ALL);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Club | null>(null);

  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(clubs.map((c) => c.category)))],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return clubs.filter((c) => {
      if (category !== ALL && c.category !== category) return false;
      if (!q) return true;
      return (
        c.name.toLowerCase().includes(q) ||
        (c.about ?? "").toLowerCase().includes(q) ||
        (c.poc ?? "").toLowerCase().includes(q)
      );
    });
  }, [category, query]);

  return (
    <section id="clubs" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <h2 className="font-display text-5xl uppercase leading-none">
            All <span className="text-primary">Clubs</span>
          </h2>
          <div className="border border-border px-4 py-2 flex items-center gap-2 bg-background">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search clubs…"
              className="bg-transparent text-sm outline-none w-44 placeholder:text-muted-foreground"
              aria-label="Search clubs"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 text-sm mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={
                category === c
                  ? "bg-primary text-primary-foreground font-semibold px-4 py-1.5 -skew-x-12"
                  : "border border-border px-4 py-1.5 -skew-x-12 hover:border-primary transition"
              }
            >
              <span className="inline-block skew-x-12">{c}</span>
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-muted-foreground text-sm">No clubs match your search.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((club) => (
              <article
                key={club.id}
                className="group bg-background border border-border hover:border-primary transition p-6 flex flex-col cursor-pointer"
                onClick={() => setSelected(club)}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-semibold tracking-[0.15em] text-primary uppercase">
                    {club.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{club.frequency}</span>
                </div>
                <h3 className="font-display text-2xl uppercase">{club.name}</h3>
                <p className="text-foreground/60 text-sm mt-2 line-clamp-3 flex-1">
                  {club.about}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {club.whoCanApply ?? "Open to all"}
                  </span>
                  <span className="text-primary font-semibold text-sm group-hover:translate-x-1 transition">
                    View →
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {selected && <ClubDetail club={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

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

        {/* Page heading */}
        <div className="mb-10">
          <h2 className="font-display text-5xl uppercase leading-none mb-8">
            All <span className="text-primary">Clubs and Societies</span>
          </h2>

          {/* Category + Search */}
          <div className="flex flex-col md:flex-row gap-4">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full md:w-auto min-w-[320px] border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
              aria-label="Select club category"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <div className="border border-border px-4 py-3 flex items-center gap-2 bg-background flex-1 md:max-w-md">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search clubs…"
                className="bg-transparent text-sm outline-none w-full placeholder:text-muted-foreground"
                aria-label="Search clubs"
              />
            </div>
          </div>
        </div>

        {/* Clubs */}
        {filtered.length === 0 ? (
          <p className="text-muted-foreground text-sm">
            No clubs match your search.
          </p>
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

                  <span className="text-xs text-muted-foreground">
                    {club.frequency}
                  </span>
                </div>

                <h3 className="font-display text-2xl uppercase">
                  {club.name}
                </h3>

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

      {/* Club details */}
      {selected && (
        <ClubDetail
          club={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}

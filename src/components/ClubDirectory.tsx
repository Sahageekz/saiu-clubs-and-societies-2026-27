import { useMemo, useState } from "react";
import { clubs, type Club } from "@/data/clubs";
import { ClubDetail } from "@/components/ClubDetail";

const ALL = "All Clubs & Societies";

export function ClubDirectory() {
  const [selectedClubId, setSelectedClubId] = useState(ALL);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Club | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return clubs.filter((club) => {
      if (
        selectedClubId !== ALL &&
        club.id.toString() !== selectedClubId
      ) {
        return false;
      }

      if (!q) return true;

      return (
        club.name.toLowerCase().includes(q) ||
        (club.about ?? "").toLowerCase().includes(q) ||
        (club.poc ?? "").toLowerCase().includes(q)
      );
    });
  }, [selectedClubId, query]);

  return (
    <section id="clubs" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">

        {/* Page heading */}
        <div className="mb-10">
          <h2 className="font-display text-5xl uppercase leading-none mb-8">
            Our <span className="text-primary">Clubs and Societies</span>
          </h2>

          {/* Club/Society Dropdown + Search */}
          <div className="flex flex-col md:flex-row gap-4">

            {/* Club Dropdown */}
            <div className="w-full md:w-auto md:min-w-[380px]">
              <select
                value={selectedClubId}
                onChange={(e) => setSelectedClubId(e.target.value)}
                className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                aria-label="Select a club or society"
              >
                <option value={ALL}>
                  All Clubs & Societies
                </option>

                {clubs.map((club) => (
                  <option key={club.id} value={club.id.toString()}>
                    {club.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Search */}
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
                {/* Category + Frequency */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-semibold tracking-[0.15em] text-primary uppercase">
                    {club.category}
                  </span>

                  <span className="text-xs text-muted-foreground">
                    {club.frequency}
                  </span>
                </div>

                {/* Club Name */}
                <h3 className="font-display text-2xl uppercase">
                  {club.name}
                </h3>

                {/* Description */}
                <p className="text-foreground/60 text-sm mt-2 line-clamp-3 flex-1">
                  {club.about}
                </p>

                {/* Bottom Info */}
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

      {/* Club Details Modal */}
      {selected && (
        <ClubDetail
          club={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}

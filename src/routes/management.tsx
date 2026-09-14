import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { clubs } from "@/data/clubs";
import { supabase } from "@/lib/supabase";

type Application = {
  id: string;
  student_name: string;
  email: string;
  school: string;
  year: string;
  club: string;
  experience: string | null;
  created_at: string;
};

export const Route = createFileRoute("/management")({
  component: Management,
});

function Management() {
  const navigate = useNavigate();

  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Keeps track of which student's details are currently open
  const [expandedApplicationId, setExpandedApplicationId] = useState<
    string | null
  >(null);

  useEffect(() => {
    const loadApplications = async () => {
      setLoading(true);
      setError("");

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        navigate({ to: "/login" });
        return;
      }

      const { data, error } = await supabase
        .from("club_applications")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);

        setError(
          "Unable to load applications. Please check your permissions."
        );

        setLoading(false);
        return;
      }

      setApplications(data ?? []);
      setLoading(false);
    };

    loadApplications();
  }, [navigate]);

  const applicationsByClub = useMemo(() => {
    const grouped: Record<string, Application[]> = {};

    clubs.forEach((club) => {
      grouped[club.name] = [];
    });

    applications.forEach((application) => {
      if (!grouped[application.club]) {
        grouped[application.club] = [];
      }

      grouped[application.club].push(application);
    });

    return grouped;
  }, [applications]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/login" });
  };

  const totalApplications = applications.length;

  const toggleApplication = (applicationId: string) => {
    setExpandedApplicationId((currentId) =>
      currentId === applicationId ? null : applicationId
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ========================= */}
      {/* HEADER */}
      {/* ========================= */}

      <header className="border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
          <a href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-primary grid place-items-center -skew-x-12">
              <span className="skew-x-12 font-display text-primary-foreground text-lg leading-none">
                S
              </span>
            </div>

            <div>
              <div className="font-display tracking-wide text-lg">
                SAIU CLUBS AND SOCIETIES
              </div>

              <div className="text-[10px] tracking-[0.2em] uppercase text-foreground/40">
                Management Portal
              </div>
            </div>
          </a>

          <button
            type="button"
            onClick={handleLogout}
            className="border border-border px-5 py-2.5 text-sm font-semibold hover:border-primary hover:text-primary transition"
          >
            LOGOUT
          </button>
        </div>
      </header>

      {/* ========================= */}
      {/* MAIN */}
      {/* ========================= */}

      <main className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* PAGE HEADING */}

        <div className="mb-12">
          <span className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
            Management / Student Council
          </span>

          <h1 className="font-display text-5xl md:text-7xl uppercase leading-none mt-3">
            Applications
          </h1>

          <div className="mt-6 flex flex-wrap gap-4">
            <div className="border border-border bg-card px-6 py-4">
              <div className="font-display text-4xl text-primary">
                {totalApplications}
              </div>

              <div className="text-xs tracking-[0.2em] uppercase text-foreground/50 mt-1">
                Total Applications
              </div>
            </div>

            <div className="border border-border bg-card px-6 py-4">
              <div className="font-display text-4xl">
                {clubs.length}
              </div>

              <div className="text-xs tracking-[0.2em] uppercase text-foreground/50 mt-1">
                Clubs
              </div>
            </div>
          </div>
        </div>

        {/* LOADING */}

        {loading && (
          <div className="border border-border bg-card p-10 text-center">
            <div className="font-display text-2xl uppercase">
              Loading applications...
            </div>

            <p className="text-sm text-foreground/50 mt-2">
              Please wait while we load the latest applications.
            </p>
          </div>
        )}

        {/* ERROR */}

        {!loading && error && (
          <div className="border border-red-500/40 bg-red-500/10 p-8">
            <h2 className="font-display text-2xl uppercase text-red-400">
              Unable to load applications
            </h2>

            <p className="text-sm text-red-300/80 mt-2">
              {error}
            </p>
          </div>
        )}

        {/* ========================= */}
        {/* CLUB CARDS */}
        {/* ========================= */}

        {!loading && !error && (
          <div className="grid lg:grid-cols-2 gap-8">
            {clubs.map((club) => {
              const clubApplications =
                applicationsByClub[club.name] ?? [];

              return (
                <section
                  key={club.id}
                  className="border border-border bg-card overflow-hidden"
                >
                  {/* CLUB HEADER */}

                  <div className="border-b border-border p-6 bg-background">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-primary">
                          {club.category}
                        </span>

                        <h2 className="font-display text-3xl uppercase leading-none mt-2">
                          {club.name}
                        </h2>
                      </div>

                      <div className="shrink-0 min-w-12 h-12 px-3 bg-primary text-primary-foreground grid place-items-center font-display text-xl">
                        {clubApplications.length}
                      </div>
                    </div>

                    <p className="text-xs text-foreground/40 uppercase tracking-[0.15em] mt-4">
                      {clubApplications.length === 1
                        ? "1 Application"
                        : `${clubApplications.length} Applications`}
                    </p>
                  </div>

                  {/* APPLICATION LIST */}

                  <div className="p-6">
                    {clubApplications.length === 0 ? (
                      <div className="border border-dashed border-border p-8 text-center">
                        <p className="font-display text-xl uppercase text-foreground/40">
                          No applications yet
                        </p>

                        <p className="text-xs text-foreground/30 mt-2">
                          New applications for this club will appear here
                          automatically.
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {clubApplications.map(
                          (application, index) => {
                            const isExpanded =
                              expandedApplicationId ===
                              application.id;

                            return (
                              <div
                                key={application.id}
                                className="border border-border bg-background overflow-hidden"
                              >
                                {/* NAME ROW */}

                                <button
                                  type="button"
                                  onClick={() =>
                                    toggleApplication(
                                      application.id
                                    )
                                  }
                                  className="w-full flex items-center gap-4 p-5 text-left hover:bg-card transition"
                                >
                                  {/* S.NO */}

                                  <span className="shrink-0 w-9 h-9 border border-primary text-primary grid place-items-center font-display text-lg">
                                    {index + 1}
                                  </span>

                                  {/* NAME */}

                                  <span className="flex-1 font-semibold text-base md:text-lg">
                                    {application.student_name}
                                  </span>

                                  {/* ARROW */}

                                  <span
                                    className={`shrink-0 text-primary text-lg transition-transform ${
                                      isExpanded
                                        ? "rotate-180"
                                        : ""
                                    }`}
                                  >
                                    ↓
                                  </span>
                                </button>

                                {/* DETAILS */}

                                {isExpanded && (
                                  <div className="border-t border-border p-5">
                                    <div className="flex items-start justify-between gap-4">
                                      <div>
                                        <div className="text-[10px] uppercase tracking-[0.15em] text-foreground/40">
                                          Email
                                        </div>

                                        <a
                                          href={`mailto:${application.email}`}
                                          className="text-sm text-primary hover:underline break-all mt-1 inline-block"
                                        >
                                          {application.email}
                                        </a>
                                      </div>

                                      <span className="text-[10px] uppercase tracking-[0.15em] text-foreground/40 whitespace-nowrap">
                                        {new Date(
                                          application.created_at
                                        ).toLocaleDateString(
                                          "en-IN"
                                        )}
                                      </span>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                                      <div className="border border-border p-4">
                                        <div className="text-[10px] uppercase tracking-[0.15em] text-foreground/40">
                                          School
                                        </div>

                                        <div className="font-semibold text-sm mt-1">
                                          {application.school}
                                        </div>
                                      </div>

                                      <div className="border border-border p-4">
                                        <div className="text-[10px] uppercase tracking-[0.15em] text-foreground/40">
                                          Batch
                                        </div>

                                        <div className="font-semibold text-sm mt-1">
                                          {application.year}
                                        </div>
                                      </div>
                                    </div>

                                    <div className="mt-5">
                                      <div className="text-[10px] uppercase tracking-[0.15em] text-foreground/40">
                                        Experience
                                      </div>

                                      <p className="text-sm text-foreground/70 leading-relaxed mt-2 whitespace-pre-wrap">
                                        {application.experience ||
                                          "No experience provided."}
                                      </p>
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          }
                        )}
                      </div>
                    )}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}

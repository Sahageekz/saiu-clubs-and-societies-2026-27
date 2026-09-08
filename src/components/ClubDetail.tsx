import { useEffect } from "react";
import type { Club } from "@/data/clubs";

function Row({ label, value }: { label: string; value: string | null }) {
  if (!value) return null;
  return (
    <div className="flex justify-between gap-4 text-sm py-2 border-b border-border last:border-0">
      <span className="text-muted-foreground shrink-0">{label}</span>
      <span className="text-right font-medium text-foreground">{value}</span>
    </div>
  );
}

function Block({ title, body }: { title: string; body: string | null }) {
  if (!body) return null;
  return (
    <div className="mt-6">
      <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary mb-2">
        {title}
      </h4>
      <p className="text-sm text-foreground/70 leading-relaxed whitespace-pre-line">{body}</p>
    </div>
  );
}

export function ClubDetail({ club, onClose }: { club: Club; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-background/80 backdrop-blur-sm p-0 md:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={club.name}
    >
      <div
        className="bg-card border border-border w-full max-w-2xl max-h-[88vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-center justify-between">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary">
            {club.category}
          </span>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-primary text-xl leading-none px-2"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="p-6 md:p-8">
          <h3 className="font-display text-3xl md:text-4xl uppercase leading-none">{club.name}</h3>
          {club.about && (
            <p className="mt-4 text-foreground/80 text-pretty leading-relaxed">{club.about}</p>
          )}

          <Block title="Purpose" body={club.purpose} />
          <Block title="What it offers" body={club.offers} />
          <Block title="What makes it unique" body={club.unique} />
          <Block title="Who we're looking for" body={club.lookingFor} />
          <Block title="Major achievements" body={club.achievements} />

          <div className="mt-8 border border-border p-5">
            <h4 className="font-display text-lg uppercase mb-3">Joining info</h4>
            <Row label="Who can apply" value={club.whoCanApply} />
            <Row label="Prior experience" value={club.priorExperience} />
            <Row label="Minimum skill" value={club.minSkill} />
            <Row label="Selection process" value={club.selectionProcess} />
            <Row label="Selection method" value={club.selectionMethod} />
            <Row label="Evaluated on" value={club.evaluatedOn} />
            <Row label="Time commitment" value={club.timeCommitment} />
            <Row label="Regular meetings" value={club.regularMeetings} />
            <Row label="Competitions" value={club.competitions} />
            <Row label="Activities" value={club.activities} />
            <Row label="Frequency" value={club.frequency} />
          </div>
          {club.selectionDesc && (
            <Block title="How selection works" body={club.selectionDesc} />
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            {club.social && club.social.startsWith("http") && (
              <a
                href={club.social}
                target="_blank"
                rel="noreferrer"
                className="bg-primary text-primary-foreground font-display tracking-wide px-6 py-3 -skew-x-12 text-sm"
              >
                <span className="inline-block skew-x-12">CONNECT WITH THE CLUB</span>
              </a>
            )}
            {club.email && (
              <a
                href={`mailto:${club.email}`}
                className="border border-border px-6 py-3 font-semibold text-sm hover:border-primary hover:text-primary transition"
              >
                Email {club.poc ?? "the club"}
              </a>
            )}
          </div>
          {club.poc && (
            <p className="mt-4 text-xs text-muted-foreground">
              President / POC: <span className="text-foreground">{club.poc}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

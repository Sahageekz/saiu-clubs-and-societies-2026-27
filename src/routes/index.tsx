import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { clubs } from "@/data/clubs";
import clubSports from "@/assets/club-sports.jpg";
import clubTech from "@/assets/club-tech.jpg";
import clubArts from "@/assets/club-arts.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "SaiU Clubs and Societies",
      },
      {
        name: "description",
        content: "Explore the clubs and societies at Sai University.",
      },
      {
        property: "og:title",
        content: "SaiU Clubs and Societies",
      },
      {
        property: "og:description",
        content: "Find the room you belong in at Sai University.",
      },
      {
        property: "og:type",
        content: "website",
      },
    ],
  }),
  component: Index,
});

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
  const [showApplyForm, setShowApplyForm] = useState(false);

  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">

      {/* ========================= */}
      {/* HEADER */}
      {/* ========================= */}

      <header className="fixed top-0 inset-x-0 z-50 bg-background/95 border-b border-border backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          <a
            href="/"
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 bg-primary grid place-items-center -skew-x-12">
              <span className="skew-x-12 font-display text-primary-foreground text-lg leading-none">
                S
              </span>
            </div>

            <span className="font-display tracking-wide text-lg">
              SAIU CLUBS AND SOCIETIES
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/70">

            <a
              href="/"
              className="text-primary transition"
            >
              Home
            </a>

            <a
              href="/clubs"
              className="hover:text-primary transition"
            >
              Clubs
            </a>

            <a
              href="/featured"
              className="hover:text-primary transition"
            >
              Featured
            </a>

            <a
              href="/how-to-join"
              className="hover:text-primary transition"
            >
              How to join
            </a>

          </nav>

        </div>
      </header>


      {/* ========================= */}
      {/* HERO */}
      {/* ========================= */}

      <main className="pt-16">

        <section className="relative py-24 md:py-32 overflow-hidden">

          <div
            className="absolute inset-y-0 left-[-15%] w-[45%] bg-primary/10 -skew-x-12"
            aria-hidden="true"
          />

          <div
            className="absolute top-20 right-[-8%] w-80 h-80 border border-primary/20 rotate-12 rounded-full"
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-6 relative">

            <div className="max-w-5xl">

              <div className="flex items-center gap-3 mb-7">

                <span className="h-px w-12 bg-primary" />

                <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
                  Sai University Student Activity
                </span>

              </div>


              <h1 className="font-display leading-[0.82] text-[clamp(3.5rem,11vw,10rem)] uppercase">

                <span className="block">
                  Find your
                </span>

                <span className="block text-primary -skew-x-6 inline-block bg-background px-2">
                  Tribe
                </span>

              </h1>


              <p className="mt-10 text-lg md:text-xl text-foreground/70 max-w-3xl leading-relaxed">

                Twenty clubs, Six worlds.{" "}

                <strong className="text-foreground">
                  Before you sign up at a table,
                </strong>{" "}

                read what actually happens inside each one — what it asks of
                you, what it gives back, and who tends to stay.

              </p>

            </div>


            {/* ========================= */}
            {/* STATS */}
            {/* ========================= */}

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px bg-border border border-border max-w-4xl">

              <div className="bg-background p-6 md:p-8">

                <div className="font-display text-5xl md:text-6xl text-primary">
                  21
                </div>

                <div className="text-xs tracking-[0.2em] uppercase text-foreground/50 mt-2">
                  Active Clubs
                </div>

              </div>


              <div className="bg-background p-6 md:p-8">

                <div className="font-display text-5xl md:text-6xl">
                  6
                </div>

                <div className="text-xs tracking-[0.2em] uppercase text-foreground/50 mt-2">
                  Categories
                </div>

              </div>


              <div className="bg-background p-6 md:p-8">

                <div className="font-display text-5xl md:text-6xl text-primary">
                  Open
                </div>

                <div className="text-xs tracking-[0.2em] uppercase text-foreground/50 mt-2">
                  To All Students
                </div>

              </div>

            </div>


            {/* Apply Button */}

            <div className="mt-10">

              <button
                type="button"
                onClick={() => setShowApplyForm(true)}
                className="bg-primary text-primary-foreground px-7 py-4 font-display tracking-wide text-base hover:opacity-90 transition"
              >
                APPLY FOR 2026–27
              </button>

            </div>

          </div>

        </section>


        {/* ========================= */}
        {/* INTRODUCTION */}
        {/* ========================= */}

        <section className="py-20 md:py-28 border-t border-border">

          <div className="max-w-5xl mx-auto px-6">

            <div className="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16">

              <div>

                <span className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
                  01
                </span>

                <h2 className="font-display text-4xl uppercase mt-3">
                  Introduction
                </h2>

              </div>


              <div className="text-foreground/70 text-base md:text-lg leading-relaxed space-y-6">

                <p>
                  Club fair is the one day a year when every corner of student
                  life at Sai University sets up a table and makes its case
                  for your time. It can be a lot — twenty pitches in one
                  afternoon, half of them overlapping with your timetable,
                  all of them sounding great in the thirty seconds you have
                  in front of a booth.
                </p>

                <p>
                  This directory exists to slow that down. Before you make a
                  decision at a table, you can read here what each club
                  actually does week to week, what it expects from you, and
                  who tends to stick around once the fair excitement wears
                  off. Nothing in it is aspirational copy — every line is
                  drawn from what each club's own leadership told us about
                  how they run.
                </p>

                <p>
                  Use it however is useful: skim the categories that already
                  interest you, or read the whole thing and let something
                  unexpected catch your eye. Either way, the goal is the same
                  — that the clubs you join this year are ones you'll still be
                  glad to be part of in April.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ========================= */}
        {/* WHY JOIN */}
        {/* ========================= */}

        <section className="py-20 md:py-28 bg-card">

          <div className="max-w-5xl mx-auto px-6">

            <div className="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16">

              <div>

                <span className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
                  02
                </span>

                <h2 className="font-display text-4xl uppercase mt-3">
                  Why join a club at all?
                </h2>

              </div>


              <div>

                <p className="text-foreground/70 text-base md:text-lg leading-relaxed mb-10">
                  None of this is mandatory, and no one club is right for
                  everyone. But students who get the most out of university
                  tend to have at least one commitment outside their
                  coursework — here's what that commitment tends to give back.
                </p>


                <div className="space-y-8">

                  <div className="border-l-2 border-primary pl-6">

                    <h3 className="font-semibold text-lg">
                      A standing reason to leave your room.
                    </h3>

                    <p className="text-foreground/60 mt-2 leading-relaxed">
                      Clubs give your week a rhythm outside class and
                      deadlines — a recurring reason to show up, even on the
                      days motivation is low.
                    </p>

                  </div>


                  <div className="border-l-2 border-primary pl-6">

                    <h3 className="font-semibold text-lg">
                      Skills you won't get from a syllabus.
                    </h3>

                    <p className="text-foreground/60 mt-2 leading-relaxed">
                      Running a stall, pitching an idea, coaching a teammate,
                      editing a reel under deadline — the kind of practical
                      skill that rarely fits into a course outline.
                    </p>

                  </div>


                  <div className="border-l-2 border-primary pl-6">

                    <h3 className="font-semibold text-lg">
                      A social circle you didn't inherit.
                    </h3>

                    <p className="text-foreground/60 mt-2 leading-relaxed">
                      Clubs mix people across years, schools and friend groups
                      who'd otherwise never cross paths — some of the most
                      durable friendships on campus start at a club meeting,
                      not a classroom.
                    </p>

                  </div>


                  <div className="border-l-2 border-primary pl-6">

                    <h3 className="font-semibold text-lg">
                      A low-stakes place to be a beginner again.
                    </h3>

                    <p className="text-foreground/60 mt-2 leading-relaxed">
                      Most clubs on this list explicitly welcome people with
                      zero experience. Trying something new here costs a lot
                      less than trying it for the first time professionally.
                    </p>

                  </div>


                  <div className="border-l-2 border-primary pl-6">

                    <h3 className="font-semibold text-lg">
                      Something to point to later.
                    </h3>

                    <p className="text-foreground/60 mt-2 leading-relaxed">
                      Consistent involvement in a club — not just membership
                      on paper — is often the most interesting thing on a
                      student's resume, because it shows follow-through rather
                      than credentials.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ========================= */}
        {/* HOW TO CHOOSE */}
        {/* ========================= */}

        <section className="py-20 md:py-28">

          <div className="max-w-5xl mx-auto px-6">

            <div className="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16">

              <div>

                <span className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
                  03
                </span>

                <h2 className="font-display text-4xl uppercase mt-3">
                  How to choose the right clubs for you
                </h2>

              </div>


              <div className="space-y-7">

                <div className="flex gap-5">

                  <span className="font-display text-2xl text-primary">
                    01
                  </span>

                  <p className="text-foreground/70 leading-relaxed">

                    <strong className="text-foreground">
                      Start with what you already do,
                    </strong>{" "}

                    not what looks impressive. If you already play chess in
                    your free time or spend evenings editing photos, that's a
                    stronger signal than a club that sounds good on paper but
                    has nothing to do with how you actually spend your time.

                  </p>

                </div>


                <div className="flex gap-5">

                  <span className="font-display text-2xl text-primary">
                    02
                  </span>

                  <p className="text-foreground/70 leading-relaxed">

                    <strong className="text-foreground">
                      Read the time commitment before the highlight reel.
                    </strong>{" "}

                    A club's achievements page will always look exciting.
                    What matters for your semester is whether "varies by
                    event" or "2–4 hours a week" actually fits around the rest
                    of your schedule.

                  </p>

                </div>


                <div className="flex gap-5">

                  <span className="font-display text-2xl text-primary">
                    03
                  </span>

                  <p className="text-foreground/70 leading-relaxed">

                    <strong className="text-foreground">
                      Check whether there's a selection process.
                    </strong>{" "}

                    Some clubs are open to everyone; others run auditions,
                    interviews or portfolio reviews. Neither is better — but
                    knowing which one you're walking into changes how you
                    prepare.

                  </p>

                </div>


                <div className="flex gap-5">

                  <span className="font-display text-2xl text-primary">
                    04
                  </span>

                  <p className="text-foreground/70 leading-relaxed">

                    <strong className="text-foreground">
                      Weigh experience requirements honestly.
                    </strong>{" "}

                    A handful of clubs in this directory expect prior
                    experience. Most explicitly don't. If you're a beginner,
                    look for that phrase rather than talking yourself out of
                    trying.

                  </p>

                </div>


                <div className="flex gap-5">

                  <span className="font-display text-2xl text-primary">
                    05
                  </span>

                  <p className="text-foreground/70 leading-relaxed">

                    <strong className="text-foreground">
                      Don't over-commit in week one.
                    </strong>{" "}

                    It's tempting to sign up for five clubs during fair week.
                    Most students get more out of two clubs they actually
                    attend than five they quietly drop by October.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ========================= */}
        {/* FEATURED */}
        {/* ========================= */}

        <section
          id="featured"
          className="py-20 md:py-28 bg-card"
        >

          <div className="max-w-7xl mx-auto px-6">

            <div className="flex items-end justify-between gap-6 mb-10">

              <div>

                <span className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
                  Explore
                </span>

                <h2 className="font-display text-5xl md:text-6xl uppercase leading-none mt-2">

                  Featured{" "}

                  <span className="text-primary">
                    Lanes
                  </span>

                </h2>

              </div>


              <a
                href="/featured"
                className="hidden md:block text-sm font-semibold text-primary hover:translate-x-1 transition"
              >
                View all →
              </a>

            </div>


            <div className="grid md:grid-cols-3 gap-6">

              {featured.map((item) => (

                <article
                  key={item.title}
                  className="group bg-background border border-border hover:border-primary transition overflow-hidden"
                >

                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="w-full aspect-[4/3] object-cover"
                  />

                  <div className="p-6">

                    <span className="text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
                      {item.category}
                    </span>

                    <h3 className="font-display text-2xl uppercase mt-2">
                      {item.title}
                    </h3>

                    <p className="text-foreground/60 text-sm mt-2">
                      {item.body}
                    </p>

                    <div className="mt-5 flex justify-end">

                      <a
                        href="/featured"
                        className="text-primary font-semibold text-sm group-hover:translate-x-1 transition"
                      >
                        Explore →
                      </a>

                    </div>

                  </div>

                </article>

              ))}

            </div>


            <div className="mt-8 md:hidden">

              <a
                href="/featured"
                className="text-sm font-semibold text-primary"
              >
                View all featured clubs →
              </a>

            </div>

          </div>

        </section>


        {/* ========================= */}
        {/* HOW TO JOIN */}
        {/* ========================= */}

        <section
          id="join"
          className="relative py-24 bg-primary text-primary-foreground overflow-hidden"
        >

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

                <div className="font-display text-5xl text-primary">
                  01
                </div>

                <h3 className="font-display text-2xl uppercase mt-3">
                  Pick a club
                </h3>

                <p className="text-foreground/60 text-sm mt-2">
                  Explore the clubs and societies and find the ones that
                  match your interests, schedule and experience level.
                </p>

              </div>


              <div className="bg-background text-foreground p-7 -skew-x-3 translate-y-6">

                <div className="font-display text-5xl text-primary">
                  02
                </div>

                <h3 className="font-display text-2xl uppercase mt-3">
                  Reach out
                </h3>

                <p className="text-foreground/60 text-sm mt-2">
                  Check each club's information, selection process and
                  contact details before making your decision.
                </p>

              </div>


              <div className="bg-background text-foreground p-7 -skew-x-3">

                <div className="font-display text-5xl text-primary">
                  03
                </div>

                <h3 className="font-display text-2xl uppercase mt-3">
                  Show up
                </h3>

                <p className="text-foreground/60 text-sm mt-2">
                  Attend the first session, participate consistently and
                  give yourself time to find your place.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ========================= */}
        {/* FINAL CTA */}
        {/* ========================= */}

        <section className="py-20 bg-background border-t border-border">

          <div className="max-w-5xl mx-auto px-6 text-center">

            <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
              Sai University
            </p>

            <h2 className="font-display text-5xl md:text-7xl uppercase leading-none mt-3">
              Find your room.
            </h2>

            <p className="mt-5 max-w-xl mx-auto text-foreground/60">
              Explore the clubs and societies, understand what they ask of
              you, and choose the ones worth showing up for.
            </p>


            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <a
                href="/clubs"
                className="bg-primary text-primary-foreground px-7 py-4 font-display tracking-wide hover:opacity-90 transition"
              >
                EXPLORE CLUBS
              </a>

              <button
                type="button"
                onClick={() => setShowApplyForm(true)}
                className="border border-border px-7 py-4 font-display tracking-wide hover:border-primary hover:text-primary transition"
              >
                APPLY FOR 2026–27
              </button>

            </div>

          </div>

        </section>

      </main>


      {/* ========================= */}
      {/* FOOTER */}
      {/* ========================= */}

      <footer className="py-10 bg-background border-t border-border">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <div className="flex items-center gap-3">

            <div className="w-7 h-7 bg-primary grid place-items-center -skew-x-12">

              <span className="skew-x-12 font-display text-primary-foreground text-sm leading-none">
                S
              </span>

            </div>

            <span className="font-display tracking-wide">
              SAIU CLUBS AND SOCIETIES
            </span>

          </div>


          <p className="text-xs text-foreground/40">
            Sai University · Student Clubs & Societies
          </p>

        </div>

      </footer>


      {/* ========================= */}
      {/* APPLICATION FORM */}
      {/* ========================= */}

      {showApplyForm && (

        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setShowApplyForm(false)}
        >

          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-background border border-border p-8 md:p-10"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              type="button"
              onClick={() => setShowApplyForm(false)}
              className="absolute top-5 right-5 text-foreground/50 hover:text-primary text-2xl transition"
              aria-label="Close application form"
            >
              ×
            </button>


            <div className="mb-8 pr-8">

              <span className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
                Sai University
              </span>

              <h2 className="font-display text-4xl md:text-5xl uppercase leading-none mt-3">

                Apply for a{" "}

                <span className="text-primary">
                  Club
                </span>

              </h2>

              <p className="text-foreground/60 text-sm mt-3">
                Fill in your details and choose the club or society you would
                like to apply for.
              </p>

            </div>


            <form
              onSubmit={(e) => {
                e.preventDefault();

                alert("Application submitted successfully!");

                setShowApplyForm(false);
              }}
              className="space-y-6"
            >

              {/* Student Name */}

              <div>

                <label
                  htmlFor="student-name"
                  className="block text-sm font-semibold mb-2"
                >
                  Student Name
                </label>

                <input
                  id="student-name"
                  name="studentName"
                  type="text"
                  placeholder="Enter your full name"
                  required
                  className="w-full border border-border bg-card px-4 py-3 text-sm outline-none focus:border-primary"
                />

              </div>


              {/* Email */}

              <div>

                <label
                  htmlFor="student-email"
                  className="block text-sm font-semibold mb-2"
                >
                  Email
                </label>

                <input
                  id="student-email"
                  name="email"
                  type="email"
                  placeholder="Enter your university email"
                  required
                  className="w-full border border-border bg-card px-4 py-3 text-sm outline-none focus:border-primary"
                />

              </div>


              {/* School */}

              <div>

                <label
                  htmlFor="school"
                  className="block text-sm font-semibold mb-2"
                >
                  School
                </label>

                <select
                  id="school"
                  name="school"
                  required
                  defaultValue=""
                  className="w-full border border-border bg-card px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                >

                  <option value="" disabled>
                    Select your school
                  </option>

                  <option value="SAS">SAS</option>
                  <option value="SOL">SOL</option>
                  <option value="SCDS">SCDS</option>
                  <option value="SOB">SOB</option>
                  <option value="SOT">SOT</option>
                  <option value="SOAI">SOAI</option>
                  <option value="SAHS">SAHS</option>
                  <option value="SOM">SOM</option>

                </select>

              </div>


              {/* Year */}

              <div>

                <label
                  htmlFor="year"
                  className="block text-sm font-semibold mb-2"
                >
                  Year
                </label>

                <select
                  id="year"
                  name="year"
                  required
                  defaultValue=""
                  className="w-full border border-border bg-card px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                >

                  <option value="" disabled>
                    Select your batch
                  </option>

                  <option value="2023-2027">
                    2023–2027
                  </option>

                  <option value="2024-2028">
                    2024–2028
                  </option>

                  <option value="2025-2029">
                    2025–2029
                  </option>

                  <option value="2026-2030">
                    2026–2030
                  </option>

                </select>

              </div>


              {/* Club / Society */}

              <div>

                <label
                  htmlFor="club"
                  className="block text-sm font-semibold mb-2"
                >
                  Club / Society
                </label>

                <select
                  id="club"
                  name="club"
                  required
                  defaultValue=""
                  className="w-full border border-border bg-card px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                >

                  <option value="" disabled>
                    Select a club or society
                  </option>

                  {clubs.map((club) => (
                    <option
                      key={club.id}
                      value={club.name}
                    >
                      {club.name}
                    </option>
                  ))}

                </select>

              </div>


              {/* Experience */}

              <div>

                <label
                  htmlFor="experience"
                  className="block text-sm font-semibold mb-2"
                >
                  Experience
                </label>

                <textarea
                  id="experience"
                  name="experience"
                  rows={5}
                  required
                  placeholder="Briefly explain any relevant experience, skills, projects, competitions, performances, or activities. If you don't have any prior experience, you can write 'No prior experience.'"
                  className="w-full border border-border bg-card px-4 py-3 text-sm outline-none focus:border-primary resize-none"
                />

                <p className="text-xs text-foreground/40 mt-2">
                  Briefly describe your relevant experience. No prior
                  experience is also completely fine.
                </p>

              </div>


              {/* Submit */}

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-display tracking-wide py-4 text-base hover:opacity-90 transition"
              >
                SUBMIT APPLICATION
              </button>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}

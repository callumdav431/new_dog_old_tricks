"use client";
import { useState } from "react";

export default function Home() {
  const [selectedLesson, setSelectedLesson] = useState("Alan");

  const lessons = [
    { title: "Alan", description: "Salesman for blah blah blah", href: "/lessons/alan" },
    { title: "Richard", description: "Owner of multiple high-end restaurant-hotels", href: "#" },
    { title: "rory (hopefully)", description: "TBF", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-5xl px-6">
        <main className="mt-12 space-y-16">
          {/* Hero */}
          <section className="min-h-screen flex items-center">
            <div className="-mt-24">
              <h1 className="text-6xl font-semibold tracking-tight leading-[1.05] md:text-8xl">
                New Dog, Old Tricks
              </h1>

              <p className="mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
                Old-school persuasion. Modern execution. A learning site for personal growth, development and interest.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                Scroll to begin
              </p>
            </div>
          </section>

          {/* Big CTA */}
          <section
            id="start"
            className="mb-60 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-semibold md:text-2xl">Ready to start?</h2>
                <p className="mt-1 text-sm text-white/70">
                  Jump straight into the Masterclass and pick a lesson.
                </p>
              </div>

              <a
                href="#masterclass"
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-5 text-base font-semibold text-neutral-950 hover:bg-white/90 md:px-10"
              >
                Start Course
              </a>
            </div>
          </section>

          {/* Masterclass */}
          <section id="masterclass">
            <h2 className="text-2xl font-semibold">Lessons</h2>

            <p className="mt-2 text-white/70">
              Different salesmen. Their stories — built as short practical modules.
            </p>

            <p className="mt-3 text-sm text-white/60">
              Selected lesson: <span className="text-white/90">{selectedLesson}</span>
            </p>

            <div className="mt-15">
              {lessons.map((lesson, idx) => (
                <LessonWedge
                  key={lesson.title}
                  title={lesson.title}
                  description={lesson.description}
                  href={lesson.href}
                  index={idx}
                />
              ))}
            </div>
          </section>

          {/* How */}
          <section id="how">
            <h2 className="text-2xl font-semibold">How it works</h2>

            <ol className="mt-3 list-decimal space-y-2 pl-5 text-white/70">
              <li>Just start the masterclass and stop anytime you&apos;d like</li>
              <li>You can skip to lessons you&apos;d like to</li>
            </ol>
          </section>
        </main>

        <footer
          id="about"
          className="mt-16 border-t border-white/10 pt-8 text-sm text-white/70"
        >
          <p>
            Built as a personal project. The content from these lessons are from my own research, interviews and extrapolation.
          </p>
        </footer>
      </div>
    </div>
  );
}

function LessonWedge({
  title,
  description,
  href,
  index,
}: {
  title: string;
  description: string;
  href: string;
  index: number;
}) {
  const pointsRight = "polygon(0% 0%, 0% 100%, 100% 50%)"; // true triangle →
  const pointsLeft = "polygon(100% 0%, 100% 100%, 0% 50%)"; // true triangle ←
  const isRight = index % 2 === 0;

  // Overlap like your sketch (3 wedges)
  const overlap = index === 0 ? "" : "-mt-19";

  return (
    <a
      href={href}
      className={[
        "relative block",
        "h-[140px] md:h-[170px]",
        "transition-transform duration-200 ease-out",
        "hover:-translate-y-1 active:translate-y-0",
        overlap,
      ].join(" ")}
    >
      {/* The triangle shape */}
      <div
        style={{ clipPath: isRight ? pointsRight : pointsLeft }}
        className="absolute inset-0 border border-white/15 bg-white/5"
      />

      {/* Content area (NOT clipped) */}
      <div
        className={[
          "relative z-10 h-full",
          "flex flex-col justify-center",
          isRight 
            ? "pl-8 pr-24 md:pr-40 text-left" 
            : "pl-24 md:pl-40 pr-8 text-right items end",
        ].join(" ")}
      >
        <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{description}</p>
        <p className="mt-4 text-sm font-semibold text-white/80">Start →</p>
      </div>
    </a>
  );
}

function LessonCard({
  title,
  description,
  selected,
  onSelect,
}: {
  title: string;
  description: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onSelect();
      }}
      className={
        "cursor-pointer rounded-xl border p-5 transition-all duration-200 ease-out transform " +
        (selected
          ? "border-white/40 bg-white/10 scale-[1.02] shadow-lg shadow-white/10 ring-1 ring-white/20"
          : "border-white/10 bg-white/5 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]")
      }
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{description}</p>
    </article>
  );
}

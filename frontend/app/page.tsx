"use client";
import { useState } from "react";


export default function Home() {
  const [selectedLesson, setSelectedLesson] = useState("Alan");

  const lessons = [
    { title: "Alan", description: "Salesman for blah blah blah" },
    { title: "Richard", description: "Owner of multiple high-end restaurant-hotels" },
    { title: "rory (hopefully)", description: "TBF" },
  ];







  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-5xl px-6">


        <main className="mt-12 space-y-16">
          {/* Hero */}
<section className="min-h-screen flex items-center">
  <div className= "-mt-24">
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
            className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8"
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

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {lessons.map((lesson) => (
                <LessonCard
                  key={lesson.title}
                  title={lesson.title}
                  description={lesson.description}
                  selected={selectedLesson === lesson.title}
                  onSelect={() => setSelectedLesson(lesson.title)}
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

        <footer id="about" className="mt-16 border-t border-white/10 pt-8 text-sm text-white/70">
          <p>
            Built as a personal project. The content from these lessons are from my own research,
            interviews and extrapolation.
          </p>
        </footer>
      </div>
    </div>
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

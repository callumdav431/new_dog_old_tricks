"use client";
import { useState } from "react";



export default function Home() {

  const [selectedLesson, setSelectedLesson] = useState("Alan");

  return (


    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-5xl px-6 py-8">

      
      <header className="flex items-center justify-between gap-6">

        <div>New Dog, Old Tricks</div>
        <nav>
          <a href="#masterclass">Masterclasss</a>{" "}
          <a href="#how">How it works</a>{" "}
          <a href="#about">About</a>
        </nav>
      </header>





        <main className="mt-12 space-y-16">
        <section>
          <h1 className="text-4xl font-semibold tracking-tight">
          Old school persuasion. Modern execution.
          </h1>

          <p>
            An interactive sales learning site: short lessons, from real people, with real experience
          </p>
          <button>Explore curriculum</button>
        </section>







<section id="masterclass">
  <h2 className="text-2xl font-semibold">Lessons</h2>

  <p className="mt-2 text-white/70">
    Different salespeople. Their stories — built as short practical modules.
  </p>

  <p className="mt-3 text-sm text-white/60">
    Selected lesson:{" "}
    <span className="text-white/90">{selectedLesson}</span>
  </p>

  <div className="mt-6 grid gap-4 md:grid-cols-3">
    <article
      role="button"
      tabIndex={0}
      onClick={() => setSelectedLesson("Alan")}
      className={
        "cursor-pointer rounded-xl border p-5 transition " +
        (selectedLesson === "Alan"
          ? "border-white/40 bg-white/10"
          : "border-white/10 bg-white/5 hover:bg-white/10")
      }
    >
      <h3 className="text-lg font-semibold">Alan</h3>
      <p className="mt-2 text-sm text-white/70">
        Salesman for blah blah blah
      </p>
    </article>

    <article
      role="button"
      tabIndex={0}
      onClick={() => setSelectedLesson("Richard")}
      className={
        "cursor-pointer rounded-xl border p-5 transition " +
        (selectedLesson === "Richard"
          ? "border-white/40 bg-white/10"
          : "border-white/10 bg-white/5 hover:bg-white/10")
      }
    >
      <h3 className="text-lg font-semibold">Richard</h3>
      <p className="mt-2 text-sm text-white/70">
        Owner of multiple high-end restaurant-hotels
      </p>
    </article>

    <article
      role="button"
      tabIndex={0}
      onClick={() => setSelectedLesson("Rory")}
      className={
        "cursor-pointer rounded-xl border p-5 transition " +
        (selectedLesson === "Rory"
          ? "border-white/40 bg-white/10"
          : "border-white/10 bg-white/5 hover:bg-white/10")
      }
    >
      <h3 className="text-lg font-semibold">Rory</h3>
      <p className="mt-2 text-sm text-white/70">
        rory sutherland is a hero of mine
        
      </p>
    </article>
  </div>
</section>



        <section id="how">
          <h2 className="text-2xl font-semibold">How it works</h2>

          <ol>
            <li>Just start the masterclass and stop anytime you'd like</li>
            <li>You can skip to lessons you'd like to</li>
          </ol>
        </section>
      </main>



      <footer id="about" className="mt-16 border-t border-white/10 pt-8 text-sm text-white/70">

        <p>
          Built as a personal project. The content from these lessons are from my own research, interviews and extrapolation. 
        </p>
      </footer>
    </div>
    </div>

  
  );
}

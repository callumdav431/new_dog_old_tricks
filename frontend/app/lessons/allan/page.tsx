export default function AllanLessonPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <a className="text-sm text-white/70 hover:text-white" href="/">
          ← Back to home
        </a>

        <header className="mt-8">
          <p className="text-xs uppercase tracking-wider text-white/50">
            Lesson 01 · Allan
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            (Begining skills)
          </h1>
          <p className="mt-4 text-white/70">
            Finding role models, building cofindence (and how this links with rejection), following up and how to communiate.
          </p>
        </header>

        <main className="mt-10 space-y-10">
          <section>
            <h2 className="text-xl font-semibold">About: Alan Graham</h2>
            <p className="mt-3 text-white/70">
              Allan has over 25 years of classic sales experince with Automotive Solutions, Flyyte, Fiberking Limited and Supagard. He started from scratch and learned the craft through persiverance and tenacity
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Key Principles</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-white/70">
              <li>(Step 1)</li>
              <li>(Step 2)</li>
              <li>(Step 3)</li>
            </ol>
          </section>






          
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Takeaway</h2>
            <p className="mt-3 text-white/70">
              (2–4 bulletproof sentences that summarize the lesson.)
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

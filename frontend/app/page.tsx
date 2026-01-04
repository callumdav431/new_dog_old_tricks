export default function Home() {
  return (

    
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-5xl px-6 py-8"></div>

      
      <header className="flex items-center justify-between gap-6">

        <div>New Dog, Old Tricks</div>
        <nav>
          <a href="#masterclass">Masterclasss</a>{" "}
          <a href="#how">How it works</a>{" "}
          <a href="#about">About</a>
        </nav>
      </header>





        <main className= "mt-12 space-y-16">
        <section>
          <h1 className="text-4xl font-semibold tracking-tight">
          Old school persuasion. Modern execution.
          </h1>

          <p>
            An interactive sales learning site: short lessons, from real people, with real experience
          </p>
          <button>Explore curriculum</button>
        </section>


        

        <section id="The Masterclass">
          <h2 className="text-2xl font-semibold">Lessons</h2>

          <p>Different salesman. Their stories - built as short practical modules.</p>

          <div>
            <article>
              <h3>Alan</h3>
              <p>Salesman for blah blah blah</p>
            </article>

            <article>
              <h3>Richard</h3>
              <p>Owner of mulitple hihg end restaurant-hotels</p>
            </article>

            <article>
              <h3>Execution</h3>
              <p>Scripts, follow-ups, and feedback loops you can measure.</p>
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
  
  );
}

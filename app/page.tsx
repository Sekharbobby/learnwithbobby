export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-6xl font-bold md:text-8xl">
          LearnWithBobby 🚀
        </h1>

        <p className="mt-6 max-w-3xl text-xl text-slate-300">
          Learn DevOps, AWS DevOps, Azure DevOps and SRE through
          real-world projects, missions, labs and production scenarios.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold">
            Start Learning
          </button>

          <button className="rounded-xl border border-slate-700 px-6 py-3 font-semibold">
            Explore Universe
          </button>
        </div>
      </section>
    </main>
  );
}
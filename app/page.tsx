export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-cyan-300">
          🚀 LearnWithBobby
        </div>

        <h1 className="mt-8 text-6xl font-bold md:text-8xl">
  LearnWithBobby 🚀 LIVE
</h1>

        <p className="mt-8 max-w-3xl text-xl text-slate-300">
          Learn DevOps, AWS DevOps, Azure DevOps and SRE through
          hands-on labs, projects, production scenarios and guided learning paths.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500">
            Start Learning
          </button>

          <button className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-500">
            Explore Universe
          </button>
        </div>
      </section>
    </main>
  );
}
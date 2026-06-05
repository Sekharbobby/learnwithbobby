export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
    <div className="font-bold text-cyan-400 text-xl">
      🚀 LearnWithBobby
    </div>

    <div className="hidden md:flex gap-6 text-slate-300">
      <a href="/">Home</a>
      <a href="/devops">DevOps</a>
      <a href="/aws-devops">AWS</a>
      <a href="/azure-devops">Azure</a>
      <a href="/sre">SRE</a>
      <a href="/projects">Projects</a>
    </div>
  </div>
</nav>
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
  <div className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-cyan-300">
    🚀 LearnWithBobby
  </div>

  <h1 className="mt-8 text-6xl font-bold md:text-8xl">
    Learn DevOps
    <br />
    Through Real Missions
  </h1>

  <p className="mt-8 max-w-3xl text-xl text-slate-300">
    Learn DevOps, AWS DevOps, Azure DevOps and SRE through
    hands-on labs, projects, production scenarios and guided learning paths.
  </p>

  <div className="mt-10 flex gap-4">
    <a
  href="/devops"
  className="rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
>
  Start Learning
</a>

    <a
  href="#universe"
  className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-500"
>
  Explore Universe
</a>
  </div>
</section>
<section id="universe" className="bg-slate-900 py-20">
  <div className="mx-auto max-w-7xl px-6">
    <h2 className="mb-12 text-center text-4xl font-bold">
      Learning Universe
    </h2>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-2xl border border-slate-700 p-6">
        🌱 Beginner Island
      </div>

      <div className="rounded-2xl border border-slate-700 p-6">
        🐧 Linux Valley
      </div>

      <div className="rounded-2xl border border-slate-700 p-6">
        🌳 Git Forest
      </div>

      <div className="rounded-2xl border border-slate-700 p-6">
        📦 Docker Harbor
      </div>

      <div className="rounded-2xl border border-slate-700 p-6">
        ☸️ Kubernetes Kingdom
      </div>

      <div className="rounded-2xl border border-slate-700 p-6">
        ☁️ AWS Galaxy
      </div>

      <div className="rounded-2xl border border-slate-700 p-6">
        🔷 Azure City
      </div>

      <div className="rounded-2xl border border-slate-700 p-6">
        🛡️ SRE Command Center
      </div>
    </div>
  </div>
</section>
<section className="bg-slate-950 py-20">
  <div className="mx-auto grid max-w-6xl gap-8 px-6 text-center md:grid-cols-4">
    <div>
      <h3 className="text-4xl font-bold text-cyan-400">50+</h3>
      <p>Tutorials</p>
    </div>

    <div>
      <h3 className="text-4xl font-bold text-cyan-400">25+</h3>
      <p>Hands-on Labs</p>
    </div>

    <div>
      <h3 className="text-4xl font-bold text-cyan-400">10+</h3>
      <p>Roadmaps</p>
    </div>

    <div>
      <h3 className="text-4xl font-bold text-cyan-400">100+</h3>
      <p>Interview Questions</p>
    </div>
  </div>
</section>
    </main>
  );
}
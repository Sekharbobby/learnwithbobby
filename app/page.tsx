export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
<section className="bg-slate-900 py-20">
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
export default function RoadmapsPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-10 text-white">
      <h1 className="mb-10 text-5xl font-bold">
        DevOps Roadmaps
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        <div className="rounded-2xl border border-slate-700 p-6">
          🌱 DevOps Roadmap
        </div>

        <div className="rounded-2xl border border-slate-700 p-6">
          ☁️ AWS DevOps Roadmap
        </div>

        <div className="rounded-2xl border border-slate-700 p-6">
          🔷 Azure DevOps Roadmap
        </div>

        <div className="rounded-2xl border border-slate-700 p-6">
          🛡️ SRE Roadmap
        </div>

        <div className="rounded-2xl border border-slate-700 p-6">
          ☸️ Kubernetes Roadmap
        </div>

      </div>
    </main>
  );
}
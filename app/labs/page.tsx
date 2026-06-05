export default function LabsPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-10 text-white">
      <h1 className="mb-8 text-5xl font-bold">
        DevOps Labs
      </h1>

      <div className="grid gap-6 md:grid-cols-2">

        <div className="rounded-2xl border border-slate-700 p-6">
          🐧 Linux Lab
        </div>

        <div className="rounded-2xl border border-slate-700 p-6">
          🌳 Git Lab
        </div>

        <div className="rounded-2xl border border-slate-700 p-6">
          🐳 Docker Lab
        </div>

        <div className="rounded-2xl border border-slate-700 p-6">
          ☸️ Kubernetes Lab
        </div>

        <div className="rounded-2xl border border-slate-700 p-6">
          ☁️ AWS Lab
        </div>

        <div className="rounded-2xl border border-slate-700 p-6">
          🔷 Azure Lab
        </div>

      </div>
    </main>
  );
}
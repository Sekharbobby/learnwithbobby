export default function InterviewQuestionsPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-10 text-white">
      <h1 className="mb-8 text-5xl font-bold">
        Interview Questions
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        <div className="rounded-2xl border border-slate-700 p-6">
          🐧 Linux Interview Questions
        </div>

        <div className="rounded-2xl border border-slate-700 p-6">
          🌳 Git & GitHub Interview Questions
        </div>

        <div className="rounded-2xl border border-slate-700 p-6">
          🐳 Docker Interview Questions
        </div>

        <div className="rounded-2xl border border-slate-700 p-6">
          ☸️ Kubernetes Interview Questions
        </div>

        <div className="rounded-2xl border border-slate-700 p-6">
          ☁️ AWS Interview Questions
        </div>

        <div className="rounded-2xl border border-slate-700 p-6">
          🔷 Azure Interview Questions
        </div>

        <div className="rounded-2xl border border-slate-700 p-6">
          🚀 DevOps Interview Questions
        </div>

        <div className="rounded-2xl border border-slate-700 p-6">
          🛡️ SRE Interview Questions
        </div>

        <div className="rounded-2xl border border-slate-700 p-6">
          ⚙️ CI/CD Interview Questions
        </div>

      </div>
    </main>
  );
}
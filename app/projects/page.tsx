export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-10 text-white">
      <h1 className="mb-8 text-5xl font-bold">
        DevOps Projects
      </h1>

      <div className="grid gap-6 md:grid-cols-2">

        <div className="rounded-2xl border border-slate-700 p-6">
          🚀 Deploy a Node.js App on AWS EC2
        </div>

        <div className="rounded-2xl border border-slate-700 p-6">
          🐳 Dockerize a Full Stack Application
        </div>

        <div className="rounded-2xl border border-slate-700 p-6">
          ☸️ Deploy Application on Kubernetes
        </div>

        <div className="rounded-2xl border border-slate-700 p-6">
          🔄 Build CI/CD Pipeline with GitHub Actions
        </div>

        <div className="rounded-2xl border border-slate-700 p-6">
          🌍 Terraform Infrastructure Deployment
        </div>

        <div className="rounded-2xl border border-slate-700 p-6">
          📊 Monitoring with Prometheus & Grafana
        </div>

      </div>
    </main>
  );
}
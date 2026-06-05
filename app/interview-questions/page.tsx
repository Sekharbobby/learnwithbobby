export default function InterviewQuestionsPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-10 text-white">
      <h1 className="mb-10 text-5xl font-bold">
        DevOps Interview Questions
      </h1>

      <div className="space-y-6">

        <div className="rounded-2xl border border-slate-700 p-6">
          <h2 className="text-xl font-bold">
            What is CI/CD?
          </h2>
          <p className="mt-2 text-slate-300">
            CI/CD stands for Continuous Integration and Continuous Deployment.
            It automates building, testing and deploying applications.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-700 p-6">
          <h2 className="text-xl font-bold">
            What is Docker?
          </h2>
          <p className="mt-2 text-slate-300">
            Docker is a containerization platform used to package applications
            with all dependencies.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-700 p-6">
          <h2 className="text-xl font-bold">
            What is Kubernetes?
          </h2>
          <p className="mt-2 text-slate-300">
            Kubernetes is a container orchestration platform used to manage
            containerized workloads.
          </p>
        </div>

      </div>
    </main>
  );
}
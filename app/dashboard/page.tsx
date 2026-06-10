import { ProjectList } from "../../components/projects/ProjectList"

export default function DashboardPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Mis proyectos</h1>
      <ProjectList />
    </main>
  )
}
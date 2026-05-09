import { ProjectList } from "../../components/projects/ProjectList"

const filters = ["All", "Active", "Paused", "Completed"]

export default function DashboardPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Mis proyectos</h1>
      <ProjectList filters={filters}/>
    </main>
  )
}
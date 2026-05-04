"use client"

import { ProjectCard } from "@/components/projects/ProjectCard"

const mockProjects = [
  { id: '1', title: 'DevBoard', description: 'Mi app de proyectos', status: 'active' as const, taskCount: 5 },
  { id: '2', title: 'Portfolio', description: 'Mi sitio personal', status: 'paused' as const, taskCount: 2 },
  { id: '3', title: 'API REST', description: 'Backend con Express', status: 'completed' as const, taskCount: 8 },
]

export default function DashboardPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Mis proyectos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onDelete={(id) => console.log('eliminar', id)}
          />
        ))}
      </div>
    </main>
  )
}
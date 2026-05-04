import { badgeStatus } from "../Badge";
import { useState } from "react"

type Project = {
  id: string;
  title: string;
  description: string;
  status: "active" | "paused" | "completed";
  taskCount: number;
};

type ProjectCardProps = {
  project: Project;
  onDelete: (id: string) => void;
};

export function ProjectCard({ project, onDelete }: ProjectCardProps) {
  const [showDetails, setShowDetails] = useState<boolean>(false)

  return (
    <div className=" rounded-lg p-4 flex flex-col gap-2 border border-slate-200">
      <div className="flex justify-between items-start">
        <h2 className="font-semibold text-lg">{project.title}</h2>
        <button
          onClick={() => onDelete(project.id)}  // sube el evento al padre
          className="text-red-300 text-sm bg-red-800 hover:bg-red-950 rounded px-2 py-1 cursor-pointer transition-colors delay-75"
        >
          Eliminar
        </button>
      </div>
      <button className="text-sm text-blue-500 text-left" onClick={() => setShowDetails(!showDetails)}>{showDetails ? "Show less" : "Show more"}</button>
      {showDetails && <p className="text-gray-600 text-sm">{project.description}</p>}
      <div className="flex justify-between text-sm">
        <span>{project.taskCount} tareas</span>
        <span className={` px-3 py-1 rounded ${badgeStatus[project.status]}`}>{project.status}</span>
      </div>
    </div>
  )
}

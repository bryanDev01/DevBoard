"use client";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { useProjects } from "@/hooks/useProjects";
import { projectFilters } from "@/static/data";


export function ProjectList() {
  const { filter, setFilter, projects, deleteProject } = useProjects()

  return (
    <div className=" flex flex-col justify-center  gap-3 px-3 py-5">
      <ul className=" flex items-center gap-3">
        {projectFilters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={` cursor-pointer px-2 py-1 text-center rounded ${filter === f ? "bg-cyan-400" : "bg-slate-400"}`}
          >
            {f}
          </button>
        ))}
      </ul>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((fp) => (
          <ProjectCard
            key={fp.id}
            project={fp}
            onDelete={() => deleteProject(fp.id)}
          />
        ))}
      </div>
    </div>
  );
}

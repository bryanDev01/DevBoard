"use client";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { useCallback, useMemo, useState } from "react";

type ProjectListProps = {
  filters: string[];
};

const mockProjects = [
  {
    id: "1",
    title: "DevBoard",
    description: "Mi app de proyectos",
    status: "active" as const,
    taskCount: 5,
  },
  {
    id: "2",
    title: "Portfolio",
    description: "Mi sitio personal",
    status: "paused" as const,
    taskCount: 2,
  },
  {
    id: "3",
    title: "API REST",
    description: "Backend con Express",
    status: "completed" as const,
    taskCount: 8,
  },
];

export function ProjectList({ filters }: ProjectListProps) {
  const [filter, setFilter] = useState<string>("All");

  const filteredProjects = useMemo(() => {
    if (filter.toLowerCase() === "all") return mockProjects;
    else {
      const filtered = mockProjects.filter(
        (mp) => mp.status === filter.toLowerCase(),
      );
      return filtered;
    }
  }, [mockProjects, filter]);

  const handleDelete = useCallback((id: string) => {
    console.log("eliminar", id)
  }, [])

  return (
    <div className=" flex flex-col justify-center  gap-3 px-3 py-5">
      <ul className=" flex items-center gap-3">
        {filters.map((f) => (
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
        {filteredProjects.map((fp) => (
          <ProjectCard
            key={fp.id}
            project={fp}
            onDelete={() => handleDelete(fp.id)}
          />
        ))}
      </div>
    </div>
  );
}

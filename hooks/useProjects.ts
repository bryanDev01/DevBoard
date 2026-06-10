import { mockProjects } from "@/static/data";
import { useCallback, useMemo, useState } from "react";

export type ProjectType = {
  id: string;
  title: string;
  description: string;
  status: "active" | "paused" | "completed";
  taskCount: number; 
};

export const useProjects = () => {
  const [projects, setProjects] = useState<ProjectType[]>(mockProjects);
  const [filter, setFilter] = useState<string>("All");

  const filteredProjects = useMemo(() => {
    if (filter.toLowerCase() === "all") return projects;
    else {
      const filtered = projects.filter(
        (mp) => mp.status === filter.toLowerCase(),
      );
      return filtered;
    }
  }, [projects, filter]);

  const addProject = useCallback(
    (project: Omit<ProjectType, "id">) => {
      setProjects((prev) => [...prev,  {...project, id: crypto.randomUUID()}])
    },
    [],
  );

  const deleteProject = useCallback((id: string) => {
    setProjects((prev) => prev.filter((project) => project.id !== id));
  }, []);

  return { filter, setFilter, projects: filteredProjects, addProject, deleteProject, totalProjects: projects.length };
};

import { mockProjects } from "@/static/data";
import { useMemo, useState } from "react";
import { useList } from "./useList";

export type ProjectType = {
  id: string;
  title: string;
  description: string;
  status: "active" | "paused" | "completed";
  taskCount: number; 
};

export const useProjects = () => {
  const { items, addItem, updateItem, deleteItem, findItemById } = useList<ProjectType>(mockProjects);
  const [filter, setFilter] = useState<string>("All");

  const filteredProjects = useMemo(() => {
    if (filter.toLowerCase() === "all") return items;
    else {
      const filtered = items.filter(
        (item) => item.status === filter.toLowerCase(),
      );
      return filtered;
    }
  }, [items, filter]);

  return { filter, setFilter, projects: filteredProjects, addItem, updateItem, deleteItem, findItemById, totalProjects: items.length };
};

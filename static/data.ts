
export const projectFilters = ["All", "Active", "Paused", "Completed"]

export const mockProjects = [
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
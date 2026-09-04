import { createContext, useContext, useMemo, useState } from "react";

const TaskContext = createContext(null);

const starterTasks = [
  {
    id: crypto.randomUUID(),
    title: "Build dashboard layout",
    description: "Create the responsive shell and navigation.",
    priority: "High",
    status: "todo",
  },
  {
    id: crypto.randomUUID(),
    title: "Connect shared state",
    description: "Move task operations into TaskContext.",
    priority: "Medium",
    status: "progress",
  },
  {
    id: crypto.randomUUID(),
    title: "Review component structure",
    description: "Remove unnecessary prop drilling.",
    priority: "Low",
    status: "done",
  },
];

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(starterTasks);

  const addTask = ({ title, description, priority }) => {
    setTasks((current) => [
      ...current,
      {
        id: crypto.randomUUID(),
        title,
        description,
        priority,
        status: "todo",
      },
    ]);
  };

  const moveTask = (id, status) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, status } : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks((current) => current.filter((task) => task.id !== id));
  };

  const stats = useMemo(() => {
    return {
      total: tasks.length,
      todo: tasks.filter((task) => task.status === "todo").length,
      progress: tasks.filter((task) => task.status === "progress").length,
      done: tasks.filter((task) => task.status === "done").length,
    };
  }, [tasks]);

  const value = useMemo(
    () => ({
      tasks,
      stats,
      addTask,
      moveTask,
      deleteTask,
    }),
    [tasks, stats],
  );

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTasks must be used inside TaskProvider.");
  }

  return context;
}

import { useTasks } from "../context/TaskContext";
import { TaskCard } from "./TaskCard";

const columns = [
  {
    id: "todo",
    title: "To do",
    description: "Tasks waiting to start",
  },
  {
    id: "progress",
    title: "In progress",
    description: "Currently being worked on",
  },
  {
    id: "done",
    title: "Completed",
    description: "Finished tasks",
  },
];

export function TaskColumn({ status }) {
  const { tasks } = useTasks();
  const column = columns.find((item) => item.id === status);
  const columnTasks = tasks.filter((task) => task.status === status);

  return (
    <section className="task-column" aria-labelledby={`${status}-title`}>
      <div className="column-heading">
        <div>
          <h2 id={`${status}-title`}>{column.title}</h2>
          <p>{column.description}</p>
        </div>

        <span>{columnTasks.length}</span>
      </div>

      <div className="task-list">
        {columnTasks.length > 0 ? (
          columnTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))
        ) : (
          <div className="empty-column">
            No tasks here yet.
          </div>
        )}
      </div>
    </section>
  );
}

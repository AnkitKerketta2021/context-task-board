import { useTasks } from "../context/TaskContext";

const nextStatus = {
  todo: "progress",
  progress: "done",
  done: "todo",
};

const nextLabel = {
  todo: "Start task",
  progress: "Complete",
  done: "Move to to-do",
};

export function TaskCard({ task }) {
  const { moveTask, deleteTask } = useTasks();

  return (
    <article className="task-card">
      <div className="task-top">
        <span className={`priority priority--${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>

        <button
          type="button"
          className="delete-button"
          onClick={() => deleteTask(task.id)}
          aria-label={`Delete ${task.title}`}
        >
          ×
        </button>
      </div>

      <h3>{task.title}</h3>

      {task.description && <p>{task.description}</p>}

      <button
        type="button"
        className="move-button"
        onClick={() => moveTask(task.id, nextStatus[task.status])}
      >
        {nextLabel[task.status]} →
      </button>
    </article>
  );
}

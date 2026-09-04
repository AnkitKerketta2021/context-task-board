import { useState } from "react";
import { useTasks } from "../context/TaskContext";

const initialForm = {
  title: "",
  description: "",
  priority: "Medium",
};

export function AddTaskForm() {
  const { addTask } = useTasks();
  const [form, setForm] = useState(initialForm);

  const updateField = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.title.trim()) {
      return;
    }

    addTask({
      title: form.title.trim(),
      description: form.description.trim(),
      priority: form.priority,
    });

    setForm(initialForm);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <div>
          <p className="section-kicker">Quick add</p>
          <h2>New task</h2>
        </div>
      </div>

      <label htmlFor="task-title">Title</label>
      <input
        id="task-title"
        value={form.title}
        onChange={(event) => updateField("title", event.target.value)}
        placeholder="e.g. Finish API integration"
      />

      <label htmlFor="task-description">Description</label>
      <textarea
        id="task-description"
        rows="4"
        value={form.description}
        onChange={(event) =>
          updateField("description", event.target.value)
        }
        placeholder="What needs to be done?"
      />

      <label htmlFor="task-priority">Priority</label>
      <select
        id="task-priority"
        value={form.priority}
        onChange={(event) =>
          updateField("priority", event.target.value)
        }
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button type="submit" className="primary-button">
        Add task
      </button>
    </form>
  );
}
